import Link from "next/link";
import { SiteFooter, SiteHeader, Star } from "../_components/site";
import { dicts, localHref, type Lang } from "../_i18n/dict";

// How to delete your data; Play Console's Data safety form links here as the "Delete data URL"
export default function DeleteDataView({ lang }: { lang: Lang }) {
  const t = dicts[lang].deleteData;
  return (
    <>
      <SiteHeader lang={lang} path="/delete-data" />

      <main>
        <section className="relative overflow-hidden bg-teal text-cream">
          <Star className="spin-slow pointer-events-none absolute -top-24 -right-32 size-[380px] text-gold/15" />
          <div className="relative mx-auto max-w-3xl px-4 py-12 text-center md:py-14">
            <p className={`rise text-gold ${lang === "en" ? "font-arabic text-2xl" : "font-display text-lg"}`}><bdi>{t.alt}</bdi></p>
            <h1 className="rise rise-1 mt-2 font-display text-4xl sm:text-5xl">{t.title}</h1>
            <p className="rise rise-2 mt-3 text-sm text-cream">{t.updated}</p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-14">
          <p className="text-text">{t.intro}</p>

          <article className="mt-8 rounded-2xl border-2 border-gold bg-white p-5">
            <h2 className="font-display text-2xl text-text">{t.stepsTitle}</h2>
            <ol className="mt-3 list-decimal space-y-2 ps-5 text-text">
              {t.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <a
              href={`mailto:${t.email}?subject=${encodeURIComponent("Delete my data")}`}
              className="mt-5 inline-block rounded-full bg-teal px-5 py-2.5 font-semibold text-cream hover:bg-ink"
            >
              {t.emailButton}
            </a>
          </article>

          <div className="mt-6 space-y-6">
            {t.sections.map((s) => (
              <article key={s.title} className="rounded-2xl border border-gold/25 bg-white p-5">
                <h2 className="font-display text-2xl text-text">{s.title}</h2>
                <ul className="mt-3 list-disc space-y-2 ps-5 text-text">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 text-text">
            <Link href={localHref(lang, "/privacy")} className="font-semibold text-gold-deep underline">
              {dicts[lang].privacy.title}
            </Link>
          </p>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </>
  );
}
