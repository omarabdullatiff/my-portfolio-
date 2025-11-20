# Deno + Resend Email Integration

Your portfolio now uses a Deno serverless function with Resend API for secure, reliable email sending from the contact form.

## How It Works

- **Backend**: Deno serverless function
- **Email Service**: Resend API
- **Endpoint**: Your deployed Deno function URL
- **Method**: POST with JSON payload
- **Security**: API key stays on server, never exposed to browser

## Email Configuration

- **To**: `omarabdullatiff000@gmail.com`
- **Subject**: `Portfolio Contact: [user's subject]`
- **Reply-to**: User's email address
- **Content**: Name, email, subject, and message

## Features

✅ **Direct email delivery** - No external email client required
✅ **CORS-friendly** - Works from any domain
✅ **Real-time validation** - Form validation before sending
✅ **Error handling** - Graceful fallback to mailto
✅ **Success feedback** - Clear confirmation messages
✅ **Spam protection** - Built-in spam filtering

## Fallback System

1. **Primary**: Formspree API
2. **Fallback**: mailto (opens email client)
3. **Backup**: Clipboard copy with instructions

## Testing

1. Open your portfolio at http://localhost:3000
2. Fill out the contact form
3. Submit the form
4. Check console for detailed logging:
   ```
   🚀 Starting email send process with Formspree...
   📤 Sending email via Formspree...
   ✅ Email sent successfully via Formspree
   ```
5. Verify email arrives at omarabdullatiff000@gmail.com

## Why Formspree?

- **Static site friendly**: No backend required
- **Reliable**: Established service with good uptime
- **Free tier**: Sufficient for portfolio contact forms
- **No CORS issues**: Designed to work from browsers
- **Easy setup**: No API keys or complex configuration

The implementation includes comprehensive logging and fallback mechanisms to ensure messages always get through.
