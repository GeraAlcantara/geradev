// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session'

export const sessionOptions: IronSessionOptions = {
  cookieName: 'captcha',
  password: process.env.SESSION_SECRET as string
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    captchaImages: string[]
  }
}
