import { ArrowUpRight } from "lucide-react";
import { isConfigured } from "@/config/profile";

type Props = {
  url?: string;
  children: React.ReactNode;
  className?: string;
  /** Shown to explain a missing link. */
  placeholderHint?: string;
};

/**
 * Renders a real external link when `url` is configured, otherwise a clearly
 * marked, non-interactive placeholder. Never produces a dead href.
 */
export default function ConfigurableLink({ url, children, className = "", placeholderHint }: Props) {
  if (isConfigured(url)) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 transition-colors hover:text-accent ${className}`}
      >
        {children}
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    );
  }
  return (
    <span
      aria-disabled="true"
      title={placeholderHint ?? "Link not configured yet. Set it in src/config/profile.ts"}
      className={`inline-flex cursor-not-allowed items-center gap-1 text-slate-500 ${className}`}
    >
      {children}
      <span className="rounded border border-dashed border-slate-600 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">
        Link soon
      </span>
    </span>
  );
}
