# Email Functionality Setup Guide

## Overview

The website is now configured to send quote request details via email to the business owner. Here's how to set it up.

## Features

✅ Sends quote request details to owner's email  
✅ Optional confirmation email to customer  
✅ Automatic email formatting  
✅ Error handling  
✅ Fallback to console logging if backend unavailable  

## Quick Setup (3 Steps)

### Step 1: Get SendGrid API Key
recovery code BBCFS9U1JERS4W37NUVHW2CF
1. Go to [SendGrid](https://sendgrid.com)
2. Sign up for a free account (allows 100 emails/day)
3. Navigate to **Settings** → **API Keys**
4. Click **Create API Key**
5. Name it (e.g., "KKS Website")
6. Copy the API key

### Step 2: Update .env File

Open `.env` in the project root and add:

```
SENDGRID_API_KEY=your_copied_api_key_here
OWNER_EMAIL=your.email@example.com
SENDER_EMAIL=noreply@kkspackers.com
OWNER_PHONE=+91 98765 43210
CUSTOMER_REPLY_EMAIL=false
PORT=5000
```

**Replace:**
- `your_copied_api_key_here` → Your SendGrid API key
- `your.email@example.com` → Where you want quote requests sent
- `your.phone` → Your business phone number

### Step 3: Start Email Server

**Option A: Separate Terminals**

Terminal 1 - Start the website:
```bash
npm run dev
```

Terminal 2 - Start email server:
```bash
npm run server
```

**Option B: Single Command (requires `concurrently` package)**

```bash
npm install -D concurrently
npm run dev:full
```

That's it! Now form submissions will send emails. ✅

---

## How It Works

### User Submits Quote Form
```
User fills form → Clicks "Get a Quote"
```

### Data Sent to Backend
```
Frontend sends POST request to: http://localhost:5000/api/send-quote
```

### Email Sent to Owner
```
Email received at: OWNER_EMAIL from SENDER_EMAIL
Subject: "New Quote Request from [Customer Name]"
```

### Optional: Customer Receives Confirmation
```
If CUSTOMER_REPLY_EMAIL=true:
Customer receives confirmation email
```

---

## Configuration Options

### Environment Variables (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `SENDGRID_API_KEY` | Your SendGrid API key | (required) |
| `OWNER_EMAIL` | Where to send quote requests | info@kkspackers.com |
| `SENDER_EMAIL` | Email address shown in "From" field | noreply@kkspackers.com |
| `OWNER_PHONE` | Phone number in customer emails | +91 98765 43210 |
| `CUSTOMER_REPLY_EMAIL` | Send confirmations to customers? | false |
| `PORT` | Server port | 5000 |
| `API_URL` | API endpoint URL | http://localhost:5000 |

---

## Email Templates

### Owner Receives:
```
Subject: New Quote Request from [Customer Name]

- Customer name
- Phone number
- Moving from location
- Moving to location
- Timestamp
```

### Customer Receives (if enabled):
```
Subject: Quote Request Received - KKS Packers & Movers

- Thank you message
- Their request details
- Phone & email to contact
```

---

## Testing Without SendGrid

You can test the form without SendGrid:

1. **Without Backend Running**
   - Form will still show success message
   - Data will log to browser console (F12 → Console)
   - Check browser console to verify data

2. **With Backend Running (No API Key)**
   - Data logs to server console (Terminal)
   - Good for testing server connection

3. **With SendGrid API Key**
   - Emails actually sent
   - Check your email inbox

---

## Troubleshooting

### "Failed to submit quote request"
**Problem:** Backend server not running
```bash
# Start the server in a separate terminal
npm run server
```

### "Invalid API key"
**Problem:** Wrong or missing SENDGRID_API_KEY   
- Check you copied the full API key
- Verify it starts with `SG.`
- Restart the server after updating .env

### "Email not received"
**Check:**
1. API key is correct (starts with `SG.`)
2. Email address is valid (no typos)
3. Check spam/junk folder
4. SendGrid quota not exceeded (free tier = 100/day)

### "CORS error" in browser
**Problem:** Frontend and backend CORS not configured
- Make sure backend is running on port 5000
- Check `.env` `API_URL=http://localhost:5000`

### Server won't start
**Error:** `Cannot find module...`
```bash
# Reinstall dependencies
npm install express cors dotenv @sendgrid/mail
npm run server
```

---

## Advanced Configuration

### Custom Email Templates

Edit `server/email-server.js` to customize email HTML:

```javascript
// Find the ownerEmailContent section and modify the HTML
const ownerEmailContent = {
  html: `<your custom HTML here>`,
  // ... other fields
};
```

### Multiple Admin Emails

```javascript
// In email-server.js, send to multiple emails
const adminEmails = [
  'admin1@kkspackers.com',
  'admin2@kkspackers.com',
];

for (const email of adminEmails) {
  await sgMail.send({
    ...ownerEmailContent,
    to: email,
  });
}
```

### Database Integration

Instead of just email, save to database:

```javascript
// In handleSubmit, add before sending email
await saveToDatabase({
  name: formData.name,
  phone: formData.phone,
  movingFrom: formData.movingFrom,
  movingTo: formData.movingTo,
  timestamp: new Date(),
  status: 'new'
});
```

### Different Email per Location

```javascript
const locationEmails = {
  'Hyderabad': 'hyderabad@kkspackers.com',
  'Bangalore': 'bangalore@kkspackers.com',
  'Chennai': 'chennai@kkspackers.com',
};

const ownerEmail = locationEmails[formData.movingFrom];
```

---

## Security Best Practices

1. **Never commit .env file**
   - Add `.env` to `.gitignore` (already done)
   - Use `.env.example` for template only

2. **Validate all inputs**
   - Already done in server (checks required fields)
   - Add regex for phone validation if needed

3. **Rate limiting**
   - Add protection against spam submissions
   - Example: Max 5 quotes per IP per hour

4. **Use environment variables in production**
   - Don't hardcode API keys
   - Use secrets manager (AWS, Vercel, etc.)

---

## Production Deployment

### 1. Use Environment Variables Hosting
For **Vercel**:
```
Settings → Environment Variables
Add all .env variables
```

For **Netlify**:
```
Site Settings → Build & Deploy → Environment
Add all .env variables
```

### 2. Update API URL
In `.env` (production):
```
API_URL=https://yourdomain.com/api
```

In QuoteForm.tsx:
```tsx
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const response = await fetch(`${API_URL}/api/send-quote`, {
```

### 3. Deploy Backend
Options:
- **Vercel**: Deploy `server/email-server.js` as serverless function
- **Heroku**: Deploy as Node.js app
- **Your own server**: Run with PM2 or similar

---

## Useful SendGrid Resources

- **Get API Keys**: https://app.sendgrid.com/settings/api_keys
- **Documentation**: https://docs.sendgrid.com
- **Email Templates**: https://www.sendgrid.com/solutions/email-templates/
- **Pricing**: https://sendgrid.com/pricing/

---

## Next Steps

1. ✅ Sign up for SendGrid (free tier)
2. ✅ Add API key to .env
3. ✅ Run `npm run server` in separate terminal
4. ✅ Test form submission
5. ✅ Receive email at your configured address
6. ✅ Customize email template (optional)
7. ✅ Deploy to production

---

## Support

**Not Working?** Check:
1. Is backend running? (`npm run server`)
2. Is API key valid? (Starts with `SG.`)
3. Is email address correct?
4. Check browser console (F12) for errors
5. Check server console for error messages

**Still stuck?** Refer to the troubleshooting section above or check:
- SendGrid Status: https://status.sendgrid.com
- Server logs for detailed error messages

---

**Last Updated:** 2024-07-06  
**Version:** 1.0
