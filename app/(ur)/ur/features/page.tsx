import type { Metadata } from "next";
import FeaturesView from "../../../_views/features";
import { dicts } from "../../../_i18n/dict";

const t = dicts.ur.features.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  icons: { icon: "/ilm24x7-logo.jpeg" },
  alternates: { languages: { en: "/features", ur: "/ur/features" } },
};

export default function Page() {
  return <FeaturesView lang="ur" />;
}
