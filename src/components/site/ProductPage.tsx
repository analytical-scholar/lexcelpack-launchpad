import { CheckCircle2 } from "lucide-react";
import type { ProductCategory } from "@/data/site";
import { NextStep, PageHero, PhaseNotice } from "./PageScaffold";
import { SmartImage } from "./SmartImage";

export function ProductPage({ product }: { product: ProductCategory }) {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={product.name}
        intro={product.description}
        crumbs={[{ label: "Products", to: "/products" }, { label: product.name, to: product.to }]}
      />
      <section className="container-site grid gap-12 py-14 lg:grid-cols-2">
        <SmartImage src={product.image} alt={product.imageAlt} className="aspect-[4/3] rounded-md" />
        <div>
          <h2 className="text-2xl font-semibold text-navy">
            {product.slug === "caps-closures" ? "Styles" : "Applications"}
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {product.applications.map((a) => (
              <li key={a} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <PhaseNotice>
              Detailed specifications ({product.toConfirm.join(", ").toLowerCase()}) will be published
              once confirmed by LEXCELPACK. For current options, request a quote or contact our team.
            </PhaseNotice>
          </div>
        </div>
      </section>
      <NextStep
        title={`Need ${product.name.toLowerCase()} for your product?`}
        text="Share your application, quantities and any custom requirements."
        primary={{ label: "Request a Quote", to: "/request-a-quote" }}
        secondary={{ label: "Ask the Expert", to: "/resources/ask-the-expert" }}
      />
    </>
  );
}
