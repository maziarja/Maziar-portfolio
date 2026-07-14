"use client";

import { useState } from "react";
import { submitContactForm } from "../_actions/resend";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmailSchema, SendEmailType } from "../type";

function EmailForm() {
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(sendEmailSchema),
  });

  async function onSubmit(data: SendEmailType) {
    setStatus(null);
    const result = await submitContactForm(data);
    if (result.success) {
      reset();
      setStatus({ type: "success", message: "Message sent successfully!" });
    } else {
      setStatus({
        type: "error",
        message: result.error ?? "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-xl flex-col gap-5 rounded-2xl border border-white/10 bg-gray-900/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-1.5">
        <input
          {...register("email")}
          type="text"
          placeholder="john@smith.example"
          aria-invalid={formState.errors.email ? "true" : "false"}
          className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white transition-all outline-none placeholder:text-gray-500 focus:border-violet-400/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-violet-500/10 aria-[invalid=true]:border-red-400/50"
        />
        {formState.errors.email && (
          <p className="text-xs font-medium text-red-400">
            Please enter a valid email
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          aria-invalid={formState.errors.subject ? "true" : "false"}
          className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white transition-all outline-none placeholder:text-gray-500 focus:border-violet-400/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-violet-500/10 aria-[invalid=true]:border-red-400/50"
        />
        {formState.errors.subject && (
          <p className="text-xs font-medium text-red-400">
            {formState.errors.subject.message}
          </p>
        )}
      </div>
      <textarea
        {...register("message")}
        placeholder="Your message"
        rows={4}
        aria-invalid={formState.errors.message ? "true" : "false"}
        className="field-sizing-content max-h-64 min-h-[6rem] w-full resize-none rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white transition-all outline-none placeholder:text-gray-500 focus:border-violet-400/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-violet-500/10 aria-[invalid=true]:border-red-400/50"
      />

      {status && (
        <p
          role="status"
          className={
            status.type === "success"
              ? "text-sm font-medium text-green-400"
              : "text-sm font-medium text-red-400"
          }
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="ml-auto cursor-pointer rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {formState.isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default EmailForm;
