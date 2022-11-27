import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { z } from "zod";
import nodemailer from "nodemailer";
import { newCaptchaImage, robotCaptchaImage } from "./captcha-images";

/* entry point for post contact data */
export default withIronSessionApiRoute(
  async function handler(req: NextApiRequest, res: NextApiResponse) {
    /* handle only post req */
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
    /* verify if in the req.body have {name & email & subject & message} */
    if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
      return res.status(400).json({ error: "Missing data" });
    }
    const { name, email, subject, message, selectedIndexes } = req.body;

    /* verify if the data is valid */
    const contactData = z.object({
      name: z.string().min(3).max(50),
      email: z.string().email(),
      subject: z.string().min(1).max(60),
      message: z.string().min(20).max(150),
      selectedIndexes: z.array(z.number()),
    });
    try {
      contactData.parse({ name, email, subject, message, selectedIndexes });
    } catch (err) {
      return res.status(400).json({ error: "Invalid data" });
    }
    /* check wich images from captcha are correct */

    // check if selectedIndexes is not a empty array
    if (selectedIndexes.length === 0) {
      return res.status(400).json({ error: "No captcha images Selected!" });
    }

    const correctIndexes = req.session.captchaImages.map((path, index) => (path.includes("correct") ? index : -1)).filter((index) => index !== -1);

    const captchaIsOK = correctIndexes.toString() === selectedIndexes.sort().toString();

    if (!captchaIsOK) {
      req.session.captchaImages = robotCaptchaImage();
      await req.session.save();
    }

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
      const send = captchaIsOK;
      if (captchaIsOK) {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Message sent", captchaIsOK, send });
      }
      res.status(200).json({ message: "Message no send coz captcha is no correct ", captchaIsOK, send });
    } catch (error) {
      res.status(500).json({ message: "Message not sent" });
    }
  },
  {
    cookieName: "captcha",
    password: process.env.SESSION_SECRET as string,
  }
);
