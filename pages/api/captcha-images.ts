import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import fs from "fs";
import path from "path";

/* 
1.- probabilidad de ser imaghen correcta o falsa
2.- crear un array de paths de 9 imagenes
3.- definir que imagenes son las correctas y cuales son falsas
4.- randomizar la posibilidad de que una imagen sea correcta o falsa
5.- ocupo un numero para definir cuantas imagenes son corrects y cuantas son falsas 
crear un filename para cada imagen
regresar el directorio/filename de cada imagen por iteracion
 */
/* array type */
export function newCaptchaImage() {
  const correctProbability = 0.5;
  return new Array(9).fill(0).map((value, index) => {
    const imageTypeCorrect = "correct"; // correct1, correct2
    const imageTypeIncorrect = "wrong"; //incorrect1, incorrect2
    const isCorrect = Math.random() < correctProbability; // true or false
    const number = Math.floor(Math.random() * (isCorrect ? 4 : 5)) + 1; // correct4, incorrect5
    const filename = (isCorrect ? imageTypeCorrect : imageTypeIncorrect) + number + ".jpg"; // correct4.jpg, incorrect5.jpg
    const imageDirectory = path.join(process.cwd(), "public/captcha");
    return `${imageDirectory}/${filename}`;
  });
}
export function robotCaptchaImage() {
  return new Array(9).fill(0).map((value, index) => {
    const imageTypeRobot = "robot";
    /* crear a path as public/captcha/imageTypeRobot+1 till 9 */
    const filename = imageTypeRobot + (index + 1) + ".jpg"; // index 0 +1 = robot1.jpg
    const imageDirectory = path.join(process.cwd(), "public/captcha");
    return `${imageDirectory}/${filename}`;
  });
}

export default withIronSessionApiRoute(
  async function handler(req: NextApiRequest, res: NextApiResponse) {
    const index = Number(req.query.index);

    if (!req.session.captchaImages) {
      req.session.captchaImages = newCaptchaImage();
      await req.session.save();
      console.log(req.session.captchaImages);
    }
    res.setHeader("Content-Type", "image/jpeg");
    const imageBuffer = fs.readFileSync(req.session.captchaImages[index]);
    res.send(imageBuffer);
  },
  {
    cookieName: "captcha",
    password: process.env.SESSION_SECRET as string,
  }
);
