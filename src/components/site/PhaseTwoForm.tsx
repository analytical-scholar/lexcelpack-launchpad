import { PhaseNotice } from "./PageScaffold";
import { company } from "@/data/site";

interface Field {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
}

/** Visual preview of a future form. All controls are disabled; nothing is submitted. */
export function PhaseTwoForm({ title, fields }: { title: string; fields: Field[] }) {
  const base =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-70";
  return (
    <div className="rounded-lg border p-6 md:p-8">
      <h2 className="text-xl font-semibold text-navy">{title}</h2>
      <div className="mt-4">
        <PhaseNotice>
          <strong className="text-foreground">Phase 2 interface — not yet connected.</strong> This form
          is a preview and cannot be submitted. Please email{" "}
          <a className="font-medium text-primary underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>{" "}
          or call us in the meantime.
        </PhaseNotice>
      </div>
      <form className="mt-6 grid gap-4 sm:grid-cols-2" aria-disabled="true" onSubmit={(e) => e.preventDefault()}>
        <fieldset disabled className="contents">
          {fields.map((f) => (
            <div key={f.id} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
              <label htmlFor={f.id} className="text-sm font-medium">{f.label}</label>
              {f.type === "textarea" ? (
                <textarea id={f.id} rows={4} className={base} />
              ) : f.type === "select" ? (
                <select id={f.id} className={base}>
                  {f.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={f.id} type={f.type ?? "text"} className={base} />
              )}
            </div>
          ))}
          <div className="sm:col-span-2">
            <button type="submit" className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
              Submit (available in Phase 2)
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
