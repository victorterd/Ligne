"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  projectFilterKeys,
  projectsMeta,
  type ProjectFilterKey,
} from "@/lib/data";
import type { Dictionary } from "@/i18n/dictionaries";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectsGrid({
  dict,
  cardDict,
  projectsDict,
}: {
  dict: Dictionary["projectsPage"];
  cardDict: Dictionary["projectCard"];
  projectsDict: Dictionary["projects"];
}) {
  const [active, setActive] = useState<ProjectFilterKey | "all">("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projectsMeta
        : projectsMeta.filter((project) => project.type === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["all", ...projectFilterKeys] as const).map((filter) => (
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
            {dict.filters[filter]}
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
                alt={projectsDict[project.slug].title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.06] ${
                  project.hoverImage ? "group-hover:opacity-0" : ""
                }`}
              />
              {project.hoverImage && (
                <Image
                  src={project.hoverImage}
                  alt={projectsDict[project.slug].title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {(project.priceBefore || project.priceAfter || project.priceRenovation) && (
                <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-2">
                  {project.priceBefore && (
                    <span className="rounded-full border border-line/60 bg-white/90 px-3 py-1 text-xs font-medium text-ink-soft backdrop-blur-sm">
                      {cardDict.beforeLabel}: {project.priceBefore}
                    </span>
                  )}
                  {project.priceAfter && (
                    <span className="rounded-full border border-accent/30 bg-accent-soft/95 px-3 py-1 text-xs font-medium text-accent-ink backdrop-blur-sm">
                      {cardDict.afterLabel}: {project.priceAfter}
                    </span>
                  )}
                  {project.priceRenovation && (
                    <span className="rounded-full border border-white/30 bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {cardDict.renovationLabel}: {project.priceRenovation}
                    </span>
                  )}
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
                  {projectsDict[project.slug].category}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  {projectsDict[project.slug].title}
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  {cardDict.durationLabel}: {projectsDict[project.slug].duration}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink-soft">{dict.empty}</p>
      )}
    </div>
  );
}
