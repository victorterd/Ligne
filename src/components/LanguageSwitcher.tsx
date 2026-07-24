"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = { ro: "RO", en: "EN", fr: "FR" };

function persistLocale(target: Locale) {
  document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

export default function LanguageSwitcher({
  locale,
  dark,
}: {
  locale: Locale;
  dark?: boolean;
}) {
  const pathname = usePathname() ?? `/${locale}`;

  const pathFor = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div
      className={`flex items-center gap-1.5 text-xs font-medium tracking-wide ${
        dark ? "text-white/70" : "text-ink-soft"
      }`}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden className="opacity-40">|</span>}
          <Link
            href={pathFor(l)}
            onClick={() => persistLocale(l)}
            aria-current={l === locale ? "true" : undefined}
            className={`transition-colors ${
              l === locale
                ? dark
                  ? "text-white"
                  : "text-ink"
                : "hover:text-accent"
            }`}
          >
            {labels[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
