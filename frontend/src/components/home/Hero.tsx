"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const SLIDES = [
  {
    image: "/images/projects/skyconnect-7-crown.jpeg",
    eyebrow: "Signature Residential Address",
    title: ["7 CROWN", "SKYCONNECT"],
    titleColor: "text-[#9A7432]",
    subtitle:
      "A premium 3 BHK residential address designed around spacious living, refined finishes, smart security, and contemporary rooftop amenities in Jaiprakash Nagar, Nagpur.",
    slug: "skyconnect-7-crown",
  },
  {
    image: "/images/projects/pyramid-amara.jpg",
    eyebrow: "High-Rise Gated Township",
    title: ["PYRAMID", "AMARA"],
    titleColor: "text-[#9A7432]",
    subtitle:
      "A grand ~6-acre premium gated township featuring 6 high-rise towers rising 14–16 floors with MahaRERA approval on Besa–Pipla Road, Nagpur.",
    slug: "pyramid-amara",
  },
  {
    image: "/images/projects/the-one-rise.jpeg",
    eyebrow: "G+13 Storeyed Edifice",
    title: ["ONE", "RISE"],
    titleColor: "text-[#9A7432]",
    subtitle:
      "A signature-styled 2 & 3 BHK residential development featuring cross-ventilated homes, infinity swimming pool, sky deck, and rooftop lifestyle spaces in Nagpur.",
    slug: "the-one-rise",
  },
  {
    image: "/images/projects/infinity-elegance.jpeg",
    eyebrow: "Ultra-Luxury 4 BHK Homes",
    title: ["INFINITY", "ELEGANCE"],
    titleColor: "text-[#9A7432]",
    subtitle:
      "An ultra-luxurious 4 BHK residential project with mechanical car parking, rooftop garden & celebration deck, senior citizen seating, and EV charging in Dhantoli, Nagpur.",
    slug: "infinity-elegance",
  },
  {
    image: "/images/projects/sacchidanand-waman-nagri.jpeg",
    eyebrow: "Luxury Residential Haven",
    title: ["SACCHIDANAND", "WAMAN NAGRI"],
    titleColor: "text-[#9A7432]",
    subtitle:
      "Thoughtfully designed 2 & 3 BHK luxury flats with swimming pool, gymnasium, clubhouse, and commercial spaces on Besa Pipla Road, Nagpur.",
    slug: "sacchidanand-waman-nagri",
  },
];

const Icon = ({ path }: { path: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
);

const SOCIALS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210?text=Hello%20VisionSquare%20Infra%2C%20I%20am%20interested%20in%20your%20projects.",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.067c-4.512 0-8.186 3.674-8.188 8.187 0 1.442.377 2.85 1.096 4.094l.169.294-.648 2.368 2.424-.636.284.168a8.14 8.14 0 004.86 1.572h.003c4.512 0 8.186-3.674 8.188-8.187A8.13 8.13 0 0017.854 4.3 8.13 8.13 0 0012.051 1.9",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    path: "M12 2c-2.7 0-3.1 0-4.1.1-1.1.1-1.8.2-2.4.5-.7.3-1.2.6-1.8 1.2-.6.6-.9 1.1-1.2 1.8-.3.6-.4 1.3-.5 2.4C2 9 2 9.4 2 12s0 3.1.1 4.1c.1 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.3 1.3.4 2.4.5C8.9 22 9.3 22 12 22s3.1 0 4.1-.1c1.1-.1 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.3-.6.4-1.3.5-2.4.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.3-1.3-.4-2.4-.5C15.1 2 14.7 2 12 2Zm0 1.8c2.6 0 2.9 0 4 .1.9.1 1.5.2 1.8.4.5.2.8.4 1.1.7.3.3.5.6.7 1.1.2.3.3.9.4 1.8.1 1.1.1 1.4.1 4s0 2.9-.1 4c-.1.9-.2 1.5-.4 1.8-.2.5-.4.8-.7 1.1-.3.3-.6.5-1.1.7-.3.2-.9.3-1.8.4-1.1.1-1.4.1-4 .1s-2.9 0-4-.1c-.9-.1-1.5-.2-1.8-.4-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1.1-.2-.3-.3-.9-.4-1.8-.1-1.1-.1-1.4-.1-4s0-2.9.1-4c.1-.9.2-1.5.4-1.8.2-.5.4-.8.7-1.1.3-.3.6-.5 1.1-.7.3-.2.9-.3 1.8-.4 1.1-.1 1.4-.1 4-.1Zm0 3.2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: "M20.4 20.4h-3.5v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H9.4V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1ZM5.3 7.4A2 2 0 1 1 5.3 3.4a2 2 0 0 1 0 4ZM7 20.4H3.6V9H7v11.4Z",
  },
];

