# Project CI/CD with GitHub Actions and AWS EC2 Deployment

This repository contains a full-stack application with a frontend built using React.js and a backend developed with Node.js. Continuous Integration and Continuous Deployment (CI/CD) are implemented using GitHub Actions and GitHub managed runners. The project is deployed on AWS EC2.

## Table of Contents
- [Overview](#overview)
- [CI/CD Pipeline](#cicd-pipeline)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Artifacts](#artifacts)
- [Deployment](#deployment)

## Overview
This project automates the CI/CD process for a full-stack application, enabling efficient development and deployment cycles. The CI/CD pipeline includes jobs for building, testing, and deploying the application, leveraging GitHub Actions and AWS EC2.

## CI/CD Pipeline
The CI/CD pipeline is structured into multiple jobs:
1. **Build and Test**: Compiles the code and runs tests.
2. **Artifact Handling**: Creates an artifact indicating the status of the build and test job.
3. **Conditional Deployment**: Checks the artifact's status and decides whether to proceed with deployment.

## GitHub Actions Workflow
The GitHub Actions workflow is defined in `.github/workflows/main.yml`. Key steps include:
- **Build and Test Job**: Executes the build and tests the application.
- **Upload Artifact**: Saves a status file as an artifact.
- **Conditional Deployment Job**: Downloads the status artifact and decides to run or exit based on the artifact's content.

## Artifacts
Artifacts are used to pass information between jobs in the workflow. Specifically:
- **Status File**: Indicates the result of the build and test job.

## Deployment
The deployment process involves:
- **AWS EC2**: The application is deployed on an AWS EC2 instance.
- **Conditional Execution**: Deployment only proceeds if the build and test job is successful, as indicated by the status artifact.

---

For detailed configuration and customization, refer to the `.github/workflows/main.yml` file in the repository.

