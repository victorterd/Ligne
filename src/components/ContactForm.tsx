"use client";

import { useState, type FormEvent } from "react";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { contactInfo } from "@/lib/data";
import type { Dictionary } from "@/i18n/dictionaries";

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-accent";

export default function ContactForm({
  dict,
}: {
  dict: Dictionary["contactPage"]["form"];
}) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `${dict.name.replace(" *", "")}: ${name}`,
      `${dict.email.replace(" *", "")}: ${email}`,
      phone && `${dict.phone}: ${phone}`,
      `${dict.projectType}: ${projectType}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      `${name || "Ligne Verticale"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
          className="group inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-5 pr-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-[1.03]"
        >
          {dict.submit}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-6">
            <PaperPlaneTilt size={14} weight="bold" />
          </span>
        </button>
        <p className="text-xs text-ink-soft">{dict.note}</p>
      </div>

      {sent && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle size={16} weight="fill" />
          {dict.success}
        </p>
      )}
    </form>
  );
}
