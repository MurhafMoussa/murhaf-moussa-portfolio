"use server";

import ContactFormEmail from "@/components/email/ContactFormEmail";
import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success === false) {
    return { error: "Invalid form data. Please check your inputs." };
  }

  try {
    const { name, email, message } = result.data;

    const { data: resendData, error } = await resend.emails.send({

      from: `Murhaf Moussa <contact@yourdomain.com>`,
      to: "murhaf.moussa@hotmail.com",
      replyTo: email,
      subject: `Portfolio Inquiry: ${name}`,
      react: ContactFormEmail({ name, email, message }),
      text: `Message from ${name} (${email}):\n\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error.message);
      return { error: "Service temporarily unavailable. Please try again later." };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { error: "An unexpected error occurred." };
  }
}