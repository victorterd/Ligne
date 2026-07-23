# Ligne Verticale

Website pentru Ligne Verticale, firmă de construcții și renovări. Construit cu Next.js (App Router), Tailwind CSS și Framer Motion.

Momentan este implementată doar pagina de Acasă (`/`); paginile Proiecte, Despre noi și Contact există ca pagini „în curând" pentru navigare, urmând să fie dezvoltate ulterior.

## Development

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Structură

- `src/app` — rutele (Acasă, Proiecte, Despre noi, Contact)
- `src/components` — Navbar, Hero, secțiunile de pe Acasă, Footer
- `src/lib/data.ts` — conținutul editorial (nav, statistici, servicii, proiecte)
- `public/images` — fotografii folosite pe pagina de Acasă
