import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Proiecte — Ligne Verticale",
  description:
    "O selecție din construcțiile, renovările și amenajările realizate de Ligne Verticale.",
};

export default function ProiectePage() {
  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Proiecte
          </p>
          <h1 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-ink">
            Fiecare proiect are propria poveste de șantier.
          </h1>
          <p className="mt-5 max-w-xl text-ink-soft">
            De la structuri ridicate de la zero, până la renovări complete și
            amenajări de interior — o selecție din lucrările Ligne Verticale
            din ultimii ani.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <ProjectsGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
