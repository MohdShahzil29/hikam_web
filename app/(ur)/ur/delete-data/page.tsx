import type { Metadata } from "next";
import DeleteDataView from "../../../_views/delete-data";
import { dicts } from "../../../_i18n/dict";

const t = dicts.ur.deleteData.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  icons: { icon: "/ilm24x7-logo.jpeg" },
  alternates: { languages: { en: "/delete-data", ur: "/ur/delete-data" } },
};

export default function Page() {
  return <DeleteDataView lang="ur" />;
}
