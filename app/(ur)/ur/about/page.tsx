import type { Metadata } from "next";
import AboutView from "../../../_views/about";
import { dicts } from "../../../_i18n/dict";

const t = dicts.ur.about.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  icons: { icon: "/ilm24x7-logo.jpeg" },
  alternates: { languages: { en: "/about", ur: "/ur/about" } },
};

export default function Page() {
  return <AboutView lang="ur" />;
}
