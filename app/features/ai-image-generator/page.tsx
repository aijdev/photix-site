import type { Metadata } from "next";
import { metaFrom } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { AppShell } from "../../components/AppShell";
import { AiImageGeneratorView } from "../../views/AiImageGeneratorView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.aiImageGenerator,
  "/features/ai-image-generator",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <AiImageGeneratorView locale="en" />
    </AppShell>
  );
}
