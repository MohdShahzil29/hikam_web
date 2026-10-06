import type { Metadata } from "next";
import { DownloadButton, DownloadSection, Phone, SiteFooter, SiteHeader, Star } from "../_components/site";

export const metadata: Metadata = {
  title: "Features — Ilm24x7",
  description:
    "Namaz times with azan alarms, Quran with Kanz ul Imaan tarjuma and tafseer, seven hadith books, Fatawa Razawiya, Bahar-e-Shariat, Ask Ilm24x7, Qibla and more.",
};

// Small screen header used inside every mock
function ScreenTitle({ en, ur }: { en: string; ur: string }) {
  return (
    <div className="flex items-baseline justify-between bg-teal px-4 pt-5 pb-3">
      <span className="font-display text-lg text-cream">{en}</span>
      <span className="font-arabic text-base text-gold">{ur}</span>
    </div>
  );
}

function PrayerScreen() {
  const rows = [
    ["Fajr", "فجر", "5:02 AM"],
    ["Zuhr", "ظہر", "12:31 PM"],
    ["Asr", "عصر", "4:12 PM"],
    ["Maghrib", "مغرب", "6:08 PM"],
    ["Isha", "عشاء", "7:24 PM"],
  ];
  return (
    <Phone>
      <ScreenTitle en="Namaz Times" ur="اوقاتِ نماز" />
      <div className="space-y-2 bg-white p-3 pb-6">
        {rows.map(([en, ur, time]) => {
          const next = en === "Asr";
          return (
            <div
              key={en}
              className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${next ? "bg-gold text-ink" : "border border-gold/25 bg-white text-text"}`}
            >
              <span className="text-sm font-semibold">{en}</span>
              <span className="font-arabic text-sm">{ur}</span>
              <span className="flex items-center gap-2 text-sm tabular-nums">
                {time}
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          );
        })}
        <p className="pt-1 text-center text-xs text-text">Azan alarm · Asr in 01:24:10</p>
      </div>
    </Phone>
  );
}

function QuranScreen() {
  return (
    <Phone>
      <ScreenTitle en="Al-Baqarah" ur="البقرۃ" />
      <div className="space-y-3 bg-white p-3 pb-5">
        <div className="rounded-xl border border-gold/25 bg-white p-3">
          <p dir="rtl" className="font-arabic text-xl leading-loose text-text">
            ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛۚ فِيْهِ ۛۚ هُدًى لِّلْمُتَّقِيْنَ
          </p>
          <p dir="rtl" className="mt-2 font-arabic text-sm text-text">
            وہ بلند رتبہ کتاب (قرآن) کوئی شک کی جگہ نہیں، اس میں ہدایت ہے ڈر والوں کو
          </p>
          <p className="mt-2 text-[10px] font-semibold text-gold-deep">2:2 · Kanz ul Imaan</p>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-teal px-3 py-2.5 text-cream">
          <span className="grid size-8 place-items-center rounded-full bg-gold text-ink">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold">Mishary Alafasy</p>
            <div className="mt-1.5 h-1 rounded-full bg-cream/20">
              <div className="h-1 w-2/5 rounded-full bg-gold" />
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}

function HadithScreen() {
  const books = ["Sahih Bukhari", "Sahih Muslim", "Jami Tirmidhi", "Sunan Abu Dawud", "Sunan Nasai"];
  return (
    <Phone>
      <ScreenTitle en="Hadith" ur="احادیث" />
      <div className="space-y-2 bg-white p-3 pb-5">
        {books.map((b, i) => (
          <div key={b} className="flex items-center gap-3 rounded-xl border border-gold/25 bg-white px-3 py-2.5">
            <span className="grid size-7 place-items-center rounded-lg border border-gold/40 text-xs font-semibold text-gold-deep">
              {i + 1}
            </span>
            <span className="text-sm font-semibold text-text">{b}</span>
          </div>
        ))}
        <p className="text-center text-xs text-text">+ Ibn Majah, Muwatta Malik</p>
      </div>
    </Phone>
  );
}

function FatawaScreen() {
  return (
    <Phone>
      <ScreenTitle en="Fatawa Shelf" ur="فتاویٰ" />
      <div className="bg-white p-3 pb-5">
        <div className="grid grid-cols-3 gap-2">
          {["۱", "۲", "۳", "۴", "۵", "۶"].map((n) => (
            <div key={n} className="flex aspect-[3/4] flex-col justify-between rounded-lg bg-teal p-2 text-center">
              <span className="font-arabic text-[10px] leading-tight text-gold">فتاویٰ رضویہ</span>
              <span className="font-arabic text-sm text-cream">جلد {n}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-gold/25 bg-white p-3">
          <p className="text-[10px] font-semibold tracking-wider text-gold-deep">CONTINUE READING</p>
          <p className="mt-1 font-arabic text-sm text-text">بہار شریعت · جلد ۱ · حصہ الف</p>
          <div className="mt-2 h-1 rounded-full bg-gold/20">
            <div className="h-1 w-3/5 rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </Phone>
  );
}

function AskScreen() {
  return (
    <Phone>
      <ScreenTitle en="Ask Ilm24x7" ur="سوال کریں" />
      <div className="space-y-2.5 bg-white p-3 pb-5">
        <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-teal px-3 py-2 text-xs text-cream">Roza kis par farz hai?</p>
        <div className="rounded-2xl rounded-bl-sm border border-gold/25 bg-white p-3">
          <p className="text-xs text-text">
            O People who Believe! Fasting is made compulsory for you, like it was ordained for those before you…
          </p>
          <p className="mt-1.5 text-[10px] font-semibold text-gold-deep">Quran · Al-Baqarah 2:183</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Sehri", "Iftar", "Taraweeh"].map((t) => (
            <span key={t} className="rounded-full border border-gold/40 px-2.5 py-1 text-[10px] text-text">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-full border border-gold/25 bg-white px-3 py-2 text-xs text-text">
          Apna sawal likhein…
          <span className="grid size-6 place-items-center rounded-full bg-gold text-ink">↑</span>
        </div>
      </div>
    </Phone>
  );
}

function QiblaScreen() {
  return (
    <Phone>
      <ScreenTitle en="Qibla" ur="قبلہ" />
      <div className="flex flex-col items-center bg-white px-3 py-6">
        <div className="relative grid size-44 place-items-center rounded-full border-2 border-gold/40 bg-white">
          {["N", "E", "S", "W"].map((d, i) => (
            <span
              key={d}
              className="absolute text-[10px] font-semibold text-text"
              style={{ transform: `rotate(${i * 90}deg) translateY(-76px) rotate(${-i * 90}deg)` }}
            >
              {d}
            </span>
          ))}
          <div className="h-32 w-1.5 rotate-[62deg] rounded-full bg-gradient-to-b from-gold from-50% to-teal to-50%" />
          <span className="absolute size-3 rounded-full bg-teal" />
        </div>
        <p className="mt-4 font-display text-2xl text-text">292°</p>
        <p className="text-xs text-text">Towards the Kaaba</p>
      </div>
    </Phone>
  );
}

const MAIN = [
  {
    tag: "NAMAZ",
    title: "Never miss a namaz",
    urdu: "اوقاتِ نماز",
    text: "Prayer times worked out for exactly where you are, with a live countdown to the next one.",
    points: ["Azan, chime or beep alarm for each prayer", "A week of alarms set ahead automatically", "Hijri date on the home screen"],
    screen: <PrayerScreen />,
  },
  {
    tag: "QURAN",
    title: "Read, understand, listen",
    urdu: "قرآن مجید",
    text: "The full Quran in Arabic with the Kanz ul Imaan tarjuma, and tafseer when you want to go deeper.",
    points: ["Urdu, English and Hindi tarjuma", "Tafseer volumes to read in the app", "Recitation by Mishary Alafasy"],
    screen: <QuranScreen />,
  },
  {
    tag: "HADITH",
    title: "Seven hadith books",
    urdu: "احادیث",
    text: "The six major collections and Muwatta Malik, in Urdu and English.",
    points: ["Bukhari, Muslim, Tirmidhi, Abu Dawud", "Nasai, Ibn Majah and Muwatta Malik", "Hadith number with every narration"],
    screen: <HadithScreen />,
  },
  {
    tag: "FATAWA",
    title: "A fiqh library in your pocket",
    urdu: "فتاویٰ",
    text: "Fatawa Razawiya and Bahar-e-Shariat, page by page, on a shelf that remembers where you stopped.",
    points: ["All 30 jild of Fatawa Razawiya", "Bahar-e-Shariat, every hissa", "Continue reading from the home screen"],
    screen: <FatawaScreen />,
  },
  {
    tag: "ASK ILM24X7",
    title: "Ask a question, get the source",
    urdu: "سوال کریں",
    text: "Type the way you speak. Ilm24x7 finds the ayah, hadith or fatwa page that answers it, and shows you where it comes from.",
    points: ["Roman Urdu, Urdu or English", "Every answer comes with its reference", "Related topics to ask about next"],
    screen: <AskScreen />,
  },
  {
    tag: "QIBLA",
    title: "Qibla, wherever you are",
    urdu: "قبلہ",
    text: "A compass that turns with your phone and points to the Kaaba, at home or travelling.",
    points: ["Turns with your phone's compass", "Shows the exact angle to the Kaaba", "Handy when travelling"],
    screen: <QiblaScreen />,
  },
];

const MORE = [
  { title: "Tasbih", urdu: "تسبیح", text: "A counter with SubhanAllah, Alhamdulillah, Allahu Akbar and more." },
  { title: "99 Names", urdu: "اسماء الحسنیٰ", text: "The beautiful names of Allah with their meanings." },
  { title: "Ramzan", urdu: "رمضان", text: "Everything about the month of fasting in one place." },
  { title: "Hajj", urdu: "حج", text: "A guide to the pilgrimage, step by step." },
  { title: "Pillars of Islam", urdu: "ارکانِ اسلام", text: "The five pillars, explained simply." },
  { title: "Light & Dark", urdu: "روشنی", text: "Easy on the eyes, day or night." },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Features() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-teal text-cream">
          <Star className="pointer-events-none absolute -top-24 -right-32 size-[380px] text-gold/15" />
          <div className="relative mx-auto max-w-6xl px-4 py-12 text-center md:py-14">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">FEATURES</p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl">Everything Ilm24x7 can do</h1>
            <p className="mx-auto mt-3 max-w-lg text-cream/85">
              From Fajr to Isha, from the Quran to the fatwa you were looking for, all in one app.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4">
          {MAIN.map((f, i) => (
            <section
              key={f.tag}
              className={`grid items-center gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-14 ${i > 0 ? "border-t border-gold/25" : ""}`}
            >
              <div className={i % 2 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.3em] text-gold-deep">{f.tag}</span>
                  <span className="font-arabic text-lg text-gold-deep">{f.urdu}</span>
                </div>
                <h2 className="mt-2 font-display text-3xl text-text">{f.title}</h2>
                <p className="mt-3 text-text">{f.text}</p>
                <ul className="mt-4 space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-text">
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
                <DownloadButton className="mt-6" />
              </div>
              <div className={i % 2 ? "md:order-1" : ""}>{f.screen}</div>
            </section>
          ))}
        </div>

        <section className="border-y border-gold/25 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="font-display text-3xl text-text">And there&apos;s more</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {MORE.map((f) => (
                <article key={f.title} className="rounded-2xl border border-gold/25 bg-white p-5">
                  <p className="font-arabic text-xl text-gold-deep">{f.urdu}</p>
                  <h3 className="mt-1 font-display text-xl text-text">{f.title}</h3>
                  <p className="mt-2 text-sm text-text">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DownloadSection />
      </main>

      <SiteFooter />
    </>
  );
}
