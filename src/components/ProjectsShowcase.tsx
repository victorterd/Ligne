"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { projectsMeta } from "@/lib/data";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ProjectsShowcase({
  locale,
  dict,
  cardDict,
  projectsDict,
}: {
  locale: Locale;
  dict: Dictionary["projectsShowcase"];
  cardDict: Dictionary["projectCard"];
  projectsDict: Dictionary["projects"];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const [autoPaused, setAutoPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let debounceTimer: ReturnType<typeof setTimeout>;

    const updateActive = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScrollLeft - 2) {
        setActive(projectsMeta.length - 1);
        return;
      }
      if (track.scrollLeft <= 2) {
        setActive(0);
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActive(closestIndex);
    };

    const onScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(updateActive, 100);
    };

    updateActive();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(debounceTimer);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta =
      cardRect.left + cardRect.width / 2 - (trackRect.left + trackRect.width / 2);

    track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
  };

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (autoPaused) return;
    const timer = setInterval(() => {
      scrollToIndex((activeRef.current + 1) % projectsMeta.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPaused]);

  return (
    <section className="bg-ink px-4 py-24 text-paper sm:px-6 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.28em] text-white/50"
            >
              {dict.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-tight"
            >
              {dict.heading}
            </motion.h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-display text-lg text-white/50">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(projectsMeta.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => scrollToIndex(Math.max(0, active - 1))}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10 disabled:opacity-30"
                disabled={active === 0}
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() =>
                  scrollToIndex(Math.min(projectsMeta.length - 1, active + 1))
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10 disabled:opacity-30"
                disabled={active === projectsMeta.length - 1}
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setAutoPaused(true)}
          onMouseLeave={() => setAutoPaused(false)}
          onPointerDown={() => setAutoPaused(true)}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {projectsMeta.map((project, i) => (
            <div
              key={project.slug}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-index={i}
              className="group relative shrink-0 snap-center overflow-hidden rounded-2xl transition-[opacity,transform] duration-500 ease-out"
              style={{
                width: "min(78vw, 560px)",
                opacity: active === i ? 1 : 0.45,
                transform: active === i ? "scale(1)" : "scale(0.94)",
              }}
            >
              <Link
                href={`/${locale}/proiecte`}
                className="relative block aspect-[4/5] w-full sm:aspect-[3/4]"
              >
                <Image
                  src={project.image}
                  alt={projectsDict[project.slug].title}
                  fill
                  sizes="(max-width: 640px) 80vw, 560px"
                  className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.05] ${
                    project.hoverImage ? "group-hover:opacity-0" : ""
                  }`}
                />
                {project.hoverImage && (
                  <Image
                    src={project.hoverImage}
                    alt={projectsDict[project.slug].title}
                    fill
                    sizes="(max-width: 640px) 80vw, 560px"
                    className="object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {(project.priceBefore ||
                  project.priceAfter ||
                  project.priceRenovation ||
                  project.priceConstruction) && (
                  <div className="absolute left-4 right-16 top-4 flex flex-wrap gap-2">
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
                    {project.priceConstruction && (
                      <span className="rounded-full border border-white/30 bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {cardDict.constructionLabel}: {project.priceConstruction}
                      </span>
                    )}
                  </div>
                )}

                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>

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
              </Link>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center sm:justify-start"
        >
          <Link
            href={`/${locale}/proiecte`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
          >
            {dict.viewAll}
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
