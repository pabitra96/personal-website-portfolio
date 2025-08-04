// Test script with SSL verification disabled
require('dotenv').config({ path: '.env.local' });

// Disable SSL verification (temporary fix for corporate networks)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { Pinecone } = require('@pinecone-database/pinecone');

async function testPineconeWithSSLFix() {
  console.log('🔍 Testing Pinecone with SSL fix...');
  console.log('SSL verification disabled:', process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0');
  
  if (!process.env.PINECONE_API_KEY) {
    console.log('❌ PINECONE_API_KEY not found');
    return;
  }
  
  try {
    console.log('\n🧪 Initializing Pinecone client...');
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });
    
    const indexName = process.env.PINECONE_INDEX_NAME || 'pabitra-knowledge';
    const index = pinecone.index(indexName);
    
    console.log('🧪 Testing index connection...');
    const describeResponse = await index.describeIndexStats();
    console.log('✅ SUCCESS! Index connection working with SSL fix');
    console.log('Index stats:', describeResponse);
    
  } catch (error) {
    console.log('❌ Still failing:', error.message);
  }
}

testPineconeWithSSLFix(); 