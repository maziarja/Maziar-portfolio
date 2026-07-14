import z from "zod";

export const sendEmailSchema = z.object({
  email: z.email(),
  subject: z.string().min(1, "Subject is required").max(100),
  message: z
    .string()
    .trim()
    .min(1, "Can't be empty")
    .max(20000, "Message must be at least 20000 characters"),
});

export type SendEmailType = z.infer<typeof sendEmailSchema>;
