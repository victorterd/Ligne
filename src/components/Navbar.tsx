"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

type NavDict = {
  home: string;
  projects: string;
  about: string;
  contact: string;
  cta: string;
};

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: NavDict;
}) {
  const pathname = usePathname();
  const [scrolledState, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const forceSolid = pathname !== `/${locale}`;
  const scrolled = scrolledState || forceSolid;

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: dict.home },
    { href: `/${locale}/proiecte`, label: dict.projects },
    { href: `/${locale}/despre-noi`, label: dict.about },
    { href: `/${locale}/contact`, label: dict.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-colors duration-500 sm:px-5 ${
          scrolled || open
            ? "border-line/70 bg-paper/85 shadow-[0_8px_30px_-12px_rgba(14,16,19,0.25)] backdrop-blur-xl"
            : "border-white/15 bg-white/5 backdrop-blur-md"
        }`}
      >
        <Link
          href={`/${locale}`}
          className={`flex items-center gap-2 text-[0.95rem] font-semibold tracking-tight transition-colors ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
        >
          <span
            aria-hidden
            className={`flex h-7 w-4 items-center justify-center border-l-2 ${
              scrolled || open ? "border-accent" : "border-white"
            }`}
          />
          Ligne Verticale
        </Link>

        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full text-sm md:flex ${
            scrolled || open ? "text-ink-soft" : "text-white/85"
          }`}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 transition-colors ${
                  active
                    ? scrolled
                      ? "text-ink"
                      : "text-white"
                    : "hover:text-accent"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden
                    className={`absolute inset-x-3 -bottom-0.5 h-px ${
                      scrolled || open ? "bg-accent" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} dark={!(scrolled || open)} />
          </div>
          <Link
            href={`/${locale}/contact`}
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors sm:inline-flex ${
              scrolled || open
                ? "bg-ink text-paper hover:bg-accent-ink"
                : "bg-white text-ink hover:bg-white/90"
            }`}
          >
            {dict.cta}
            <ArrowUpRight size={15} weight="bold" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden ${
              scrolled || open ? "text-ink" : "text-white"
            }`}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-4 top-[4.5rem] rounded-3xl border border-line/70 bg-paper/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-mist text-ink"
                      : "text-ink-soft hover:bg-mist/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-3 text-base font-medium text-paper"
              >
                {dict.cta}
                <ArrowUpRight size={16} weight="bold" />
              </Link>
              <div className="mt-3 flex justify-center border-t border-line pt-3">
                <LanguageSwitcher locale={locale} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
