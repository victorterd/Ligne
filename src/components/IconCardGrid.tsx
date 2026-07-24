"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type Item = {
  icon: ComponentType<{ size?: number; weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone" }>;
  title: string;
  copy: string;
};

export default function IconCardGrid({
  items,
  columns = 4,
}: {
  items: Item[];
  columns?: 2 | 3 | 4;
}) {
  const colsClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line ${colsClass}`}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease,
            }}
            className="group flex flex-col gap-6 bg-paper-dim p-7 transition-colors duration-300 hover:bg-paper"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-accent">
              <Icon size={20} weight="light" />
            </span>
            <div>
              <h3 className="text-lg font-medium tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
