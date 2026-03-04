# ☁️ Cloud Resume Challenge — Joseph Dominguez

A cloud-native resume built with AWS serverless architecture, Infrastructure as Code, and automated CI/CD pipelines.

🌐 **Live:** https://d2s1g6429pldt.cloudfront.net/

---

## 🏗️ Architecture

```
Browser
   │
   ▼
AWS S3 (Static Website Hosting)
   │  HTML + CSS + JS
   │
   ▼
JavaScript fetch()
   │
   ▼
AWS API Gateway (HTTP API)
   │  GET /visits
   ▼
AWS Lambda (Python 3.12)
   │  Increments counter
   ▼
AWS DynamoDB
   │  Stores visit count
   └─ Table: cloud-resume-visits
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Hosting | AWS S3 (Static Website) |
| API | AWS API Gateway (HTTP API) |
| Backend | AWS Lambda (Python 3.12) |
| Database | AWS DynamoDB |
| IaC | Terraform |
| CI/CD | GitHub Actions |

---

## ✨ Features

- ☁️ Serverless architecture — no servers to manage
- 👁️ Real-time visitor counter powered by Lambda + DynamoDB
- 🔄 Automated deployments via GitHub Actions on every push to `main`
- 🏗️ Infrastructure defined as code with Terraform
- 💰 Runs entirely on AWS Free Tier

---

## 📁 Project Structure

```
cloud-resume-challenge/
├── frontend/
│   ├── index.html        # Resume page
│   ├── style.css         # Dark theme styling
│   └── script.js         # Visitor counter logic
├── backend/
│   └── lambda_function.py # AWS Lambda counter function
├── terraform/
│   └── main.tf           # AWS infrastructure as code
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
└── README.md
```

---

## 🚀 How It Works

### Visitor Counter
1. Browser loads the resume page from S3
2. `script.js` sends a `GET` request to API Gateway
3. API Gateway triggers the Lambda function
4. Lambda increments the counter in DynamoDB
5. Returns the updated count → displayed on the page

### CI/CD Pipeline
1. Code pushed to `main` branch
2. GitHub Actions workflow triggers automatically
3. AWS credentials loaded from GitHub Secrets
4. Frontend files synced to S3 bucket
5. Changes live instantly ✅

---

## 🔧 Deployment

### Prerequisites
- AWS account with Free Tier
- Terraform installed
- AWS CLI configured

### Steps

```bash
# Clone the repository
git clone https://github.com/PavoToXx/cloud-resume-challenge
cd cloud-resume-challenge

# Deploy infrastructure with Terraform
cd terraform
terraform init
terraform plan
terraform apply

# Frontend deploys automatically via GitHub Actions
# on every push to main branch
```

### GitHub Secrets Required
```
AWS_ACCESS_KEY_ID      → IAM user access key
AWS_SECRET_ACCESS_KEY  → IAM user secret key
AWS_S3_BUCKET          → S3 bucket name
```

> ⚠️ Never commit credentials to the repository.
> Always use GitHub Secrets or environment variables.

---

## 📋 AWS Services Used

| Service | Purpose | Cost |
|---|---|---|
| S3 | Static website hosting | Free Tier |
| Lambda | Visitor counter logic | Free Tier |
| DynamoDB | Store visit count | Free Tier |
| API Gateway | HTTP endpoint | Free Tier |
| CloudFront | CDN + HTTPS | Free Tier |
| IAM | Permissions & roles | Free |

---

## 🗺️ Roadmap

- [x] Static resume hosted on S3
- [x] Visitor counter with Lambda + DynamoDB
- [x] REST API with API Gateway
- [x] CI/CD pipeline with GitHub Actions
- [x] Infrastructure as Code with Terraform
- [X] CloudFront distribution + HTTPS
- [ ] Custom domain
- [ ] Unit tests for Lambda function

---

## 🏅 Certifications

| Certification | Issuer | Status |
|---|---|---|
| Oracle Cloud Infrastructure 2025 Foundations Associate | Oracle | ✅ Certified |
| Microsoft Azure Fundamentals AZ-900 | Microsoft | ⏳ In Progress |
| AWS Cloud Quest: Cloud Practitioner | AWS | ✅ Badge |
| Docker Essentials | IBM | ✅ Badge |
| Linux Essentials | Cisco | ✅ Badge |
| Introduction to Cybersecurity | Cisco | ✅ Badge |

---

## 👤 Author

**Joseph Dominguez**
Cloud Infrastructure & MLOps Engineer in training

- 🐙 GitHub: [@PavoToXx](https://github.com/PavoToXx)
- 💼 LinkedIn: [josephdominguez-](https://www.linkedin.com/in/josephdominguez-/)
- ☁️ Focused on: AWS · Oracle Cloud · Azure · Docker · Python · Terraform

---

## 📄 License

MIT License — feel free to use this as a template for your own Cloud Resume Challenge.

---

*Built with ☁️ as part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev)*