"use client";

import { motion } from "framer-motion";
import {
  Buildings,
  PaintRoller,
  Armchair,
  Compass,
} from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/data";

const icons = { Buildings, PaintRoller, Armchair, Compass };

export default function Services() {
  return (
    <section className="border-y border-line bg-paper-dim px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-tight text-ink"
          >
            Ce construim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-ink-soft"
          >
            Patru servicii, o singură echipă — de la primul plan până la
            ultimul strat de vopsea.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col gap-6 bg-paper-dim p-7 transition-colors duration-300 hover:bg-paper"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-accent">
                  <Icon size={20} weight="light" />
                </span>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
