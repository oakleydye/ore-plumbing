# Ore Plumbing Website

This is a [Next.js](https://nextjs.org) project for Ore Plumbing, a plumbing service company based in Logan, Utah.

## Features

- Modern, responsive design
- Contact form with email notifications
- Service pages for different plumbing offerings
- Dark/light theme support

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, set up your environment variables by copying the example file:

```bash
cp .env.example .env.local
```

### Email Configuration

The contact form uses [Resend](https://resend.com) to send email notifications. To set this up:

1. Sign up for a free account at [Resend](https://resend.com)
2. Create an API key in your Resend dashboard
3. Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```
4. Update the email addresses in `src/app/api/contact/route.ts`:
   - Change the `from` email to your verified domain
   - Update the `to` email address to where you want to receive notifications

### Domain Verification (Production)

For production use, you'll need to verify your domain with Resend:
1. Add your domain in the Resend dashboard
2. Add the required DNS records
3. Update the `from` email address to use your verified domain

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing the Contact Form

Once you have set up your Resend API key, you can test the contact form functionality:

1. **Using the website**: Navigate to any page with the contact form and submit a test message
2. **Using the test page**: Visit `http://localhost:3000/test-contact.html` for a simple test interface
3. **Check your email**: Notifications will be sent to the email address configured in the API route

## Contact Form Features

- **Email Notifications**: Automatic email notifications sent via Resend
- **Urgency Levels**: Different priority levels (Emergency, Urgent, Normal, Quote)
- **Professional Email Templates**: Well-formatted HTML emails with styling
- **Error Handling**: Proper error messages and user feedback
- **Form Validation**: Client and server-side validation
- **Responsive Design**: Works on all device sizes

## Configuration

### Required Environment Variables

- `RESEND_API_KEY`: Your Resend API key for sending emails

### Email Settings

Update the following in `src/app/api/contact/route.ts`:
- **From Email**: Change `noreply@oreplumbing.com` to your verified domain
- **To Email**: Change `info@oreplumbing.com` to the recipient email address

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
