import AnimatedSection from "@/components/AnimatedSection";

type LegalContent = {
  eyebrow: string;
  heading: string;
  updated: string;
  intro: string;
  sections: { title: string; body: string }[];
};

export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-tight text-ink">
            {content.heading}
          </h1>
          <p className="mt-4 text-sm text-ink-soft/70">{content.updated}</p>
          <p className="mt-6 text-ink-soft">{content.intro}</p>
        </AnimatedSection>

        <div className="mt-12 flex flex-col gap-10">
          {content.sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={Math.min(i * 0.05, 0.3)}>
              <h2 className="text-lg font-medium tracking-tight text-ink">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{section.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
