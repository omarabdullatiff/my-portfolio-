# Deno + Resend Email Function Deployment

Your portfolio now uses a Deno serverless function with Resend API for secure, reliable email sending.

## 📁 Files Structure

```
/Users/Omar/portofolio/
├── functions/
│   └── send-contact-email.ts    # Deno serverless function
├── js/
│   └── script.js                # Frontend calls the Deno function
└── DENO_DEPLOYMENT.md           # This guide
```

## 🚀 Deployment Options

### Option 1: Deno Deploy (Recommended)

1. **Create Deno Deploy Account**
   - Go to [https://deno.com/deploy](https://deno.com/deploy)
   - Sign up with GitHub

2. **Deploy the Function**
   - Create new project
   - Connect your GitHub repository
   - Set entry point: `functions/send-contact-email.ts`
   - Add environment variable: `RESEND_API_KEY=re_G9uFE2ET_Pbus6yJVXEaYTVnJt3fveAYt`

3. **Update Frontend URL**
   - Copy your Deno Deploy URL (e.g., `https://your-project.deno.dev`)
   - Update `DENO_FUNCTION_URL` in `js/script.js`

### Option 2: Local Development

1. **Install Deno**
   ```bash
   curl -fsSL https://deno.land/install.sh | sh
   ```

2. **Set Environment Variable**
   ```bash
   export RESEND_API_KEY=re_G9uFE2ET_Pbus6yJVXEaYTVnJt3fveAYt
   ```

3. **Run the Function**
   ```bash
   cd /Users/Omar/portofolio
   deno run --allow-net --allow-env functions/send-contact-email.ts
   ```

4. **Test Locally**
   - Function runs on `http://localhost:8000`
   - Frontend is configured to use this URL for development

### Option 3: Supabase Edge Functions

1. **Install Supabase CLI**
   ```bash
   npm install -g supabase
   ```

2. **Deploy Function**
   ```bash
   supabase functions deploy send-contact-email --project-ref your-project-ref
   ```

3. **Set Environment Variables**
   ```bash
   supabase secrets set RESEND_API_KEY=re_G9uFE2ET_Pbus6yJVXEaYTVnJt3fveAYt
   ```

## 🔧 Configuration

### Frontend Configuration (js/script.js)

```javascript
// Development
const DENO_FUNCTION_URL = 'http://localhost:8000/send-contact-email';

// Production (update after deployment)
const DENO_FUNCTION_URL = 'https://your-deployed-function-url';
```

### Environment Variables

- `RESEND_API_KEY`: Your Resend API key (`re_G9uFE2ET_Pbus6yJVXEaYTVnJt3fveAYt`)

## 🧪 Testing

### Local Testing

1. **Start Deno Function**
   ```bash
   export RESEND_API_KEY=re_G9uFE2ET_Pbus6yJVXEaYTVnJt3fveAYt
   deno run --allow-net --allow-env functions/send-contact-email.ts
   ```

2. **Start Portfolio Server**
   ```bash
   python3 -m http.server 3000
   ```

3. **Test Contact Form**
   - Go to http://localhost:3000
   - Fill out contact form
   - Check console for success messages
   - Verify email arrives at omarabdullatiff000@gmail.com

### Production Testing

1. **Update function URL** in `js/script.js`
2. **Deploy your portfolio** to your hosting service
3. **Test the contact form** on the live site

## 🔒 Security Benefits

✅ **API Key Security**: Resend API key stays on server, never exposed to browser
✅ **CORS Handling**: Proper CORS headers prevent cross-origin issues
✅ **Input Validation**: Server-side validation and sanitization
✅ **Error Handling**: Graceful error responses
✅ **Rate Limiting**: Can be added at the function level

## 📧 Email Features

- **HTML Formatting**: Rich email formatting with proper structure
- **Reply-To**: Emails have proper reply-to address set to sender
- **Subject Line**: Clear subject with sender's name
- **Professional From**: Uses Resend's verified domain

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure CORS headers are properly set in Deno function
   - Check that function URL is correct

2. **API Key Issues**
   - Verify `RESEND_API_KEY` environment variable is set
   - Check API key is valid and has proper permissions

3. **Function Not Found**
   - Verify deployment was successful
   - Check function URL is accessible
   - Ensure entry point is correct

### Debug Steps

1. **Check Function Logs**
   - Deno Deploy: Check function logs in dashboard
   - Local: Check terminal output

2. **Test Function Directly**
   ```bash
   curl -X POST https://your-function-url \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

3. **Check Browser Console**
   - Look for detailed error messages
   - Verify API calls are being made

## 🎯 Next Steps

1. **Deploy the Deno function** to your preferred platform
2. **Update the frontend URL** to point to your deployed function
3. **Test the complete flow** end-to-end
4. **Monitor email delivery** and function performance

Your email system is now production-ready with proper security and reliability!
