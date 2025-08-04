# PowerShell Script for Deployment Setup
# Run this script to prepare your project for deployment

Write-Host "🚀 Personal Website Deployment Setup" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Check if Git is installed
Write-Host "`n📋 Checking prerequisites..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

# Check if we're in the correct directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Please run this script from the personal-website directory!" -ForegroundColor Red
    Write-Host "Current directory: $(Get-Location)" -ForegroundColor Yellow
    exit 1
}

# Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "`n📝 Creating .env.local file..." -ForegroundColor Yellow
    @"
GEMINI_API_KEY=AIzaSyAx17HbqpZMw1YqIsFoWRrH8BF2Zq9FjCM
"@ | Out-File -FilePath ".env.local" -Encoding UTF8
    Write-Host "✅ Created .env.local with your Gemini API key" -ForegroundColor Green
} else {
    Write-Host "✅ .env.local already exists" -ForegroundColor Green
}

# Install dependencies
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Test build
Write-Host "`n🔨 Testing build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}

# Initialize Git repository
Write-Host "`n📁 Setting up Git repository..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}

# Add all files
git add .
Write-Host "✅ Files added to Git" -ForegroundColor Green

# Commit changes
git commit -m "Initial commit - Personal website ready for deployment"
Write-Host "✅ Changes committed" -ForegroundColor Green

Write-Host "`n🎉 Setup Complete!" -ForegroundColor Green
Write-Host "==================" -ForegroundColor Green
Write-Host "Your project is now ready for deployment!" -ForegroundColor Yellow
Write-Host "`n📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub repository at: https://github.com" -ForegroundColor White
Write-Host "2. Follow the deployment guide in DEPLOYMENT_GUIDE.md" -ForegroundColor White
Write-Host "3. Recommended: Deploy to Vercel for best experience" -ForegroundColor White
Write-Host "`n📖 For detailed instructions, see: DEPLOYMENT_GUIDE.md" -ForegroundColor Yellow 