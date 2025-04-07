"use server"

import { ContactFormState } from "@/types/contact-form-state"
import { z } from "zod"

// Define validation schema
const ContactFormSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    contactMethod: z.enum(["email", "phone"]),
    email: z.string().email("Please enter a valid email address").optional(),
    phone: z.string().optional(),
    countryCode: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters long"),
  })
  .refine(
    (data) => {
      // If contact method is email, email must be provided
      if (data.contactMethod === "email") {
        return !!data.email && data.email.trim() !== ""
      }
      return true
    },
    {
      message: "Email is required when email contact method is selected",
      path: ["email"], // Path to the field that has the error
    },
  )
  .refine(
    (data) => {
      // If contact method is phone, phone must be provided
      if (data.contactMethod === "phone") {
        return !!data.phone && data.phone.trim() !== ""
      }
      return true
    },
    {
      message: "Phone number is required when phone contact method is selected",
      path: ["phone"], // Path to the field that has the error
    },
  )

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Extract form data
  const name = formData.get("name") as string
  const contactMethod = formData.get("contactMethod") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const countryCode = formData.get("countryCode") as string
  const message = formData.get("message") as string

  // Create data object for validation
  const data = {
    name,
    contactMethod,
    email,
    phone,
    countryCode,
    message,
  }

  // Validate the data
  const validationResult = ContactFormSchema.safeParse(data)

  // If validation fails, return errors
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors
    return {
      errors: {
        name: errors.name || [],
        contactMethod: errors.contactMethod || [],
        email: errors.email || [],
        phone: errors.phone || [],
        message: errors.message || [],
      },
    }
  }

  try {
    // Here you would typically send the data to your backend or API
    // For demonstration, we'll just simulate a successful submission

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success state
    return {
      success: true,
      message: "Thank you for your message. We will get back to you soon!",
    }
  } catch (error) {
    // Handle any errors that occur during submission
    return {
      errors: {
        _form: [
          "An error occurred while submitting the form. Please try again.",
        ],
      },
    }
  }
}
