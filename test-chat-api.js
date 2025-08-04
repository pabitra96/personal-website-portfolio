// Test script to verify if the chat API works with your Gemini API key
require('dotenv').config({ path: '.env.local' });

async function testChatAPI() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  console.log('🧪 Testing Gemini Chat API...');
  console.log('API Key:', apiKey ? apiKey.substring(0, 20) + '...' : 'NOT FOUND');
  
  if (!apiKey) {
    console.log('❌ GEMINI_API_KEY not found');
    return;
  }
  
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Hello! Can you respond with just 'Test successful'?"
          }]
        }]
      }),
    });
    
    console.log('📡 Response Status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Chat API works!');
      console.log('Response:', data.candidates[0].content.parts[0].text);
    } else {
      const error = await response.text();
      console.log('❌ Chat API Error:', error);
    }
  } catch (error) {
    console.log('❌ Network Error:', error.message);
  }
}

testChatAPI(); 