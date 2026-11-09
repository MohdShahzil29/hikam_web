import AndroidPhone from "../_components/android-phone";
import { altClass, DownloadButton, DownloadSection, SiteFooter, SiteHeader } from "../_components/site";
import { dicts, type Lang } from "../_i18n/dict";

// One row per entry in the dictionary's `features.main`, in the same order: an anchor id and the
// screenshots from public/screens to show (the first in front, an optional second tilted behind it)
const ROWS = [
  { id: "namaz", screens: ["04-prayer-times", "09-prayer-tracker"] },
  { id: "quran", screens: ["05-quran-audio", "02-today"] },
  { id: "ask", screens: ["03-ask"] },
  { id: "fatawa", screens: ["06-fatawa"] },
  { id: "qibla", screens: ["07-qibla"] },
  { id: "duas", screens: ["08-duas", "13-manners"] },
  { id: "tasbih", screens: ["10-tasbih", "15-tasbih-list"] },
  { id: "tools", screens: ["11-calendar", "12-zakat"] },
];

const screen = (name: string) => `/screens/${name}.webp`;
const pad = (n: number) => String(n).padStart(2, "0");

function Check() {
  return (
    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
      <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
        <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// The phones for one feature on a soft panel. `flip` mirrors the layout so rows alternate.
function Showcase({ screens, alt, flip }: { screens: string[]; alt: string; flip: boolean }) {
  const [front, back] = screens;
  return (
    <div dir="ltr" className="relative mx-auto h-[470px] w-full max-w-[400px] md:h-[545px]">
      <div className="absolute inset-x-2 top-14 bottom-2 rounded-[2.5rem] border border-gold/25 bg-gradient-to-b from-gold/10 to-white" />
      {back && (
        <div
          className={`absolute top-16 w-[165px] md:w-[190px] ${flip ? "left-[4%] -rotate-6" : "right-[4%] rotate-6"}`}
        >
          <AndroidPhone src={screen(back)} alt={alt} sizes="(min-width: 768px) 190px, 165px" front={false} />
        </div>
      )}
      <div
        className={`absolute top-0 z-10 w-[195px] md:w-[225px] ${
          !back ? "left-1/2 -translate-x-1/2" : flip ? "right-[6%]" : "left-[6%]"
        }`}
      >
        <AndroidPhone src={screen(front)} alt={alt} sizes="(min-width: 768px) 225px, 195px" />
      </div>
    </div>
  );
}

export default function FeaturesView({ lang }: { lang: Lang }) {
  const t = dicts[lang].features;
  return (
    <>
      <SiteHeader lang={lang} path="/features" />

      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pt-10 pb-8 text-center md:pt-12">
            <p className="rise text-xs font-semibold tracking-[0.3em] text-gold-deep">{t.tag}</p>
            <h1 className="rise rise-1 mt-2 font-display text-4xl leading-tight text-teal sm:text-6xl">{t.title}</h1>
            <p className="rise rise-2 mx-auto mt-3 max-w-xl text-text">{t.text}</p>
            {/* Jump straight to a feature */}
            <nav className="rise rise-3 mt-6 flex flex-wrap justify-center gap-2">
              {t.main.map((f, i) => (
                <a
                  key={ROWS[i].id}
                  href={`#${ROWS[i].id}`}
                  className="rounded-full border border-gold/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-text transition hover:border-gold hover:bg-gold/10"
                >
                  {f.tag}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4">
          {t.main.map((f, i) => {
            const row = ROWS[i];
            const flip = i % 2 === 1;
            return (
              <section
                key={row.id}
                id={row.id}
                className="grid scroll-mt-20 items-center gap-10 border-t border-gold/20 py-12 md:grid-cols-2 md:gap-16 md:py-16"
              >
                <div className={`reveal ${flip ? "md:order-2" : ""}`}>
                  <div className="flex items-baseline gap-3">
                    <span dir="ltr" className="font-display text-5xl text-gold/50">{pad(i + 1)}</span>
                    <span className="text-xs font-semibold tracking-[0.3em] text-gold-deep">{f.tag}</span>
                    <span className={`text-gold-deep ${lang === "en" ? "font-arabic text-lg" : "text-xs font-semibold"}`}>
                      <bdi>{f.alt}</bdi>
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">{f.title}</h2>
                  <p className="mt-3 text-text">{f.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {f.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-text">
                        <Check />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <DownloadButton lang={lang} className="mt-7" />
                </div>
                <div className={`reveal ${flip ? "md:order-1" : ""}`}>
                  <Showcase screens={row.screens} alt={f.title} flip={flip} />
                </div>
              </section>
            );
          })}
        </div>

        <section className="border-y border-gold/25 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="reveal font-display text-3xl text-text">{t.moreTitle}</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.more.map((f) => (
                <article
                  key={f.title}
                  className="reveal rounded-2xl border border-gold/25 bg-white p-5 transition hover:-translate-y-1 hover:border-gold"
                >
                  <p className={`text-gold-deep ${altClass(lang)}`}>
                    <bdi>{f.alt}</bdi>
                  </p>
                  <h3 className="mt-1 font-display text-xl text-text">{f.title}</h3>
                  <p className="mt-2 text-sm text-text">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DownloadSection lang={lang} />
      </main>

      <SiteFooter lang={lang} />
    </>
  );
}
