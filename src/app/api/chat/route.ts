import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { queryVectors, initializeKnowledgeBase } from '@/lib/pinecone'

const apiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey!)

// Fallback knowledge base (if Pinecone is not available)
const FALLBACK_KNOWLEDGE = `
PABITRA JIBAN MAITY - PROFESSIONAL PROFILE

CONTACT INFORMATION:
- Email: write2pabitra@gmail.com
- Mobile: +918967717327
- LinkedIn: https://www.linkedin.com/in/pabitra-jiban/
- GitHub: https://github.com/pabitra-jiban

EXPERIENCE:
1. Associate - Projects at Cognizant (18th Feb 2025 – Present, Kolkata)
   - Generative AI Based Product Development
   - Prompt Engineering and RAG
   - Integrating Existing RPA Solution with Gen AI

2. Senior Software Developer at Mphasis (16th Aug 2021 – 04th Feb 2025, Pune)
   - Full Stack Development and Team Leadership
   - Code Review and Resolution
   - CI/CD Pipeline Implementation
   - Version Control and Code Backup
   - Technological Proficiency in Generative AI, Java, Python, React.js
   - RPA technologies: Pega Robotics, UiPath, Power Automate

SKILLS:
- Programming Languages: Python, Java, JavaScript, TypeScript, C, React.js, Node.js
- Databases: SQL, MongoDB, PostgreSQL
- Cloud & DevOps: AWS, Docker, Kubernetes, Jenkins, Git, JIRA
- RPA Tools: UiPath, Pega Robotics, Power Automate
- AI/ML: Kore.ai XO Platform, GPT-3.5-turbo, GPT-4, Llama, Hugging Face, Sage Maker
- AWS Services: Textract, Lambda, CloudFront, S3, DynamoDB, Bedrock

PROJECTS:
1. DoxPro - Intelligent Document Processing Tool (Insurance Domain, 01/2024 – Present)
   - Gen AI-based document processing using React and Python/Lambda
   - AWS Textract integration with GPT-3.5-turbo and GPT-4

2. Customer Profile Dashboard (Banking Domain, 01/2024 – Present)
   - Gen AI tool for Call Center agents
   - React frontend with Python/Lambda backend

3. HR Assistant BOT (Mphasis R&D, 01/2024 – 02/2024)
   - AI chatbot using Kore.ai XO Platform
   - HR process automation

EDUCATION:
- Bachelor of Technology in Information Technology, Heritage Institute of Technology (08/2018 – 07/2021)
- Diploma in Computer Science and Technology, The Calcutta Technical School (07/2015 – 07/2018)

ACHIEVEMENTS:
- Persona Award - Synergic Workforce Individual award
- Pinnacle Award - Kudos Individual Award for developing valuable internal assets

LANGUAGES: English (Proficient), Hindi (Proficient), Bengali (Native)
`

export async function POST(request: NextRequest) {
  try {
    if (!apiKey) {
      console.error('GEMINI_API_KEY is missing')
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const { message, history } = await request.json()
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    // Try to use Pinecone for RAG, fallback to static knowledge if not available
    let relevantContext = ''
    
    try {
      // Query Pinecone for relevant information
      const relevantVectors = await queryVectors(message, 3)
      
      if (relevantVectors.length > 0) {
        relevantContext = '\n\nRelevant Information:\n' + 
          relevantVectors.map(vector => vector.metadata.text).join('\n\n')
      } else {
        relevantContext = '\n\nKnowledge Base:\n' + FALLBACK_KNOWLEDGE
      }
    } catch (error) {
      console.log('Pinecone not available, using fallback knowledge:', error)
      relevantContext = '\n\nKnowledge Base:\n' + FALLBACK_KNOWLEDGE
    }

    // Build conversation context
    let conversationContext = ''
    if (history && history.length > 0) {
      conversationContext = '\n\nPrevious conversation:\n' + 
        history.map((msg: any) => `${msg.role === 'user' ? 'User' : 'Pobo'}: ${msg.content}`).join('\n')
    }

    const prompt = `You are Pobo, Pabitra Jiban Maity's AI assistant. You have access to comprehensive knowledge about Pabitra's professional background, skills, projects, and experience.

RESPONSE GUIDELINES:
1. Keep responses CONCISE and to the point - avoid lengthy explanations
2. Use simple, clean text formatting - NO markdown, NO bold/italic, NO asterisks
3. Use proper paragraph breaks for readability
4. Focus on the specific question asked
5. If listing items, use simple bullet points with dashes (-)
6. Maintain a professional, friendly tone
7. If asked about something not in your knowledge base, politely redirect to contact information
8. Use the most relevant information from the provided context

IMPORTANT: Always respond as if you are Pabitra's professional assistant. Be helpful, accurate, and maintain his professional reputation.

${relevantContext}${conversationContext}

Current user message: ${message}

Please provide a concise, professional response based on this information. Keep it brief and well-formatted.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// API endpoint to initialize the knowledge base
export async function GET() {
  try {
    if (!process.env.PINECONE_API_KEY) {
      return NextResponse.json(
        { message: 'Pinecone not configured, using fallback knowledge' },
        { status: 200 }
      )
    }

    await initializeKnowledgeBase()
    return NextResponse.json(
      { message: 'Knowledge base initialized successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Knowledge base initialization error:', error)
    return NextResponse.json(
      { error: 'Failed to initialize knowledge base', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 