# Contact Form Setup Guide

## ✅ **Clean & Simple Configuration**

Your contact form now uses only **Email** and **Telegram** notifications - reliable and easy to set up.

## 🔧 **Setup Instructions**

### **Step 1: Email Configuration (Gmail)**

#### **Enable 2-Factor Authentication**
1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to "Security"
3. Enable "2-Step Verification"

#### **Generate App Password**
1. In Google Account settings, go to "Security"
2. Find "App passwords" (under 2-Step Verification)
3. Select "Mail" as the app
4. Generate a new app password
5. Copy the 16-character password

### **Step 2: Telegram Configuration**

#### **Create Telegram Bot**
1. Message @BotFather on Telegram
2. Send `/newbot`
3. Follow instructions to create bot
4. Copy the bot token (format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

#### **Get Chat ID**
1. Start a chat with your bot
2. Send `/start` to your bot
3. Message @userinfobot on Telegram
4. Copy your chat ID (format: `123456789`)

### **Step 3: Environment Configuration**

Create or update your `.env.local` file:

```env
# Email Configuration
EMAIL_USER=write2pabitra@gmail.com
EMAIL_PASS=your_16_character_app_password

# Telegram Configuration
TELEGRAM_ENABLED=true
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### **Step 4: Test the Setup**

1. **Restart your server**: `npm run dev`
2. **Go to contact section** on your website
3. **Fill and submit** the contact form
4. **Check notifications**:
   - Email in your Gmail
   - Telegram message from your bot

## 📧📱 **How It Works**

### **When someone submits the form:**
1. **Email Sent** → Detailed message to your Gmail
2. **Telegram Sent** → Instant notification to your Telegram
3. **Smart Response** → Tells you which notifications were sent

### **Email Format:**
```
Subject: Portfolio Contact: [User's Subject]

New Contact Form Submission
Name: [User's Name]
Email: [User's Email]
Subject: [User's Subject]
Message: [Full detailed message]

This message was sent from your portfolio website contact form.
```

### **Telegram Format:**
```
🔔 New Portfolio Contact

👤 Name: [User's Name]
📧 Email: [User's Email]
📝 Subject: [User's Subject]
💬 Message: [First 200 characters...]

Message sent from your portfolio website
```

## 🛠️ **Troubleshooting**

### **If Email Isn't Working:**
1. Check Gmail app password (not regular password)
2. Verify 2FA is enabled
3. Restart server after updating `.env.local`

### **If Telegram Isn't Working:**
1. Verify bot token format (numbers:letters)
2. Check chat ID is just numbers
3. Start chat with bot and send `/start`
4. Test manually in browser:
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage?chat_id=YOUR_CHAT_ID&text=Test
   ```

### **Common Issues:**
- **"Authentication failed"** → Wrong Gmail app password
- **"Bot token invalid"** → Get new token from @BotFather
- **"Chat not found"** → Start chat with bot and send `/start`

## 🎯 **Benefits of This Setup**

### **Email (Gmail)**
- ✅ Always works
- ✅ Detailed messages
- ✅ No setup required
- ✅ Free forever

### **Telegram**
- ✅ Completely free
- ✅ Instant notifications
- ✅ Reliable service
- ✅ Rich formatting

## 🔒 **Security Notes**

- **App Passwords**: More secure than regular passwords
- **Bot Tokens**: Keep your bot token secret
- **Environment Variables**: Never commit to git
- **Form Validation**: Prevents spam submissions

---

**Your contact form is now clean, simple, and reliable!** 🎉📧📱 