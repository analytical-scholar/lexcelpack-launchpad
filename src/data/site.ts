// Single source of truth for verified company facts and product categories.
// Do not add certifications, capacities, clients or specs here unless confirmed by LEXCELPACK.

export const company = {
  name: "LEXCELPACK",
  addressLines: [
    "Plot 13, Block XII, Industrial Estate",
    "off Otta–Idi-roko Road, Otta",
    "Ogun State, Nigeria",
  ],
  poBox: "P.O. Box 1152, Otta, Nigeria",
  phones: ["+234 1 7743214", "+234 1 7740653", "+234 39 720456", "+234 39 722131"],
  fax: "+234 39 722142",
  email: "info@lexcelpack.com",
  legacySite: "https://lexcelpack.com/",
} as const;

export const telHref = (n: string) => `tel:${n.replace(/\s+/g, "")}`;

export const legacyImg = (file: string) => `https://lexcelpack.com/img/${file}`;

export type ProductSlug = "pet-bottles" | "pet-preforms" | "caps-closures";

export interface ProductCategory {
  slug: ProductSlug;
  to: "/products/pet-bottles" | "/products/pet-preforms" | "/products/caps-closures";
  name: string;
  short: string;
  description: string;
  applications: string[];
  image: string;
  imageAlt: string;
  /** Items awaiting confirmation from the company before publishing. */
  toConfirm: string[];
}

export const products: ProductCategory[] = [
  {
    slug: "pet-bottles",
    to: "/products/pet-bottles",
    name: "PET Bottles",
    short: "Bottles and jars in multiple shapes and capacities, including custom requirements.",
    description:
      "PET bottles and jars for beverage, pharmaceutical, edible-oil, liquor and other packaging applications, available in multiple shapes and capacities with options for custom requirements.",
    applications: ["Beverages", "Pharmaceuticals", "Edible oil", "Liquor", "Other packaging"],
    image: legacyImg("pet-bottles1.jpg"),
    imageAlt: "Clear PET bottles manufactured by LEXCELPACK",
    toConfirm: ["Current shapes and capacity range", "Neck finishes", "Custom mould lead times"],
  },
  {
    slug: "pet-preforms",
    to: "/products/pet-preforms",
    name: "PET Preforms",
    short: "Preforms for water, oil, pharma, cosmetics, carbonated drinks, juice and FMCG.",
    description:
      "PET preforms for packaging applications including mineral water, edible oil, pharmaceuticals, cosmetics, carbonated drinks, juice and FMCG products.",
    applications: [
      "Mineral water",
      "Edible oil",
      "Pharmaceuticals",
      "Cosmetics",
      "Carbonated drinks",
      "Juice",
      "FMCG",
    ],
    image: legacyImg("pet-performs3.jpg"),
    imageAlt: "PET preforms produced by LEXCELPACK",
    toConfirm: ["Available gram weights", "Neck sizes", "Colour options"],
  },
  {
    slug: "caps-closures",
    to: "/products/caps-closures",
    name: "Caps & Closures",
    short: "Assorted plastic caps and closures, including flip-top, pilfer-proof and plain styles.",
    description:
      "Assorted plastic caps and closures, including flip-top, pilfer-proof, plain and other styles. Sizes and ranges are available on request.",
    applications: ["Flip-top", "Pilfer-proof", "Plain", "Other styles"],
    image: legacyImg("closure1.jpg"),
    imageAlt: "Assorted plastic caps and closures",
    toConfirm: ["Size ranges", "Compatible neck finishes", "Colour options"],
  },
];

export const industries = [
  "Beverages",
  "Pharmaceuticals",
  "Edible oil",
  "Cosmetics",
  "FMCG",
  "Liquor",
] as const;

export type SitePath =
  | "/"
  | "/about"
  | "/products"
  | "/products/pet-bottles"
  | "/products/pet-preforms"
  | "/products/caps-closures"
  | "/manufacturing-quality"
  | "/resources/faq"
  | "/resources/ask-the-expert"
  | "/careers"
  | "/contact"
  | "/request-a-quote";

export type NavLink = { label: string; to: SitePath };
export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  { label: "About", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: products.map((p) => ({ label: p.name, to: p.to })),
  },
  { label: "Manufacturing & Quality", to: "/manufacturing-quality" },
  {
    label: "Resources",
    to: "/resources/faq",
    children: [
      { label: "FAQ", to: "/resources/faq" },
      { label: "Ask the Expert", to: "/resources/ask-the-expert" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];
