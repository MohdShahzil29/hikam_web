import type { Metadata } from "next";
import { DownloadSection, SiteFooter, SiteHeader, Star } from "../_components/site";

export const metadata: Metadata = {
  title: "About — Ilm24x7",
  description: "Why Ilm24x7 was built, what it stands for, and the person behind it.",
};

const VALUES = [
  {
    title: "Every answer has a source",
    urdu: "دلیل",
    text: "Ilm24x7 never makes things up. Every answer points to the ayah, hadith or fatwa page it comes from, so you can read it yourself.",
  },
  {
    title: "Made for Urdu speakers",
    urdu: "اردو",
    text: "Ask in Roman Urdu, Urdu or English, and read the Quran, Hadith and Fatawa in the language you think in.",
  },
  {
    title: "No outside AI",
    urdu: "امانت",
    text: "Answers come from Ilm24x7's own search over trusted books, not from a chatbot. Your questions are not sent to any AI company.",
  },
];

const THANKS = [
  { name: "AlQuran Cloud", what: "Quran text and recitation" },
  { name: "Hadith API by Fawaz Ahmed", what: "Hadith collections" },
  { name: "Adhan", what: "Prayer time calculation" },
];

export default function About() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-teal text-cream">
          <Star className="pointer-events-none absolute -top-24 -right-32 size-[380px] text-gold/15" />
          <div className="relative mx-auto max-w-3xl px-4 py-12 text-center md:py-14">
            <p className="font-arabic text-2xl text-gold">علم 24x7 کے بارے میں</p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl">About Ilm24x7</h1>
            <p className="mx-auto mt-3 max-w-lg text-cream/85">
              A companion for your deen: the Quran, Hadith and Fatawa in your pocket, with answers you can trust.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-deep">OUR STORY</p>
          <h2 className="mt-2 font-display text-3xl text-text">Why Ilm24x7</h2>
          <div className="mt-4 space-y-4 text-text">
            <p>
              When a question about deen comes up, most of us search online and land on a dozen different answers,
              often with no reference at all. The real answers are already in the Quran, the Hadith and books like
              Fatawa Razawiya and Bahar-e-Shariat, but those books are thousands of pages long and hard to search.
            </p>
            <p>
              Ilm24x7 brings them together in one app. You can read them, listen to them, and simply ask. It also keeps
              the everyday things close: namaz times with azan alarms, the Qibla, tasbih and the 99 Names of Allah.
            </p>
            <p>
              The name says it all. <span className="font-arabic text-lg text-gold-deep">علم</span>{" "}
              (<em>ilm</em>) means knowledge, and <em>24x7</em> means it is there for you at any hour, whenever a
              question comes to mind.
            </p>
          </div>
        </section>

        <section className="border-y border-gold/25">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="font-display text-3xl text-text">What we stand for</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {VALUES.map((v) => (
                <article key={v.title} className="rounded-2xl border border-gold/25 bg-white p-5">
                  <p className="font-arabic text-xl text-gold-deep">{v.urdu}</p>
                  <h3 className="mt-1 font-display text-xl text-text">{v.title}</h3>
                  <p className="mt-2 text-sm text-text">{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-deep">THE FOUNDER</p>
          <div className="mt-4 flex flex-col gap-6 rounded-3xl border border-gold/25 p-6 sm:flex-row sm:items-start">
            <div className="grid size-24 shrink-0 place-items-center self-center rounded-full bg-teal font-display text-3xl text-gold sm:self-start">
              MS
            </div>
            <div>
              <h2 className="font-display text-3xl text-text">Mohd Shahzil</h2>
              <p className="text-sm font-semibold text-gold-deep">Founder &amp; Developer</p>
              <div className="mt-3 space-y-3 text-text">
                <p>
                  Ilm24x7 is a one-person mission. Shahzil designed and built every part of it, from the app in your
                  hand to the server that answers your questions, with a single goal: anyone who speaks Urdu should
                  be able to reach authentic Islamic knowledge in seconds.
                </p>
                <p>
                  The hardest part was the books. Fatawa Razawiya&apos;s PDFs looked fine but were full of scrambled
                  letters underneath, and Bahar-e-Shariat was only scanned images. So Shahzil taught a computer to
                  read them: OCR that reads the Nastaleeq print page by page, and a program that learned, volume by
                  volume, how to fix the broken letters by checking them against the Urdu of the Quran and Hadith.
                </p>
                <p>
                  Then came the brain of Ilm24x7: its own search engine, built from scratch. It understands that{" "}
                  <em>roza</em>, <span className="font-arabic">روزہ</span> and <em>fasting</em> mean the same thing,
                  searches over 67,000 passages in an instant, and always shows the book and page an answer came from.
                  No borrowed chatbot, nothing guessed.
                </p>
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  ["67,000+", "passages"],
                  ["36,000+", "hadith"],
                  ["25,000+", "fatwa pages"],
                ].map(([n, label]) => (
                  <div key={label} className="rounded-xl border border-gold/25 py-3">
                    <dt className="font-display text-xl text-text sm:text-2xl">{n}</dt>
                    <dd className="text-xs text-text">{label}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="https://github.com/MohdShahzil29"
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
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-14">
            <h2 className="font-display text-3xl text-text">With thanks</h2>
            <p className="mt-3 text-text">
              Ilm24x7 stands on the work of others. Heartfelt thanks to the API providers and contributors who made this
              journey possible.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-3">
              {THANKS.map((t) => (
                <li key={t.name} className="rounded-xl border border-gold/25 p-4">
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-text">{t.what}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <DownloadSection />
      </main>

      <SiteFooter />
    </>
  );
}
