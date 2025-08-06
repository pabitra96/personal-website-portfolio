// Notification Configuration for Contact Form
// Email and Telegram only - clean and simple

export const NOTIFICATION_CONFIG = {
  // Email Configuration
  email: {
    enabled: process.env.EMAIL_ENABLED !== 'false', // enabled by default
    user: process.env.EMAIL_USER || 'write2pabitra@gmail.com',
    pass: process.env.EMAIL_PASS || ''
  },
  
  // Telegram Configuration
  telegram: {
    enabled: process.env.TELEGRAM_ENABLED === 'true' || false,
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_CHAT_ID || ''
  }
}

// Simple setup instructions:
// 1. Email: Configure Gmail app password
// 2. Telegram: Create bot and get token + chat ID
// 3. Add to .env.local:
//    EMAIL_USER=your_email@gmail.com
//    EMAIL_PASS=your_app_password
//    TELEGRAM_ENABLED=true
//    TELEGRAM_BOT_TOKEN=your_bot_token
//    TELEGRAM_CHAT_ID=your_chat_id 