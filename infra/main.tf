# main.tf
terraform {
  required_providers {
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 4.0"
    }
  }
}

provider "google-beta" {
  alias                 = "default"
  user_project_override = true
}

provider "google-beta" {
  alias                 = "no_user_project_override"
  user_project_override = false
}

# Creates a new Google Cloud project
resource "google_project" "default" {
  provider   = google-beta.no_user_project_override

  name       = var.project_name
  project_id = var.project_id
  billing_account = var.billing_account_id

  labels = {
    "firebase" = "enabled"
  }
}

# Enables required APIs for the project
resource "google_project_service" "default" {
  provider = google-beta.no_user_project_override
  project  = google_project.default.project_id
  for_each = toset(var.enabled_apis)
  service  = each.key

  disable_on_destroy = false
}

# Enables Firebase services for the project
resource "google_firebase_project" "default" {
  provider = google-beta.default
  project  = google_project.default.project_id

  depends_on = [
    google_project_service.default
  ]
}

# Creates a Firebase web application
resource "google_firebase_web_app" "default" {
  provider     = google-beta.default
  project      = google_project.default.project_id
  display_name = var.web_app_display_name
  
  depends_on = [ 
    google_firebase_project.default
  ]
}