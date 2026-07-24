import type { Metadata } from "next";
import Image from "next/image";
import { stats } from "@/lib/data";
import ValuesGrid from "@/components/ValuesGrid";
import DepartmentsGrid from "@/components/DepartmentsGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import CtaBanner from "@/components/CtaBanner";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Despre noi — Ligne Verticale",
  description:
    "Povestea, valorile și echipa din spatele Ligne Verticale — construcții și renovări cu precizie arhitecturală.",
};

export default function DespreNoiPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
              Despre noi
            </p>
            <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink">
              Construim de peste 15 ani, cu aceeași obsesie pentru detaliu.
            </h1>
            <p className="mt-6 max-w-lg text-ink-soft">
              Ligne Verticale a pornit de la o echipă mică de ingineri și
              arhitecți care credeau că un șantier bine condus se vede în
              fiecare linie a clădirii finite. Astăzi coordonăm proiecte
              rezidențiale și comerciale în toată țara, păstrând aceeași
              atenție pentru detaliu de la prima schiță până la ultima cheie
              predată.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/project-facade-wood.jpg"
                alt="Detaliu de fațadă îmbrăcată în lemn, proiect Ligne Verticale"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-4 sm:gap-x-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-ink sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-soft sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="border-y border-line bg-paper-dim px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-tight text-ink">
              Ce ne ghidează pe șantier
            </h2>
            <p className="mt-4 text-ink-soft">
              Patru principii pe care nu le negociem, indiferent de mărimea
              proiectului.
            </p>
          </AnimatedSection>
          <div className="mt-14">
            <ValuesGrid />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-tight text-ink">
              Cum lucrăm
            </h2>
            <p className="mt-4 text-ink-soft">
              Patru etape, un singur responsabil de proiect de la primul
              telefon până la recepția finală.
            </p>
          </AnimatedSection>
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-dim px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-tight text-ink">
              Echipa din spatele fiecărui șantier
            </h2>
            <p className="mt-4 text-ink-soft">
              Patru departamente care lucrează sincronizat, pentru ca niciun
              detaliu să nu rămână la voia întâmplării.
            </p>
          </AnimatedSection>
          <div className="mt-14">
            <DepartmentsGrid />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
