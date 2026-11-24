variable "project_id" {
  description = "GCP Project ID hosting BigQuery, Cloud Run, Cloud Function, and GCS."
  type        = string
}

variable "region" {
  description = "Primary GCP region for serverless compute and Artifact Registry."
  type        = string
  default     = "us-central1"
}

variable "bq_location" {
  description = "BigQuery dataset multi-region location."
  type        = string
  default     = "US"
}

variable "state_bucket_name" {
  description = "GCS bucket for rotating OAuth tokens, dbt prod manifest.json, and AI Copilot DuckDB artifacts."
  type        = string
}

variable "cloud_run_job_name" {
  description = "Name of the Cloud Run v2 Job running the Dagster pipeline."
  type        = string
  default     = "dlt-pipeline-job"
}

variable "pipeline_image_uri" {
  description = "Container image URI in Artifact Registry for the Dagster pipeline job."
  type        = string
}

variable "schedule_cron" {
  description = "Cron schedule for daily ELT pipeline execution."
  type        = string
  default     = "0 6 * * *"
}

variable "schedule_timezone" {
  description = "Timezone for the Cloud Scheduler job."
  type        = string
  default     = "Etc/UTC"
}
