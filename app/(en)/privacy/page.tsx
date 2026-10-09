import type { Metadata } from "next";
import PrivacyView from "../../_views/privacy";
import { dicts } from "../../_i18n/dict";

const t = dicts.en.privacy.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  icons: { icon: "/ilm24x7-logo.jpeg" },
  alternates: { languages: { en: "/privacy", ur: "/ur/privacy" } },
};

export default function Page() {
  return <PrivacyView lang="en" />;
}
