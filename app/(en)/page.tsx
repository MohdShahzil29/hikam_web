import type { Metadata } from "next";
import HomeView from "../_views/home";
import { dicts } from "../_i18n/dict";

const t = dicts.en.home.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  icons: { icon: "/ilm24x7-logo.jpeg" },
  alternates: { languages: { en: "/", ur: "/ur" } },
};

export default function Page() {
  return <HomeView lang="en" />;
}
