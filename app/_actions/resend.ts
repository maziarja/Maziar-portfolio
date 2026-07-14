"use server";

import { Resend } from "resend";
import { sendEmailSchema, SendEmailType } from "../type";
import { buildContactEmailHtml } from "../_components/EmailHtmlTemplate";

export async function submitContactForm(data: SendEmailType) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const parsed = sendEmailSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message };
  }
  const { error } = await resend.batch.send([
    {
      from: "Maziar <hello@mazdev.dev>",
      to: ["maziar.ja@gmail.com"],
      replyTo: parsed.data.email,
      subject: parsed.data.subject,
      text: parsed.data.message,
      html: buildContactEmailHtml(parsed.data),
    },
  ]);

  if (error) {
    console.error(error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
