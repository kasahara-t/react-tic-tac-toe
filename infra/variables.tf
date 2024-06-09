# variables.tf
variable "project_id" {
  description = "The ID of the project to create"
  type        = string
}

variable "billing_account_id" {
  description = "The billing account ID to associate with the project"
  type        = string
}

variable "project_name" {
  description = "The display name of the project"
  type        = string
}

variable "web_app_display_name" {
  description = "The display name of the Firebase web app"
  type        = string
}

variable "enabled_apis" {
  description = "List of APIs to enable"
  type        = list(string)
  default     = [
    "cloudbilling.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "firebase.googleapis.com",
    "serviceusage.googleapis.com",
  ]
}