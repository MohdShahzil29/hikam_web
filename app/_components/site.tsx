import Image from "next/image";
import Link from "next/link";
import { dicts, localHref, type Lang } from "../_i18n/dict";

// Android APK on Google Drive. `confirm=t` skips Drive's "too large to scan" page, and Drive sends the file as an
// attachment, so clicking downloads it right away without leaving the page.
const APK_URL =
  "https://drive.usercontent.google.com/download?id=1LguVNaFKkNOGvmCpv-1Zo4CuiXpoOYcd&export=download&confirm=t";
// Replace with the real listing once the app is on the App Store
const APP_STORE_URL = "#";

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

export function DownloadButton({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <a
      href={APK_URL}
      download
      className={`inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:brightness-110 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {dicts[lang].nav.download}
    </a>
  );
}

function StoreButton({ href, store, label }: { href: string; store: string; label: string }) {
  return (
    <a
      href={href}
      download={store === "play" || undefined}
      dir="ltr"
      className="flex h-13 min-w-44 items-center gap-3 rounded-xl border border-cream/20 bg-ink px-4 text-cream transition hover:-translate-y-0.5 hover:border-gold"
    >
      {store === "play" ? (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
          <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9ZM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4Z" />
        </svg>
      )}
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-cream/85">{label}</span>
        <span className="block text-base font-semibold">{store === "play" ? "Android" : "App Store"}</span>
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
      <div className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-teal px-6 py-10 text-center text-cream">
        <Star className="spin-slow pointer-events-none absolute -top-16 -left-16 size-56 text-gold/15" />
        <Image src="/ilm24x7-logo.jpeg" alt="Ilm24x7 logo" width={64} height={64} className="relative mx-auto rounded-2xl" />
        <h2 className="relative mt-4 font-display text-3xl">{t.title}</h2>
        <p className="relative mx-auto mt-2 max-w-md text-cream/85">{t.text}</p>
        <div className="relative mt-6 flex flex-wrap justify-center gap-3">
          <StoreButton href={APK_URL} store="play" label={t.play} />
          <StoreButton href={APP_STORE_URL} store="apple" label={t.apple} />
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
