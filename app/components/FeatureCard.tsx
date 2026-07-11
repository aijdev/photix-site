import Link from "next/link";
import type { ReactNode } from "react";
import type { Feature } from "../lib/content";
import {
  ArrowRightIcon,
  PaletteIcon,
  SparklesIcon,
  WandIcon,
  FaceIcon,
} from "./Icons";

const ICONS: Record<string, ReactNode> = {
  "ai-image-generator": <SparklesIcon className="h-6 w-6" />,
  "ai-photo-editor": <WandIcon className="h-6 w-6" />,
  "ai-avatar": <FaceIcon className="h-6 w-6" />,
  "art-styles": <PaletteIcon className="h-6 w-6" />,
};

export function featureIcon(slug: string): ReactNode {
  return ICONS[slug] ?? <SparklesIcon className="h-6 w-6" />;
}

/** Linked card summarising one creative mode. Used on the home + features hub. */
export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Link
      href={feature.href}
      className="card card-hover group flex flex-col gap-4 p-6"
    >
      <span className="icon-badge h-12 w-12">{featureIcon(feature.slug)}</span>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{feature.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{feature.tagline}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
