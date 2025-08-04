// Test script to compare Chat API vs Embedding API
require('dotenv').config({ path: '.env.local' });

async function testBothAPIs() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  console.log('🔍 Testing Both Gemini APIs...');
  console.log('API Key:', apiKey ? apiKey.substring(0, 20) + '...' : 'NOT FOUND');
  console.log('='.repeat(50));
  
  if (!apiKey) {
    console.log('❌ GEMINI_API_KEY not found');
    return;
  }
  
  // Test 1: Chat API
  console.log('\n🧪 TEST 1: Chat API');
  console.log('-'.repeat(30));
  try {
    const chatResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Hello! Respond with 'Chat API works'"
          }]
        }]
      }),
    });
    
    console.log('📡 Chat API Status:', chatResponse.status);
    
    if (chatResponse.ok) {
      const data = await chatResponse.json();
      console.log('✅ Chat API works!');
      console.log('Response:', data.candidates[0].content.parts[0].text);
    } else {
      const error = await chatResponse.text();
      console.log('❌ Chat API Error:', error);
    }
  } catch (error) {
    console.log('❌ Chat API Network Error:', error.message);
  }
  
  // Test 2: Embedding API (Method 1 - with Bearer token)
  console.log('\n🧪 TEST 2: Embedding API (Bearer Token)');
  console.log('-'.repeat(30));
  try {
    const embedResponse1 = await fetch('https://generativelanguage.googleapis.com/v1beta/models/text-embedding-gecko-001:embedText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text: "Test embedding",
      }),
    });
    
    console.log('📡 Embedding API (Bearer) Status:', embedResponse1.status);
    
    if (embedResponse1.ok) {
      const data = await embedResponse1.json();
      console.log('✅ Embedding API (Bearer) works!');
      console.log('Dimensions:', data.embedding.values.length);
    } else {
      const error = await embedResponse1.text();
      console.log('❌ Embedding API (Bearer) Error:', error);
    }
  } catch (error) {
    console.log('❌ Embedding API (Bearer) Network Error:', error.message);
  }
  
  // Test 3: Embedding API (Method 2 - with key parameter)
  console.log('\n🧪 TEST 3: Embedding API (Key Parameter)');
  console.log('-'.repeat(30));
  try {
    const embedResponse2 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/text-embedding-gecko-001:embedText?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: "Test embedding",
      }),
    });
    
    console.log('📡 Embedding API (Key Param) Status:', embedResponse2.status);
    
    if (embedResponse2.ok) {
      const data = await embedResponse2.json();
      console.log('✅ Embedding API (Key Param) works!');
      console.log('Dimensions:', data.embedding.values.length);
    } else {
      const error = await embedResponse2.text();
      console.log('❌ Embedding API (Key Param) Error:', error);
    }
  } catch (error) {
    console.log('❌ Embedding API (Key Param) Network Error:', error.message);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 SUMMARY:');
  console.log('- Chat API: Should work ✅');
  console.log('- Embedding API: Needs different authentication method');
}

testBothAPIs(); 