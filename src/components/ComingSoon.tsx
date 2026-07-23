import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function ComingSoon({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center px-4 pb-20 pt-32 text-center sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-ink">
        {title}
      </h1>
      <p className="mt-5 max-w-md text-ink-soft">{copy}</p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-5 pr-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-[1.03]"
        >
          Contactează-ne
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={14} weight="bold" />
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          Înapoi la Acasă
        </Link>
      </div>
    </section>
  );
}
