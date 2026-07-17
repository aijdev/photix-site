import type { Metadata } from "next";
import { type Locale, prefixedLocales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/getDictionary";
import { metaFrom } from "../../../lib/seo";
import { AiAvatarView } from "../../../views/AiAvatarView";

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  return metaFrom(getDictionary(locale).meta.aiAvatar, "/features/ai-avatar", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <AiAvatarView locale={lang as Locale} />;
}
