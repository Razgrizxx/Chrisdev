# EmailJS Setup Guide

Follow these steps to enable email functionality in your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click on "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Make sure the template variables match:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
5. Set the "To Email" to your email: `razgrisss41@gmail.com`
6. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Update Your Project

1. Open `src/utils/contactme.js`
2. Replace these placeholders with your actual credentials:

```javascript
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID", // Replace with Service ID from Step 2
  templateId: "YOUR_TEMPLATE_ID", // Replace with Template ID from Step 3
  publicKey: "YOUR_PUBLIC_KEY", // Replace with Public Key from Step 4
};
```

## Step 6: Test Your Form

1. Go to your contact form on your portfolio
2. Fill out the form and submit
3. Check your email inbox (razgrisss41@gmail.com)
4. You should receive the message!

## Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- 2 email templates
- 1 email service
- Perfect for a portfolio contact form!

## Troubleshooting

- **Email not sending?** Check your browser console for errors
- **Invalid credentials?** Double-check your Service ID, Template ID, and Public Key
- **Email not arriving?** Check your spam folder
- **Still having issues?** Visit [EmailJS Documentation](https://www.emailjs.com/docs/)

## Security Note

The credentials in `contactme.js` are safe to expose in your frontend code. EmailJS designed their system to work this way. The Public Key is meant to be public!
