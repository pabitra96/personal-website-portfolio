// Test script to isolate Pinecone connection issues
require('dotenv').config({ path: '.env.local' });

const { Pinecone } = require('@pinecone-database/pinecone');

async function testPineconeConnection() {
  console.log('🔍 Testing Pinecone Connection...');
  console.log('API Key:', process.env.PINECONE_API_KEY ? 'Found' : 'Missing');
  console.log('Index Name:', process.env.PINECONE_INDEX_NAME || 'pabitra-knowledge');
  
  if (!process.env.PINECONE_API_KEY) {
    console.log('❌ PINECONE_API_KEY not found in .env.local');
    return;
  }
  
  try {
    console.log('\n🧪 Step 1: Initializing Pinecone client...');
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });
    console.log('✅ Pinecone client initialized');
    
    console.log('\n🧪 Step 2: Getting index...');
    const indexName = process.env.PINECONE_INDEX_NAME || 'pabitra-knowledge';
    const index = pinecone.index(indexName);
    console.log('✅ Index retrieved:', indexName);
    
    console.log('\n🧪 Step 3: Testing index connection...');
    // Try a simple describe operation
    const describeResponse = await index.describeIndexStats();
    console.log('✅ Index connection successful!');
    console.log('Index stats:', describeResponse);
    
  } catch (error) {
    console.log('❌ Pinecone connection failed:');
    console.log('Error type:', error.constructor.name);
    console.log('Error message:', error.message);
    
    if (error.cause) {
      console.log('Root cause:', error.cause.message);
      console.log('Root cause code:', error.cause.code);
    }
    
    // Additional debugging
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Check if your Pinecone API key is valid');
    console.log('2. Verify the index name exists in your Pinecone dashboard');
    console.log('3. Check if you have network restrictions (corporate firewall)');
    console.log('4. Try using a different network (mobile hotspot)');
  }
}

testPineconeConnection(); 