import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";
/* nodemailer */
import nodemailer from "nodemailer";

/* entry point for post contact data */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    /* get from .env data */
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: subject,
    html: `
        <h1>Message from ${name}</h1>
        <p>${message}</p>
        <p>From: ${email}</p>
        `,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent" });
  } catch (error) {
    res.status(500).json({ message: "Message not sent" });
  }
}
