import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Text wordmark placeholder until a verified LEXCELPACK logo file is supplied. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" aria-label="LEXCELPACK home" className="inline-flex items-center gap-2.5 rounded-sm">
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-sm font-bold text-primary-foreground"
      >
        LP
      </span>
      <span
        className={cn(
          "text-lg font-bold tracking-tight",
          inverted ? "text-navy-foreground" : "text-navy",
        )}
      >
        LEXCEL<span className="text-brand-red">PACK</span>
      </span>
    </Link>
  );
}
