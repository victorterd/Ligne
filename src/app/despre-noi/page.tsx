import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Despre noi — Ligne Verticale",
};

export default function DespreNoiPage() {
  return (
    <ComingSoon
      eyebrow="Despre noi"
      title="Povestea echipei Ligne Verticale, în curând aici."
      copy="Lucrăm la o pagină care să prezinte echipa, valorile și procesul din spatele fiecărui șantier."
    />
  );
}
