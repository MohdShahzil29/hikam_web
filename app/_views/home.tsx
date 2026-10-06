import Link from "next/link";
import AskDemo from "../_components/ask-demo";
import { altClass, DownloadButton, DownloadSection, Phone, SiteFooter, SiteHeader, Star } from "../_components/site";
import { dicts, localHref, type Lang } from "../_i18n/dict";

const PRAYERS = [
  { urdu: "فجر", time: "5:02" },
  { urdu: "ظہر", time: "12:31" },
  { urdu: "عصر", time: "4:12", next: true },
  { urdu: "مغرب", time: "6:08" },
  { urdu: "عشاء", time: "7:24" },
];

// A small static mock of the app's home screen
function PhoneMock() {
  return (
    <Phone>
      <div className="bg-teal">
        <div className="px-5 pt-6 pb-24 text-center">
          <div className="flex items-start justify-between">
            <span className="font-arabic text-lg font-bold text-gold">السلام علیکم</span>
            <span className="pt-1 text-[10px] text-cream/85">Monday, 5 Oct</span>
          </div>
          <p className="mt-6 text-[9px] font-semibold tracking-[0.3em] text-cream/85">NEXT PRAYER</p>
          <p className="mt-1 flex items-baseline justify-center gap-2">
            <span className="font-display text-3xl text-cream">Asr</span>
            <span className="font-arabic text-2xl font-bold text-gold">عصر</span>
          </p>
          <p className="text-4xl font-medium tracking-wider text-cream tabular-nums">01:24:10</p>
          <p className="mt-1 text-[11px] text-cream/85">Begins at 4:12 PM</p>
        </div>
        <div className="-mt-6 rounded-t-3xl bg-white px-3 pt-3 pb-5">
          <div className="flex gap-1 rounded-2xl border border-gold/25 bg-white p-1">
            {PRAYERS.map((p) => (
              <div key={p.urdu} className={`flex-1 rounded-xl py-1.5 text-center ${p.next ? "bg-gold" : ""}`}>
                <p className={`font-arabic text-[11px] ${p.next ? "text-ink" : "text-text"}`}>{p.urdu}</p>
                <p className="text-[10px] font-semibold text-text">{p.time}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { en: "Quran", ur: "قرآن", sub: "114 Surahs", icon: "M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5V19c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5V5.5ZM12 6v13.5" },
              { en: "Hadith", ur: "حدیث", sub: "7 Books", icon: "M6 3h10l2 2v16H6V3Zm3 5h6M9 12h6M9 16h4" },
            ].map((t) => (
              <div key={t.en} className="rounded-xl bg-teal p-2.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="grid size-6 place-items-center rounded-lg bg-gold/15 text-gold">
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d={t.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-arabic text-sm leading-none text-gold">{t.ur}</span>
                </div>
                <p className="mt-2 text-xs font-semibold text-cream">{t.en}</p>
                <p className="text-[10px] text-cream/75">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Phone>
  );
}

export default function HomeView({ lang }: { lang: Lang }) {
  const t = dicts[lang].home;
  return (
    <>
      <SiteHeader lang={lang} path="/" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-teal text-cream">
          <Star className="spin-slow pointer-events-none absolute -top-24 -right-32 size-[420px] text-gold/15" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
            <div className="text-center md:text-start">
              <p className="rise font-arabic text-2xl text-gold">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
              <h1 className="rise rise-1 mt-3 font-display text-4xl leading-tight sm:text-5xl">
                {t.hero.title}
                <span className="text-gold">{t.hero.highlight}</span>
              </h1>
              <p
                className={`rise rise-1 mt-2 text-cream ${lang === "en" ? "font-arabic text-xl" : "font-display text-lg"}`}
              >
                <bdi>{t.hero.alt}</bdi>
              </p>
              <p className="rise rise-2 mx-auto mt-4 max-w-md text-cream/85 md:mx-0">{t.hero.text}</p>
              <ul className="rise rise-3 mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                {t.hero.chips.map((c) => (
                  <li key={c} className="rounded-full border border-cream/25 px-3 py-1 text-xs text-cream">
                    {c}
                  </li>
                ))}
              </ul>
              <div className="rise rise-4 mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <DownloadButton lang={lang} />
                <span className="text-sm text-cream/85">{t.hero.free}</span>
              </div>
            </div>
            <div className="rise rise-2">
              <div className="float">
                <PhoneMock />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-12 md:py-16">
          <div className="reveal flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-3xl text-text">{t.features.title}</h2>
            <Link href={localHref(lang, "/features")} className="text-sm font-semibold text-gold-deep hover:underline">
              {t.features.all}
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.items.map((f) => (
              <article
                key={f.title}
                className="reveal rounded-2xl border border-gold/25 bg-white p-5 transition hover:-translate-y-1 hover:border-gold"
              >
                <p className={`text-gold-deep ${altClass(lang)}`}><bdi>{f.alt}</bdi></p>
                <h3 className="mt-1 font-display text-xl text-text">{f.title}</h3>
                <p className="mt-2 text-sm text-text">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Ask Ilm24x7, live */}
        <section id="ask" className="scroll-mt-16 border-y border-gold/25 bg-white">
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
            <div className="reveal">
              <p className="text-xs font-semibold tracking-[0.3em] text-gold-deep">{t.ask.tag}</p>
              <h2 className="mt-2 font-display text-3xl text-text">{t.ask.title}</h2>
              <p className="mt-3 text-text">{t.ask.text}</p>
              <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
                {t.ask.stats.map(([n, label]) => (
                  <div key={label} className="rounded-xl border border-gold/25 bg-white py-3">
                    <dt className="font-display text-2xl text-text">{n}</dt>
                    <dd className="text-xs text-text">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="reveal">
              <AskDemo lang={lang} />
            </div>
          </div>
        </section>

        <DownloadSection lang={lang} />
      </main>

      <SiteFooter lang={lang} />
    </>
  );
}
