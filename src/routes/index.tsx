import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Factory, MessageSquareText, Ruler } from "lucide-react";
import { SmartImage } from "@/components/site/SmartImage";
import { company, industries, legacyImg, products, telHref } from "@/data/site";

const description =
  "LEXCELPACK manufactures and supplies PET bottles, PET preforms and plastic caps & closures for beverage, pharmaceutical, edible-oil, cosmetics and FMCG brands in Nigeria.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEXCELPACK | PET Bottles, Preforms and Caps & Closures in Nigeria" },
      { name: "description", content: description },
      { property: "og:title", content: "LEXCELPACK | PET Packaging Manufacturer, Otta, Nigeria" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <IntroSection />
      <QualitySection />
      <IndustriesStrip />
      <EnquiryCta />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b">
      <div className="container-site grid items-center gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="fade-up lg:col-span-6">
          <p className="eyebrow">PET packaging manufacturer · Otta, Nigeria</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
            PET bottles, preforms and closures for growing brands.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            LEXCELPACK manufactures and supplies PET packaging for beverage, pharmaceutical,
            edible-oil, cosmetics and FMCG businesses — from standard formats to custom
            requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/request-a-quote" className="btn btn-primary">
              Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link to="/products" className="btn btn-outline">
              Explore Products
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Prefer to talk? Call{" "}
            <a href={telHref(company.phones[0])} className="font-medium text-foreground hover:text-primary">
              {company.phones[0]}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${company.email}`} className="font-medium text-foreground hover:text-primary">
              {company.email}
            </a>
          </p>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-3 lg:col-span-6">
          <SmartImage
            src={legacyImg("hd-prod1.jpg")}
            alt="LEXCELPACK PET bottles"
            eager
            className="col-span-3 row-span-2 aspect-[3/4] rounded-md sm:aspect-auto sm:min-h-[26rem]"
          />
          <SmartImage
            src={legacyImg("hd-prod2.jpg")}
            alt="LEXCELPACK PET preforms"
            eager
            className="col-span-2 rounded-md"
          />
          <SmartImage
            src={legacyImg("hd-prod3.jpg")}
            alt="LEXCELPACK caps and closures"
            eager
            className="col-span-2 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

function ProductsSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="products-heading">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Products" title="Three core packaging categories" />
          <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            View all products <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <li key={p.slug}>
              <Link to={p.to} className="group block rounded-md">
                <SmartImage src={p.image} alt={p.imageAlt} className="aspect-[4/3] rounded-md" />
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-brand-red">0{i + 1}</span>
                  <h3 className="text-xl font-semibold text-navy group-hover:text-primary">{p.name}</h3>
                </div>
                <p className="mt-2 text-muted-foreground">{p.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="About LEXCELPACK" title="An established packaging partner in Ogun State" />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
          <p>
            From our facility in the Industrial Estate off Otta–Idi-roko Road, LEXCELPACK produces
            PET bottles, PET preforms and plastic caps &amp; closures for manufacturers across
            Nigeria.
          </p>
          <p>
            We work with businesses in beverages, pharmaceuticals, edible oil, cosmetics and
            fast-moving consumer goods to supply packaging that suits their products, filling
            lines and markets.
          </p>
          <Link to="/about" className="inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:underline">
            More about the company <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

const qualityPoints = [
  { icon: Factory, title: "In-house manufacturing", text: "Bottles, preforms and closures produced at our Otta facility." },
  { icon: ClipboardCheck, title: "Quality control", text: "Checks carried out during production to keep output consistent." },
  { icon: Ruler, title: "Custom requirements", text: "Shapes and capacities discussed to match your product and line." },
  { icon: MessageSquareText, title: "Technical guidance", text: "Talk to our team about selecting the right packaging format." },
];

function QualitySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <SmartImage
          src={legacyImg("hd-expert.jpg")}
          alt="LEXCELPACK production and quality team"
          className="aspect-[4/3] rounded-md"
        />
        <div>
          <SectionHeading
            eyebrow="Manufacturing & quality"
            title="Built around consistent production"
            text="Our manufacturing and quality-control processes are designed to deliver dependable packaging batch after batch."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {qualityPoints.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="mt-3 font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
          <Link to="/manufacturing-quality" className="btn btn-outline mt-10">
            Manufacturing &amp; Quality
          </Link>
        </div>
      </div>
    </section>
  );
}

function IndustriesStrip() {
  return (
    <section className="border-y py-10" aria-labelledby="industries-heading">
      <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <h2 id="industries-heading" className="eyebrow shrink-0">Industries we serve</h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {industries.map((i) => (
            <li key={i} className="text-lg font-medium text-navy">{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function EnquiryCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="rounded-lg bg-navy px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold tracking-tight text-navy-foreground md:text-4xl">
                Planning your next packaging order?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-navy-muted">
                Tell us about your product, quantities and packaging requirements, and our team
                will follow up with options.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link to="/request-a-quote" className="btn btn-primary">
                Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/resources/ask-the-expert" className="btn btn-on-navy">
                Ask the Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
