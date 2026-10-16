import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

/** Image with neutral skeleton while loading and a restrained fallback if the source fails. */
export function SmartImage({ src, alt, className, eager }: Props) {
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {state !== "error" && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setState("ok")}
          onError={() => setState("error")}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            state === "ok" ? "opacity-100" : "opacity-0",
          )}
        />
      )}
      {state === "loading" && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden />}
      {state === "error" && (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface text-muted-foreground"
        >
          <ImageOff className="h-6 w-6" aria-hidden />
          <span className="text-xs">Image unavailable</span>
        </div>
      )}
    </div>
  );
}
