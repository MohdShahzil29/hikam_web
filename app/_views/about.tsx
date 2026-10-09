import { altClass, DownloadSection, SiteFooter, SiteHeader, Star } from "../_components/site";
import { dicts, type Lang } from "../_i18n/dict";

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

        <section className="reveal mx-auto max-w-3xl px-4 py-12 md:py-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-deep">{t.founderTag}</p>
          <div className="mt-4 flex flex-col gap-6 rounded-3xl border border-gold/25 p-6 sm:flex-row sm:items-start">
            <div
              dir="ltr"
              className="grid size-24 shrink-0 place-items-center self-center rounded-full bg-teal font-display text-3xl text-gold sm:self-start"
            >
              MS
            </div>
            <div>
              <h2 className="font-display text-3xl text-text">Mohd Shahzil</h2>
              <p className="text-sm font-semibold text-gold-deep">{t.role}</p>
              <div className="mt-3 space-y-3 text-text">
                {t.founder.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
                {t.stats.map(([n, label]) => (
                  <div key={label} className="rounded-xl border border-gold/25 py-3">
                    <dt dir="ltr" className="font-display text-xl text-text sm:text-2xl">{n}</dt>
                    <dd className="text-xs text-text">{label}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="https://github.com/MohdShahzil29"
                dir="ltr"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-gold-deep"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
                </svg>
                github.com/MohdShahzil29
              </a>
            </div>
          </div>
        </section>

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
