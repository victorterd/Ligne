"use client";

import { Ruler, ChatCircleText, Leaf, Handshake } from "@phosphor-icons/react/dist/ssr";
import { valuesMeta } from "@/lib/data";
import type { Dictionary } from "@/i18n/dictionaries";
import IconCardGrid from "./IconCardGrid";

const icons = { Ruler, ChatCircleText, Leaf, Handshake };

export default function ValuesGrid({
  dict,
}: {
  dict: Dictionary["about"]["values"]["items"];
}) {
  const items = valuesMeta.map((value) => ({
    icon: icons[value.icon as keyof typeof icons],
    title: dict[value.key].title,
    copy: dict[value.key].copy,
  }));

  return <IconCardGrid items={items} columns={4} />;
}
