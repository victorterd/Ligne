"use client";

import { Compass, Buildings, HardHat, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { departments } from "@/lib/data";
import IconCardGrid from "./IconCardGrid";

const icons = { Compass, Buildings, HardHat, UsersThree };

export default function DepartmentsGrid() {
  const items = departments.map((dept) => ({
    icon: icons[dept.icon as keyof typeof icons],
    title: dept.title,
    copy: dept.copy,
  }));

  return <IconCardGrid items={items} columns={4} />;
}
