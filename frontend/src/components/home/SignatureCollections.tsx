"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  MapPin,
  Play,
  Maximize2,
  Check,
  Phone,
  Building2,
  Trees,
  ShieldCheck,
  Waves,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function SignatureCollections() {
  // Modal states
  const [activeVideoModal, setActiveVideoModal] = useState<"crown" | "amara" | "skyjoy" | null>(null);
  const [activeExploreModal, setActiveExploreModal] = useState<"crown" | "amara" | "skyjoy" | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setActiveExploreModal(null);
      setFormData({ name: "", phone: "", email: "", visitDate: "", message: "" });
    }, 2800);
  };

  return (
    <section
      id="signature-collections"
      className="relative pt-6 sm:pt-8 md:pt-10 pb-20 sm:pb-28 lg:pb-32 bg-[#F8F7F3] text-[#172027] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#eeaf33]" />
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
              Signature Collections
            </span>
            <span className="h-px w-8 bg-[#eeaf33]" />
          </div>
          <h2 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#172027] uppercase tracking-[0.22em] sm:tracking-[0.28em] leading-tight">
            Curated Architectural Enclaves
          </h2>
          <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#172027]/75 font-normal mt-2.5 tracking-wide">
            More than a home. A signature way of living.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SHOWCASE 1: SKYCONNECT 7 CROWN */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-center mb-20 sm:mb-28">
          {/* Left: Building Showcase with Overlapping Video Card */}
          <div className="w-full lg:w-[54%] shrink-0">
            <div className="relative group max-w-[520px] mx-auto lg:mx-0">
              <div
                onClick={() => setActiveLightbox("/images/projects/skyconnect-7-crown.jpeg")}
                className="relative h-[360px] sm:h-[410px] lg:h-[450px] w-full rounded-[2.2rem] overflow-hidden shadow-[0_20px_45px_rgba(23,32,39,0.12)] cursor-pointer border border-black/5 transition-transform duration-500 hover:scale-[1.01]"
                title="Click to view SkyConnect 7 Crown"
              >
                <Image
                  src="/images/projects/skyconnect-7-crown.jpeg"
                  alt="SkyConnect 7 Crown - Luxury Residential Address in Jaiprakash Nagar, Nagpur"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#eeaf33] text-white text-[11px] font-bold uppercase tracking-[0.14em] shadow-md">
                    SIGNATURE ADDRESS
                  </span>
                </div>

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#172027]/75 backdrop-blur-md text-[#F8F7F3] p-1.5 rounded-full border border-white/20 shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Bottom-Left Overlapping Video Card */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideoModal("crown");
                }}
                className="absolute -left-3 sm:-left-5 -bottom-4 sm:-bottom-5 w-36 sm:w-48 h-24 sm:h-30 rounded-2xl overflow-hidden border-4 border-[#FAF9F5] shadow-2xl z-20 cursor-pointer transition-transform duration-300 hover:scale-105 group/video"
                title="Watch SkyConnect 7 Crown walkthrough video"
              >
                <Image
                  src="/images/projects/skyconnect-penthouse.jpg"
                  alt="SkyConnect 7 Crown Penthouse & Rooftop Tour Video"
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover/video:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 group-hover/video:bg-black/20 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-9 h-9 rounded-full bg-[#eeaf33]/45 animate-ping pointer-events-none" />
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#eeaf33] text-[#172027] flex items-center justify-center shadow-xl group-hover/video:scale-110 transition-transform">
                      <Play className="h-3.5 sm:h-4 w-3.5 sm:h-4 fill-[#172027] translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[9px] font-semibold text-white drop-shadow-md">
                  <span className="inline-flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    <span className="w-1 h-1 rounded-full bg-[#eeaf33] animate-pulse" />
                    VIDEO
                  </span>
                  <span className="bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm text-[8px]">
                    Tour
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reduced Height Elevated Card */}
          <div className="w-full lg:w-[44%] max-w-[450px] mt-8 lg:mt-0 lg:-ml-12 relative z-20">
            <div className="bg-[#FAF9F5] rounded-[2rem] p-6 sm:p-7 md:p-8 shadow-[0_25px_60px_-15px_rgba(23,32,39,0.18),0_10px_25px_-5px_rgba(23,32,39,0.08)] relative">
              <div className="font-serif font-bold text-[11px] sm:text-xs text-[#172027] uppercase tracking-[0.2em] mb-2">
                JAIPRAKASH NAGAR · NAGPUR
              </div>

              <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[34px] text-[#eeaf33] tracking-[0.22em] leading-[1.12] uppercase mb-2">
                SKYCONNECT
                <br />
                7 CROWN
              </h3>

              <p className="font-serif italic text-xs sm:text-sm text-[#172027]/85 font-medium mb-2.5">
                More than a home. A signature way of living.
              </p>

              <p className="font-sans text-xs sm:text-[13px] text-[#172027]/75 font-normal leading-relaxed mb-4 max-w-sm font-light">
                A premium 3 BHK residential address designed around spacious living,
                refined finishes, smart security and contemporary lifestyle amenities.
              </p>

              <div className="border-t border-[#172027]/12 pt-3.5 pb-3.5 mb-5">
                <div className="grid grid-cols-2 gap-y-3.5">
                  <div className="pr-3 border-r border-[#172027]/12">
                    <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
                      3
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      BHK PREMIUM HOMES
                    </div>
                  </div>

                  <div className="pl-4">
                    <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
                      01
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      SIGNATURE ADDRESS
                    </div>
                  </div>

                  <div className="pr-3 border-r border-[#172027]/12">
                    <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                      24×7
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      SECURITY &amp; WATER
                    </div>
                  </div>

                  <div className="pl-4">
                    <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                      01
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      ROOFTOP GARDEN
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://visioninfraprojects.com/projects/skyconnect-7-crown#enquire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#eeaf33] text-[#eeaf33] font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#eeaf33] hover:text-[#172027] hover:shadow-md group cursor-pointer"
                >
                  <span>EXPLORE 7 CROWN</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveExploreModal("crown")}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold tracking-[0.14em] uppercase hover:bg-[#f5be47] transition-all shadow-sm cursor-pointer"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ribbon 1: Pyramid Amara Ticker */}
        <div className="mb-20 sm:mb-28 overflow-hidden py-3 border-y border-[#172027]/10 bg-white/50 backdrop-blur-sm rounded-full">
          <div className="flex items-center justify-around gap-6 text-[11px] sm:text-xs font-serif font-medium uppercase tracking-[0.2em] text-[#172027]/80">
            <span className="inline-flex items-center gap-2">
              Pyramid Amara <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              Besa–Pipla Road <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              2 &amp; 3 BHK <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              6 Towers <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              RERA Approved <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              Premium Gated Township <span className="text-[#eeaf33]">✦</span>
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SHOWCASE 2: PYRAMID AMARA */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-center lg:gap-9 mb-20 sm:mb-28">
          {/* Left: Reduced Height Elevated Card for Pyramid Amara */}
          <div className="w-full lg:w-[450px] max-w-[450px] order-2 lg:order-1 mt-8 lg:mt-0 relative z-20">
            <div className="bg-[#FAF9F5] rounded-[2rem] p-6 sm:p-7 md:p-8 shadow-[0_25px_60px_-15px_rgba(23,32,39,0.18),0_10px_25px_-5px_rgba(23,32,39,0.08)] relative">
              <div className="font-serif font-bold text-[11px] sm:text-xs text-[#172027] uppercase tracking-[0.2em] mb-2">
                PYRAMID GROUP · BESA–PIPLA ROAD, NAGPUR
              </div>

              <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[34px] text-[#eeaf33] tracking-[0.22em] leading-[1.12] uppercase mb-2">
                PYRAMID
                <br />
                AMARA
              </h3>

              <p className="font-serif italic text-xs sm:text-sm text-[#172027]/85 font-medium mb-2.5">
                Premium living on Besa–Pipla Road.
              </p>

              <p className="font-sans text-xs sm:text-[13px] text-[#172027]/75 font-normal leading-relaxed mb-4 max-w-sm font-light">
                A grand ~6-acre premium gated township featuring 6 high-rise towers
                rising 14–16 floors. Thoughtfully planned 2 &amp; 3 BHK residences with RERA approval.
              </p>

              <div className="border-t border-[#172027]/12 pt-3.5 pb-3.5 mb-5">
                <div className="grid grid-cols-2 gap-y-3.5">
                  <div className="pr-3 border-r border-[#172027]/12">
                    <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
                      ~6 Acres
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      TOTAL AREA
                    </div>
                  </div>

                  <div className="pl-4">
                    <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
                      6 Towers
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      TOWERS
                    </div>
                  </div>

                  <div className="pr-3 border-r border-[#172027]/12">
                    <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                      14–16 Floors
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      FLOORS
                    </div>
                  </div>

                  <div className="pl-4">
                    <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                      2 &amp; 3 BHK
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      CONFIG
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveExploreModal("amara")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#eeaf33] text-[#eeaf33] font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#eeaf33] hover:text-[#172027] hover:shadow-md group cursor-pointer"
                >
                  <span>EXPLORE AMARA</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveExploreModal("amara")}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold tracking-[0.14em] uppercase hover:bg-[#f5be47] transition-all shadow-sm cursor-pointer"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: High-Rise Tower Frame with Video Card */}
          <div className="w-full lg:w-[520px] max-w-[520px] shrink-0 order-1 lg:order-2">
            <div className="relative group max-w-[520px] mx-auto lg:mx-0">
              <div
                onClick={() => setActiveLightbox("/images/projects/pyramid-amara.jpg")}
                className="relative h-[360px] sm:h-[410px] lg:h-[450px] w-full rounded-[2.2rem] overflow-hidden shadow-[0_20px_45px_rgba(23,32,39,0.12)] cursor-pointer border border-black/5 transition-transform duration-500 hover:scale-[1.01]"
                title="Click to view Pyramid Amara High-Rise Towers"
              >
                <Image
                  src="/images/projects/pyramid-amara.jpg"
                  alt="Pyramid Amara - Premium 2 & 3 BHK High-Rise Township in Besa-Pipla Road, Nagpur"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#eeaf33] text-white text-[11px] font-bold uppercase tracking-[0.14em] shadow-md">
                    6 TOWERS · 14–16 FLOORS
                  </span>
                </div>

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#172027]/75 backdrop-blur-md text-[#F8F7F3] p-1.5 rounded-full border border-white/20 shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Bottom-Right Overlapping Video Card */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideoModal("amara");
                }}
                className="absolute -right-3 sm:-right-5 -bottom-4 sm:-bottom-5 w-36 sm:w-48 h-24 sm:h-30 rounded-2xl overflow-hidden border-4 border-[#FAF9F5] shadow-2xl z-20 cursor-pointer transition-transform duration-300 hover:scale-105 group/video"
                title="Watch Pyramid Amara Township walkthrough video"
              >
                <Image
                  src="/images/projects/skyconnect-penthouse.jpg"
                  alt="Pyramid Amara Township Walkthrough Video"
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover/video:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 group-hover/video:bg-black/20 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-9 h-9 rounded-full bg-[#eeaf33]/45 animate-ping pointer-events-none" />
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#eeaf33] text-[#172027] flex items-center justify-center shadow-xl group-hover/video:scale-110 transition-transform">
                      <Play className="h-3.5 sm:h-4 w-3.5 sm:h-4 fill-[#172027] translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[9px] font-semibold text-white drop-shadow-md">
                  <span className="inline-flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    <span className="w-1 h-1 rounded-full bg-[#eeaf33] animate-pulse" />
                    VIDEO
                  </span>
                  <span className="bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm text-[8px]">
                    Tour
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ribbon 2: Sky Joy Waterfront Ticker */}
        <div className="mb-20 sm:mb-28 overflow-hidden py-3 border-y border-[#172027]/10 bg-white/50 backdrop-blur-sm rounded-full">
          <div className="flex items-center justify-around gap-6 text-[11px] sm:text-xs font-serif font-medium uppercase tracking-[0.2em] text-[#172027]/80">
            <span className="inline-flex items-center gap-2">
              Sky Joy <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              78 Acres <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              918 Plots <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              Waterfront Living <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              RERA Approved <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2">
              South Nagpur <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2 hidden md:inline-flex">
              Sky Joy <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2 hidden md:inline-flex">
              78 Acres <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2 hidden lg:inline-flex">
              918 Plots <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2 hidden lg:inline-flex">
              Waterfront Living <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2 hidden xl:inline-flex">
              RERA Approved <span className="text-[#eeaf33]">✦</span>
            </span>
            <span className="inline-flex items-center gap-2 hidden xl:inline-flex">
              South Nagpur <span className="text-[#eeaf33]">✦</span>
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SHOWCASE 3: SKY JOY (INDIA'S FIRST WATERFRONT PLOTS) */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-center">
          {/* Left: Waterfront Plotted Masterplan Frame with Video Card */}
          <div className="w-full lg:w-[54%] shrink-0">
            <div className="relative group max-w-[520px] mx-auto lg:mx-0">
              <div
                onClick={() => setActiveLightbox("/images/projects/vision-imperial.jpg")}
                className="relative h-[360px] sm:h-[410px] lg:h-[450px] w-full rounded-[2.2rem] overflow-hidden shadow-[0_20px_45px_rgba(23,32,39,0.12)] cursor-pointer border border-black/5 transition-transform duration-500 hover:scale-[1.01]"
                title="Click to view Sky Joy Waterfront Plotted Masterplan"
              >
                <Image
                  src="/images/projects/vision-imperial.jpg"
                  alt="Sky Joy - India's First Waterfront Plots in Mondha, Hingna, South Nagpur"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#eeaf33] text-white text-[11px] font-bold uppercase tracking-[0.14em] shadow-md">
                    INDIA&apos;S FIRST WATERFRONT PLOTS
                  </span>
                </div>

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#172027]/75 backdrop-blur-md text-[#F8F7F3] p-1.5 rounded-full border border-white/20 shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Bottom-Left Overlapping Video Card */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideoModal("skyjoy");
                }}
                className="absolute -left-3 sm:-left-5 -bottom-4 sm:-bottom-5 w-36 sm:w-48 h-24 sm:h-30 rounded-2xl overflow-hidden border-4 border-[#FAF9F5] shadow-2xl z-20 cursor-pointer transition-transform duration-300 hover:scale-105 group/video"
                title="Watch Sky Joy Beach & Wave Pool Tour Video"
              >
                <Image
                  src="/images/projects/neralu-lake-inset.jpg"
                  alt="Sky Joy Man-Made Beach & Lake Waterfront Video"
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover/video:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 group-hover/video:bg-black/20 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-9 h-9 rounded-full bg-[#eeaf33]/45 animate-ping pointer-events-none" />
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#eeaf33] text-[#172027] flex items-center justify-center shadow-xl group-hover/video:scale-110 transition-transform">
                      <Play className="h-3.5 sm:h-4 w-3.5 sm:h-4 fill-[#172027] translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[9px] font-semibold text-white drop-shadow-md">
                  <span className="inline-flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    <span className="w-1 h-1 rounded-full bg-[#eeaf33] animate-pulse" />
                    VIDEO
                  </span>
                  <span className="bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm text-[8px]">
                    Beach Tour
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reduced Height Elevated Card for Sky Joy */}
          <div className="w-full lg:w-[44%] max-w-[450px] mt-8 lg:mt-0 lg:-ml-12 relative z-20">
            <div className="bg-[#FAF9F5] rounded-[2rem] p-6 sm:p-7 md:p-8 shadow-[0_25px_60px_-15px_rgba(23,32,39,0.18),0_10px_25px_-5px_rgba(23,32,39,0.08)] relative">
              <div className="font-serif font-bold text-[11px] sm:text-xs text-[#172027] uppercase tracking-[0.2em] mb-1.5">
                HOABL · MAHARERA PP1190002502095
              </div>

              <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[34px] text-[#eeaf33] tracking-[0.22em] leading-[1.12] uppercase mb-1">
                SKY
                <br />
                JOY
              </h3>

              <p className="font-serif italic text-xs sm:text-sm text-[#172027]/85 font-medium mb-2.5">
                Where luxury meets the waterfront.
              </p>

              <p className="font-sans text-xs sm:text-[13px] text-[#172027]/75 font-normal leading-relaxed mb-4 max-w-sm font-light">
                India&apos;s first luxury waterfront plotted development featuring a ~3-acre man-made beach, wave pool, and grand 28,000 sq. ft. clubhouse.
              </p>

              {/* Specs 2x2 Grid (Exact User Content & All in Gold #eeaf33) */}
              <div className="border-t border-[#172027]/12 pt-3.5 pb-3.5 mb-5">
                <div className="grid grid-cols-2 gap-y-3.5">
                  {/* ~78 Acres Total Area */}
                  <div className="pr-3 border-r border-[#172027]/12">
                    <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
                      ~78 Acres
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      TOTAL AREA
                    </div>
                  </div>

                  {/* 918 Total Plots */}
                  <div className="pl-4">
                    <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
                      918
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      TOTAL PLOTS
                    </div>
                  </div>

                  {/* 28,000 sq.ft Clubhouse */}
                  <div className="pr-3 border-r border-[#172027]/12">
                    <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                      28,000 sq.ft
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      CLUBHOUSE
                    </div>
                  </div>

                  {/* ~3 Acres Beach & Pool */}
                  <div className="pl-4">
                    <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                      ~3 Acres
                    </div>
                    <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#172027]/55 mt-0.5">
                      BEACH &amp; POOL
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveExploreModal("skyjoy")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#eeaf33] text-[#eeaf33] font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#eeaf33] hover:text-[#172027] hover:shadow-md group cursor-pointer"
                >
                  <span>EXPLORE SKY JOY</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveExploreModal("skyjoy")}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold tracking-[0.14em] uppercase hover:bg-[#f5be47] transition-all shadow-sm cursor-pointer"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIDEO MODAL */}
      {/* ========================================================================= */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172027]/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF9F5] border-2 border-[#172027] rounded-3xl overflow-hidden p-5 sm:p-7 shadow-2xl text-[#172027]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#172027]/12 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#eeaf33] block">
                  RESIDENTIAL WALKTHROUGH TOUR
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#172027] font-medium tracking-wide">
                  {activeVideoModal === "crown"
                    ? "SkyConnect 7 Crown · Architecture & Penthouse Living"
                    : activeVideoModal === "amara"
                    ? "Pyramid Amara · 6 Towers High-Rise Township"
                    : "Sky Joy · India's First Waterfront Plotted Development"}
                </h4>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-2 rounded-full hover:bg-black/10 text-[#172027] transition-colors"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <Image
                src={
                  activeVideoModal === "crown"
                    ? "/images/projects/skyconnect-penthouse.jpg"
                    : activeVideoModal === "amara"
                    ? "/images/projects/pyramid-amara.jpg"
                    : "/images/projects/vision-imperial.jpg"
                }
                alt="Walkthrough Video Preview"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between text-white text-xs">
                  <span className="inline-flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#eeaf33] animate-pulse" />
                    {activeVideoModal === "crown"
                      ? "Double-Height Living & City Skyline"
                      : activeVideoModal === "amara"
                      ? "~6 Acres Gated Township · 14–16 Floors"
                      : "~78 Acres Waterfront Plotted Development"}
                  </span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>

                <div className="text-white text-center max-w-md mx-auto">
                  <div className="w-14 h-14 rounded-full bg-[#eeaf33] text-[#172027] flex items-center justify-center mx-auto mb-3 shadow-xl">
                    <Play className="h-6 w-6 fill-[#172027] translate-x-0.5" />
                  </div>
                  <h5 className="font-serif text-lg sm:text-xl font-medium mb-1">
                    {activeVideoModal === "crown"
                      ? "Signature 3 BHK Residences"
                      : activeVideoModal === "amara"
                      ? "2 & 3 BHK High-Rise Homes"
                      : "India's First Waterfront Plots"}
                  </h5>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    {activeVideoModal === "crown"
                      ? "Italian marble finishes, covered parking, and an exclusive landscaped rooftop sanctuary in Jaiprakash Nagar."
                      : activeVideoModal === "amara"
                      ? "Grand clubhouse, landscaped central garden, multi-tier security, and unmatched connectivity on Besa–Pipla Road."
                      : "~3-acre man-made beach and wave pool with a grand 28,000 sq.ft clubhouse and 40+ world-class lifestyle amenities."}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span>
                    {activeVideoModal === "crown"
                      ? "Jaiprakash Nagar"
                      : activeVideoModal === "amara"
                      ? "Besa–Pipla Road"
                      : "Mondha, Hingna, South Nagpur"}
                  </span>
                  <span>Nagpur</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-[#172027]/70 font-light">
                Schedule a private site visit to experience floor plans and availability in person.
              </span>
              <button
                onClick={() => {
                  const current = activeVideoModal;
                  setActiveVideoModal(null);
                  setActiveExploreModal(current);
                }}
                className="px-6 py-2.5 rounded-full bg-[#eeaf33] text-[#172027] text-xs font-bold uppercase tracking-wider hover:bg-[#f5be47] transition-all shadow-sm shrink-0"
              >
                Enquire Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172027]/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF9F5] border-2 border-[#172027] rounded-3xl overflow-hidden p-5 shadow-2xl text-[#172027]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#172027]/12 mb-4">
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#172027] font-medium tracking-wide">
                  ARCHITECTURE SHOWCASE
                </h4>
                <p className="text-xs text-[#172027]/60">
                  Signature Residential &amp; Waterfront Collection · Nagpur
                </p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="p-2 rounded-full hover:bg-black/10 text-[#172027] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-black max-h-[75vh]">
              <Image
                src={activeLightbox}
                alt="Architecture Full View"
                width={1280}
                height={1280}
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EXPLORE / CALL NOW MODAL */}
      {/* ========================================================================= */}
      {activeExploreModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172027]/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setActiveExploreModal(null)}
        >
          <div
            className="relative max-w-2xl w-full my-8 bg-[#FAF9F5] border-2 border-[#172027] rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl text-[#172027]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-[#172027]/12 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#eeaf33] block mb-1">
                  SIGNATURE ENCLAVE SHOWCASE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#172027] font-normal tracking-[0.16em] uppercase">
                  {activeExploreModal === "crown"
                    ? "SKYCONNECT 7 CROWN"
                    : activeExploreModal === "amara"
                    ? "PYRAMID AMARA"
                    : "SKY JOY · WATERFRONT PLOTS"}
                </h3>
                <p className="text-xs sm:text-sm text-[#172027]/70 mt-1 flex items-center gap-1.5 font-light">
                  <MapPin className="h-3.5 w-3.5 text-[#eeaf33]" />
                  <span>
                    {activeExploreModal === "crown"
                      ? "Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar, Nagpur"
                      : activeExploreModal === "amara"
                      ? "Besa–Pipla Road, Nagpur • ~6 Acres Gated Township"
                      : "Mondha, Hingna, South Nagpur • MahaRERA PP1190002502095"}
                  </span>
                </p>
              </div>
              <button
                onClick={() => setActiveExploreModal(null)}
                className="p-2 rounded-full hover:bg-black/10 text-[#172027] transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Quick Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              {activeExploreModal === "crown" ? (
                <>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">3 BHK</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Premium Homes
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">01</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Signature Address
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">24×7</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Security &amp; Water
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">01</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Rooftop Garden
                    </span>
                  </div>
                </>
              ) : activeExploreModal === "amara" ? (
                <>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">~6 Acres</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Total Area
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">6 Towers</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Towers
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">14–16</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Floors
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">2 &amp; 3 BHK</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Config
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">~78 Acres</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Total Area
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">918</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Total Plots
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">28,000 sq.ft</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Clubhouse
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center">
                    <span className="block text-base font-bold text-[#eeaf33]">~3 Acres</span>
                    <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                      Beach &amp; Pool
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Highlights List */}
            <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/80 border border-[#172027]/10 text-xs sm:text-sm text-[#172027]/85 font-light">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#eeaf33] shrink-0" />
                <span>
                  {activeExploreModal === "crown"
                    ? "Spacious 3 BHK layouts planned for optimum natural ventilation and privacy."
                    : activeExploreModal === "amara"
                    ? "Premium gated township on Besa–Pipla Road with comprehensive clubhouse amenities."
                    : "India's first luxury waterfront plots with 40+ world-class lifestyle amenities."}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#eeaf33] shrink-0" />
                <span>
                  {activeExploreModal === "crown"
                    ? "Dedicated covered parking with automated entry and smart surveillance."
                    : activeExploreModal === "amara"
                    ? "RERA approved project with clear approvals, spot documentation, and high ROI corridor."
                    : "Exclusive ~3-acre man-made beach, wave pool, and lakeside walking promenade."}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#eeaf33] shrink-0" />
                <span>
                  {activeExploreModal === "crown"
                    ? "Curated rooftop garden with sit-outs and 360-degree city views."
                    : activeExploreModal === "amara"
                    ? "6 grand towers rising 14–16 floors with double-height designer entrance lobbies."
                    : "MahaRERA registered (PP1190002502095) with immediate registration and clear title guarantee."}
                </span>
              </div>
            </div>

            {/* Enquiry Form */}
            {formSubmitted ? (
              <div className="py-8 text-center bg-white rounded-2xl border border-[#eeaf33]/40">
                <CheckCircle2 className="h-12 w-12 text-[#eeaf33] mx-auto mb-3" />
                <h4 className="font-serif text-xl font-bold text-[#172027] mb-1">
                  Enquiry Received
                </h4>
                <p className="text-xs sm:text-sm text-[#172027]/70 max-w-sm mx-auto">
                  Our private client wealth advisor will get in touch shortly with brochure, plot inventory, and pricing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#172027] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#172027]/20 text-sm text-[#172027] placeholder:text-gray-400 focus:outline-none focus:border-[#eeaf33] focus:ring-1 focus:ring-[#eeaf33]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#172027] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#172027]/20 text-sm text-[#172027] placeholder:text-gray-400 focus:outline-none focus:border-[#eeaf33] focus:ring-1 focus:ring-[#eeaf33]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#172027] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#172027]/20 text-sm text-[#172027] placeholder:text-gray-400 focus:outline-none focus:border-[#eeaf33] focus:ring-1 focus:ring-[#eeaf33]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#172027] mb-1">
                      Preferred Site Visit Date
                    </label>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#172027]/20 text-sm text-[#172027] focus:outline-none focus:border-[#eeaf33] focus:ring-1 focus:ring-[#eeaf33]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-6 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#f5be47] transition-all shadow-md cursor-pointer"
                  >
                    Request Brochure &amp; Site Visit
                  </button>
                  <a
                    href="tel:+918008000000"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-[#172027]/30 text-[#172027] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#172027]/5 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
