"use client";

import { Compass, Buildings, HardHat, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { departmentsMeta } from "@/lib/data";
import type { Dictionary } from "@/i18n/dictionaries";
import IconCardGrid from "./IconCardGrid";

const icons = { Compass, Buildings, HardHat, UsersThree };

export default function DepartmentsGrid({
  dict,
}: {
  dict: Dictionary["about"]["departments"]["items"];
}) {
  const items = departmentsMeta.map((dept) => ({
    icon: icons[dept.icon as keyof typeof icons],
    title: dict[dept.key].title,
    copy: dict[dept.key].copy,
  }));

  return <IconCardGrid items={items} columns={4} />;
}
