import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { company, telHref } from "@/data/site";

export function ContactCard() {
  return (
    <address className="space-y-5 rounded-lg bg-surface p-6 not-italic md:p-8">
      <h2 className="text-xl font-semibold text-navy">Contact LEXCELPACK</h2>
      <div className="flex gap-3">
        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p className="text-sm leading-relaxed">
          {company.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
          <span className="mt-1 block text-muted-foreground">{company.poBox}</span>
        </p>
      </div>
      <div className="flex gap-3">
        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
        <ul className="space-y-1 text-sm">
          {company.phones.map((p) => (
            <li key={p}><a href={telHref(p)} className="hover:text-primary">{p}</a></li>
          ))}
        </ul>
      </div>
      <div className="flex gap-3">
        <Printer className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p className="text-sm">Fax: {company.fax}</p>
      </div>
      <div className="flex gap-3">
        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
        <a href={`mailto:${company.email}`} className="text-sm font-medium text-primary hover:underline">
          {company.email}
        </a>
      </div>
    </address>
  );
}
