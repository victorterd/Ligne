import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-4 pb-10 pt-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink"
            >
              <span aria-hidden className="flex h-7 w-4 items-center justify-center border-l-2 border-accent" />
              Ligne Verticale
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Construcții și renovări cu precizie arhitecturală — case,
              interioare și spații comerciale, gândite să dureze.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[InstagramLogo, FacebookLogo, LinkedinLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rețea socială"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/70">
              Pagini
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
              Servicii
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>Construcții noi</li>
              <li>Renovări complete</li>
              <li>Amenajări interioare</li>
              <li>Consultanță &amp; proiectare</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/70">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>
                <a
                  href="tel:+40712345678"
                  className="transition-colors hover:text-ink"
                >
                  +40 712 345 678
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ligneverticale.ro"
                  className="transition-colors hover:text-ink"
                >
                  contact@ligneverticale.ro
                </a>
              </li>
              <li>București, România</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ligne Verticale. Toate drepturile rezervate.</p>
          <p>Construit cu grijă pentru fiecare detaliu.</p>
        </div>
      </div>
    </footer>
  );
}
