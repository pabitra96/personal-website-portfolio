# 🧠 Vector Conversion Guide - Knowledge Chunks to Pinecone Vectors

## 🎯 **Complete Process: Text → Embeddings → Vectors → Pinecone**

This guide shows you exactly how to convert your knowledge chunks into vectors and store them in Pinecone for RAG.

---

## 📋 **Prerequisites**

1. **Pinecone Account**: https://app.pinecone.io/
2. **Pinecone Index**: `pabitra-knowledge` (768 dimensions, cosine metric)
3. **API Keys**: 
   - `GEMINI_API_KEY` (for embeddings)
   - `PINECONE_API_KEY` (for vector storage)

---

## 🚀 **Step-by-Step Process**

### **Step 1: Prepare Your Knowledge Chunks**

Your knowledge chunks are already defined in the code. Here's what they look like:

```javascript
const knowledgeChunks = [
  {
    id: 'exp-cognizant',
    text: 'Associate - Projects at Cognizant from 18th Feb 2025 – Present in Kolkata...',
    category: 'experience',
    source: 'Cognizant',
    timestamp: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'project-doxpro',
    text: 'DoxPro - Intelligent Document Processing Tool (Insurance Domain)...',
    category: 'projects',
    source: 'DoxPro',
    timestamp: '2024-01-01T00:00:00.000Z'
  }
  // ... more chunks
];
```

### **Step 2: Convert Text to Embeddings**

For each knowledge chunk:

```javascript
// 1. Take the text
const text = "DoxPro - Intelligent Document Processing Tool...";

// 2. Send to Google Embeddings API
const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/text-embedding-gecko-001:embedText', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GEMINI_API_KEY}`,
  },
  body: JSON.stringify({ text: text }),
});

// 3. Get 768-dimensional vector
const embedding = response.data.embedding.values;
// Result: [0.1, 0.2, 0.3, ...] (768 numbers)
```

### **Step 3: Create Vector Object**

```javascript
const vector = {
  id: 'project-doxpro',
  values: embedding, // 768-dimensional array
  metadata: {
    text: originalText,
    category: 'projects',
    source: 'DoxPro',
    timestamp: '2024-01-01T00:00:00.000Z'
  }
};
```

### **Step 4: Store in Pinecone**

```javascript
// 1. Initialize Pinecone
const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
});

// 2. Get your index
const index = pinecone.index('pabitra-knowledge');

// 3. Store vectors
await index.upsert([vector1, vector2, vector3, ...]);
```

---

## 🔧 **How to Run the Vectorization**

### **Option 1: Using the Script (Recommended)**

1. **Set up environment variables** in `.env.local`:
```bash
GEMINI_API_KEY=AIzaSyAx17HbqpZMw1YqIsFoWRrH8BF2Zq9FjCM
PINECONE_API_KEY=your_pinecone_api_key_here
PINECONE_INDEX_NAME=pabitra-knowledge
```

2. **Run the vectorization script**:
```bash
node pinecone-vectorizer.js
```

3. **Watch the process**:
```
🧠 Pinecone Vectorizer - Converting Knowledge to Vectors
========================================================

📚 Step 1: Processing Knowledge Chunks
Found 5 chunks to vectorize

🔄 Step 2: Creating Embeddings

1/5: Processing exp-cognizant
🔄 Creating embedding for: Associate - Projects at Cognizant from 18th Feb 2025...
✅ Embedding created: 768 dimensions
✅ Vector created for exp-cognizant

2/5: Processing exp-mphasis
🔄 Creating embedding for: Senior Software Developer at Mphasis from 16th Aug 2021...
✅ Embedding created: 768 dimensions
✅ Vector created for exp-mphasis

...

📤 Step 3: Storing Vectors in Pinecone
🚀 Initializing Pinecone...
📤 Storing vectors in Pinecone...
✅ Successfully stored 5 vectors in Pinecone!

🔍 Step 4: Verification
To verify vectors were stored:
1. Check your Pinecone dashboard
2. Look for index: pabitra-knowledge
3. You should see vectors with IDs: exp-cognizant, exp-mphasis, project-doxpro, skills-programming, contact-info

🎉 Vectorization Complete!
Your knowledge base is now ready for RAG queries.
```

### **Option 2: Using the API Endpoint**

1. **Start your development server**:
```bash
npm run dev
```

2. **Initialize knowledge base**:
```bash
curl -X POST http://localhost:3000/api/init-knowledge
```

3. **Check status**:
```bash
curl http://localhost:3000/api/init-knowledge
```

---

## 🔍 **Verification Steps**

### **1. Check Pinecone Dashboard**
- Go to https://app.pinecone.io/
- Look for your index: `pabitra-knowledge`
- You should see vectors with IDs like:
  - `exp-cognizant`
  - `exp-mphasis`
  - `project-doxpro`
  - `skills-programming`
  - `contact-info`

### **2. Test Vector Search**
```javascript
// Query your vectors
const question = "What AI projects have you worked on?";
const results = await queryVectors(question);

// Expected output:
// 1. project-doxpro (Score: 0.892)
//    Category: projects
//    Text: DoxPro - Intelligent Document Processing Tool...
```

### **3. Test Chatbot**
- Open your website
- Ask Pobo: "What AI projects have you worked on?"
- You should get a specific, detailed response about DoxPro

---

## 📊 **What Happens During Vectorization**

### **Before Vectorization**:
```
Knowledge Chunks (Text) → Static Knowledge Base → Generic Responses
```

### **After Vectorization**:
```
User Question → Embedding → Pinecone Search → Relevant Vectors → Context + Gemini → Specific Response
```

### **Example Flow**:
1. **User asks**: "What AI projects have you worked on?"
2. **System creates embedding** of the question
3. **Pinecone searches** for similar vectors
4. **Finds**: `project-doxpro` (most relevant)
5. **Retrieves**: DoxPro project details
6. **Generates**: Specific response about DoxPro

---

## 🛠️ **Troubleshooting**

### **Issue: "GEMINI_API_KEY not found"**
- ✅ Check `.env.local` file exists
- ✅ Verify API key is correct
- ✅ Restart your terminal

### **Issue: "Pinecone API key not found"**
- ✅ Get API key from Pinecone console
- ✅ Add to `.env.local`
- ✅ Verify index name matches

### **Issue: "Failed to create embedding"**
- ✅ Check Gemini API key validity
- ✅ Verify network connectivity
- ✅ Check API quota limits

### **Issue: "Failed to store vectors"**
- ✅ Verify Pinecone index exists
- ✅ Check index is ready (green status)
- ✅ Verify API key permissions

---

## 🎯 **Expected Results**

### **Before Vectorization**:
```
User: "What AI projects have you worked on?"
Pobo: "I have worked on various AI projects including document processing, chatbots, and automation solutions."
```

### **After Vectorization**:
```
User: "What AI projects have you worked on?"
Pobo: "I've worked on several AI projects:

- DoxPro: Intelligent Document Processing Tool for insurance domain using React, Python/Lambda, AWS Textract, and GPT models
- Customer Profile Dashboard: Gen AI tool for call center agents
- HR Assistant BOT: AI chatbot using Kore.ai XO Platform

These projects demonstrate my expertise in Generative AI, cloud technologies, and full-stack development."
```

---

## 🚀 **Next Steps**

1. **Run the vectorization script**
2. **Verify vectors in Pinecone dashboard**
3. **Test the chatbot with specific questions**
4. **Enjoy enhanced RAG responses!**

**Your knowledge base will now provide intelligent, context-aware responses!** 🎉 