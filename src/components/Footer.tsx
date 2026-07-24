import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { contactInfo, servicesMeta } from "@/lib/data";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/proiecte`, label: dict.nav.projects },
    { href: `/${locale}/despre-noi`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-paper px-4 pb-10 pt-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href={`/${locale}`} className="flex items-center" aria-label="Ligne Verticale">
              <Image
                src="/logo-black.png"
                alt="Ligne Verticale"
                width={210}
                height={52}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {dict.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[InstagramLogo, FacebookLogo, LinkedinLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social network"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/70">
              {dict.footer.pages}
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/70">
              {dict.footer.services}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {servicesMeta.map((service) => (
                <li key={service.key}>{dict.services.items[service.key].title}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/70">
              {dict.footer.contact}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-ink"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ligne Verticale. {dict.footer.copyright}
          </p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
