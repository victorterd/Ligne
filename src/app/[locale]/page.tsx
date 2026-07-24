import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import ProjectsShowcase from "@/components/ProjectsShowcase";
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
  return dict.meta.home;
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Intro dict={dict.intro} />
      <Services dict={dict.services} />
      <ProjectsShowcase
        locale={locale}
        dict={dict.projectsShowcase}
        cardDict={dict.projectCard}
        projectsDict={dict.projects}
      />
      <CtaBanner locale={locale} dict={dict.cta} />
    </>
  );
}
