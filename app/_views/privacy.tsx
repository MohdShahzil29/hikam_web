import { SiteFooter, SiteHeader, Star } from "../_components/site";
import { dicts, type Lang } from "../_i18n/dict";

// The app's privacy policy, linked from the Play Store listing and the app's About screen
export default function PrivacyView({ lang }: { lang: Lang }) {
  const t = dicts[lang].privacy;
  return (
    <>
      <SiteHeader lang={lang} path="/privacy" />

      <main>
        <section className="relative overflow-hidden bg-teal text-cream">
          <Star className="spin-slow pointer-events-none absolute -top-24 -right-32 size-[380px] text-gold/15" />
          <div className="relative mx-auto max-w-3xl px-4 py-12 text-center md:py-14">
            <p className={`rise text-gold ${lang === "en" ? "font-arabic text-2xl" : "font-display text-lg"}`}><bdi>{t.alt}</bdi></p>
            <h1 className="rise rise-1 mt-2 font-display text-4xl sm:text-5xl">{t.title}</h1>
            <p className="rise rise-2 mt-3 text-sm text-cream/75">{t.updated}</p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-14">
          <p className="text-text">{t.intro}</p>

          <div className="mt-8 space-y-6">
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

          <div className="mt-8 rounded-2xl border border-gold/40 p-5">
            <h2 className="font-display text-2xl text-text">{t.contactTitle}</h2>
            <p className="mt-2 text-text">
              {t.contactText}{" "}
              <a href={`mailto:${t.email}`} dir="ltr" className="font-semibold text-gold-deep underline">
                {t.email}
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </>
  );
}
