import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ValuesGrid from "@/components/ValuesGrid";
import DepartmentsGrid from "@/components/DepartmentsGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import CtaBanner from "@/components/CtaBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return dict.meta.about;
}

export default async function DespreNoiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { about, stats } = dict;

  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
              {about.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink">
              {about.hero.heading}
            </h1>
            <p className="mt-6 max-w-lg text-ink-soft">{about.hero.subtitle}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/project-facade-wood.jpg"
                alt="Timber-clad façade detail, Ligne Verticale project"
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
              {about.values.heading}
            </h2>
            <p className="mt-4 text-ink-soft">{about.values.subtitle}</p>
          </AnimatedSection>
          <div className="mt-14">
            <ValuesGrid dict={about.values.items} />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-tight text-ink">
              {about.process.heading}
            </h2>
            <p className="mt-4 text-ink-soft">{about.process.subtitle}</p>
          </AnimatedSection>
          <div className="mt-16">
            <ProcessTimeline dict={about.process.steps} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-dim px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-tight text-ink">
              {about.departments.heading}
            </h2>
            <p className="mt-4 text-ink-soft">{about.departments.subtitle}</p>
          </AnimatedSection>
          <div className="mt-14">
            <DepartmentsGrid dict={about.departments.items} />
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict.cta} />
    </>
  );
}
