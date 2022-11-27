import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { z } from "zod";
import { newCaptchaImage, robotCaptchaImage } from "./captcha-images";

export default withIronSessionApiRoute(
  async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
    console.log(req.body.reboot);

    if (req.body.reboot === false) {
      console.log("no reboot request ", req.body.reboot);
      return res.status(400).json({ error: "Error trying to reboot Program" });
    }
    const { reboot } = req.body;
    const contactData = z.object({
      reboot: z.boolean(),
    });
    try {
      contactData.parse({ reboot });
    } catch (err) {
      console.log("invalid data", err);
      return res.status(400).json({ error: "Invalid data" });
    }
    if (reboot) {
      req.session.captchaImages = newCaptchaImage();
      await req.session.save();
      res.status(200).json({ message: "Program reboot! 🤷‍♀️" });
    }
  },
  {
    cookieName: "captcha",
    password: process.env.SESSION_SECRET as string,
  }
);
