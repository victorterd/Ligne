import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBanner from "@/components/CtaBanner";
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
  return dict.meta.projects;
}

export default async function ProiectePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            {dict.projectsPage.eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-ink">
            {dict.projectsPage.heading}
          </h1>
          <p className="mt-5 max-w-xl text-ink-soft">
            {dict.projectsPage.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <ProjectsGrid
            dict={dict.projectsPage}
            cardDict={dict.projectCard}
            projectsDict={dict.projects}
          />
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict.cta} />
    </>
  );
}
