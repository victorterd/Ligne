export const servicesMeta = [
  { key: "constructii", icon: "Buildings" },
  { key: "renovari", icon: "PaintRoller" },
  { key: "amenajari", icon: "Armchair" },
  { key: "consultanta", icon: "Compass" },
] as const;

export const valuesMeta = [
  { key: "precizie", icon: "Ruler" },
  { key: "transparenta", icon: "ChatCircleText" },
  { key: "sustenabilitate", icon: "Leaf" },
  { key: "parteneriat", icon: "Handshake" },
] as const;

export const departmentsMeta = [
  { key: "arhitectura", icon: "Compass" },
  { key: "inginerie", icon: "Buildings" },
  { key: "executie", icon: "HardHat" },
  { key: "management", icon: "UsersThree" },
] as const;

export const processMeta = [
  { key: "consultanta" },
  { key: "proiectare" },
  { key: "executie" },
  { key: "predare" },
] as const;

export type ProjectFilterKey =
  | "construction"
  | "renovation"
  | "interiorDesign"
  | "exteriorDesign";

export const projectFilterKeys: ProjectFilterKey[] = [
  "construction",
  "renovation",
  "interiorDesign",
  "exteriorDesign",
];

export type ProjectSlug =
  | "vila-cu-terasa-suspendata"
  | "bucatarie-in-tonuri-de-negru"
  | "living-cu-accente-de-cupru"
  | "fatada-imbracata-in-lemn"
  | "bucatarie-cu-blat-din-marmura"
  | "casa-cu-gradina-interioara";

export type ProjectMeta = {
  slug: ProjectSlug;
  type: ProjectFilterKey;
  location: string;
  year: string;
  image: string;
};

export const projectsMeta: ProjectMeta[] = [
  {
    slug: "vila-cu-terasa-suspendata",
    type: "construction",
    location: "Cluj-Napoca",
    year: "2025",
    image: "/images/hero-villa.jpg",
  },
  {
    slug: "bucatarie-in-tonuri-de-negru",
    type: "renovation",
    location: "București",
    year: "2025",
    image: "/images/project-kitchen-dark.jpg",
  },
  {
    slug: "living-cu-accente-de-cupru",
    type: "interiorDesign",
    location: "Timișoara",
    year: "2024",
    image: "/images/project-living-room.jpg",
  },
  {
    slug: "fatada-imbracata-in-lemn",
    type: "construction",
    location: "Brașov",
    year: "2024",
    image: "/images/project-facade-wood.jpg",
  },
  {
    slug: "bucatarie-cu-blat-din-marmura",
    type: "renovation",
    location: "Iași",
    year: "2024",
    image: "/images/project-kitchen-marble.jpg",
  },
  {
    slug: "casa-cu-gradina-interioara",
    type: "exteriorDesign",
    location: "Cluj-Napoca",
    year: "2023",
    image: "/images/project-house-garden.jpg",
  },
];

export const projectTypeOptionCount = 4;

export const contactInfo = {
  phone: "+40 712 345 678",
  email: "contact@ligneverticale.ro",
  address: "București, România",
  hours: [
    { key: "weekdays", value: "09:00 – 18:00" },
    { key: "saturday", value: "10:00 – 14:00" },
    { key: "sunday", value: null },
  ],
} as const;
