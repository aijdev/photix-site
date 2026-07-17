import type { Metadata } from "next";
import { metaFrom } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { AppShell } from "../../components/AppShell";
import { ArtStylesView } from "../../views/ArtStylesView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.artStyles,
  "/features/art-styles",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <ArtStylesView locale="en" />
    </AppShell>
  );
}
