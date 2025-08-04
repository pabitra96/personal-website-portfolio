# 🚀 Complete Deployment Guide

## 📋 Prerequisites
- [ ] Git installed on your computer
- [ ] GitHub account
- [ ] Vercel account (free)
- [ ] Your Gemini API key ready
- [ ] Pinecone account (optional - for enhanced RAG)

---

## 🎯 Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Install Git
1. **Download Git**: https://git-scm.com/download/win
2. **Install with default settings**
3. **Restart your terminal/PowerShell**

### Step 2: Create GitHub Repository
1. Go to https://github.com
2. Sign up/Login
3. Click "New repository"
4. Name: `personal-website`
5. Make it **Public**
6. Don't initialize with README
7. Click "Create repository"

### Step 3: Upload Code to GitHub
```bash
# Navigate to your project folder
cd "C:\Code\My Personal Website\personal-website"

# Initialize Git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Personal website with Pinecone RAG"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel
1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Import your repository**: Select `personal-website`
5. **Configure project**:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Click "Deploy"**

### Step 5: Add Environment Variables
1. **In Vercel dashboard**, go to your project
2. **Settings** → **Environment Variables**
3. **Add Variables**:
   - Name: `GEMINI_API_KEY`
   - Value: `AIzaSyAx17HbqpZMw1YqIsFoWRrH8BF2Zq9FjCM`
   - Environment: Production, Preview, Development
   
   **For Enhanced RAG (Optional)**:
   - Name: `PINECONE_API_KEY`
   - Value: `your_pinecone_api_key_here`
   - Environment: Production, Preview, Development
   
   - Name: `PINECONE_INDEX_NAME`
   - Value: `pabitra-knowledge`
   - Environment: Production, Preview, Development
4. **Save**
5. **Redeploy** your project

### Step 6: Initialize Knowledge Base (Optional)
If you set up Pinecone, initialize the knowledge base:
1. **Visit**: `https://your-project-name.vercel.app/api/init-knowledge`
2. **You should see**: `{"message":"Knowledge base initialized successfully"}`

### Step 7: Custom Domain (Optional)
1. **In Vercel dashboard**, go to **Settings** → **Domains**
2. **Add Domain**: Enter your custom domain
3. **Configure DNS** as instructed by Vercel

---

## 🧠 Pinecone Setup (Optional - Enhanced RAG)

### Why Pinecone?
- **Better responses**: Semantic search finds most relevant information
- **Dynamic context**: Retrieves specific knowledge based on questions
- **Scalable**: Easy to add new information
- **Free tier**: 100,000 vectors available

### Setup Steps:
1. **Create Pinecone account**: https://app.pinecone.io/
2. **Create index**:
   - Name: `pabitra-knowledge`
   - Dimensions: `768`
   - Metric: `cosine`
   - Cloud: `GCP Starter` (free)
3. **Get API key** from Pinecone console
4. **Add to environment variables** (see Step 5 above)
5. **Initialize knowledge base** (see Step 6 above)

**Detailed guide**: See `PINECONE_SETUP.md`

---

## 🎯 Option 2: Deploy to Netlify

### Step 1: Build Your Project
```bash
# Navigate to project folder
cd "C:\Code\My Personal Website\personal-website"

# Install dependencies
npm install

# Build for production
npm run build

# Export static files
npm run export
```

### Step 2: Deploy to Netlify
1. **Go to Netlify**: https://netlify.com
2. **Sign up/Login**
3. **Drag & Drop**: Upload the `out` folder
4. **Or connect GitHub**: Import your repository

### Step 3: Add Environment Variables
1. **Site settings** → **Environment variables**
2. **Add**: `GEMINI_API_KEY` = `AIzaSyAx17HbqpZMw1YqIsFoWRrH8BF2Zq9FjCM`
3. **For Pinecone**: Add `PINECONE_API_KEY` and `PINECONE_INDEX_NAME`

---

## 🎯 Option 3: Deploy to GitHub Pages

### Step 1: Configure Next.js for Static Export
Add to `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Step 2: Build and Deploy
```bash
# Build static files
npm run build

# The static files will be in the 'out' folder
# Upload 'out' folder contents to GitHub Pages
```

---

## 🎯 Option 4: Deploy to Railway

### Step 1: Connect to Railway
1. **Go to Railway**: https://railway.app
2. **Sign up/Login** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select your repository**

### Step 2: Configure Environment
1. **Variables** tab
2. **Add**: `GEMINI_API_KEY` = `AIzaSyAx17HbqpZMw1YqIsFoWRrH8BF2Zq9FjCM`
3. **For Pinecone**: Add `PINECONE_API_KEY` and `PINECONE_INDEX_NAME`

---

## 🔧 Troubleshooting

### Common Issues:

1. **Build Errors**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

2. **Environment Variables Not Working**:
   - Ensure variable names are exactly correct
   - Redeploy after adding variables
   - Check deployment logs

3. **Pinecone Issues**:
   - Check if API key is valid
   - Verify index exists and is ready
   - System falls back to static knowledge if Pinecone fails

4. **Git Issues**:
   ```bash
   # Configure Git
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

5. **Port Issues**:
   - Vercel handles this automatically
   - For local testing: `npm run dev`

---

## 📱 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] Pobo chatbot works
- [ ] Contact form functions
- [ ] Mobile responsive
- [ ] SEO meta tags working
- [ ] Pinecone knowledge base initialized (if configured)
- [ ] Custom domain configured (if applicable)

---

## 🌐 Your Live Website

After deployment, your website will be available at:
- **Vercel**: `https://your-project-name.vercel.app`
- **Netlify**: `https://your-project-name.netlify.app`
- **Railway**: `https://your-project-name.railway.app`

---

## 📞 Need Help?

1. **Check deployment logs** in your platform dashboard
2. **Verify environment variables** are set correctly
3. **Test locally** with `npm run dev` first
4. **Check browser console** for errors
5. **Pinecone issues**: See `PINECONE_SETUP.md`

**Recommended Platform**: Vercel (best for Next.js, free tier, automatic deployments)

**Enhanced Features**: Pinecone RAG (optional but recommended for better chatbot) 