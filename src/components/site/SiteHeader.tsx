import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/data/site";
import { Logo } from "./Logo";

const linkBase =
  "rounded-sm px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className={linkBase + " inline-flex items-center gap-1"}
                  activeProps={{ className: "!text-primary" }}
                  activeOptions={{ exact: !item.children }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-56 rounded-md border bg-popover p-2 shadow-lg">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            className="block rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                            activeProps={{ className: "text-primary font-medium" }}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/request-a-quote" className="btn btn-primary hidden sm:inline-flex">
            Request a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t bg-background lg:hidden"
        >
          <ul className="container-site divide-y py-2">
            {mainNav.map((item) => (
              <li key={item.to} className="py-1">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 border-l pl-4">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 text-sm text-muted-foreground"
                          activeProps={{ className: "!text-primary" }}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="container-site pb-8 pt-2">
            <Link to="/request-a-quote" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
