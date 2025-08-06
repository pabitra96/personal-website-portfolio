# Telegram Notification Troubleshooting Guide

## 🔍 **Diagnosis Steps**

### **Step 1: Check Your .env.local File**

Make sure your `.env.local` file has these exact variables:

```env
TELEGRAM_ENABLED=true
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

**Important Notes:**
- **Bot Token**: Should start with numbers, then colon, then letters/numbers
- **Chat ID**: Should be just numbers (no quotes)
- **No spaces**: Around the `=` sign

### **Step 2: Verify Bot Token Format**

Your bot token should look like this:
```
1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
```

**If it doesn't match this format:**
1. Go to @BotFather on Telegram
2. Send `/mybots`
3. Select your bot
4. Click "API Token"
5. Copy the new token

### **Step 3: Verify Chat ID**

**Method 1: Using @userinfobot**
1. Message @userinfobot on Telegram
2. It will reply with your chat ID
3. Copy the number (should be like `123456789`)

**Method 2: Manual Check**
1. Start a chat with your bot
2. Send `/start` to your bot
3. Visit this URL in browser (replace with your bot token):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for `"chat":{"id":123456789}` in the response

### **Step 4: Test Bot Manually**

**Test 1: Bot Token**
Visit this URL in your browser (replace YOUR_BOT_TOKEN):
```
https://api.telegram.org/botYOUR_BOT_TOKEN/getMe
```

**Expected Response:**
```json
{
  "ok": true,
  "result": {
    "id": 1234567890,
    "is_bot": true,
    "first_name": "Your Bot Name",
    "username": "your_bot_username"
  }
}
```

**Test 2: Send Message**
Visit this URL (replace with your actual values):
```
https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage?chat_id=YOUR_CHAT_ID&text=Test message
```

**Expected Response:**
```json
{
  "ok": true,
  "result": {
    "message_id": 123,
    "from": {...},
    "chat": {...},
    "date": 1234567890,
    "text": "Test message"
  }
}
```

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Bot Token Invalid"**
**Solution:**
1. Go to @BotFather
2. Send `/newbot`
3. Create a new bot
4. Copy the new token
5. Update `.env.local`

### **Issue 2: "Chat Not Found"**
**Solution:**
1. Start a chat with your bot
2. Send `/start` to your bot
3. Try the test URL again

### **Issue 3: "Bot Was Blocked"**
**Solution:**
1. Unblock your bot in Telegram
2. Send `/start` to your bot
3. Try again

### **Issue 4: "Forbidden"**
**Solution:**
1. Check if you're using the correct chat ID
2. Make sure you started a chat with the bot
3. Try getting a new chat ID from @userinfobot

## 🔧 **Server Console Debugging**

### **Check Server Logs**
When you submit the contact form, look for these messages in your server console:

```
✅ Good messages:
- "Telegram sending failed: [specific error]"
- "Message sent successfully! You will receive email, Telegram notifications."

❌ Bad messages:
- "Telegram sending failed: fetch failed"
- "Telegram sending failed: unable to get local issuer certificate"
```

### **Add Debug Logging**
Add this to your contact API to see what's happening:

```javascript
console.log('Telegram Config:', {
  enabled: NOTIFICATION_CONFIG.telegram.enabled,
  hasToken: !!NOTIFICATION_CONFIG.telegram.botToken,
  hasChatId: !!NOTIFICATION_CONFIG.telegram.chatId,
  token: NOTIFICATION_CONFIG.telegram.botToken?.substring(0, 10) + '...',
  chatId: NOTIFICATION_CONFIG.telegram.chatId
});
```

## 📱 **Quick Fix Checklist**

- [ ] Bot token is in correct format (numbers:letters)
- [ ] Chat ID is just numbers (no quotes)
- [ ] Started chat with bot and sent `/start`
- [ ] Bot is not blocked
- [ ] `.env.local` file exists and has correct values
- [ ] Server restarted after updating `.env.local`
- [ ] Manual test URL works in browser

## 🎯 **Alternative Solutions**

### **If Telegram Still Doesn't Work:**

**Option 1: Use Only Email**
```env
EMAIL_ENABLED=true
TELEGRAM_ENABLED=false
SMS_ENABLED=false
```

**Option 2: Try WhatsApp**
```env
WHATSAPP_ENABLED=true
WHATSAPP_WEBHOOK_URL=https://api.callmebot.com/whatsapp.php?phone=918967717327&text=
```

**Option 3: Create New Bot**
1. Delete old bot with @BotFather
2. Create new bot: `/newbot`
3. Get new token and chat ID
4. Update `.env.local`

## 🧪 **Manual Test Commands**

### **Test in Browser:**
1. Replace YOUR_BOT_TOKEN and YOUR_CHAT_ID in this URL:
```
https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage?chat_id=YOUR_CHAT_ID&text=Hello from portfolio
```

2. Press Enter and check response

### **Test in Telegram:**
1. Send `/start` to your bot
2. Check if bot responds
3. Try sending a test message

---

**Most Common Fix: Restart your server after updating .env.local!** 🔄 