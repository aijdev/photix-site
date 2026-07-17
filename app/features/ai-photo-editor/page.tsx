import type { Metadata } from "next";
import { metaFrom } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { AppShell } from "../../components/AppShell";
import { AiPhotoEditorView } from "../../views/AiPhotoEditorView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.aiPhotoEditor,
  "/features/ai-photo-editor",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <AiPhotoEditorView locale="en" />
    </AppShell>
  );
}
