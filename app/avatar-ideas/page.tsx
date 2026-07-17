import type { Metadata } from "next";
import { metaFrom } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { AvatarIdeasView } from "../views/AvatarIdeasView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.avatarIdeas,
  "/avatar-ideas",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <AvatarIdeasView locale="en" />
    </AppShell>
  );
}
