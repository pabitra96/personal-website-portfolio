# Pabitra Jiban Maity - Personal Website

A modern, interactive personal website showcasing RPA and Generative AI expertise, featuring an AI-powered chatbot named "Pobo".

## 🚀 Features

### Core Features
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Mobile-first approach with perfect mobile experience
- **Interactive Navigation**: Smooth scrolling navigation with sticky header
- **Professional Portfolio**: Showcase of RPA and AI projects
- **Contact Form**: Professional contact form with validation

### AI-Powered Chatbot - "Pobo"
- **Gemini AI Integration**: Powered by Google's Gemini Pro API
- **Professional Knowledge Base**: Comprehensive information about Pabitra's work
- **Smart Responses**: Context-aware conversations
- **Quick Questions**: Pre-defined question buttons for easy interaction
- **Real-time Chat**: Live typing indicators and message history

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Google Gemini API**: Advanced AI chatbot capabilities
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **AI**: Google Gemini Pro API
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Google Gemini API Key
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # Next.js Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Get Gemini API Key**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env.local` file

5. **Run the development server**
```bash
npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Professional Knowledge Base** (`src/app/api/chat/route.ts`)
   - Update the `PROFESSIONAL_KNOWLEDGE` constant with your details

2. **Hero Section** (`src/components/hero.tsx`)
   - Update name, title, and description

3. **About Section** (`src/components/about.tsx`)
   - Update skills, experience, and education

4. **Projects Section** (`src/components/projects.tsx`)
   - Add your actual projects with descriptions

5. **Contact Section** (`src/components/contact.tsx`)
   - Update contact information and social links

### Styling
- **Colors**: Update color scheme in Tailwind config
- **Fonts**: Change fonts in `layout.tsx`
- **Animations**: Modify Framer Motion animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS Amplify**: Connect GitHub repository
- **Railway**: Deploy directly from GitHub

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and animations
- Fast loading times

## 🔧 Configuration

### Environment Variables
```env
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SITE_URL=your_site_url
```

### SEO Configuration
Update metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter cards
- Keywords

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic code splitting
- **Caching**: Optimized caching strategies

## 🔒 Security

- **API Key Protection**: Server-side only API calls
- **Input Validation**: Form validation and sanitization
- **HTTPS**: Secure connections
- **CORS**: Proper CORS configuration

## 📈 Analytics

Add Google Analytics by uncommenting in `.env.local`:
```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue on GitHub
- Contact: pabitra.maity@example.com

## 🎉 Acknowledgments

- **Google Gemini**: For AI capabilities
- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations

---

**Built with ❤️ by Pabitra Jiban Maity**
