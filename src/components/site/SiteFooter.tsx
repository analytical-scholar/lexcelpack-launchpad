import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { company, products, telHref } from "@/data/site";
import { Logo } from "./Logo";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Manufacturing & Quality", to: "/manufacturing-quality" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];
const resourceLinks = [
  { label: "FAQ", to: "/resources/faq" },
  { label: "Ask the Expert", to: "/resources/ask-the-expert" },
  { label: "Request a Quote", to: "/request-a-quote" },
];

function Col({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-navy-foreground">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-navy-muted hover:text-navy-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Manufacturer and supplier of PET bottles, PET preforms, and plastic caps &amp; closures,
            based in Otta, Ogun State, Nigeria.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
          <Col title="Products" links={[{ label: "All products", to: "/products" }, ...products.map((p) => ({ label: p.name, to: p.to }))]} />
          <Col title="Company" links={companyLinks} />
          <Col title="Resources" links={resourceLinks} />
        </div>
        <address className="space-y-3 text-sm not-italic lg:col-span-4">
          <h2 className="text-sm font-semibold text-navy-foreground">Contact</h2>
          <p className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              {company.addressLines.join(", ")}
              <br />
              {company.poBox}
            </span>
          </p>
          <p className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {company.phones.map((p) => (
                <a key={p} href={telHref(p)} className="hover:text-navy-foreground">
                  {p}
                </a>
              ))}
            </span>
          </p>
          <p className="flex gap-3">
            <Printer className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>Fax: {company.fax}</span>
          </p>
          <p className="flex gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <a href={`mailto:${company.email}`} className="hover:text-navy-foreground">
              {company.email}
            </a>
          </p>
        </address>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} LEXCELPACK. All rights reserved.</p>
          <p>Otta, Ogun State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
