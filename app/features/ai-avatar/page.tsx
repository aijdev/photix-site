import type { Metadata } from "next";
import { metaFrom } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { AppShell } from "../../components/AppShell";
import { AiAvatarView } from "../../views/AiAvatarView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.aiAvatar,
  "/features/ai-avatar",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <AiAvatarView locale="en" />
    </AppShell>
  );
}
