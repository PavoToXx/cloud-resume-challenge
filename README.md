# ☁️ Cloud Resume - Joseph Dominguez

CV profesional desplegado en AWS con contador de visitas dinámico. Stack serverless con S3, CloudFront, API Gateway, Lambda, DynamoDB y CI/CD automatizado con GitHub Actions.

**🌍 Sitio en Vivo:** [Accede aquí](https://cloudfront-url-aqui.cloudfront.net)  
**👤 Autor:** Joseph Dominguez — Cloud Infrastructure & MLOps Engineer  
**📍 Ubicación:** Ecuador 🇪🇨

---

## 🏗️ Arquitectura del Sistema

```
┌────────────────────────────────────────────────────────────────┐
│                     Usuarios en Internet                        │
└────────────────────┬───────────────────────────────────────────┘
                     │ HTTPS (443)
                     ▼
        ┌─────────────────────────────────┐
        │  CloudFront Distribution        │
        │  ✓ Cache global (Edge locations)│
        │  ✓ HTTPS/SSL automático         │
        │  ✓ Baixa latencia en Ecuador    │
        └─────────────────┬───────────────┘
                         │
                         ▼
        ┌─────────────────────────────────┐
        │  S3 Static Website Hosting      │
        │  ✓ index.html (Resume)          │
        │  ✓ style.css (Dark Theme)       │
        │  ✓ script.js (JS Cliente)       │
        └─────────────────┬───────────────┘
                         │
            ┌────────────┴────────────┐
            │                         │
       [HTML Page]             [CSS/JS Assets]
            │
            │ fetch() al cargar
            ▼
        ┌─────────────────────────────────┐
        │  API Gateway (HTTP API)         │
        │  GET /count                     │
        │  ✓ CORS habilitado              │
        │  ✓ CloudWatch logs              │
        └─────────────────┬───────────────┘
                         │
                         ▼
        ┌─────────────────────────────────┐
        │  AWS Lambda (Python 3.11)       │
        │  ✓ Incrementa contador          │
        │  ✓ Manejo de errores            │
        │  ✓ Respuesta JSON               │
        │  ✓ CORS headers                 │
        └─────────────────┬───────────────┘
                         │
                         ▼
        ┌─────────────────────────────────┐
        │  DynamoDB Table                 │
        │  Name: cloud-resume-visits      │
        │  PK: id (String)                │
        │  Attr: visit_count (Number)     │
        │  Billing: Pay-per-request       │
        └─────────────────────────────────┘

    ┌─────────────────────────────────────┐
    │  GitHub Actions (CI/CD Pipeline)    │
    │  • Trigger: push a rama main        │
    │  • Sync frontend → S3               │
    │  • Update Lambda function code      │
    │  • CloudFront cache invalidation    │
    └─────────────────────────────────────┘
```

---

## 👨‍💼 Sobre El Proyecto

Este es mi **Cloud Resume Challenge** — una demostr práctica de infraestructura serverless en AWS implementando:

✅ **Frontend Moderno**  
   - Diseño oscuro (dark theme) con colores profesionales
   - Información personal, certificaciones, proyectos y skills
   - Contador de visitas en tiempo real
   - Responsive design HTML5/CSS3

✅ **Backend Serverless**  
   - Lambda function en Python 3.11
   - Integración con DynamoDB
   - API Gateway HTTP con CORS
   - Error handling robusto

✅ **Infraestructura Moderna**  
   - Amazon S3 para hosting estático
   - CloudFront para CDN global
   - DynamoDB para persistencia
   - Terraform para IaC (Infrastructure as Code)

✅ **CI/CD Automatizado**  
   - GitHub Actions para deploys automáticos
   - Sincronización de cambios a S3
   - Validación y testing

✅ **Monitoreo & Logging**  
   - CloudWatch logs para Lambda y API Gateway
   - Debugging facilitado
   - Auditoría de requests

---

## 📜 Certificaciones & Expertise

### 🎓 Certificaciones

- ☁️ **Oracle Cloud Infrastructure 2025** — Foundations Associate ✅
- ☁️ **Microsoft Azure Fundamentals** — AZ-900 (en proceso) 🔄
- 🐳 **Docker Essentials** — IBM ✅
- 🐧 **Linux Essentials** — Cisco ✅
- 🔐 **Introduction to Cybersecurity** — Cisco ✅
- ☁️ **AWS Cloud Quest** — Cloud Practitioner ✅
- ☁️ **Networking Basics** — Cisco ✅

### 💼 Skills Técnicos

```yaml
Cloud Platforms:
  - AWS (S3, Lambda, API Gateway, DynamoDB, CloudFront, IAM, CloudWatch)
  - Oracle Cloud Infrastructure
  - Microsoft Azure

Containers & Orchestration:
  - Docker
  - Docker Compose

Infrastructure & IaC:
  - Terraform
  - CloudFormation

Automation & CI/CD:
  - GitHub Actions
  - Bash Scripting
  - YAML

Databases:
  - DynamoDB (NoSQL)
  - SQL (Relacional)

Lenguajes de Programación:
  - Python 3.11
  - Bash
  - YAML
  - HTML5 / CSS3 / JavaScript

Sistemas Operativos:
  - Linux Administration
  - Command Line (Terminal)

Version Control:
  - Git
  - GitHub
  - Workflows

Networking:
  - Networking Basics
  - HTTP/HTTPS
  - APIs REST
```

---

## 📁 Estructura del Proyecto

```
cloud-resume/
│
├── 📄 frontend/
│   ├── index.html              # Resume profesional en HTML
│   │   ├── Encabezado con info de contacto
│   │   ├── Sección "Sobre mí"
│   │   ├── Certificaciones
│   │   ├── Proyectos
│   │   ├── Skills técnicos
│   │   └── Contador de visitas
│   │
│   ├── style.css               # Estilos CSS (Dark Theme)
│   │   ├── Colores: Azul (#63b3ed), Naranja (#f6ad55)
│   │   ├── Responsive design
│   │   ├── Fuente: Segoe UI
│   │   └── Transiciones suaves
│   │
│   └── script.js               # Lógica del contador de visitas
│       ├── fetch() a API Gateway cada página vista
│       ├── Manejo de errores con try/catch
│       ├── Update DOM con el contador
│       └── Event listener: DOMContentLoaded
│
├── 🐍 backend/
│   └── lambda_function.py      # AWS Lambda en Python 3.11
│       ├── DynamoDB boto3 resource
│       ├── Incrementa visit_count en 1
│       ├── Retorna JSON con contador
│       ├── CORS headers en respuesta
│       └── Error handling (ClientError, Exception)
│
├── 🏗️ terraform/
│   └── main.tf                 # Infrastructure as Code
│       ├── Variables y Provider (AWS us-east-1)
│       ├── S3 bucket con website hosting
│       ├── CloudFront distribution con OAI
│       ├── DynamoDB table (pay-per-request)
│       ├── API Gateway HTTP API
│       ├── Lambda function + permissions
│       ├── IAM roles + policies
│       ├── CloudWatch log groups
│       └── Outputs (CloudFront URL, API endpoint, etc.)
│
├── 🤖 .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD Pipeline
│           ├── Job 1: Deploy Frontend
│           │   ├── Trigger: push a main
│           │   ├── Checkout code
│           │   ├── Configure AWS credentials
│           │   └── sync frontend/ → S3
│           │
│           └── Job 2: Deploy Backend
│               ├── Depends on Job 1
│               ├── Setup Python 3.11
│               ├── Install dependencies
│               ├── Package Lambda function
│               └── Update Lambda code
│
├── LICENSE                      # MIT License
└── README.md                    # Este archivo
```

---

## 🛠️ Servicios AWS Utilizados

| Servicio | Propósito | Costo |
|----------|-----------|-------|
| **S3** | Hosting estático (HTML, CSS, JS) | ✓ Free Tier (5GB) |
| **CloudFront** | CDN global, HTTPS, caché | ✓ Free Tier (1TB/mes) |
| **API Gateway** | HTTP API serverless | ✓ Free Tier (1M calls/mes) |
| **Lambda** | Función serverless Python | ✓ Free Tier (1M reqs, 400k GB-s) |
| **DynamoDB** | Base de datos NoSQL | ✓ Free Tier (25 RCU/WCU) |
| **IAM** | Control de permisos | ✓ Siempre gratis |
| **CloudWatch** | Logs y monitoreo | ✓ Incluido 7 días |

**Costo mensual estimado:** $0-5 para bajo tráfico (Free Tier)

---

## 🚀 Guía de Deployment

### 📋 Requisitos Previos

Instala:

```bash
# AWS CLI v2
aws --version

# Terraform v1.0+
terraform --version

# Git
git --version

# Python 3.11+
python --version
```

**AWS Account:** Con acceso programático (Access Key + Secret Key)

### 🔑 Step 1: Configurar Credenciales AWS

```bash
aws configure
# AWS Access Key ID: [tu AKIA...]
# AWS Secret Access Key: [tu clave]
# Default region: us-east-1
# Default output format: json
```

Verifica:
```bash
aws sts get-caller-identity
# {
#     "UserId": "AIDAI...",
#     "Account": "123456789012",
#     "Arn": "arn:aws:iam::123456789012:user/..."
# }
```

### 📦 Step 2: Clonar Repositorio

```bash
git clone https://github.com/PavoToXx/cloud-resume.git
cd cloud-resume
```

### 🏗️ Step 3: Desplegar Infraestructura

```bash
cd terraform

# Inicializar Terraform (descarga providers)
terraform init

# Ver plan de cambios
terraform plan

# Aplicar configuración
terraform apply

# Escribe "yes" cuando pregunte
```

**Guardar outputs:**
```
cloudfront_url = "d12abc345xyz.cloudfront.net"
website_bucket_name = "cloud-resume-website-abc123xy"
api_endpoint = "https://api-id-123.execute-api.us-east-1.amazonaws.com/count"
dynamodb_table_name = "cloud-resume-visits"
```

### 🌐 Step 4: Configurar API Endpoint en Frontend

Edita `frontend/script.js`:

```javascript
// ANTES:
const API_URL = "https://fg1jfmdws4.execute-api.us-east-1.amazonaws.com/visits";

// DESPUÉS (usa tu endpoint real):
const API_URL = "https://api-id-123.execute-api.us-east-1.amazonaws.com/count";
```

### 📤 Step 5: Sincronizar Frontend a S3

```bash
cd ..

# Usar el bucket name de Terraform output
aws s3 sync frontend/ s3://cloud-resume-website-abc123xy/ --delete

# Output esperado:
# upload: frontend/index.html to s3://cloud-resume-website-abc123xy/index.html
# upload: frontend/style.css to s3://cloud-resume-website-abc123xy/style.css
# upload: frontend/script.js to s3://cloud-resume-website-abc123xy/script.js
```

### 🔍 Step 6: Verificar Deployment

1. **Acceder al sitio:**
   ```
   https://d12abc345xyz.cloudfront.net
   ```

2. **Probar contador:**
   - Abre la página
   - El campo "Visitas al perfil" debe mostrar un número
   - Recarga 🔄 — el número debe incrementar

3. **Test API manual:**
   ```bash
   curl "https://api-id-123.execute-api.us-east-1.amazonaws.com/count"
   # {"count": 2, "message": "Visitor count updated successfully"}
   ```

---

## 🤖 Configurar CI/CD con GitHub Actions

### Step 1: Agregar GitHub Secrets

Ve a: **Repository Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Agrega estos 5 secrets:

| Secret | Valor | Ejemplo |
|--------|-------|---------|
| `AWS_ACCESS_KEY_ID` | Tu AKIA... | `AKIAI5XXXXXXXXXX` |
| `AWS_SECRET_ACCESS_KEY` | Tu secret key | `wJalrXUtnFEMI/K7...` |
| `S3_BUCKET_NAME` | Del terraform output | `cloud-resume-website-abc123xy` |
| `LAMBDA_FUNCTION_NAME` | Nombre de Lambda | `cloud-resume-visitor-counter` |
| `CLOUDFRONT_DISTRIBUTION_ID` | Tu distribution ID | `E2A1B2C3D4E5` |

### Step 2: Deploy Automático

Ahora, cada `git push` a `main` dispara automáticamente:

```bash
# Haz cambios en tu resume
nano frontend/index.html

# Commit y push
git add .
git commit -m "Actualizar certificaciones"
git push origin main

# GitHub Actions se ejecuta automáticamente
# Ve a: Actions en tu repo para ver el progreso
# En 2-3 minutos los cambios están en vivo
```

**Workflow automático:**
1. ✅ Deploy Frontend → sync a S3
2. ✅ Deploy Backend → update Lambda
3. ✅ Invalidate CloudFront → actualiza caché

---

## 🧪 Testing & Validación

### ✅ Test del Contador

```bash
# Ver datos en DynamoDB
aws dynamodb get-item \
  --table-name cloud-resume-visits \
  --key '{"id": {"S": "visitor_count"}}'

# Respuesta esperada:
# {
#     "Item": {
#         "id": {"S": "visitor_count"},
#         "visit_count": {"N": "42"}
#     }
# }
```

### ✅ Test API Gateway

```bash
# Hacer request a Lambda vía API
curl -X GET "https://api-id-123.execute-api.us-east-1.amazonaws.com/count"

# Respuesta:
# {"count": 42, "message": "Visitor count updated successfully"}
```

### ✅ Ver Logs Lambda

```bash
# Logs en vivo
aws logs tail /aws/lambda/cloud-resume-visitor-counter --follow

# Con búsqueda
aws logs tail /aws/lambda/cloud-resume-visitor-counter --since 1h --grep "ERROR"

# Ctrl+C para salir
```

### ✅ Verificar S3

```bash
# Listar archivos
aws s3 ls s3://cloud-resume-website-abc123xy/

# Verificar permisos públicos
aws s3api get-bucket-policy --bucket cloud-resume-website-abc123xy

# Probar acceso
curl https://cloud-resume-website-abc123xy.s3.amazonaws.com/index.html
```

---

## 📊 Monitoreo & Debugging

### 🔍 CloudWatch Logs

```bash
# Lambda logs
aws logs tail /aws/lambda/cloud-resume-visitor-counter --follow

# API Gateway logs
aws logs tail /aws/apigateway/cloud-resume-api --follow
```

### 🐛 Troubleshooting

#### Problema: Contador no actualiza

```bash
# 1. Verifica API URL en script.js
grep API_URL frontend/script.js

# 2. Verifica Lambda logs
aws logs tail /aws/lambda/cloud-resume-visitor-counter

# 3. Test API directamente
curl "https://api-id-123.execute-api.us-east-1.amazonaws.com/count"

# 4. Verifica permisos IAM
aws iam get-role-policy \
  --role-name cloud-resume-lambda-role \
  --policy-name cloud-resume-lambda-dynamodb-policy
```

#### Problema: S3 no accesible

```bash
# 1. Bucket policy
aws s3api get-bucket-policy --bucket cloud-resume-website-abc123xy

# 2. Website hosting habilitado
aws s3api get-bucket-website --bucket cloud-resume-website-abc123xy

# 3. CORS en CloudFront
aws cloudfront get-distribution --id E2A1B2C3D4E5 | grep -i cors
```

#### Problema: Lambda falla

```bash
# Ver error detallado
aws logs tail /aws/lambda/cloud-resume-visitor-counter --follow

# Ver estadísticas
aws lambda get-function-concurrency \
  --function-name cloud-resume-visitor-counter
```

---

## 🧹 Limpiar Recursos (DESTRUIR)

⚠️ **ADVERTENCIA:** Esto elimina TODO. No se puede recuperar.

```bash
cd terraform
terraform destroy

# Confirma escribiendo: yes
# Espera 2-3 minutos
```

Manually:
1. AWS Console → S3 → Delete bucket
2. AWS Console → CloudFront → Disable & delete
3. AWS Console → Lambda → Delete function
4. AWS Console → DynamoDB → Delete table
5. AWS Console → API Gateway → Delete API
6. AWS Console → IAM → Delete roles

---

## 📚 Referencias

- [Cloud Resume Challenge](https://cloudresumechallenge.dev/) — Reto original
- [AWS Lambda Docs](https://docs.aws.amazon.com/lambda/)
- [Terraform AWS](https://registry.terraform.io/providers/hashicorp/aws/)
- [DynamoDB Guide](https://docs.aws.amazon.com/dynamodb/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 🔒 Seguridad

**Implementado:**
- ✅ S3 bucket policy — Solo lectura pública
- ✅ CloudFront — HTTPS automático (AWS cert)
- ✅ Lambda IAM — Permisos mínimos (least privilege)
- ✅ CORS — Configurado en API Gateway
- ✅ Secrets — En GitHub Actions secrets
- ✅ Logs — CloudWatch para auditoría

**Para producción:**
- Agregar API Key o JWT en Lambda
- Habilitar versionado en S3
- WAF en CloudFront
- CloudTrail para auditoría completa
- Encryption en DynamoDB

---

## 📝 Licencia

MIT License — Libre para usar, modificar y compartir

```
Copyright (c) 2024 Joseph Dominguez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software... (MIT full text)
```

---

## 📞 Contacto

- 📧 **Email:** josephelias.12341@gmail.com
- 💼 **LinkedIn:** [linkedin.com/in/josephdominguez-](https://www.linkedin.com/in/josephdominguez-)
- 🐙 **GitHub:** [github.com/PavoToXx](https://github.com/PavoToXx)
- 🌍 **Ubicación:** Ecuador 🇪🇨

---

**Última actualización:** Marzo 2024  
**Estado:** ✅ Activo y en mantenimiento

Construido con ❤️ usando **AWS, Terraform, GitHub Actions y Python**
