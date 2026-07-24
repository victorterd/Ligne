"use client";

import { useState, type FormEvent } from "react";
import {
  PaperPlaneTilt,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries";

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-accent";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({
  dict,
}: {
  dict: Dictionary["contactPage"]["form"];
}) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType: data.get("projectType"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">{dict.name}</span>
          <input
            required
            name="name"
            type="text"
            placeholder={dict.namePlaceholder}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">{dict.email}</span>
          <input
            required
            name="email"
            type="email"
            placeholder={dict.emailPlaceholder}
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">{dict.phone}</span>
          <input
            name="phone"
            type="tel"
            placeholder={dict.phonePlaceholder}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">
            {dict.projectType}
          </span>
          <select
            name="projectType"
            className={inputClass}
            defaultValue={dict.projectTypes[0]}
          >
            {dict.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">{dict.message}</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder={dict.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-5 pr-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
        >
          {sending ? dict.sending : dict.submit}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-6">
            <PaperPlaneTilt size={14} weight="bold" />
          </span>
        </button>
        <p className="text-xs text-ink-soft">{dict.note}</p>
      </div>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle size={16} weight="fill" />
          {dict.success}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <WarningCircle size={16} weight="fill" />
          {dict.error}
        </p>
      )}
    </form>
  );
}
