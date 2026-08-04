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
  | "living-cu-accente-de-cupru"
  | "fatada-imbracata-in-lemn"
  | "bucatarie-cu-blat-din-marmura"
  | "casa-cu-gradina-interioara"
  | "sauna-cu-lumini-led"
  | "spa-cu-jacuzzi-panoramic"
  | "vila-cu-curte-si-portic"
  | "baie-cu-oglinda-rotunda";

export type ProjectMeta = {
  slug: ProjectSlug;
  type: ProjectFilterKey;
  location: string;
  year: string;
  priceBefore: string;
  priceAfter: string;
  image: string;
};

export const projectsMeta: ProjectMeta[] = [
  {
    slug: "vila-cu-terasa-suspendata",
    type: "construction",
    location: "Cluj-Napoca",
    year: "2025",
    priceBefore: "142.000 €",
    priceAfter: "185.000 €",
    image: "/images/hero-villa.jpg",
  },
  {
    slug: "bucatarie-in-tonuri-de-negru",
    type: "renovation",
    location: "București",
    year: "2025",
    priceBefore: "8.200 €",
    priceAfter: "12.500 €",
    image: "/images/project-kitchen-dark.jpg",
  },
  {
    slug: "living-cu-accente-de-cupru",
    type: "interiorDesign",
    location: "Timișoara",
    year: "2024",
    priceBefore: "6.500 €",
    priceAfter: "9.800 €",
    image: "/images/project-living-room.jpg",
  },
  {
    slug: "fatada-imbracata-in-lemn",
    type: "construction",
    location: "Brașov",
    year: "2024",
    priceBefore: "31.000 €",
    priceAfter: "42.000 €",
    image: "/images/project-facade-wood.jpg",
  },
  {
    slug: "bucatarie-cu-blat-din-marmura",
    type: "renovation",
    location: "Iași",
    year: "2024",
    priceBefore: "10.400 €",
    priceAfter: "15.200 €",
    image: "/images/project-kitchen-marble.jpg",
  },
  {
    slug: "casa-cu-gradina-interioara",
    type: "exteriorDesign",
    location: "Cluj-Napoca",
    year: "2023",
    priceBefore: "19.500 €",
    priceAfter: "27.000 €",
    image: "/images/project-house-garden.jpg",
  },
  {
    slug: "sauna-cu-lumini-led",
    type: "interiorDesign",
    location: "Cluj-Napoca",
    year: "2025",
    priceBefore: "4.800 €",
    priceAfter: "9.200 €",
    image: "/images/project-sauna.jpg",
  },
  {
    slug: "spa-cu-jacuzzi-panoramic",
    type: "exteriorDesign",
    location: "Brașov",
    year: "2025",
    priceBefore: "22.000 €",
    priceAfter: "34.500 €",
    image: "/images/project-spa-jacuzzi.jpg",
  },
  {
    slug: "vila-cu-curte-si-portic",
    type: "construction",
    location: "București",
    year: "2025",
    priceBefore: "168.000 €",
    priceAfter: "215.000 €",
    image: "/images/project-villa-courtyard.jpg",
  },
  {
    slug: "baie-cu-oglinda-rotunda",
    type: "renovation",
    location: "Timișoara",
    year: "2025",
    priceBefore: "5.600 €",
    priceAfter: "8.900 €",
    image: "/images/project-bathroom.jpg",
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
