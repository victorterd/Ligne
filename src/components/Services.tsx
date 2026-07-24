"use client";

import { motion } from "framer-motion";
import {
  Buildings,
  PaintRoller,
  Armchair,
  Compass,
} from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/data";
import IconCardGrid from "./IconCardGrid";

const icons = { Buildings, PaintRoller, Armchair, Compass };

export default function Services() {
  const items = services.map((service) => ({
    icon: icons[service.icon as keyof typeof icons],
    title: service.title,
    copy: service.copy,
  }));

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

        <div className="mt-14">
          <IconCardGrid items={items} columns={4} />
        </div>
      </div>
    </section>
  );
}
