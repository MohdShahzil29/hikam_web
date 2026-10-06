"use client";

import { useEffect, useRef, useState } from "react";
import { dicts, type Lang } from "../_i18n/dict";

// The app's backend (Hikam/server). The chat endpoint answers from the server's own search index.
const API = (process.env.NEXT_PUBLIC_API_URL ?? "https://islamic-app-mf8e.onrender.com/api").replace(/\/+$/, "");

type Source =
  | { type: "quran"; surah: number; ayah: number; surahName: string; arabic: string; urdu: string; english: string }
  | { type: "hadith"; bookName: string; number: number; urdu?: string; english?: string }
  | { type: "fatawa"; book: "razawiya" | "bahar"; volume: number | null; label?: string; page: number; url?: string };

interface Reply {
  kind: "answer" | "empty" | "smalltalk";
  text: string;
  sources: Source[];
  suggestions: { label: string; query: string }[];
  more: boolean;
}

const SHOWN = 3;
const BOOKS = {
  razawiya: { en: "Fatawa Razawiya", ur: "فتاویٰ رضویہ" },
  bahar: { en: "Bahar-e-Shariat", ur: "بہارِ شریعت" },
};

function SourceCard({ source, lang }: { source: Source; lang: Lang }) {
  const t = dicts[lang].demo;
  const card = "rise rounded-xl border border-gold/25 bg-white p-3 text-start";

  if (source.type === "quran") {
    const translation = lang === "ur" ? source.urdu || source.english : source.english || source.urdu;
    return (
      <div className={card}>
        <p dir="rtl" className="font-arabic text-lg leading-loose text-text">{source.arabic}</p>
        <p dir="auto" className="mt-1 line-clamp-4 text-sm text-text">{translation}</p>
        <p className="mt-2 text-xs font-semibold text-gold-deep">
          {t.quran} · <span dir="ltr">{source.surahName} {source.surah}:{source.ayah}</span>
        </p>
      </div>
    );
  }

  if (source.type === "hadith") {
    const text = lang === "ur" ? source.urdu || source.english : source.english || source.urdu;
    return (
      <div className={card}>
        <p dir="auto" className="line-clamp-5 text-sm text-text">{text}</p>
        <p className="mt-2 text-xs font-semibold text-gold-deep">
          {t.hadith} · <span dir="ltr">{source.bookName} #{source.number}</span>
        </p>
      </div>
    );
  }

  // Fatawa page text is OCR output, so show the reference and link to the page itself
  const book = BOOKS[source.book]?.[lang] ?? t.fatawa;
  return (
    <div className={`${card} flex items-center justify-between gap-3`}>
      <div>
        <p className="text-sm font-semibold text-text">{book}</p>
        <p className="text-xs text-text">
          {source.label ?? (source.volume ? `${t.jild} ${source.volume}` : "")} · {t.page} {source.page}
        </p>
      </div>
      {source.url && (
        <a
          href={`${source.url}#page=${source.page}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold text-gold-deep hover:border-gold"
        >
          {t.open}
        </a>
      )}
    </div>
  );
}

export default function AskDemo({ lang }: { lang: Lang }) {
  const t = dicts[lang].demo;
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState<Reply | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "slow" | "error">("idle");
  const request = useRef<AbortController | null>(null);

  // The free server sleeps when idle; nudge it awake as soon as the page opens
  useEffect(() => {
    fetch(API.replace(/\/api$/, "/"), { mode: "no-cors" }).catch(() => {});
    return () => request.current?.abort();
  }, []);

  const ask = async (text: string) => {
    const message = text.trim();
    if (!message) return;
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;

    setQuestion(message);
    setInput("");
    setReply(null);
    setStatus("loading");
    const slow = setTimeout(() => setStatus((s) => (s === "loading" ? "slow" : s)), 5000);
    const timeout = setTimeout(() => controller.abort(), 90000);

    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
        signal: controller.signal,
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message);
      if (request.current !== controller) return;
      setReply(json.data);
      setStatus("idle");
    } catch {
      if (request.current === controller) setStatus("error");
    } finally {
      clearTimeout(slow);
      clearTimeout(timeout);
    }
  };

  const busy = status === "loading" || status === "slow";
  const hidden = reply ? reply.sources.length - SHOWN : 0;

  return (
    <div className="rounded-2xl border border-gold/25 bg-white p-4 sm:p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          dir="auto"
          maxLength={500}
          aria-label={t.placeholder}
          className="h-11 min-w-0 flex-1 rounded-full border border-gold/40 bg-white px-4 text-sm text-text outline-none placeholder:text-text/70 focus:border-gold"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="h-11 shrink-0 rounded-full bg-teal px-5 text-sm font-semibold text-cream transition hover:brightness-110 disabled:opacity-50"
        >
          {t.ask}
        </button>
      </form>

      {!question && (
        <div className="mt-3 flex flex-wrap gap-2">
          {t.samples.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => ask(s)}
              className="rounded-full border border-gold/40 px-3 py-1 text-xs text-text transition hover:border-gold hover:bg-gold/10"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {question && (
        <div className="mt-4 space-y-3" aria-live="polite">
          <p dir="auto" className="rise ms-auto w-fit max-w-[85%] rounded-2xl rounded-ee-sm bg-teal px-4 py-2 text-sm text-cream">
            {question}
          </p>

          {busy && (
            <div className="rise max-w-[90%] rounded-2xl rounded-es-sm border border-gold/25 p-4 text-sm text-text">
              <span className="inline-flex gap-1 align-middle" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="size-1.5 animate-bounce rounded-full bg-gold" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </span>{" "}
              {status === "slow" ? t.waking : t.searching}
            </div>
          )}

          {status === "error" && (
            <p className="rise rounded-2xl border border-gold/25 p-4 text-sm text-text">
              {t.error}{" "}
              <button type="button" onClick={() => ask(question)} className="font-semibold text-gold-deep underline">
                {t.ask}
              </button>
            </p>
          )}

          {reply && (
            <div className="space-y-2">
              <p dir="auto" className="rise whitespace-pre-line text-sm text-text">{reply.text}</p>
              {reply.sources.slice(0, SHOWN).map((s, i) => (
                <SourceCard key={i} source={s} lang={lang} />
              ))}
              {(hidden > 0 || reply.more) && (
                <a href="#download" className="block text-sm font-semibold text-gold-deep hover:underline">
                  {t.more} {lang === "ur" ? "←" : "→"}
                </a>
              )}
              {reply.suggestions.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs text-text">{t.next}</span>
                  {reply.suggestions.slice(0, 4).map((s) => (
                    <button
                      key={s.query}
                      type="button"
                      onClick={() => ask(s.query)}
                      className="rounded-full border border-gold/40 px-3 py-1 text-xs text-text transition hover:border-gold hover:bg-gold/10"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
