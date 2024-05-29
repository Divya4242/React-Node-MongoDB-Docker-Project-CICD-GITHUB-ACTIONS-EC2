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
The CI/CD pipeline is structured into two jobs:
1. **Deploy Backend and Create Artifact**: Compiles the code and dockrize the code. Create artiact file indicating status of the job.
2. **Check Artifact and Deploy Frontend**: First check artifact file status and then run or reject 2nd job based on status.

## GitHub Actions Workflow
The GitHub Actions workflow is defined in `.github/workflows/deployment.yml`. Key steps include:
- **Deploy Backend and Create Artifact**: Compiles the code and dockrize the code. Upload Docker Image to Dockerhub. Create artiact file indicating status of the job.
- **Check Artifact and Deploy Frontend**: First check artifact file status and then run or reject 2nd job based on status. If success it deploy the react build to ec2 and run docker container for backend.

## Artifacts
Artifacts are used to pass information between jobs in the workflow. Specifically:
- **Status File**: Indicates the result of the build and test job.

## Deployment
The deployment process involves:
- **AWS EC2**: The application is deployed on an AWS EC2 instance.
- **Conditional Execution**: Deployment only proceeds if the first job is successful, as indicated by the status artifact.

## Implementation Guide
To implement this CI/CD pipeline:
1. **Fork the Repository**: Fork this repo to your GitHub account.
2. **Create EC2 SSH Key Secrets**: Add the required EC2 SSH key secrets in the GitHub Action YAML file.
3. **Modify GitHub Actions Workflow**:
   - Update the `rsync` deployment action values as needed in the GitHub Actions YAML file.
   - Change the EC2 IP address mentioned in the GitHub Actions YAML file.
4. Update the `REACT_APP_API_URL` environment variable of [.env](https://github.com/Divya4242/React-Node-MongoDB-Docker-Project-CICD-GITHUB-ACTIONS-EC2/blob/main/client/.env) in the client folder.
5. **Nginx Configuration**:
   - Create two Nginx configuration files in `/etc/nginx/sites-available`.
     
   **frontend.conf**:
     ```nginx
     # Frontend configuration file
     server {
         listen 80;
         server_name your_domain.com.OR_;

         location / {
             root /var/www/build;
             index index.html;
             try_files $uri $uri/ /index.html;
         }
     }
     ```

     **backend.conf**:
     ```nginx
     # Backend Configuration File
     server {
         listen 80;
         server_name your_domain.com.OR_;

         location / {
             proxy_pass http://localhost:8000;
             proxy_http_version 1.1;
             proxy_set_header Upgrade $http_upgrade;
             proxy_set_header Connection 'upgrade';
             proxy_set_header Host $host;
             proxy_cache_bypass $http_upgrade;
         }
     }
     ```
     

## Screenshots
![image](https://github.com/Divya4242/React-Node-MongoDB-Docker-Project-CICD-GITHUB-ACTIONS-EC2/assets/113757574/6aa4ab06-b0ab-4846-8843-0ba3621d0ff7)
![image](https://github.com/Divya4242/React-Node-MongoDB-Docker-Project-CICD-GITHUB-ACTIONS-EC2/assets/113757574/3953902d-05a1-45dc-82ff-4d1fa73a1f15)


---

For detailed configuration and customization, refer to the `.github/workflows/deployment.yml` file in the repository.

