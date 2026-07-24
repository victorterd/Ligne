"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Intro({ dict }: { dict: Dictionary["intro"] }) {
  return (
    <section className="bg-paper px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.15] tracking-tight text-ink"
          >
            {dict.headingMain} <span className="text-ink-soft">{dict.headingSoft}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex shrink-0 items-center gap-3 text-sm text-ink-soft lg:flex-col lg:items-end lg:text-right"
          >
            <span className="font-display text-4xl leading-none text-accent">
              {dict.tagNumber}
            </span>
            <span className="max-w-[10rem]">{dict.tagLabel}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
