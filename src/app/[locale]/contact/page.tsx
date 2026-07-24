import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { contactInfo } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
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
  return dict.meta.contact;
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { contactPage } = dict;

  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            {contactPage.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink">
            {contactPage.heading}
          </h1>
          <p className="mt-5 text-ink-soft">{contactPage.subtitle}</p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <AnimatedSection delay={0.1}>
            <ContactForm dict={contactPage.form} />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/project-house-garden.jpg"
                alt="Outdoor courtyard designed by Ligne Verticale, with garden and concrete terrace"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-3xl bg-mist p-7">
              <ul className="flex flex-col gap-4 text-sm text-ink">
                {contactInfo.phones.map((phone) => (
                  <li key={phone} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                      <Phone size={16} />
                    </span>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="hover:text-accent"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
                {contactInfo.emails.map((email) => (
                  <li key={email} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                      <EnvelopeSimple size={16} />
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-accent"
                    >
                      {email}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <MapPin size={16} />
                  </span>
                  {contactInfo.address}
                </li>
              </ul>

              <div className="mt-6 flex items-start gap-3 border-t border-line pt-6 text-sm text-ink-soft">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <ul className="flex flex-col gap-1">
                  {contactInfo.hours.map((h) => (
                    <li key={h.key} className="flex gap-2">
                      <span className="text-ink">
                        {contactPage.hours[h.key]}:
                      </span>
                      {h.value ?? contactPage.hours.closed}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
                {[InstagramLogo, FacebookLogo, LinkedinLogo].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social network"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
