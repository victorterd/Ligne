import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Contact — Ligne Verticale",
};

export default function ContactPage() {
  return (
    <ComingSoon
      eyebrow="Contact"
      title="Formularul de contact vine în curând."
      copy="Pentru orice proiect, ne poți scrie deja la contact@ligneverticale.ro sau suna la +40 712 345 678."
    />
  );
}
