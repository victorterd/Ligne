import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Proiecte — Ligne Verticale",
};

export default function ProiectePage() {
  return (
    <ComingSoon
      eyebrow="Proiecte"
      title="Portofoliul nostru complet vine în curând."
      copy="Pregătim o galerie detaliată cu toate proiectele Ligne Verticale. Până atunci, poți vedea o selecție pe pagina de Acasă."
    />
  );
}
