// Test script to verify your Gemini API key
require('dotenv').config({ path: '.env.local' });

async function testAPI() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'your_new_gemini_api_key_here') {
    console.log('❌ Please update your GEMINI_API_KEY in .env.local file');
    return;
  }
  
  console.log('🧪 Testing Gemini API Key...');
  console.log('API Key:', apiKey.substring(0, 20) + '...');
  
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/text-embedding-gecko-001:embedText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ text: "Test embedding" }),
    });
    
    console.log('📡 Response Status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API Key works! Embedding created with', data.embedding.values.length, 'dimensions');
    } else {
      const error = await response.text();
      console.log('❌ API Error:', error);
    }
  } catch (error) {
    console.log('❌ Network Error:', error.message);
  }
}

testAPI(); 