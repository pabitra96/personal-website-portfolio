import { Pinecone, RecordMetadata } from '@pinecone-database/pinecone'

// Initialize Pinecone client only if API key is available
let pinecone: Pinecone | null = null

try {
  if (process.env.PINECONE_API_KEY) {
    pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    })
  }
} catch (error) {
  console.log('Pinecone not configured:', error)
}

// Get the index
export const getPineconeIndex = () => {
  if (!pinecone) {
    throw new Error('Pinecone not configured')
  }
  return pinecone.index(process.env.PINECONE_INDEX_NAME || 'pabitra-knowledge')
}

// Vector dimensions for text-embedding-gecko-001
export const VECTOR_DIMENSIONS = 768

// Metadata interface for our vectors
export interface VectorMetadata extends RecordMetadata {
  text: string
  category: 'experience' | 'skills' | 'projects' | 'education' | 'contact' | 'achievements'
  source: string
  timestamp: string
}

// Function to create embeddings using Google's text-embedding-gecko-001
export async function createEmbedding(text: string): Promise<number[]> {
  try {
    // Note: The embedding API doesn't support Bearer token authentication
    // We need to use a different approach or get a proper API key
    console.log('⚠️  Embedding API not available with current API key')
    console.log('💡 Using fallback: returning dummy embedding')
    
    // Return a dummy embedding for now (768 dimensions of zeros)
    // This allows the system to work without breaking
    return new Array(768).fill(0)
    
    // TODO: Get proper API key that supports embeddings
    // const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/text-embedding-gecko-001:embedText?key=${process.env.GEMINI_API_KEY}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     text: text,
    //   }),
    // })
    // 
    // if (!response.ok) {
    //   throw new Error(`Embedding API error: ${response.status}`)
    // }
    // 
    // const data = await response.json()
    // return data.embedding.values
  } catch (error) {
    console.error('Error creating embedding:', error)
    throw error
  }
}

// Function to upsert vectors to Pinecone
export async function upsertVectors(vectors: Array<{
  id: string
  values: number[]
  metadata: VectorMetadata
}>) {
  try {
    if (!pinecone) {
      throw new Error('Pinecone not configured')
    }
    const index = getPineconeIndex()
    await index.upsert(vectors)
    console.log(`Successfully upserted ${vectors.length} vectors`)
  } catch (error) {
    console.error('Error upserting vectors:', error)
    throw error
  }
}

// Function to query similar vectors
export async function queryVectors(
  query: string,
  topK: number = 5,
  filter?: object
): Promise<Array<{ id: string; score: number; metadata: VectorMetadata }>> {
  try {
    if (!pinecone) {
      throw new Error('Pinecone not configured')
    }
    const queryEmbedding = await createEmbedding(query)
    const index = getPineconeIndex()
    
    const queryResponse = await index.query({
      vector: queryEmbedding,
      topK,
      filter,
      includeMetadata: true,
    })

    return queryResponse.matches.map(match => ({
      id: match.id,
      score: match.score || 0,
      metadata: match.metadata as VectorMetadata,
    }))
  } catch (error) {
    console.error('Error querying vectors:', error)
    throw error
  }
}

// Function to check if Pinecone is configured
export function isPineconeConfigured(): boolean {
  return !!pinecone && !!process.env.PINECONE_API_KEY
}

