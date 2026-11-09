import Link from "next/link";
import TeamSection from "../_components/team";
import ScreenCarousel from "../_components/screen-carousel";
import { altClass, DownloadButton, DownloadSection, SiteFooter, SiteHeader } from "../_components/site";
import { dicts, localHref, type Lang } from "../_i18n/dict";

export default function HomeView({ lang }: { lang: Lang }) {
  const t = dicts[lang].home;
  return (
    <>
      <SiteHeader lang={lang} path="/" />

      <main>
        {/* Hero: real app screens on Android phones */}
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-6xl px-4 pt-10 text-center md:pt-12">
            <h1 className="rise rise-1 font-display text-4xl leading-tight text-teal sm:text-6xl">
              {t.hero.title}
              <span className="text-gold">{t.hero.highlight}</span>
            </h1>
            <p className="rise rise-2 mx-auto mt-3 max-w-2xl text-text">{t.hero.text}</p>
          </div>

          <div className="rise rise-3 mt-6 md:mt-8">
            <ScreenCarousel captions={t.hero.screens} prev={t.hero.prev} next={t.hero.next} />
          </div>

          <div className="rise rise-4 flex flex-col items-center gap-2 px-4 pt-6 pb-12 md:pb-14">
            <DownloadButton lang={lang} label={t.hero.cta} className="h-14 px-8 text-base shadow-lg shadow-gold/30" />
            <span className="text-sm text-text">{t.hero.free}</span>
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

        <TeamSection lang={lang} more />

        <DownloadSection lang={lang} />
      </main>

      <SiteFooter lang={lang} />
    </>
  );
}
