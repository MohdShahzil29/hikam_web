"use client";

import { useEffect, useRef, useState } from "react";
import AndroidPhone from "./android-phone";

// Real app screenshots, in the order of the dictionary's `home.hero.screens` captions
const SCREENS = [
  "01-home",
  "02-today",
  "03-ask",
  "04-prayer-times",
  "05-quran-audio",
  "06-fatawa",
  "07-qibla",
  "08-duas",
  "09-prayer-tracker",
  "10-tasbih",
  "11-calendar",
  "12-zakat",
].map((name) => `/screens/${name}.webp`);

// By distance from the centre phone: sideways shift (% of a phone's width), size and inward tilt
const SHIFT = [0, 92, 172];
// The front phone stands tall; the ones behind it sit lower and smaller so it rises above them
const SCALE = [1, 0.78, 0.64];
const TILT = [0, 14, 20];
const DROP = [0, 9, 15]; // % of a phone's height
const AUTOPLAY_MS = 3500;

const pad = (n: number) => String(n).padStart(2, "0");

export default function ScreenCarousel({ captions, prev, next }: { captions: string[]; prev: string; next: string }) {
  const n = SCREENS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerX = useRef<number | null>(null);

  const go = (step: number) => setActive((a) => (a + step + n) % n);

  // Turn the carousel on its own unless the visitor is interacting with it or prefers less motion
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, n]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={captions[active]}
    >
      {/* The phones are laid out left to right in both languages */}
      <div
        dir="ltr"
        className="relative mx-auto h-[440px] touch-pan-y select-none [perspective:1600px] md:h-[570px]"
        onPointerDown={(e) => (pointerX.current = e.clientX)}
        onPointerUp={(e) => {
          if (pointerX.current === null) return;
          const dx = e.clientX - pointerX.current;
          pointerX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        {/* Faint orbit lines behind the phones */}
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-1/4 h-1/2 w-full text-gold/25" aria-hidden>
          <ellipse cx="600" cy="200" rx="590" ry="120" fill="none" stroke="currentColor" />
          <ellipse cx="600" cy="200" rx="420" ry="190" fill="none" stroke="currentColor" />
        </svg>

        {SCREENS.map((src, i) => {
          // Shortest way round from the active phone, so the ring wraps both ways
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const distance = Math.min(Math.abs(offset), 2);
          const side = Math.sign(offset);
          const shown = Math.abs(offset) <= 2;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              tabIndex={offset === 0 || !shown ? -1 : 0}
              aria-label={captions[i]}
              aria-hidden={!shown}
              className={`absolute top-0 left-1/2 w-[190px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:w-[250px] ${
                !shown ? "pointer-events-none opacity-0" : distance === 2 ? "opacity-0 sm:opacity-100" : "opacity-100"
              } ${offset === 0 ? "cursor-default" : "cursor-pointer"}`}
              style={{
                transform: `translateX(calc(-50% + ${side * SHIFT[distance]}%)) translateY(${DROP[distance]}%) scale(${SCALE[distance]}) rotateY(${-side * TILT[distance]}deg)`,
                zIndex: 10 - distance,
              }}
            >
              <AndroidPhone
                src={src}
                alt={captions[i]}
                sizes="(min-width: 768px) 250px, 190px"
                priority={distance <= 1}
                front={offset === 0}
              />
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={prev}
          className="absolute top-1/2 left-2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-teal shadow-lg shadow-teal/15 transition hover:scale-105 md:left-6 md:size-14 xl:left-[calc(50%-37rem)]"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M19 12H5m0 0 6-6m-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={next}
          className="absolute top-1/2 right-2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-teal shadow-lg shadow-teal/15 transition hover:scale-105 md:right-6 md:size-14 xl:right-[calc(50%-37rem)]"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="mt-3 text-center font-display text-lg text-text" aria-live="polite">
        {captions[active]}
      </p>
      <div dir="ltr" className="mt-2 flex items-center justify-center gap-3 text-sm font-semibold text-text tabular-nums">
        <span>{pad(active + 1)}</span>
        <div className="flex items-center gap-1.5">
          {SCREENS.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={captions[i]}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-7 bg-gold" : "w-1.5 bg-gold/35 hover:bg-gold/70"}`}
            />
          ))}
        </div>
        <span>{pad(n)}</span>
      </div>
    </div>
  );
}