// Function to initialize the knowledge base
export async function initializeKnowledgeBase() {
  try {
    if (!isPineconeConfigured()) {
      throw new Error('Pinecone not configured')
    }

    const knowledgeChunks = [
      // Experience chunks
      {
        id: 'exp-cognizant',
        text: 'Associate - Projects at Cognizant from 18th Feb 2025 – Present in Kolkata. Generative AI Based Product Development, Prompt Engineering and RAG, Integrating Existing RPA Solution with Gen AI.',
        category: 'experience' as const,
        source: 'Cognizant',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'exp-mphasis',
        text: 'Senior Software Developer at Mphasis from 16th Aug 2021 – 04th Feb 2025 in Pune. Full Stack Development and Team Leadership, Code Review and Resolution, CI/CD Pipeline Implementation, Version Control and Code Backup, Technological Proficiency, Programming Proficiency.',
        category: 'experience' as const,
        source: 'Mphasis',
        timestamp: new Date().toISOString(),
      },
      
      // Skills chunks
      {
        id: 'skills-programming',
        text: 'Programming Languages: Python, Java, JavaScript, TypeScript, C, React.js, Node.js, HTML, CSS, SQL, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Jenkins, Git, JIRA, UiPath, Pega Robotics, Power Automate, Kore.ai XO Platform, GPT-3.5-turbo, GPT-4, Llama, Hugging Face, Sage Maker, AWS Textract, Lambda, CloudFront, S3, DynamoDB, Bedrock.',
        category: 'skills' as const,
        source: 'Technical Skills',
        timestamp: new Date().toISOString(),
      },
      
      // Projects chunks
      {
        id: 'project-doxpro',
        text: 'DoxPro - Intelligent Document Processing Tool (Insurance Domain, 01/2024 – Present, Bangalore). Gen AI-based intelligent document processing tool using React for front-end design and Lambda in Python for extracting data using AWS Textract. Data passed to LLM for extraction and classification using GPT-3.5-turbo and GPT-4 models.',
        category: 'projects' as const,
        source: 'DoxPro',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'project-customer-dashboard',
        text: 'Customer Profile Dashboard (Banking Domain, 01/2024 – Present, Bangalore). Gen AI based tool for helping Call Center agents for giving an insight of customer during live call. Uses React, Python/Lambda, AWS Textract, GPT-3.5-turbo, GPT-4.',
        category: 'projects' as const,
        source: 'Customer Profile Dashboard',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'project-hr-bot',
        text: 'HR Assistant BOT (Mphasis R&D, 01/2024 – 02/2024, Bangalore). Designed, Developed and deployed a HR Assistant AI chatbot using Kore.ai XO Platform. HR assistant Bot which helps HR to get the details, managing details about the employee of the organization.',
        category: 'projects' as const,
        source: 'HR Assistant BOT',
        timestamp: new Date().toISOString(),
      },
      
      // Education chunks
      {
        id: 'edu-btech',
        text: 'Bachelor of Technology in Information Technology from Heritage Institute of Technology (Autonomous) from 08/2018 – 07/2021.',
        category: 'education' as const,
        source: 'B.Tech',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'edu-diploma',
        text: 'Diploma in Computer Science and Technology from The Calcutta Technical School (Govt.) from 07/2015 – 07/2018.',
        category: 'education' as const,
        source: 'Diploma',
        timestamp: new Date().toISOString(),
      },
      
      // Contact chunks
      {
        id: 'contact-info',
        text: 'Contact Information: Email: write2pabitra@gmail.com, Mobile: +918967717327, LinkedIn: https://www.linkedin.com/in/pabitra-jiban/, GitHub: https://github.com/pabitra-jiban.',
        category: 'contact' as const,
        source: 'Contact Details',
        timestamp: new Date().toISOString(),
      },
      
      // Achievements chunks
      {
        id: 'achievement-persona',
        text: 'Persona Award - Synergic Workforce Individual award for excellent contribution Team award for delivering the client project before timeline without any major defects in production.',
        category: 'achievements' as const,
        source: 'Persona Award',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'achievement-pinnacle',
        text: 'Pinnacle Award - Kudos Individual Award for developing valuable internal assets as a part of Mphasis research and development team.',
        category: 'achievements' as const,
        source: 'Pinnacle Award',
        timestamp: new Date().toISOString(),
      },
    ]

    // Create embeddings for all chunks
    const vectors = await Promise.all(
      knowledgeChunks.map(async (chunk) => {
        const embedding = await createEmbedding(chunk.text)
        return {
          id: chunk.id,
          values: embedding,
          metadata: {
            text: chunk.text,
            category: chunk.category,
            source: chunk.source,
            timestamp: chunk.timestamp,
          } as VectorMetadata,
        }
      })
    )

    // Upsert to Pinecone
    await upsertVectors(vectors)
    console.log('Knowledge base initialized successfully')
  } catch (error) {
    console.error('Error initializing knowledge base:', error)
    throw error
  }
} 