"use client";

import { useState, type FormEvent } from "react";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { contactInfo, projectTypes } from "@/lib/data";

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-accent";

export default function ContactForm() {
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
      `Nume: ${name}`,
      `Email: ${email}`,
      phone && `Telefon: ${phone}`,
      `Tip proiect: ${projectType}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      `Proiect nou — ${name || "Site Ligne Verticale"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">Nume complet *</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Ana Popescu"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">Email *</span>
          <input
            required
            name="email"
            type="email"
            placeholder="ana@exemplu.ro"
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">Telefon</span>
          <input
            name="phone"
            type="tel"
            placeholder="07xx xxx xxx"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">Tip proiect</span>
          <select name="projectType" className={inputClass} defaultValue={projectTypes[0]}>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">Mesaj *</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Spune-ne câteva cuvinte despre teren, buget și termenul dorit."
          className={`${inputClass} resize-none`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-5 pr-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-[1.03]"
        >
          Trimite mesajul
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-6">
            <PaperPlaneTilt size={14} weight="bold" />
          </span>
        </button>
        <p className="text-xs text-ink-soft">
          Se deschide aplicația ta de email, cu mesajul precompletat.
        </p>
      </div>

      {sent && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle size={16} weight="fill" />
          Aplicația de email s-a deschis într-o filă nouă — apasă
          &bdquo;Trimite&rdquo; acolo pentru a ne contacta.
        </p>
      )}
    </form>
  );
}
