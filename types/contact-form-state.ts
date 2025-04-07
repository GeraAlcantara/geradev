export type ContactFormState = {
  errors?: {
    name?: string[]
    contactMethod?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}
