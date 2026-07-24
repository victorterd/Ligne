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

export type ProjectType =
  | "Construcții"
  | "Renovări"
  | "Amenajări interioare"
  | "Amenajări exterioare";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  category: string;
  location: string;
  year: string;
  image: string;
};

export const projectFilters: ProjectType[] = [
  "Construcții",
  "Renovări",
  "Amenajări interioare",
  "Amenajări exterioare",
];

export const projects: Project[] = [
  {
    slug: "vila-cu-terasa-suspendata",
    title: "Vilă cu terasă suspendată",
    type: "Construcții",
    category: "Construcție rezidențială",
    location: "Cluj-Napoca",
    year: "2025",
    image: "/images/hero-villa.jpg",
  },
  {
    slug: "bucatarie-in-tonuri-de-negru",
    title: "Bucătărie în tonuri de negru",
    type: "Renovări",
    category: "Renovare interioară",
    location: "București",
    year: "2025",
    image: "/images/project-kitchen-dark.jpg",
  },
  {
    slug: "living-cu-accente-de-cupru",
    title: "Living cu accente de cupru",
    type: "Amenajări interioare",
    category: "Amenajare interioară",
    location: "Timișoara",
    year: "2024",
    image: "/images/project-living-room.jpg",
  },
  {
    slug: "fatada-imbracata-in-lemn",
    title: "Fațadă îmbrăcată în lemn",
    type: "Construcții",
    category: "Construcție rezidențială",
    location: "Brașov",
    year: "2024",
    image: "/images/project-facade-wood.jpg",
  },
  {
    slug: "bucatarie-cu-blat-din-marmura",
    title: "Bucătărie cu blat din marmură",
    type: "Renovări",
    category: "Renovare interioară",
    location: "Iași",
    year: "2024",
    image: "/images/project-kitchen-marble.jpg",
  },
  {
    slug: "casa-cu-gradina-interioara",
    title: "Casă cu grădină interioară",
    type: "Amenajări exterioare",
    category: "Amenajare exterioară",
    location: "Cluj-Napoca",
    year: "2023",
    image: "/images/project-house-garden.jpg",
  },
];

export const values = [
  {
    icon: "Ruler",
    title: "Precizie",
    copy: "Fiecare cotă și fiecare îmbinare contează. Verificăm de două ori ce alții verifică o singură dată.",
  },
  {
    icon: "ChatCircleText",
    title: "Transparență",
    copy: "Bugete clare, termene realiste și rapoarte constante de șantier — fără surprize la final de lucrare.",
  },
  {
    icon: "Leaf",
    title: "Sustenabilitate",
    copy: "Alegem materiale și soluții energetice care reduc costurile pe termen lung, nu doar pe hârtie.",
  },
  {
    icon: "Handshake",
    title: "Parteneriat pe termen lung",
    copy: "Rămânem alături de clienți și după recepția lucrării, pentru mentenanță și extinderi ulterioare.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Consultanță",
    copy: "Discutăm despre teren, buget și viziunea ta și stabilim un plan realist încă din prima întâlnire.",
  },
  {
    step: "02",
    title: "Proiectare",
    copy: "Echipa de arhitecți transformă ideea într-un proiect tehnic complet, avizat și pregătit de execuție.",
  },
  {
    step: "03",
    title: "Execuție",
    copy: "Echipele de șantier lucrează după grafic, cu verificări de calitate la fiecare etapă a lucrării.",
  },
  {
    step: "04",
    title: "Predare & mentenanță",
    copy: "Predăm lucrarea la cheie și rămânem disponibili pentru garanție, service și mentenanță.",
  },
];

export const departments = [
  {
    icon: "Compass",
    title: "Arhitectură & Design",
    copy: "Transformă ideile în planuri clare, cu soluții spațiale potrivite fiecărui teren și buget.",
  },
  {
    icon: "Buildings",
    title: "Inginerie structurală",
    copy: "Calculează și verifică fiecare structură, de la fundație până la ultimul element de acoperiș.",
  },
  {
    icon: "HardHat",
    title: "Execuție pe șantier",
    copy: "Maiștri și echipe cu experiență, prezenți zilnic pe șantier, coordonați de un singur responsabil.",
  },
  {
    icon: "UsersThree",
    title: "Project management",
    copy: "Coordonează termene, furnizori și bugete, de la semnarea contractului până la recepția finală.",
  },
] as const;

export const projectTypes = [
  "Construcție nouă",
  "Renovare",
  "Amenajare interioară",
  "Altele",
];

export const contactInfo = {
  phone: "+40 712 345 678",
  email: "contact@ligneverticale.ro",
  address: "București, România",
  hours: [
    { label: "Luni – Vineri", value: "09:00 – 18:00" },
    { label: "Sâmbătă", value: "10:00 – 14:00" },
    { label: "Duminică", value: "Închis" },
  ],
};
