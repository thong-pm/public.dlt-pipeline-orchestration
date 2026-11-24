terraform {
  required_version = ">= 1.5.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

locals {
  raw_sources = ["hubspot_raw", "xero_raw", "shopify_raw", "procore_raw"]
}

# 1. BigQuery Raw Landing Datasets
resource "google_bigquery_dataset" "raw_datasets" {
  for_each   = toset(local.raw_sources)
  dataset_id = each.value
  location   = var.bq_location
}

# 2. BigQuery Production Marts Dataset
resource "google_bigquery_dataset" "dbt_prod" {
  dataset_id                 = "dbt_prod"
  location                   = var.bq_location
  delete_contents_on_destroy = false
}

# 3. BigQuery Staging / Zero-Copy Clone Dataset (7-day auto-delete TTL)
resource "google_bigquery_dataset" "dbt_dev" {
  dataset_id                    = "dbt_dev"
  location                      = var.bq_location
  default_table_expiration_ms   = 604800000
  delete_contents_on_destroy    = true
}

# 4. GCS State, OAuth Token Vault & AI Copilot Artifact Bucket
resource "google_storage_bucket" "pipeline_vault" {
  name                        = var.state_bucket_name
  location                    = var.region
  uniform_bucket_level_access = true
  force_destroy               = false

  versioning {
    enabled = true
  }

  public_access_prevention = "enforced"
}

# 5. Artifact Registry Docker Repository
resource "google_artifact_registry_repository" "pipeline_repo" {
  location      = var.region
  repository_id = "dlt-pipeline"
  format        = "DOCKER"
}

# 6. Pipeline Service Account & Least-Privilege IAM
resource "google_service_account" "pipeline_sa" {
  account_id   = "dlt-pipeline-sa"
  display_name = "DLT & Dagster Pipeline Service Account"
}

resource "google_project_iam_member" "bq_data_editor" {
  project = var.project_id
  role    = "roles/bigquery.dataEditor"
  member  = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

resource "google_project_iam_member" "bq_job_user" {
  project = var.project_id
  role    = "roles/bigquery.jobUser"
  member  = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

resource "google_storage_bucket_iam_member" "vault_object_admin" {
  bucket = google_storage_bucket.pipeline_vault.name
  role   = "roles/storage.objectAdmin"
  member = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

resource "google_project_iam_member" "run_invoker" {
  project = var.project_id
  role    = "roles/run.invoker"
  member  = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

resource "google_project_iam_member" "artifact_registry_writer" {
  project = var.project_id
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

resource "google_project_iam_member" "run_developer" {
  project = var.project_id
  role    = "roles/run.developer"
  member  = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

resource "google_project_iam_member" "cloudfunctions_developer" {
  project = var.project_id
  role    = "roles/cloudfunctions.developer"
  member  = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

resource "google_project_iam_member" "sa_user" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.pipeline_sa.email}"
}

# 7. Cloud Run v2 Job (One-Shot Dagster Production Runner)
resource "google_cloud_run_v2_job" "elt_job" {
  name     = var.cloud_run_job_name
  location = var.region

  template {
    template {
      service_account = google_service_account.pipeline_sa.email
      timeout         = "1800s"
      max_retries     = 1

      containers {
        image = var.pipeline_image_uri

        resources {
          limits = {
            cpu    = "2"
            memory = "2Gi"
          }
        }

        env {
          name  = "GCP_PROJECT_ID"
          value = var.project_id
        }
        env {
          name  = "PIPELINE__DESTINATION"
          value = "bigquery"
        }
        env {
          name  = "DBT_TARGET"
          value = "prod"
        }
        env {
          name  = "GCS_TOKEN_BUCKET"
          value = google_storage_bucket.pipeline_vault.name
        }
      }
    }
  }
}

# 8. Daily Cloud Scheduler Trigger
resource "google_cloud_scheduler_job" "daily_elt_trigger" {
  name             = "${var.cloud_run_job_name}-daily"
  region           = var.region
  schedule         = var.schedule_cron
  time_zone        = var.schedule_timezone
  attempt_deadline = "320s"

  http_target {
    http_method = "POST"
    uri         = "https://${var.region}-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/${var.project_id}/jobs/${google_cloud_run_v2_job.elt_job.name}:run"

    oauth_token {
      service_account_email = google_service_account.pipeline_sa.email
    }
  }
}
