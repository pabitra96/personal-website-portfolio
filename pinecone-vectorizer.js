// Pinecone Vectorizer - Convert Knowledge Chunks to Vectors
// This script shows exactly how to convert text to vectors and store in Pinecone

const { Pinecone } = require('@pinecone-database/pinecone');

// Step 1: Knowledge Chunks (Your Data)
const knowledgeChunks = [
  {
    id: 'exp-cognizant',
    text: 'Associate - Projects at Cognizant from 18th Feb 2025 – Present in Kolkata. Generative AI Based Product Development, Prompt Engineering and RAG, Integrating Existing RPA Solution with Gen AI.',
    category: 'experience',
    source: 'Cognizant',
    timestamp: new Date().toISOString()
  },
  {
    id: 'exp-mphasis',
    text: 'Senior Software Developer at Mphasis from 16th Aug 2021 – 04th Feb 2025 in Pune. Full Stack Development and Team Leadership, Code Review and Resolution, CI/CD Pipeline Implementation, Version Control and Code Backup, Technological Proficiency, Programming Proficiency.',
    category: 'experience',
    source: 'Mphasis',
    timestamp: new Date().toISOString()
  },
  {
    id: 'project-doxpro',
    text: 'DoxPro - Intelligent Document Processing Tool (Insurance Domain, 01/2024 – Present, Bangalore). Gen AI-based intelligent document processing tool using React for front-end design and Lambda in Python for extracting data using AWS Textract. Data passed to LLM for extraction and classification using GPT-3.5-turbo and GPT-4 models.',
    category: 'projects',
    source: 'DoxPro',
    timestamp: new Date().toISOString()
  },
  {
    id: 'skills-programming',
    text: 'Programming Languages: Python, Java, JavaScript, TypeScript, C, React.js, Node.js, HTML, CSS, SQL, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Jenkins, Git, JIRA, UiPath, Pega Robotics, Power Automate, Kore.ai XO Platform, GPT-3.5-turbo, GPT-4, Llama, Hugging Face, Sage Maker, AWS Textract, Lambda, CloudFront, S3, DynamoDB, Bedrock.',
    category: 'skills',
    source: 'Technical Skills',
    timestamp: new Date().toISOString()
  },
  {
    id: 'contact-info',
    text: 'Contact Information: Email: write2pabitra@gmail.com, Mobile: +918967717327, LinkedIn: https://www.linkedin.com/in/pabitra-jiban/, GitHub: https://github.com/pabitra-jiban.',
    category: 'contact',
    source: 'Contact Details',
    timestamp: new Date().toISOString()
  }
];

// Step 2: Function to Create Embeddings using Google's API
async function createEmbedding(text) {
  try {
    console.log(`🔄 Creating embedding for: ${text.substring(0, 50)}...`);
    
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/text-embedding-gecko-001:embedText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        text: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Embedding API error: ${response.status}`);
    }

    const data = await response.json();
    console.log(`✅ Embedding created: ${data.embedding.values.length} dimensions`);
    return data.embedding.values;
  } catch (error) {
    console.error('❌ Error creating embedding:', error);
    throw error;
  }
}

// Step 3: Function to Store Vectors in Pinecone
async function storeVectorsInPinecone(vectors) {
  try {
    console.log('🚀 Initializing Pinecone...');
    
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    const index = pinecone.index(process.env.PINECONE_INDEX_NAME || 'pabitra-knowledge');
    
    console.log('📤 Storing vectors in Pinecone...');
    await index.upsert(vectors);
    
    console.log(`✅ Successfully stored ${vectors.length} vectors in Pinecone!`);
  } catch (error) {
    console.error('❌ Error storing vectors:', error);
    throw error;
  }
}

// Step 4: Main Function to Convert and Store
async function convertAndStoreVectors() {
  try {
    console.log('🧠 Pinecone Vectorizer - Converting Knowledge to Vectors');
    console.log('========================================================\n');

    // Check environment variables
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY not found in environment variables');
    }
    if (!process.env.PINECONE_API_KEY) {
      throw new Error('PINECONE_API_KEY not found in environment variables');
    }

    console.log('📚 Step 1: Processing Knowledge Chunks');
    console.log(`Found ${knowledgeChunks.length} chunks to vectorize\n`);

    // Step 5: Convert each chunk to vector
    console.log('🔄 Step 2: Creating Embeddings');
    const vectors = [];
    
    for (let i = 0; i < knowledgeChunks.length; i++) {
      const chunk = knowledgeChunks[i];
      console.log(`\n${i + 1}/${knowledgeChunks.length}: Processing ${chunk.id}`);
      
      // Create embedding
      const embedding = await createEmbedding(chunk.text);
      
      // Create vector object
      const vector = {
        id: chunk.id,
        values: embedding,
        metadata: {
          text: chunk.text,
          category: chunk.category,
          source: chunk.source,
          timestamp: chunk.timestamp
        }
      };
      
      vectors.push(vector);
      console.log(`✅ Vector created for ${chunk.id}`);
    }

    // Step 6: Store in Pinecone
    console.log('\n📤 Step 3: Storing Vectors in Pinecone');
    await storeVectorsInPinecone(vectors);

    // Step 7: Verification
    console.log('\n🔍 Step 4: Verification');
    console.log('To verify vectors were stored:');
    console.log('1. Check your Pinecone dashboard');
    console.log('2. Look for index: pabitra-knowledge');
    console.log('3. You should see vectors with IDs:', vectors.map(v => v.id).join(', '));

    console.log('\n🎉 Vectorization Complete!');
    console.log('Your knowledge base is now ready for RAG queries.');

  } catch (error) {
    console.error('\n❌ Error during vectorization:', error);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your API keys are set correctly');
    console.log('2. Ensure Pinecone index exists and is ready');
    console.log('3. Verify network connectivity');
  }
}

// Step 8: Query Function (Test the vectors)
async function queryVectors(question) {
  try {
    console.log(`\n🔍 Querying: "${question}"`);
    
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    const index = pinecone.index(process.env.PINECONE_INDEX_NAME || 'pabitra-knowledge');
    
    // Create embedding for the question
    const questionEmbedding = await createEmbedding(question);
    
    // Query Pinecone
    const queryResponse = await index.query({
      vector: questionEmbedding,
      topK: 3,
      includeMetadata: true,
    });

    console.log('\n📋 Top Results:');
    queryResponse.matches.forEach((match, index) => {
      console.log(`${index + 1}. ${match.id} (Score: ${match.score?.toFixed(3)})`);
      console.log(`   Category: ${match.metadata?.category}`);
      console.log(`   Text: ${match.metadata?.text.substring(0, 100)}...`);
      console.log('');
    });

  } catch (error) {
    console.error('❌ Error querying vectors:', error);
  }
}

// Export functions for use in other files
module.exports = {
  convertAndStoreVectors,
  queryVectors,
  createEmbedding
};

// Run if this file is executed directly
if (require.main === module) {
  // Load environment variables
  require('dotenv').config({ path: '.env.local' });
  
  // Run the vectorization
  convertAndStoreVectors()
    .then(() => {
      console.log('\n✅ Script completed successfully!');
    })
    .catch((error) => {
      console.error('\n❌ Script failed:', error);
    });
} 