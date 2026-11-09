import { altClass, DownloadSection, SiteFooter, SiteHeader, Star } from "../_components/site";
import { dicts, type Lang } from "../_i18n/dict";
import TeamSection from "../_components/team";

export default function AboutView({ lang }: { lang: Lang }) {
  const t = dicts[lang].about;
  return (
    <>
      <SiteHeader lang={lang} path="/about" />

      <main>
        <section className="relative overflow-hidden bg-teal text-cream">
          <Star className="spin-slow pointer-events-none absolute -top-24 -right-32 size-[380px] text-gold/15" />
          <div className="relative mx-auto max-w-3xl px-4 py-12 text-center md:py-14">
            <p className={`rise text-gold ${lang === "en" ? "font-arabic text-2xl" : "font-display text-lg"}`}><bdi>{t.alt}</bdi></p>
            <h1 className="rise rise-1 mt-2 font-display text-4xl sm:text-5xl">{t.title}</h1>
            <p className="rise rise-2 mx-auto mt-3 max-w-lg text-cream/85">{t.text}</p>
          </div>
        </section>

        <section className="reveal mx-auto max-w-3xl px-4 py-12 md:py-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-deep">{t.storyTag}</p>
          <h2 className="mt-2 font-display text-3xl text-text">{t.storyTitle}</h2>
          <div className="mt-4 space-y-4 text-text">
            {t.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              {t.name[0]}
              <span className="font-arabic text-lg text-gold-deep">علم</span>
              {t.name[1]}
            </p>
          </div>
        </section>

        <section className="border-y border-gold/25">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="reveal font-display text-3xl text-text">{t.valuesTitle}</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {t.values.map((v) => (
                <article
                  key={v.title}
                  className="reveal rounded-2xl border border-gold/25 bg-white p-5 transition hover:-translate-y-1 hover:border-gold"
                >
                  <p className={`text-gold-deep ${altClass(lang)}`}><bdi>{v.alt}</bdi></p>
                  <h3 className="mt-1 font-display text-xl text-text">{v.title}</h3>
                  <p className="mt-2 text-sm text-text">{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TeamSection lang={lang} />

        <section className="border-t border-gold/25">
          <div className="reveal mx-auto max-w-3xl px-4 py-12 md:py-14">
            <h2 className="font-display text-3xl text-text">{t.thanksTitle}</h2>
            <p className="mt-3 text-text">{t.thanksText}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-3">
              {t.thanks.map((x) => (
                <li key={x.name} className="rounded-xl border border-gold/25 p-4">
                  <p className="text-sm font-semibold text-text">
                    <bdi>{x.name}</bdi>
                  </p>
                  <p className="text-xs text-text">{x.what}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-text">{t.rightsText}</p>
          </div>
        </section>

        <DownloadSection lang={lang} />
      </main>

      <SiteFooter lang={lang} />
    </>
  );
}
