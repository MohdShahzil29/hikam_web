import Image from "next/image";
import Link from "next/link";
import { dicts, localHref, type Lang } from "../_i18n/dict";

// The people behind Ilm24x7, shared by the home and about pages. `more` adds a link to the about page.
export default function TeamSection({ lang, more = false }: { lang: Lang; more?: boolean }) {
  const t = dicts[lang].about;
  return (
    <section id="team" className="scroll-mt-16 border-y border-gold/25 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="reveal flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold-deep">{t.teamTag}</p>
            <h2 className="mt-2 font-display text-3xl text-text">{t.teamTitle}</h2>
          </div>
          {more && (
            <Link href={localHref(lang, "/about")} className="text-sm font-semibold text-gold-deep hover:underline">
              {dicts[lang].nav.about} {lang === "ur" ? "←" : "→"}
            </Link>
          )}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {t.team.map((m) => (
            <li key={m.image} className="reveal group text-center">
              <div className="relative mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-2xl border border-gold/25 bg-teal transition duration-300 group-hover:-translate-y-1 group-hover:border-gold">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="180px"
                />
              </div>
              <h3 className="mt-3 font-display text-lg text-text sm:text-xl">
                <bdi>{m.name}</bdi>
              </h3>
              <p className="text-sm font-semibold text-gold-deep">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
