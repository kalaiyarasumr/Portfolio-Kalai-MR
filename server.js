import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const ownerEmail = process.env.OWNER_EMAIL || 'kalaiyarasumr@gmail.com';

const requiredEmailEnv = [
  'EMAIL_HOST',
  'EMAIL_USER',
  'EMAIL_PASS',
];

const missingEmailEnv = requiredEmailEnv.filter((k) => !process.env[k]);

if (missingEmailEnv.length) {
  console.error(
    `EMAIL config incomplete. Missing env vars: ${missingEmailEnv.join(', ')}. \
Set these in a .env file for /api/send-feedback to work.`
  );
}

const emailHost = process.env.EMAIL_HOST || '';
const isGmailHost = /smtp\.gmail\.com$/i.test(emailHost);

if (isGmailHost && process.env.EMAIL_PASS && !/^[\s\S]{16,}$/.test(process.env.EMAIL_PASS)) {
  // Not a perfect check, but helps users who paste their normal password.
  console.warn(
    'Gmail detected. If email auth fails (535 BadCredentials), use a Gmail App Password (requires 2FA on the Google account).'
  );
}

const transporter = nodemailer.createTransport({
  // Optional: support Gmail via service if EMAIL_SERVICE is provided.
  service: process.env.EMAIL_SERVICE || undefined,
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

app.post('/api/send-feedback', async (req, res) => {
  const { name, email, type, rating, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const mailOptions = {
    from: `Portfolio Feedback <${process.env.EMAIL_USER}>`,
    to: ownerEmail,
    replyTo: email,
    subject: `Portfolio Feedback: ${type || 'General'}`,
    text: `New feedback from portfolio:\n\nName: ${name}\nEmail: ${email}\nType: ${type || 'General'}\nRating: ${rating || 0}/5\n\n${message}`,
    html: `
      <h2>New portfolio feedback</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Type:</strong> ${type || 'General'}</p>
      <p><strong>Rating:</strong> ${rating || 0}/5</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  };

  try {
    if (missingEmailEnv.length) {
      return res
        .status(500)
        .json({ error: `Email not configured. Missing: ${missingEmailEnv.join(', ')}` });
    }

    await transporter.sendMail(mailOptions);
    return res.json({ success: true });
  } catch (error) {
    const err = error;
    const statusCode = err?.code || err?.responseCode;
    const smtpResponse = err?.response;
    const nodemailerMsg = err?.message;

    console.error('Failed to send email:', {
      message: nodemailerMsg,
      code: statusCode,
      response: smtpResponse,
    });

    return res.status(500).json({
      error: 'Failed to send feedback email.',
      details: {
        message: nodemailerMsg,
        code: statusCode,
      },
    });
  }
});

app.get('/', (_req, res) => {
  res.send('Feedback backend is running.');
});

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});