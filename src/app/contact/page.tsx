import type { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "Contact — Ligne Verticale",
  description:
    "Scrie-ne despre proiectul tău de construcție, renovare sau amenajare interioară.",
};

export default function ContactPage() {
  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Contact
          </p>
          <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink">
            Hai să vorbim despre proiectul tău.
          </h1>
          <p className="mt-5 text-ink-soft">
            Completează formularul sau scrie-ne direct — răspundem în cel mult
            48 de ore cu o estimare și un plan de start.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/project-house-garden.jpg"
                alt="Curte amenajată de Ligne Verticale, cu grădină și terasă de beton"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-3xl bg-mist p-7">
              <ul className="flex flex-col gap-4 text-sm text-ink">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <Phone size={16} />
                  </span>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="hover:text-accent"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <EnvelopeSimple size={16} />
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-accent"
                  >
                    {contactInfo.email}
                  </a>
                </li>
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
                    <li key={h.label} className="flex gap-2">
                      <span className="text-ink">{h.label}:</span>
                      {h.value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
                {[InstagramLogo, FacebookLogo, LinkedinLogo].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Rețea socială"
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
