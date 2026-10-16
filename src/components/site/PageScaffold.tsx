import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Clock } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs?: { label: string; to: string }[];
}

export function PageHero({ eyebrow, title, intro, crumbs }: PageHeroProps) {
  return (
    <section className="border-b bg-surface">
      <div className="container-site py-14 md:py-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.to} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link to={c.to} className="hover:text-primary">{c.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}

export function PhaseNotice({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-md border bg-surface p-4 text-sm text-muted-foreground" role="note">
      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

export function NextStep({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="container-site py-14">
      <div className="flex flex-col gap-6 border-t pt-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-navy">{title}</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to={primary.to} className="btn btn-primary">
            {primary.label} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          {secondary && (
            <Link to={secondary.to} className="btn btn-outline">{secondary.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}

/** Builds route head() metadata consistently. */
export function pageHead(title: string, description: string, path: string) {
  const full = `${title} | LEXCELPACK`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
