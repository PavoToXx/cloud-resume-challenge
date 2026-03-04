# ☁️ Cloud Resume Challenge

A serverless cloud resume website with a dynamic visitor counter, built using AWS services and Infrastructure as Code (Terraform).

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                             Internet Users                                │
└────────────────────────┬─────────────────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │      CloudFront (CDN)               │
        │  - Global Content Delivery          │
        │  - HTTPS/SSL                        │
        │  - Caching                          │
        └────────────┬───────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────────┐
        │   S3 Static Website Hosting        │
        │   - index.html                     │
        │   - style.css                      │
        │   - script.js                      │
        └────────────┬───────────────────────┘
                     │
                     │ (JavaScript Fetch)
                     │
                     ▼
        ┌────────────────────────────────────┐
        │    API Gateway (HTTP API)          │
        │    POST /count                     │
        │    - CORS Enabled                  │
        │    - Request/Response Logging      │
        └────────────┬───────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────────┐
        │   Lambda Function (Python 3.11)    │
        │   - Increment visitor count        │
        │   - Return updated count           │
        │   - Error handling                 │
        └────────────┬───────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────────┐
        │   DynamoDB Table                   │
        │   Table: cloud-resume-visits       │
        │   Key: id (String)                 │
        │   Attribute: visit_count (Number)  │
        └────────────────────────────────────┘

       ┌─────────────────────────────────────┐
       │      GitHub Actions CI/CD           │
       │   - Auto-deploy on push to main     │
       │   - Sync frontend to S3             │
       │   - Update Lambda function          │
       └─────────────────────────────────────┘
```

## 🛠️ AWS Services Used

| Service | Purpose |
|---------|---------|
| **S3** | Static website hosting for HTML, CSS, and JavaScript files |
| **CloudFront** | Content Delivery Network (CDN) for global distribution and HTTPS |
| **API Gateway** | HTTP API to trigger Lambda function |
| **Lambda** | Serverless function to handle visitor count logic |
| **DynamoDB** | NoSQL database to store visitor count |
| **IAM** | Identity and Access Management for service permissions |
| **CloudWatch** | Logging and monitoring for Lambda and API Gateway |

## 📁 Project Structure

```
cloud-resume/
├── frontend/
│   ├── index.html          # Resume webpage
│   ├── style.css           # Styling
│   └── script.js           # Visitor counter logic
├── backend/
│   └── lambda_function.py  # Lambda function code
├── terraform/
│   └── main.tf             # Infrastructure as Code
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
├── LICENSE
└── README.md
```

## 🚀 Deployment Instructions

### Prerequisites

Before deploying, ensure you have:

1. **AWS Account** with appropriate permissions
2. **AWS CLI** installed and configured
3. **Terraform** (v1.0+) installed
4. **Git** installed
5. **GitHub Account** for CI/CD

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/cloud-resume.git
cd cloud-resume
```

### Step 2: Configure AWS Credentials

```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Enter your default region (e.g., us-east-1)
```

### Step 3: Deploy Infrastructure with Terraform

```bash
cd terraform

# Initialize Terraform
terraform init

# Review the execution plan
terraform plan

# Apply the configuration
terraform apply
```

**Note the outputs:**
- `website_bucket_name`: Your S3 bucket name
- `api_endpoint`: Your API Gateway endpoint
- `cloudfront_url`: Your CloudFront distribution URL

### Step 4: Update Frontend with API Endpoint

Edit `frontend/script.js` and replace the placeholder:

```javascript
const API_ENDPOINT = 'YOUR_API_GATEWAY_ENDPOINT_HERE';
```

With your actual API Gateway endpoint (from Terraform output):

```javascript
const API_ENDPOINT = 'https://abc123xyz.execute-api.us-east-1.amazonaws.com/count';
```

### Step 5: Upload Frontend Files to S3

```bash
cd ..
aws s3 sync frontend/ s3://YOUR_BUCKET_NAME --delete
```

Replace `YOUR_BUCKET_NAME` with the bucket name from Terraform output.

### Step 6: Update HTML with Visitor Counter

Add this to your `index.html` where you want to display the count:

```html
<p>Visitor Count: <span id="visitor-count">Loading...</span></p>
```

### Step 7: Access Your Website

Visit your CloudFront URL or S3 website endpoint to see your resume!

## 🔄 CI/CD Setup with GitHub Actions

### Configure GitHub Secrets

In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**, and add:

| Secret Name | Description |
|-------------|-------------|
| `AWS_ACCESS_KEY_ID` | Your AWS access key |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret key |
| `S3_BUCKET_NAME` | Your S3 bucket name |
| `LAMBDA_FUNCTION_NAME` | Your Lambda function name (e.g., `cloud-resume-visitor-counter`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | (Optional) Your CloudFront distribution ID |

### Automatic Deployment

Once configured, every push to the `main` branch will:
1. ✅ Sync frontend files to S3
2. ✅ Update Lambda function code
3. ✅ Invalidate CloudFront cache (if configured)

## 🧪 Testing

### Test the API Locally

```bash
# Using curl
curl -X POST https://YOUR_API_ENDPOINT/count

# Expected response
{"count": 1, "message": "Visitor count updated successfully"}
```

### Test DynamoDB

```bash
# Check the visitor count in DynamoDB
aws dynamodb get-item \
  --table-name cloud-resume-visits \
  --key '{"id": {"S": "visitor_count"}}'
```

## 📊 Monitoring

### CloudWatch Logs

- **Lambda Logs**: `/aws/lambda/cloud-resume-visitor-counter`
- **API Gateway Logs**: `/aws/apigateway/cloud-resume-api`

View logs in AWS Console or using AWS CLI:

```bash
# View Lambda logs
aws logs tail /aws/lambda/cloud-resume-visitor-counter --follow

# View API Gateway logs
aws logs tail /aws/apigateway/cloud-resume-api --follow
```

## 💰 Cost Estimation

This project uses AWS Free Tier eligible services:

- **S3**: First 5GB free, then ~$0.023/GB
- **CloudFront**: 1TB data transfer free for 12 months
- **Lambda**: 1M free requests/month, 400,000 GB-seconds compute
- **DynamoDB**: 25GB storage, 25 RCU/WCU free forever
- **API Gateway**: 1M API calls free for 12 months

**Expected monthly cost**: $0-5 for low traffic sites

## 🔒 Security Best Practices

- ✅ S3 bucket policy restricts public access appropriately
- ✅ Lambda has minimal IAM permissions (principle of least privilege)
- ✅ CORS configured on API Gateway
- ✅ CloudFront enforces HTTPS
- ✅ CloudWatch logging enabled for auditing
- ✅ Secrets stored in GitHub Actions secrets (not in code)

## 🧹 Cleanup

To avoid AWS charges, destroy all resources:

```bash
cd terraform
terraform destroy
```

**Warning**: This will permanently delete all resources and data!

## 🐛 Troubleshooting

### Visitor count not updating

1. Check browser console for errors
2. Verify API endpoint in `script.js`
3. Check Lambda function logs in CloudWatch
4. Verify CORS settings on API Gateway

### S3 website not accessible

1. Ensure S3 bucket policy allows public read
2. Verify static website hosting is enabled
3. Check CloudFront distribution status

### Lambda function errors

1. Check IAM role has DynamoDB permissions
2. Verify DynamoDB table name matches
3. Check Lambda timeout settings
4. Review CloudWatch logs

## 📚 Resources

- [AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/)
- [Terraform AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [AWS Lambda Python Documentation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-python.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

If this project helped you, give it a ⭐!

---

**Built with ❤️ using AWS, Terraform, and GitHub Actions**
