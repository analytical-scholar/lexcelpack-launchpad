import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageScaffold";
import { ProductPage } from "@/components/site/ProductPage";
import { products } from "@/data/site";

const product = products.find((p) => p.slug === "pet-preforms")!;

export const Route = createFileRoute("/products/pet-preforms")({
  head: () => pageHead("PET Preforms", product.description, product.to),
  component: () => <ProductPage product={product} />,
});
