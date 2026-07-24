"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectFilters, projects, type ProjectType } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectsGrid() {
  const [active, setActive] = useState<ProjectType | "Toate">("Toate");

  const filtered = useMemo(
    () =>
      active === "Toate"
        ? projects
        : projects.filter((project) => project.type === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["Toate", ...projectFilters] as const).map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === filter
                ? "border-ink bg-ink text-paper"
                : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease }}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  {project.location} — {project.year}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink-soft">
          Nu avem încă proiecte în această categorie.
        </p>
      )}
    </div>
  );
}
