"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Handshake,
  ArrowRight,
  Play,
  X,
  Home,
  Building2,
  Landmark,
  Building,
  Briefcase,
  Mountain,
} from "lucide-react";

const propertyCategories = [
  {
    label: "Houses",
    count: "1,250+ Properties",
    icon: Home,
  },
  {
    label: "Apartments",
    count: "2,350+ Properties",
    icon: Building2,
  },
  {
    label: "Villas",
    count: "850+ Properties",
    icon: Landmark,
  },
  {
    label: "Penthouses",
    count: "450+ Properties",
    icon: Building,
  },
  {
    label: "Offices",
    count: "650+ Properties",
    icon: Briefcase,
  },
  {
    label: "Lands / Plots",
    count: "950+ Properties",
    icon: Mountain,
  },
];

export default function AboutPreview() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-20 md:pt-28 lg:pt-32 pb-4 sm:pb-6 md:pb-8 bg-[#F8F7F3] text-[#172027] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Mansion Showcase Image Card with Play Button & Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(40,65,83,0.14)] bg-[#172027]">
                <Image
                  src="/images/about/about-showcase.jpg"
                  alt="VisionS Infra Luxury Architecture Villa in Nagpur"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Center Circular Play Button */}
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Watch video walkthrough"
                  className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-10"
                >
                  <span className="absolute inset-0 rounded-full bg-white/40 animate-ping pointer-events-none" />
                  <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-[#172027] text-[#172027] translate-x-0.5 transition-transform group-hover:scale-110" />
                </button>

                {/* Bottom Right Floating Badge: 28+ YEARS OF EXCELLENCE */}
                {/* <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#172027]/95 backdrop-blur-md border border-[#eeaf33]/30 text-white rounded-2xl px-5 py-3.5 sm:px-6 sm:py-4 shadow-2xl flex flex-col items-center justify-center text-center z-10">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#eeaf33] tracking-tight leading-none">
                    28+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#F8F7F3] uppercase leading-tight mt-1">
                    Years of
                    <br />
                    Excellence
                  </span>
                </div> */}
              </div>
            </div>

            {/* Right Column: Content, Pillars & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow */}
              <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-[#eeaf33] font-bold mb-3 block">
                ABOUT VISIONS INFRA
              </span>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#284153] leading-[1.12] tracking-tight mb-5">
                Elevating Real Estate Experience in Nagpur
              </h2>

              {/* Narrative Paragraph */}
              <p className="font-sans text-sm sm:text-base text-[#5A6872] leading-relaxed mb-8 font-normal">
                At VisionS Infra, we believe in more than just properties — we believe in people, dreams, and creating lasting value. We are committed to creating thoughtfully planned properties that combine quality, convenience, functionality, and long-term value.
              </p>

              {/* 4 Feature Points in a 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
                {/* 1. Market Expertise */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#eeaf33]/15 flex items-center justify-center shrink-0 text-[#eeaf33]">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#284153] leading-snug">
                      Market Expertise
                    </h3>
                    <p className="font-sans text-xs text-[#5A6872] leading-normal mt-1">
                      In-depth Nagpur market knowledge &amp; strategic planning.
                    </p>
                  </div>
                </div>

                {/* 2. Personalized Service */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#eeaf33]/15 flex items-center justify-center shrink-0 text-[#eeaf33]">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#284153] leading-snug">
                      Personalized Service
                    </h3>
                    <p className="font-sans text-xs text-[#5A6872] leading-normal mt-1">
                      Honest &amp; clear communication tailored to your lifestyle.
                    </p>
                  </div>
                </div>

                {/* 3. Trusted & Transparent */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#eeaf33]/15 flex items-center justify-center shrink-0 text-[#eeaf33]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#284153] leading-snug">
                      Trusted &amp; Transparent
                    </h3>
                    <p className="font-sans text-xs text-[#5A6872] leading-normal mt-1">
                      Clear documentation and verified project insights.
                    </p>
                  </div>
                </div>

                {/* 4. Seamless Process */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#eeaf33]/15 flex items-center justify-center shrink-0 text-[#eeaf33]">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#284153] leading-snug">
                      Seamless Process
                    </h3>
                    <p className="font-sans text-xs text-[#5A6872] leading-normal mt-1">
                      Smooth from initial exploration to registry &amp; possession.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#172027] text-[#eeaf33] border border-[#eeaf33]/30 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#284153] hover:border-[#eeaf33] hover:shadow-[0_8px_24px_rgba(238,175,51,0.25)] hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span className="text-[#eeaf33]">LEARN MORE ABOUT US</span>
                  <ArrowRight className="h-4 w-4 text-[#eeaf33] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Property Types Floating Bar */}
          <div className="mt-8 sm:mt-12">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_45px_rgba(40,65,83,0.06)] border border-[#284153]/10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-neutral-100">
                {propertyCategories.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3.5 ${idx !== 0 ? "pt-4 sm:pt-0 lg:pl-6" : ""
                        } transition-transform duration-300 hover:translate-y-[-2px]`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#eeaf33]/15 flex items-center justify-center shrink-0 text-[#eeaf33]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#284153] leading-tight">
                          {item.label}
                        </h4>
                        <p className="font-sans text-xs text-[#5A6872] mt-0.5">
                          {item.count}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Walkthrough Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[#172027] border border-[#eeaf33]/30 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#284153]">
              <span className="font-serif text-lg text-[#F8F7F3] font-bold">
                VisionS Infra — Luxury Living Showcase
              </span>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-[#284153]/70 text-[#F8F7F3] hover:text-[#eeaf33] flex items-center justify-center transition-colors"
                aria-label="Close video modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player / Walkthrough Preview */}
            <div className="relative aspect-video w-full bg-black">
              <Image
                src="/images/about/about-showcase.jpg"
                alt="Walkthrough preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#eeaf33] text-[#172027] flex items-center justify-center mb-4 shadow-lg">
                  <Play className="h-7 w-7 fill-[#172027] translate-x-0.5" />
                </div>
                <h3 className="font-serif text-2xl text-white font-bold mb-2">
                  Experience Architectural Brilliance
                </h3>
                <p className="font-sans text-neutral-300 text-sm max-w-md font-normal">
                  Private video walkthrough of our signature luxury properties in Nagpur &amp; premier corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
