import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageScaffold";
import { ProductPage } from "@/components/site/ProductPage";
import { products } from "@/data/site";

const product = products.find((p) => p.slug === "caps-closures")!;

export const Route = createFileRoute("/products/caps-closures")({
  head: () => pageHead("Caps & Closures", product.description, product.to),
  component: () => <ProductPage product={product} />,
});
