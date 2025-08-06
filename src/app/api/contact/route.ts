import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { NOTIFICATION_CONFIG } from '@/lib/notification-config'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email
    let emailSent = false
    if (NOTIFICATION_CONFIG.email.enabled) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: NOTIFICATION_CONFIG.email.user,
            pass: NOTIFICATION_CONFIG.email.pass
          }
        })

        const mailOptions = {
          from: NOTIFICATION_CONFIG.email.user,
          to: NOTIFICATION_CONFIG.email.user, // Send to yourself
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>This message was sent from your portfolio website contact form.</em></p>
          `
        }

        await transporter.sendMail(mailOptions)
        emailSent = true
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
      }
    }

    // Send Telegram notification
    let telegramSent = false
    if (NOTIFICATION_CONFIG.telegram.enabled && NOTIFICATION_CONFIG.telegram.botToken && NOTIFICATION_CONFIG.telegram.chatId) {
      try {
        const telegramMessage = `🔔 *New Portfolio Contact*

👤 *Name:* ${name}
📧 *Email:* ${email}
📝 *Subject:* ${subject}
💬 *Message:* ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}

_Message sent from your portfolio website_`

        // Use a more robust approach for Telegram API
        const telegramUrl = `https://api.telegram.org/bot${NOTIFICATION_CONFIG.telegram.botToken}/sendMessage`
        
        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: NOTIFICATION_CONFIG.telegram.chatId,
            text: telegramMessage,
            parse_mode: 'Markdown'
          }),
          // Add these options to handle SSL issues
          cache: 'no-cache',
          next: { revalidate: 0 }
        })

        if (response.ok) {
          const result = await response.json()
          if (result.ok) {
            telegramSent = true
          } else {
            console.error('Telegram API error:', result.description)
          }
        } else {
          console.error('Telegram HTTP error:', response.status, response.statusText)
        }
      } catch (telegramError) {
        console.error('Telegram sending failed:', telegramError)
        
        // Try alternative approach if fetch fails
        try {
          const https = require('https')
          const url = require('url')
          
          const telegramUrl = `https://api.telegram.org/bot${NOTIFICATION_CONFIG.telegram.botToken}/sendMessage`
          const parsedUrl = url.parse(telegramUrl)
          
          const postData = JSON.stringify({
            chat_id: NOTIFICATION_CONFIG.telegram.chatId,
            text: `New portfolio contact: ${name} (${email}) - ${subject}`,
            parse_mode: 'Markdown'
          })
          
          const options = {
            hostname: parsedUrl.hostname,
            port: 443,
            path: parsedUrl.path,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(postData)
            },
            // Disable SSL verification for local development
            rejectUnauthorized: false
          }
          
          const req = https.request(options, (res: any) => {
            let data = ''
            res.on('data', (chunk: any) => {
              data += chunk
            })
            res.on('end', () => {
              try {
                const result = JSON.parse(data)
                if (result.ok) {
                  telegramSent = true
                  console.log('Telegram sent via HTTPS fallback')
                } else {
                  console.error('Telegram fallback error:', result.description)
                }
              } catch (e) {
                console.error('Telegram fallback parse error:', e)
              }
            })
          })
          
          req.on('error', (error: any) => {
            console.error('Telegram HTTPS fallback error:', error)
          })
          
          req.write(postData)
          req.end()
          
        } catch (fallbackError) {
          console.error('Telegram fallback also failed:', fallbackError)
        }
      }
    }

    // Return response based on what was sent
    const notifications = []
    if (emailSent) notifications.push('email')
    if (telegramSent) notifications.push('Telegram')

    if (notifications.length > 0) {
      const notificationText = notifications.join(' and ')
      return NextResponse.json(
        { message: `Message sent successfully! You will receive ${notificationText} notification${notifications.length > 1 ? 's' : ''}.` },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
} 