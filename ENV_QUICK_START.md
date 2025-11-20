# ⚡ Environment Variables - Quick Start

## 🎯 For GitHub Pages Deployment

**Good News!** Your portfolio works on GitHub Pages **without** environment variables because:

1. ✅ **Formspree fallback** is already configured (no API key needed)
2. ✅ **mailto fallback** opens email client if Formspree fails
3. ✅ **Contact form works** out of the box

**No action needed!** Your portfolio is ready to deploy.

---

## 🔧 If You Want Email Functionality

### **Option 1: Use Formspree (Recommended for GitHub Pages)**
- ✅ No API keys needed
- ✅ Already configured
- ✅ Works from static hosting

### **Option 2: Deploy Deno Function Separately**

1. **Get Resend API Key**: [https://resend.com/api-keys](https://resend.com/api-keys)

2. **Deploy to Deno Deploy**:
   ```bash
   # Set environment variable
   export RESEND_API_KEY=your-key-here
   
   # Deploy
   deno deploy functions/send-contact-email.ts
   ```

3. **Update `js/script.js`**:
   ```javascript
   const DENO_FUNCTION_URL = 'https://your-deploy-url.deno.dev/send-contact-email';
   ```

---

## 📋 Environment Variable Summary

| Variable | Required | Purpose | Where to Get |
|----------|----------|---------|--------------|
| `RESEND_API_KEY` | Optional* | Email sending via Resend | [resend.com/api-keys](https://resend.com/api-keys) |

*Only needed if deploying Deno function separately

---

## 🚀 Quick Commands

**Set locally (macOS/Linux):**
```bash
export RESEND_API_KEY=your-key-here
```

**Set locally (Windows):**
```powershell
$env:RESEND_API_KEY="your-key-here"
```

**Test server:**
```bash
deno run --allow-net --allow-env server.ts
```

---

## ✅ Security Checklist

- [x] Hardcoded API keys removed from code
- [x] `.env` files in `.gitignore`
- [x] Environment variables documented
- [x] Fallback email methods configured

**Your portfolio is secure and ready to deploy! 🎉**