const STRIPS = 8;
const STAGGER_MS = 140; // per-column delay
const PART_APPEAR_MS = 650; // how long a single strip takes to slide into/out of place
const ASSEMBLE_MS = (STRIPS - 1) * STAGGER_MS + PART_APPEAR_MS;
const HOLD_MS = 3800; // hold the complete image
const TEXT_EXIT_MS = 500; // how long the text block takes to drop away before wipe starts
const EASE = "cubic-bezier(0.65,0,0.35,1)";
const enterDelay = (j: number) => (STRIPS - 1 - j) * STAGGER_MS;
const exitDelay = (j: number) => j * STAGGER_MS;

const STRIP_OVERLAP_PX = 1.5;
const stripStyle = (j: number) => ({
  left: `calc(${(j * 100) / STRIPS}% - ${STRIP_OVERLAP_PX}px)`,
  width: `calc(${100 / STRIPS}% + ${STRIP_OVERLAP_PX * 2}px)`,
});

interface StripsProps {
  image: string;
  revealed: boolean;
  settled: boolean;
  mode: "enter" | "exit";
}

const Strips = ({ image, revealed, settled, mode }: StripsProps) => (
  <div
    className={`absolute inset-0 transition-transform ease-linear duration-[4200ms] ${
      mode === "enter" && settled ? "scale-[1.06]" : "scale-100"
    }`}
  >
    {Array.from({ length: STRIPS }).map((_, j) => {
      const delay = mode === "enter" ? enterDelay(j) : exitDelay(j);
      const offTransform =
        mode === "enter" ? "translateX(100%)" : "translateX(0%)";
      const onTransform =
        mode === "enter" ? "translateX(0%)" : "translateX(-100%)";
      return (
        <div
          key={j}
          className="absolute top-0 h-full overflow-hidden"
          style={stripStyle(j)}
        >
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: revealed ? onTransform : offTransform,
              transition: `transform ${PART_APPEAR_MS}ms ${EASE} ${delay}ms`,
            }}
          >
            <div
              className="w-full h-full bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `calc(${STRIPS * 100}% + ${
                  STRIP_OVERLAP_PX * 2 * STRIPS
                }px) 100%`,
                backgroundPosition: `${(j * 100) / (STRIPS - 1)}% center`,
              }}
            />
          </div>
        </div>
      );
    })}
  </div>
);

const CHAR_STAGGER_MS = 100;
const WORD_STAGGER_MS = 70;

const AnimatedChars = ({
  text,
  baseDelay = 0,
}: {
  text: string;
  baseDelay?: number;
}) => {
  let i = -1;
  return (
    <>
      {text.split("").map((ch, ci) => {
        i += 1;
        const idx = i;
        return (
          <span
            key={ci}
            className={`inline-block opacity-0 animate-[charIn_480ms_cubic-bezier(0.65,0,0.35,1)_forwards] ${
              ch === " " ? "whitespace-pre" : "whitespace-normal"
            }`}
            style={{ animationDelay: `${baseDelay + idx * CHAR_STAGGER_MS}ms` }}
          >
            {ch}
          </span>
        );
      })}
    </>
  );
};

const AnimatedTitle = ({
  lines,
  baseDelay = 0,
}: {
  lines: string[];
  baseDelay?: number;
}) => {
  let i = -1;
  return (
    <>
      {lines.map((line, li) => (
        <React.Fragment key={li}>
          {line.split("").map((ch, ci) => {
            i += 1;
            const idx = i;
            return (
              <span
                key={ci}
                className={`inline-block opacity-0 animate-[charIn_480ms_cubic-bezier(0.65,0,0.35,1)_forwards] ${
                  ch === " " ? "whitespace-pre" : "whitespace-normal"
                }`}
                style={{
                  animationDelay: `${baseDelay + idx * CHAR_STAGGER_MS}ms`,
                }}
              >
                {ch}
              </span>
            );
          })}
          {li < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

const AnimatedWords = ({
  text,
  baseDelay = 0,
}: {
  text: string;
  baseDelay?: number;
}) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, wi) => (
        <span
          key={wi}
          className="inline-block opacity-0 animate-[charIn_520ms_cubic-bezier(0.65,0,0.35,1)_forwards] whitespace-pre"
          style={{ animationDelay: `${baseDelay + wi * WORD_STAGGER_MS}ms` }}
        >
          {w + (wi < words.length - 1 ? " " : "")}
        </span>
      ))}
    </>
  );
};

export default function Hero() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [settled, setSettled] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const timeoutsRef = useRef<any[]>([]);
  const loadedRef = useRef<Set<number>>(new Set());
  const prevIndexRef = useRef<number | null>(null);

  const clearTimers = () => {
    timeoutsRef.current.forEach((t) => {
      if (t && typeof t === "object" && typeof t.cancel === "function") {
        t.cancel();
      } else {
        clearTimeout(t);
      }
    });
    timeoutsRef.current = [];
  };

  useEffect(() => {
    SLIDES.forEach((slide, i) => {
      const img = new window.Image();
      img.onload = () => loadedRef.current.add(i);
      img.src = slide.image;
      if (img.complete) loadedRef.current.add(i);
    });
  }, []);

  const beginReveal = (index: number, prevIdx: number | null) => {
    setPrevious(prevIdx);
    setRevealed(false);
    setSettled(false);
    setFadingOut(false);

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setRevealed(true));
      timeoutsRef.current.push({ cancel: () => cancelAnimationFrame(raf2) });
    });
    timeoutsRef.current.push({ cancel: () => cancelAnimationFrame(raf1) });

    const clearPrev = setTimeout(() => {
      setPrevious(null);
      setSettled(true);
    }, ASSEMBLE_MS);

    const beginFadeOut = setTimeout(
      () => setFadingOut(true),
      ASSEMBLE_MS + HOLD_MS
    );
    const advance = setTimeout(() => {
      setRevealed(false);
      setCurrent((index + 1) % SLIDES.length);
    }, ASSEMBLE_MS + HOLD_MS + TEXT_EXIT_MS);

    timeoutsRef.current.push(clearPrev, beginFadeOut, advance);
  };

  const runCycle = (index: number) => {
    clearTimers();
    setSettled(false);
    const prevIdx = prevIndexRef.current;
    prevIndexRef.current = index;

    if (loadedRef.current.has(index)) {
      beginReveal(index, prevIdx);
      return;
    }

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      beginReveal(index, prevIdx);
    };

    const img = new window.Image();
    img.onload = () => {
      loadedRef.current.add(index);
      start();
    };
    img.src = SLIDES[index].image;
    if (img.complete) {
      loadedRef.current.add(index);
      start();
    } else {
      const fallback = setTimeout(start, 2500);
      timeoutsRef.current.push(fallback);
    }
  };

  useEffect(() => {
    runCycle(current);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const goTo = (index: number) => {
    clearTimers();
    setFadingOut(false);
    setRevealed(false);
    setCurrent((index + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#172027]">
      <style>{`
        @keyframes charIn {
          from { opacity: 0; transform: translateX(22px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes blockUp {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Ambient blurred backdrop, always current slide */}
      <div className="absolute inset-0">
        <img
          src={SLIDES[current].image}
          alt={SLIDES[current].eyebrow}
          className="h-full w-full object-cover blur-[9px] brightness-[0.55] scale-[1.06]"
        />
      </div>

      {/* Outgoing slide — closes from the left */}
      {previous !== null && (
        <Strips
          image={SLIDES[previous].image}
          revealed={revealed}
          settled={false}
          mode="exit"
        />
      )}

      {/* Incoming slide — enters from the right */}
      <div key={current} className="absolute inset-0">
        <Strips
          image={SLIDES[current].image}
          revealed={revealed}
          settled={settled}
          mode="enter"
        />
      </div>

      {/* Dark gradient overlay scrim for high readability */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[linear-gradient(270deg,rgba(23,32,39,0.85)_0%,rgba(23,32,39,0.55)_50%,rgba(23,32,39,0.30)_100%)]" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-black/25" />

      {/* Social rail */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-3">
        <span className="h-10 w-px bg-white/40" />
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-[#9A7432] hover:text-white hover:border-white hover:scale-110 transition-all duration-300 shadow-xl"
          >
            <Icon path={s.path} />
          </a>
        ))}
      </div>

      {/* Prev / Next controls */}
      <div className="hidden md:flex absolute left-28 lg:left-32 top-1/2 -translate-y-1/2 z-10 items-center gap-10 font-serif">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          className="flex items-center gap-3 text-white hover:text-[#9A7432] transition-all duration-300 font-extrabold cursor-pointer hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          <svg width="22" height="14" viewBox="0 0 16 10" fill="none">
            <path
              d="M15 5H1M1 5L5.5 1M1 5L5.5 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base sm:text-lg font-black tracking-[0.25em] uppercase">
            Prev
          </span>
        </button>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          className="flex items-center gap-3 text-white hover:text-[#9A7432] transition-all duration-300 font-extrabold cursor-pointer hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          <span className="text-base sm:text-lg font-black tracking-[0.25em] uppercase">
            Next
          </span>
          <svg width="22" height="14" viewBox="0 0 16 10" fill="none">
            <path
              d="M1 5H15M15 5L10.5 1M15 5L10.5 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Text block — right side, right-aligned */}
      <div
        className={`absolute inset-y-0 right-6 sm:right-10 md:right-32 lg:right-48 z-10 flex flex-col justify-center items-end max-w-xl text-right gap-5 transition-all duration-[420ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          fadingOut ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
        }`}
      >
        <span
          key={`eyebrow-${current}`}
          className="text-xs sm:text-sm tracking-[0.35em] uppercase text-white font-extrabold font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
        >
          <AnimatedChars text={SLIDES[current].eyebrow} baseDelay={100} />
        </span>

        <h1
          key={`title-${current}`}
          className={`${
            SLIDES[current].titleColor || "text-white"
          } text-[8.5vw] sm:text-[6vw] md:text-[3.6vw] leading-[1.05] font-black font-serif drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]`}
        >
          <AnimatedTitle lines={SLIDES[current].title} baseDelay={180} />
        </h1>

        <p
          key={`subtitle-${current}`}
          className="text-white text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-md font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          style={{ fontWeight: 600 }}
        >
          <AnimatedWords text={SLIDES[current].subtitle} baseDelay={900} />
        </p>

        <button
          key={`cta-${current}`}
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            router.push(`/projects/${SLIDES[current].slug}`);
          }}
          className="animate-[blockUp_560ms_cubic-bezier(0.65,0,0.35,1)_1650ms_both] mt-2 bg-[#9A7432] text-white text-xs sm:text-sm uppercase tracking-widest px-9 py-4 rounded-full hover:bg-[#172027] hover:shadow-2xl transition-all duration-300 font-bold cursor-pointer shadow-xl active:scale-95"
        >
          Learn More
        </button>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-6 md:right-12 z-10 w-11 h-11 bg-[#9A7432] text-white flex items-center justify-center hover:bg-[#172027] transition-colors rounded-full shadow-lg cursor-pointer"
        aria-label="Back to top"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 0L11 8H1L6 0Z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
