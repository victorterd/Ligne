import "server-only";
import type { Locale } from "@/i18n/config";

export type Dictionary = typeof import("@/dictionaries/ro.json");

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  ro: () => import("@/dictionaries/ro.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  loaders[locale]();
