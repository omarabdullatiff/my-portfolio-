# 📝 How to Use .env File

## ✅ .env File Created!

Your `.env` file has been created and is ready to use. Here's how:

---

## 🔧 Setup Steps

### **1. Get Your Resend API Key**
- Go to [https://resend.com/api-keys](https://resend.com/api-keys)
- Sign up or log in
- Create a new API key
- Copy the key (starts with `re_`)

### **2. Update .env File**
Open `.env` and replace the placeholder:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### **3. Save the File**
Save the `.env` file with your actual API key.

---

## 🚀 Usage

### **Local Development**

Your code now automatically loads from `.env` file:

```bash
# Run the server - it will automatically load .env
deno run --allow-net --allow-env --allow-read server.ts
```

### **Serverless Function**

The function also loads from `.env` for local testing:

```bash
# Test the function locally
deno run --allow-net --allow-env --allow-read functions/send-contact-email.ts
```

---

## 🔒 Security

✅ **`.env` is in `.gitignore`** - Your API keys won't be committed to Git
✅ **Never share your API key** - Keep it private
✅ **Rotate keys regularly** - For better security

---

## 📋 What Changed

1. ✅ Created `.env` file with template
2. ✅ Updated `server.ts` to load from `.env`
3. ✅ Updated `functions/send-contact-email.ts` to load from `.env`
4. ✅ Added error handling for missing keys

---

## 🧪 Test It

After adding your API key to `.env`:

```bash
# Start the server
deno run --allow-net --allow-env --allow-read server.ts

# In another terminal, test the contact form
# The server should start without errors
```

---

## 💡 Tips

- **Development**: Use `.env` file for local testing
- **Production**: Set environment variables in your deployment platform
- **Backup**: Keep a copy of your API key in a secure password manager

---

**Your `.env` file is ready! Just add your API key and you're good to go! 🎉**
