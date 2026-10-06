import Link from "next/link";
import { DownloadButton, DownloadSection, Phone, SiteFooter, SiteHeader, Star } from "./_components/site";

const FEATURES = [
  { title: "Namaz Times", urdu: "اوقاتِ نماز", text: "Accurate times for your location, a live countdown and azan alarms." },
  { title: "Quran", urdu: "قرآن مجید", text: "Arabic text with Urdu tarjuma, tafseer and recitation audio." },
  { title: "Hadith", urdu: "احادیث", text: "Authentic hadith collections in Urdu and English." },
  { title: "Fatawa", urdu: "فتاویٰ", text: "Fatawa Razawiya and Bahar-e-Shariat, readable right in the app." },
  { title: "Qibla", urdu: "قبلہ", text: "A compass that points you to the Kaaba wherever you are." },
  { title: "Ramzan & Hajj", urdu: "رمضان و حج", text: "Guides for the month of fasting and the pilgrimage." },
  { title: "99 Names", urdu: "اسماء الحسنیٰ", text: "The beautiful names of Allah with meanings." },
  { title: "Tasbih", urdu: "تسبیح", text: "A simple counter for your daily dhikr." },
];

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

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-teal text-cream">
          <Star className="pointer-events-none absolute -top-24 -right-32 size-[420px] text-gold/15" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
            <div className="text-center md:text-left">
              <p className="font-arabic text-2xl text-gold">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
              <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Every answer, <span className="text-gold">with its source</span>
              </h1>
              <p className="mt-2 font-arabic text-xl text-cream" dir="rtl">ہر سوال کا جواب، دلیل کے ساتھ</p>
              <p className="mx-auto mt-4 max-w-md text-cream/85 md:mx-0">
                Ask in Roman Urdu, Urdu or English. Hikam answers from the Quran, Hadith and Fatawa Razawiya, and
                shows you the exact ayah, hadith or page it comes from.
              </p>
              <ul className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                {["Namaz & Azan", "Quran", "Hadith", "Fatawa", "Qibla"].map((t) => (
                  <li key={t} className="rounded-full border border-cream/25 px-3 py-1 text-xs text-cream">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <DownloadButton />
                <span className="text-sm text-cream/85">Free · Android &amp; iOS</span>
              </div>
            </div>
            <PhoneMock />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-12 md:py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-3xl text-text">Everything in one place</h2>
            <Link href="/features" className="text-sm font-semibold text-gold-deep hover:underline">
              See all features →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <article key={f.title} className="rounded-2xl border border-gold/25 bg-white p-5 transition hover:border-gold">
                <p className="font-arabic text-xl text-gold-deep">{f.urdu}</p>
                <h3 className="mt-1 font-display text-xl text-text">{f.title}</h3>
                <p className="mt-2 text-sm text-text">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Ask Hikam */}
        <section id="ask" className="scroll-mt-16 border-y border-gold/25 bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gold-deep">ASK HIKAM</p>
              <h2 className="mt-2 font-display text-3xl text-text">Ask the way you speak</h2>
              <p className="mt-3 text-text">
                Type in Roman Urdu, Urdu or English. Hikam searches the Quran, Hadith, Fatawa Razawiya and
                Bahar-e-Shariat and shows you the exact ayah, hadith or page it comes from.
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  ["114", "Surahs"],
                  ["30", "Jild Fatawa"],
                  ["6", "Bahar-e-Shariat"],
                ].map(([n, label]) => (
                  <div key={label} className="rounded-xl border border-gold/25 bg-white py-3">
                    <dt className="font-display text-2xl text-text">{n}</dt>
                    <dd className="text-xs text-text">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-3 rounded-2xl border border-gold/25 bg-white p-4 sm:p-5">
              <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-teal px-4 py-2 text-sm font-medium text-cream">
                Roza kis par farz hai?
              </p>
              <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-gold/25 bg-white p-4">
                <p className="text-sm">
                  O People who Believe! Fasting is made compulsory for you, like it was ordained for those before
                  you…
                </p>
                <p className="mt-2 text-xs font-semibold text-gold-deep">Quran · Al-Baqarah 2:183</p>
              </div>
              <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-teal px-4 py-2 font-arabic text-base text-cream">
                نماز کی فضیلت
              </p>
              <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-gold/25 bg-white p-4" dir="rtl">
                <p className="font-arabic text-base">”باجماعت نماز تنہا نماز پر ستائیس درجے فضیلت رکھتی ہے“</p>
                <p className="mt-2 font-arabic text-sm text-gold-deep">حدیث · جامع ترمذی ۲۱۵</p>
              </div>
            </div>
          </div>
        </section>

        <DownloadSection />
      </main>

      <SiteFooter />
    </>
  );
}
