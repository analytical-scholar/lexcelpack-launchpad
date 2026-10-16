import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { NextStep, PageHero, pageHead } from "@/components/site/PageScaffold";
import { SmartImage } from "@/components/site/SmartImage";
import { products } from "@/data/site";

export const Route = createFileRoute("/products/")({
  head: () =>
    pageHead(
      "Products",
      "PET bottles, PET preforms and plastic caps & closures from LEXCELPACK for beverage, pharmaceutical, edible-oil, cosmetics and FMCG packaging.",
      "/products",
    ),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="PET packaging products"
        intro="LEXCELPACK supplies three core categories of plastic packaging. Select a category to see applications and request current options."
        crumbs={[{ label: "Products", to: "/products" }]}
      />
      <section className="container-site py-14">
        <ul className="grid gap-10 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <Link to={p.to} className="group block rounded-md">
                <SmartImage src={p.image} alt={p.imageAlt} className="aspect-[4/3] rounded-md" />
                <h2 className="mt-5 text-xl font-semibold text-navy group-hover:text-primary">{p.name}</h2>
                <p className="mt-2 text-muted-foreground">{p.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View category <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <NextStep
        title="Not sure which format you need?"
        text="Our team can help you choose between bottle, preform and closure options."
        primary={{ label: "Ask the Expert", to: "/resources/ask-the-expert" }}
        secondary={{ label: "Request a Quote", to: "/request-a-quote" }}
      />
    </>
  );
}
