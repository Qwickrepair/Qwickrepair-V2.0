This is the Qwickrepair Solutions website built with [Next.js](https://nextjs.org).

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` and copy the values from `.env.example`.

3. Add your real SMTP credentials.

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Email Setup

The contact form sends mail through SMTP using Nodemailer in `app/api/contact/route.js`.

Required environment variables:

- `QWICKREPAIR_SMTP_HOST`
- `QWICKREPAIR_SMTP_PORT`
- `QWICKREPAIR_SMTP_SECURE`
- `QWICKREPAIR_SMTP_USER`
- `QWICKREPAIR_SMTP_PASS`
- `QWICKREPAIR_FROM_NAME`
- `QWICKREPAIR_FROM_EMAIL`
- `QWICKREPAIR_TO_EMAIL`

Recommended Gmail SMTP values:

- `QWICKREPAIR_SMTP_HOST=smtp.gmail.com`
- `QWICKREPAIR_SMTP_PORT=587`
- `QWICKREPAIR_SMTP_SECURE=false`
- `QWICKREPAIR_SMTP_USER=<your Gmail address>`
- `QWICKREPAIR_SMTP_PASS=<your Gmail app password>`

Notes:

- Use a Gmail App Password, not your normal Gmail password.
- `QWICKREPAIR_FROM_EMAIL` should usually match the authenticated SMTP mailbox.
- `QWICKREPAIR_TO_EMAIL` is the inbox that receives contact form submissions.
- If email is unavailable, the form falls back to WhatsApp so the customer can still send the request.

## Deployment

Add the same environment variables from `.env.example` to your hosting provider and redeploy the app. Values from local `.env.local` are not uploaded to Git.
