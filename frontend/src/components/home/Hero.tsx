"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Gold & Slate Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Gold & Slate Glow behind navbar and hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#eeaf33]/15 via-[#284153]/25 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-[#284153]/30 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-[#284153]/25 to-transparent blur-3xl rounded-full" />

        {/* Abstract Gold Topographic / Geometric Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroGoldMesh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eeaf33" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#284153" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#eeaf33" stopOpacity="0.35" />
            </linearGradient>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M -100 120 C 300 80, 700 240, 1200 140 C 1600 60, 1900 180, 2200 100"
            fill="none"
            stroke="url(#heroGoldMesh)"
            strokeWidth="1.2"
            filter="url(#heroGlow)"
          />
          <path
            d="M -100 200 C 380 150, 780 300, 1280 200 C 1680 130, 1980 240, 2300 160"
            fill="none"
            stroke="url(#heroGoldMesh)"
            strokeWidth="0.8"
          />
          <path
            d="M -100 300 C 260 230, 680 350, 1180 260 C 1580 180, 1880 290, 2250 220"
            fill="none"
            stroke="url(#heroGoldMesh)"
            strokeWidth="0.6"
            strokeDasharray="4 6"
          />
          <circle cx="700" cy="240" r="3.5" fill="#eeaf33" filter="url(#heroGlow)" />
          <circle cx="1200" cy="140" r="3" fill="#eeaf33" filter="url(#heroGlow)" />
          <circle cx="1600" cy="60" r="2.5" fill="#eeaf33" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtle Luxury Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eeaf33]/30 bg-[#284153]/50 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="h-3.5 w-3.5 text-[#eeaf33]" />
          <span className="text-xs uppercase tracking-[0.22em] text-[#eeaf33] font-semibold">
            Vision Square Infrastructure • Hyderabad
          </span>
        </div>

        {/* Primary Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light text-[#F8F7F3] tracking-tight leading-[1.05] max-w-4xl mb-6">
          Crafting Architectural{" "}
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F8F7F3] via-[#eeaf33] to-[#eeaf33]">
            Masterpieces
          </span>{" "}
          for Modern Living
        </h1>

        {/* Subtitle */}
        <p className="text-[#F8F7F3]/80 text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 font-light leading-relaxed">
          Pioneering gated luxury villa communities, clear-title plotted townships, and world-class commercial developments in prime growth corridors.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <Link href="/projects" className="luxury-cta-btn group text-base px-8 py-3.5 h-13 shadow-[0_4px_24px_rgba(238,175,51,0.45)]">
            <span className="font-serif tracking-wide">Explore Signature Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
          <Link
            href="/contact"
            className="luxury-btn-secondary"
          >
            <Calendar className="h-4 w-4 text-[#eeaf33]" />
            <span>Book Site Visit</span>
          </Link>
        </div>

        {/* Metrics & Trust Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl border-t border-[#284153]/80 pt-10">
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[#284153]/35 border border-[#284153]/70 backdrop-blur-md transition-all hover:border-[#eeaf33]/40">
            <span className="font-serif text-3xl sm:text-4xl text-[#eeaf33] font-light mb-1">15+</span>
            <span className="text-xs uppercase tracking-wider text-[#F8F7F3]/70 font-medium">Years of Excellence</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[#284153]/35 border border-[#284153]/70 backdrop-blur-md transition-all hover:border-[#eeaf33]/40">
            <span className="font-serif text-3xl sm:text-4xl text-[#eeaf33] font-light mb-1">100%</span>
            <span className="text-xs uppercase tracking-wider text-[#F8F7F3]/70 font-medium">HMDA / Clear Titles</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[#284153]/35 border border-[#284153]/70 backdrop-blur-md transition-all hover:border-[#eeaf33]/40">
            <span className="font-serif text-3xl sm:text-4xl text-[#eeaf33] font-light mb-1">350+</span>
            <span className="text-xs uppercase tracking-wider text-[#F8F7F3]/70 font-medium">Acres Master-planned</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[#284153]/35 border border-[#284153]/70 backdrop-blur-md transition-all hover:border-[#eeaf33]/40">
            <span className="font-serif text-3xl sm:text-4xl text-[#eeaf33] font-light mb-1">1,200+</span>
            <span className="text-xs uppercase tracking-wider text-[#F8F7F3]/70 font-medium">Happy Investors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
