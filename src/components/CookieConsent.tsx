"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

const STORAGE_KEY = "ligne-cookie-consent";

export default function CookieConsent({
  dict,
}: {
  dict: Dictionary["cookieConsent"];
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    };
    checkConsent();
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-line bg-paper px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-soft">{dict.message}</p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
        >
          {dict.accept}
        </button>
      </div>
    </div>
  );
}
