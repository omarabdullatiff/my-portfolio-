# ⚡ Quick Email Setup - Choose Your Option

## Option 1: Deploy Deno Function (Uses Resend - Recommended)

**Time**: 5-10 minutes  
**Cost**: FREE  
**Result**: Automatic email sending via Resend on all devices

### Steps:

1. **Deploy to Deno Deploy:**
   - Go to [https://deno.com/deploy](https://deno.com/deploy)
   - Sign up with GitHub
   - Create new project
   - Deploy `functions/send-contact-email.ts`
   - Set environment variable: `RESEND_API_KEY`

2. **Update JavaScript:**
   - Get your Deno Deploy URL (e.g., `https://your-function.deno.dev`)
   - Open `js/script.js`
   - Replace `'https://your-function-name.deno.dev/send-contact-email'` with your URL
   - Commit and push

**See**: `DEPLOY_DENO_FUNCTION.md` for detailed steps

---

## Option 2: Use Web3Forms (Works Immediately - No Deployment)

**Time**: 2 minutes  
**Cost**: FREE  
**Result**: Automatic email sending (no Resend, but works instantly)

### Steps:

1. **Get Access Key:**
   - Go to [https://web3forms.com](https://web3forms.com)
   - Enter your email: `omarabdullatiff000@gmail.com`
   - Get your access key

2. **Update Contact Form:**
   - I'll update the code to use Web3Forms
   - Just provide your access key

---

## Option 3: Use Formspree (Easy Setup)

**Time**: 3 minutes  
**Cost**: FREE (50 submissions/month)  
**Result**: Automatic email sending

### Steps:

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up and create form
3. Get form endpoint
4. I'll update the code to use it

---

## 🎯 Recommendation

**For Resend (what you want)**: Use Option 1 - Deploy Deno Function  
**For immediate solution**: Use Option 2 - Web3Forms

Which option would you like to use?
