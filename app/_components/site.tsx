import Image from "next/image";
import Link from "next/link";
import { dicts, localHref, type Lang } from "../_i18n/dict";
import AndroidPhone from "./android-phone";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mohdshahzil.Hikam";

// The 8-point star the app uses as its motif
const STAR =
  "100,16 124.6,40.6 159.4,40.6 159.4,75.4 184,100 159.4,124.6 159.4,159.4 124.6,159.4 100,184 75.4,159.4 40.6,159.4 40.6,124.6 16,100 40.6,75.4 40.6,40.6 75.4,40.6";

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <polygon points={STAR} fill="none" stroke="currentColor" strokeWidth="0.8" />
      <polygon points={STAR} fill="none" stroke="currentColor" strokeWidth="0.8" transform="translate(28 28) scale(0.72)" />
    </svg>
  );
}

// The line in the other language under a heading: Urdu in Amiri on English pages, small English on Urdu pages
export const altClass = (lang: Lang) => (lang === "en" ? "font-arabic text-xl" : "text-xs font-semibold uppercase");

export function DownloadButton({ lang, label, className = "" }: { lang: Lang; label?: string; className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:brightness-110 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label ?? dicts[lang].nav.download}
    </a>
  );
}

// The "Get it on Google Play" badge: black, with the four-colour Play mark
function StoreButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      dir="ltr"
      className="inline-flex h-16 items-center gap-3.5 rounded-2xl bg-black ps-5 pe-7 text-white shadow-xl shadow-black/30 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:ring-gold"
    >
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
        <path fill="#2196F3" d="M3.6 1.8 13.5 12 3.6 22.2c-.4-.3-.6-.8-.6-1.4V3.2c0-.6.2-1.1.6-1.4Z" />
        <path fill="#4CAF50" d="M16.8 8.7 13.5 12 3.6 1.8c.4-.3.9-.3 1.3-.1l11.9 7Z" />
        <path fill="#F44336" d="M16.8 15.3 4.9 22.3c-.4.2-.9.2-1.3-.1L13.5 12l3.3 3.3Z" />
        <path fill="#FFC107" d="M20.5 10.5c1.1.6 1.1 2.4 0 3l-3.7 1.8L13.5 12l3.3-3.3 3.7 1.8Z" />
      </svg>
      <span className="text-start leading-tight">
        <span className="block text-[11px] font-medium tracking-wider uppercase">{label}</span>
        <span className="block text-xl font-semibold">Google Play</span>
      </span>
    </a>
  );
}

// Phone frame around a mock screen. The app's screens read left to right in both languages.
export function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      dir="ltr"
      className={`relative mx-auto w-64 rounded-[2.5rem] border-[6px] border-ink bg-ink leading-normal shadow-xl shadow-teal/20 sm:w-72 ${className}`}
    >
      <div className="overflow-hidden rounded-[2rem]">{children}</div>
    </div>
  );
}

// `path` is the current page without the language prefix, so the switch keeps you on the same page
export function SiteHeader({ lang, path }: { lang: Lang; path: string }) {
  const t = dicts[lang].nav;
  const other: Lang = lang === "en" ? "ur" : "en";
  return (
    <header className="sticky top-0 z-20 border-b border-cream/10 bg-teal/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href={localHref(lang, "/")}>
          <Image src="/ilm24x7-logo.jpeg" alt={t.home} width={52} height={52} className="rounded-lg" priority />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href={localHref(lang, "/features")} className="hidden text-sm text-cream/85 hover:text-cream sm:block">
            {t.features}
          </Link>
          <Link href={localHref(lang, "/about")} className="hidden text-sm text-cream/85 hover:text-cream sm:block">
            {t.about}
          </Link>
          <a
            href={localHref(other, path)}
            hrefLang={other}
            lang={other}
            className={`rounded-full border border-cream/30 px-3 py-1 text-cream hover:border-gold hover:text-gold ${other === "ur" ? "text-sm" : "text-xs font-semibold"}`}
          >
            {t.other}
          </a>
          <DownloadButton lang={lang} className="h-9 px-4" />
        </div>
      </nav>
    </header>
  );
}

export function DownloadSection({ lang }: { lang: Lang }) {
  const t = dicts[lang].download;
  return (
    <section id="download" className="scroll-mt-16 px-4 py-12 md:py-16">
      <div className="reveal relative mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-teal text-cream md:grid-cols-[1.1fr_1fr]">
        <Star className="spin-slow pointer-events-none absolute -top-16 -left-16 size-56 text-gold/15" />

        <div className="relative px-6 pt-10 text-center md:py-14 md:ps-12 md:text-start">
          <Image src="/ilm24x7-logo.jpeg" alt="Ilm24x7 logo" width={56} height={56} className="mx-auto rounded-2xl md:mx-0" />
          <h2 className="mt-4 font-display text-3xl md:text-4xl">{t.title}</h2>
          <p className="mt-2 text-cream/85">{t.text}</p>
          <ul className="mt-5 inline-flex flex-col gap-2 text-start text-sm">
            {t.perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                    <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex justify-center md:justify-start">
            <StoreButton href={PLAY_STORE_URL} label={t.play} />
          </div>
        </div>

        {/* The app rising out of the card's bottom edge */}
        <div dir="ltr" className="relative mt-8 h-[300px] md:mt-0 md:h-auto">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-3/4 w-3/4 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute top-14 left-1/2 w-[170px] translate-x-[5%] rotate-[8deg] md:top-20 md:w-[200px]">
            <AndroidPhone src="/screens/03-ask.webp" alt="" sizes="200px" front={false} />
          </div>
          <div className="absolute top-6 left-1/2 w-[200px] -translate-x-[85%] -rotate-[4deg] md:top-12 md:w-[235px]">
            <AndroidPhone src="/screens/01-home.webp" alt="Ilm24x7 home screen" sizes="(min-width: 768px) 235px, 200px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = dicts[lang].nav;
  return (
    <footer className="bg-ink text-cream/85">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/ilm24x7-logo.jpeg" alt="" width={24} height={24} className="rounded" />
          <span className="font-display text-cream">Ilm24x7</span>
        </div>
        <div className="flex gap-5">
          <Link href={localHref(lang, "/features")} className="hover:text-cream">{t.features}</Link>
          <Link href={localHref(lang, "/about")} className="hover:text-cream">{t.about}</Link>
          <a href="#download" className="hover:text-cream">{t.download}</a>
          <Link href={localHref(lang, "/privacy")} className="hover:text-cream">{t.privacy}</Link>
        </div>
        <p dir="ltr">© {new Date().getFullYear()} Ilm24x7</p>
      </div>
    </footer>
  );
}
