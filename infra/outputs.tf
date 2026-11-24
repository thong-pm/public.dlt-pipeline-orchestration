output "service_account_email" {
  description = "Service account email used by Cloud Run Job, Cloud Scheduler, and CI."
  value       = google_service_account.pipeline_sa.email
}

output "cloud_run_job_name" {
  description = "Deployed Cloud Run v2 Job name."
  value       = google_cloud_run_v2_job.elt_job.name
}

output "state_bucket_name" {
  description = "GCS bucket for tokens, dbt manifest, and Copilot DuckDB cache."
  value       = google_storage_bucket.pipeline_vault.name
}

output "artifact_registry_repository" {
  description = "Artifact Registry Docker repository ID."
  value       = google_artifact_registry_repository.pipeline_repo.repository_id
}
