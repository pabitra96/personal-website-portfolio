# Deployment Guide

This guide will help you deploy your personal website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest and most optimized platform for Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `GEMINI_API_KEY` = your Gemini API key
   - Add: `NEXT_PUBLIC_SITE_URL` = your domain

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain (Optional)
- In Vercel dashboard, go to Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

## 🌐 Netlify

### Steps:

1. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 (or higher)

2. **Deploy**
   - Connect your GitHub repository
   - Add environment variables
   - Deploy automatically

---

## ☁️ AWS Amplify

### Steps:

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Select main branch

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

3. **Environment Variables**
   - Add `GEMINI_API_KEY` in Amplify console

---

## 🚂 Railway

### Steps:

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository

2. **Environment Variables**
   - Add `GEMINI_API_KEY` in Railway dashboard

3. **Deploy**
   - Railway will automatically detect Next.js
   - Deploy automatically

---

## 🔧 Environment Variables

Make sure to set these in your deployment platform:

```env
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---

## 📱 Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images
   - Use appropriate formats (WebP, AVIF)

2. **Check Bundle Size**
   ```bash
   npm run build
   npm run analyze
   ```

3. **Test Performance**
   - Run Lighthouse tests
   - Check Core Web Vitals
   - Test on mobile devices

---

## 🔒 Security Checklist

- [ ] API keys are in environment variables
- [ ] HTTPS is enabled
- [ ] CORS is properly configured
- [ ] Input validation is in place
- [ ] Rate limiting is implemented (if needed)

---

## 📊 Analytics Setup

### Google Analytics:

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get measurement ID

2. **Add to Environment**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Verify Installation**
   - Check real-time reports
   - Verify events are tracking

---

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check Node.js version (18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **API Not Working**
   - Verify environment variables
   - Check API key permissions
   - Test API endpoints locally

3. **Images Not Loading**
   - Check image paths
   - Verify Next.js Image configuration
   - Check domain configuration

4. **Chatbot Not Responding**
   - Verify Gemini API key
   - Check API rate limits
   - Test API endpoint directly

---

## 📈 Post-Deployment

### Monitoring:

1. **Performance**
   - Set up monitoring (Vercel Analytics, etc.)
   - Monitor Core Web Vitals
   - Track user experience

2. **Errors**
   - Set up error tracking (Sentry, etc.)
   - Monitor API failures
   - Track user feedback

3. **SEO**
   - Submit sitemap to search engines
   - Monitor search rankings
   - Track organic traffic

---

## 🔄 Continuous Deployment

### GitHub Actions (Optional):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
```

---

## 🎯 Success Metrics

After deployment, monitor:

- **Performance**: Lighthouse score > 90
- **Uptime**: 99.9% availability
- **Speed**: < 3s load time
- **SEO**: Indexed by search engines
- **User Engagement**: Chatbot usage, form submissions

---

**Need help?** Check the main README.md for more detailed instructions or create an issue on GitHub. 