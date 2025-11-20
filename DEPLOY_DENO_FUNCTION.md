# 🚀 Deploy Deno Function for Automatic Email Sending

## Why Deploy the Deno Function?

Your portfolio uses Resend API to automatically send emails. Since GitHub Pages is static hosting, you need to deploy the Deno function separately to make it work on mobile and production.

## ✅ Quick Deploy to Deno Deploy (FREE)

### Step 1: Sign Up for Deno Deploy

1. Go to [https://deno.com/deploy](https://deno.com/deploy)
2. Sign up with GitHub (free)
3. Create a new project

### Step 2: Deploy Your Function

1. **In Deno Deploy dashboard:**
   - Click "New Project"
   - Name it: `portfolio-email-function`
   - Select "Deploy from GitHub" or "Deploy from URL"

2. **If deploying from GitHub:**
   - Connect your repository: `omarabdullatiff/my-portfolio-`
   - Entry point: `functions/send-contact-email.ts`
   - Click "Deploy"

3. **If deploying from URL:**
   - Copy the content of `functions/send-contact-email.ts`
   - Paste it in the Deno Deploy editor
   - Click "Deploy"

### Step 3: Set Environment Variable

1. In your Deno Deploy project, go to **Settings**
2. Click **Environment Variables**
3. Add:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (get from https://resend.com/api-keys)
4. Click **Save**

### Step 4: Get Your Function URL

After deployment, Deno Deploy will give you a URL like:
```
https://portfolio-email-function-abc123.deno.dev
```

Your function will be available at:
```
https://portfolio-email-function-abc123.deno.dev/send-contact-email
```

### Step 5: Update JavaScript

1. Open `js/script.js`
2. Find line with: `'https://your-function-name.deno.dev/send-contact-email'`
3. Replace with your actual Deno Deploy URL
4. Commit and push to GitHub

## 🎯 Alternative: Use Formspree (Easier, No Code Changes)

If you prefer not to deploy Deno function:

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up (free tier available)
3. Create a new form
4. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
5. Update the contact form to use Formspree

## 📝 Current Setup

Your function is ready at: `functions/send-contact-email.ts`

It just needs to be deployed to work on mobile and production!

---

**After deploying, your contact form will automatically send emails on all devices! 🎉**
