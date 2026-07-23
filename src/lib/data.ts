export const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/proiecte", label: "Proiecte" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "120+", label: "Proiecte finalizate" },
  { value: "15 ani", label: "Experiență pe șantier" },
  { value: "40+", label: "Specialiști în echipă" },
  { value: "98%", label: "Clienți mulțumiți" },
];

export const services = [
  {
    icon: "Buildings",
    title: "Construcții noi",
    copy: "Ridicăm case și clădiri de la fundație până la acoperiș, cu structuri solide și execuție ireproșabilă.",
  },
  {
    icon: "PaintRoller",
    title: "Renovări complete",
    copy: "Transformăm spații vechi și obosite în locuințe moderne, eficiente energetic și pline de personalitate.",
  },
  {
    icon: "Armchair",
    title: "Amenajări interioare",
    copy: "Proiectăm și amenajăm interioare care îmbină funcționalitatea zilnică cu o estetică rafinată.",
  },
  {
    icon: "Compass",
    title: "Consultanță & proiectare",
    copy: "Te ghidăm de la prima schiță până la planul tehnic final, cu soluții adaptate bugetului tău.",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "vila-cu-terasa-suspendata",
    title: "Vilă cu terasă suspendată",
    category: "Construcție rezidențială",
    location: "Cluj-Napoca",
    year: "2025",
    image: "/images/hero-villa.jpg",
  },
  {
    slug: "bucatarie-in-tonuri-de-negru",
    title: "Bucătărie în tonuri de negru",
    category: "Renovare interioară",
    location: "București",
    year: "2025",
    image: "/images/project-kitchen-dark.jpg",
  },
  {
    slug: "living-cu-accente-de-cupru",
    title: "Living cu accente de cupru",
    category: "Amenajare interioară",
    location: "Timișoara",
    year: "2024",
    image: "/images/project-living-room.jpg",
  },
  {
    slug: "fatada-imbracata-in-lemn",
    title: "Fațadă îmbrăcată în lemn",
    category: "Construcție rezidențială",
    location: "Brașov",
    year: "2024",
    image: "/images/project-facade-wood.jpg",
  },
  {
    slug: "bucatarie-cu-blat-din-marmura",
    title: "Bucătărie cu blat din marmură",
    category: "Renovare interioară",
    location: "Iași",
    year: "2024",
    image: "/images/project-kitchen-marble.jpg",
  },
  {
    slug: "casa-cu-gradina-interioara",
    title: "Casă cu grădină interioară",
    category: "Amenajare exterioară",
    location: "Cluj-Napoca",
    year: "2023",
    image: "/images/project-house-garden.jpg",
  },
];
