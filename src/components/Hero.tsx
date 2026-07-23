"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { stats } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-ink">
      <Image
        src="/images/hero-villa.jpg"
        alt="Vilă modernă construită de Ligne Verticale, cu fațadă de sticlă și beton"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <div className="relative flex flex-1 flex-col justify-end px-4 pb-10 pt-32 sm:px-6 sm:pt-40 lg:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-xs font-medium uppercase tracking-[0.28em] text-white/70"
          >
            Construcții &amp; renovări premium
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-5 max-w-3xl text-[clamp(2.5rem,7vw,5.25rem)] font-medium leading-[1.03] tracking-tight text-white"
          >
            Spații gândite până la{" "}
            <em className="font-display font-normal italic text-accent-soft">
              ultimul detaliu
            </em>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
          >
            De la structură la finisaj, echipa Ligne Verticale transformă
            fiecare șantier într-un proiect arhitectural dus la desăvârșire —
            construcții noi, renovări complete și amenajări interioare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white py-3 pl-5 pr-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              Începe proiectul
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </Link>
            <Link
              href="/proiecte"
              className="text-sm font-medium text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Vezi proiectele noastre
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="relative mx-auto mt-14 grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-x-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.92,
                behavior: "smooth",
              })
            }
            aria-label="Derulează în jos"
            className="absolute -top-14 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur-md transition-colors hover:bg-white/20 sm:flex"
          >
            Derulează
            <ArrowDown size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
