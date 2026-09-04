export const servicesMeta = [
  { key: "constructii", icon: "Buildings" },
  { key: "renovari", icon: "PaintRoller" },
  { key: "amenajari", icon: "Armchair" },
  { key: "curatare", icon: "Drop" },
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
  | "fatada-imbracata-in-lemn"
  | "bucatarie-cu-blat-din-marmura"
  | "casa-cu-gradina-interioara"
  | "spa-cu-jacuzzi-panoramic"
  | "vila-cu-curte-interioara"
  | "baie-cu-oglinda-rotunda"
  | "cabana-a-frame-cu-piscina";

export type ProjectMeta = {
  slug: ProjectSlug;
  type: ProjectFilterKey;
  location: string;
  year: string;
  priceBefore?: string;
  priceAfter?: string;
  priceRenovation?: string;
  priceConstruction?: string;
  image: string;
  hoverImage?: string;
};

export const projectsMeta: ProjectMeta[] = [
  {
    slug: "cabana-a-frame-cu-piscina",
    type: "renovation",
    location: "Brașov",
    year: "2025",
    priceConstruction: "200.000 €",
    image: "/images/project-aframe-villa-far.jpg",
    hoverImage: "/images/project-aframe-villa-close.jpg",
  },
  {
    slug: "vila-cu-curte-interioara",
    type: "construction",
    location: "București",
    year: "2025",
    priceBefore: "700.000 €",
    priceAfter: "1.300.000 €",
    priceRenovation: "200.000 €",
    image: "/images/project-villa-courtyard.jpg",
  },
  {
    slug: "baie-cu-oglinda-rotunda",
    type: "renovation",
    location: "Timișoara",
    year: "2025",
    image: "/images/project-bathroom.jpg",
  },
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
  {
    slug: "spa-cu-jacuzzi-panoramic",
    type: "exteriorDesign",
    location: "Brașov",
    year: "2025",
    image: "/images/project-spa-jacuzzi.jpg",
  },
];

export const projectTypeOptionCount = 4;

export const contactInfo = {
  phones: ["+40 792 887 908", "+40 723 555 500"],
  emails: ["info@ligneverticale.com", "bouhabibfelix@gmail.com"],
  address: "București, România",
  hours: [
    { key: "weekdays", value: "09:00 – 18:00" },
    { key: "saturday", value: "10:00 – 14:00" },
    { key: "sunday", value: null },
  ],
} as const;
