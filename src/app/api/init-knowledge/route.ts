import { NextRequest, NextResponse } from 'next/server'
import { initializeKnowledgeBase } from '@/lib/pinecone'

export async function POST(request: NextRequest) {
  try {
    // Check if Pinecone is configured
    if (!process.env.PINECONE_API_KEY) {
      return NextResponse.json(
        { 
          message: 'Pinecone not configured', 
          status: 'fallback',
          note: 'Chatbot will use fallback knowledge base'
        },
        { status: 200 }
      )
    }

    // Initialize the knowledge base
    await initializeKnowledgeBase()
    
    return NextResponse.json(
      { 
        message: 'Knowledge base initialized successfully',
        status: 'success',
        note: 'Pobo chatbot now uses enhanced RAG with Pinecone'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Knowledge base initialization error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to initialize knowledge base', 
        details: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
        note: 'Chatbot will use fallback knowledge base'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const isConfigured = !!process.env.PINECONE_API_KEY
    const indexName = process.env.PINECONE_INDEX_NAME || 'pabitra-knowledge'
    
    return NextResponse.json(
      { 
        pineconeConfigured: isConfigured,
        indexName: indexName,
        status: isConfigured ? 'ready' : 'fallback',
        message: isConfigured 
          ? 'Pinecone is configured and ready for enhanced RAG' 
          : 'Pinecone not configured, using fallback knowledge base'
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to check configuration',
        status: 'error'
      },
      { status: 500 }
    )
  }
} 