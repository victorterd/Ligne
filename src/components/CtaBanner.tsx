"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function CtaBanner() {
  return (
    <section className="bg-paper px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-mist px-8 py-14 sm:px-14 sm:py-16 lg:flex-row lg:items-center"
      >
        <div className="max-w-xl">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink">
            Ai un proiect în minte?
          </h2>
          <p className="mt-3 text-ink-soft">
            Spune-ne despre casa sau spațiul tău — revenim în cel mult 48 de
            ore cu o estimare și un plan de start.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink py-4 pl-7 pr-4 text-sm font-medium text-paper transition-transform duration-300 hover:scale-[1.03]"
        >
          Hai să discutăm
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={15} weight="bold" />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
