"use client";

import { Ruler, ChatCircleText, Leaf, Handshake } from "@phosphor-icons/react/dist/ssr";
import { values } from "@/lib/data";
import IconCardGrid from "./IconCardGrid";

const icons = { Ruler, ChatCircleText, Leaf, Handshake };

export default function ValuesGrid() {
  const items = values.map((value) => ({
    icon: icons[value.icon as keyof typeof icons],
    title: value.title,
    copy: value.copy,
  }));

  return <IconCardGrid items={items} columns={4} />;
}
