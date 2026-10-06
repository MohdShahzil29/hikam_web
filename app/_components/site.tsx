import Image from "next/image";
import Link from "next/link";

// Store links: replace with the real listings once the app is published
const PLAY_STORE_URL = "#";
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

export function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#download"
      className={`inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-ink transition hover:brightness-110 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Download
    </a>
  );
}

function StoreButton({ href, store, label }: { href: string; store: string; label: string }) {
  return (
    <a
      href={href}
      className="flex h-13 min-w-44 items-center gap-3 rounded-xl border border-cream/20 bg-ink px-4 text-cream transition hover:border-gold"
    >
      {store === "play" ? (
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
          <path d="M3.6 2.3c-.3.3-.4.7-.4 1.2v17c0 .5.1.9.4 1.2l9.5-9.7L3.6 2.3Zm10.6 10.8 2.7 2.7-11.4 6.5 8.7-9.2Zm0-2.2L5.5 1.7l11.4 6.5-2.7 2.7Zm4-1.7 3 1.7c.9.5.9 1.8 0 2.3l-3 1.7-3-3 3-2.7Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
          <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9ZM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4Z" />
        </svg>
      )}
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-cream/85">{label}</span>
        <span className="block text-base font-semibold">{store === "play" ? "Google Play" : "App Store"}</span>
      </span>
    </a>
  );
}

// Phone frame around a mock screen
export function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-64 rounded-[2.5rem] border-[6px] border-ink bg-ink shadow-xl shadow-teal/20 sm:w-72 ${className}`}>
      <div className="overflow-hidden rounded-[2rem]">{children}</div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-cream/10 bg-teal/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/">
          <Image src="/ilm24x7-logo.jpeg" alt="Ilm24x7 home" width={52} height={52} className="rounded-lg" priority />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/features" className="hidden text-sm text-cream/85 hover:text-cream sm:block">Features</Link>
          <Link href="/about" className="hidden text-sm text-cream/85 hover:text-cream sm:block">About</Link>
          <DownloadButton className="h-9 px-4" />
        </div>
      </nav>
    </header>
  );
}

export function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-16 px-4 py-12 md:py-16">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-teal px-6 py-10 text-center text-cream">
        <Star className="pointer-events-none absolute -top-16 -left-16 size-56 text-gold/15" />
        <Image src="/ilm24x7-logo.jpeg" alt="Ilm24x7 logo" width={64} height={64} className="relative mx-auto rounded-2xl" />
        <h2 className="relative mt-4 font-display text-3xl">Download Ilm24x7</h2>
        <p className="relative mx-auto mt-2 max-w-md text-cream/85">Free on Android and iOS.</p>
        <div className="relative mt-6 flex flex-wrap justify-center gap-3">
          <StoreButton href={PLAY_STORE_URL} store="play" label="Get it on" />
          <StoreButton href={APP_STORE_URL} store="apple" label="Download on the" />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/85">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/ilm24x7-logo.jpeg" alt="" width={24} height={24} className="rounded" />
          <span className="font-display text-cream">Ilm24x7</span>
        </div>
        <div className="flex gap-5">
          <Link href="/features" className="hover:text-cream">Features</Link>
          <Link href="/about" className="hover:text-cream">About</Link>
          <a href="#download" className="hover:text-cream">Download</a>
        </div>
        <p>© {new Date().getFullYear()} Ilm24x7</p>
      </div>
    </footer>
  );
}
