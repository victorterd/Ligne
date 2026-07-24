"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProcessTimeline() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {process.map((item, i) => (
        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.1, ease }}
          className="relative pl-6"
        >
          <span
            aria-hidden
            className="absolute left-0 top-1 h-full w-px bg-line"
          />
          <span
            aria-hidden
            className="absolute -left-[3px] top-1 h-[7px] w-[7px] rounded-full bg-accent"
          />
          <p className="font-display text-3xl text-accent">{item.step}</p>
          <h3 className="mt-3 text-lg font-medium tracking-tight text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {item.copy}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
