"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Handshake,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  Compass,
  FileCheck,
  MapPin,
  Sparkles,
  Headphones,
} from "lucide-react";

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={containerRef} className="w-full overflow-hidden bg-[#172027]">
      {/* ========================================================
          1. HERO SECTION (With User Uploaded About Us Image)
         ======================================================== */}
      <section className="relative min-h-[550px] md:min-h-[640px] pt-32 pb-24 md:pt-40 md:pb-32 bg-[#172027] text-[#F8F7F3] border-b border-[#284153]/50 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-us.png"
            alt="VisionSquare Infra - Building Stronger Partnerships"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center sm:object-right scale-105 transform transition-transform duration-1000"
          />
          {/* Lighter gradient overlays for bright, clear image visibility with crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#172027]/75 via-[#172027]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/50 via-transparent to-black/20 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Header Label */}
            <div className="inline-flex items-center gap-3 text-[#eeaf33] font-bold text-xs uppercase tracking-[0.25em] mb-6">
              <span>ABOUT US</span>
              <span className="w-12 h-[2px] bg-[#eeaf33]" />
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F7F3] leading-[1.12] mb-8 tracking-tight drop-shadow-md">
              Building Stronger Partnerships for a{" "}
              <span className="italic font-serif text-[#eeaf33]">
                Brighter Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#F8F7F3]/90 font-sans font-light leading-relaxed max-w-2xl drop-shadow-sm">
              We are a trusted real estate channel partner in Nagpur, connecting
              home seekers and investors with verified residential projects, plot
              layouts, and transparent site visit assistance.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHO WE ARE SECTION (Cream Background + Luxury Architectural Frame)
         ======================================================== */}
      <section className="relative py-20 md:py-28 bg-[#F8F7F3] text-[#172027]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 text-[#eeaf33] font-bold text-xs uppercase tracking-[0.25em] mb-4">
                  <span>WHO WE ARE</span>
                  <span className="w-12 h-[2px] bg-[#eeaf33]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172027] leading-[1.18]">
                  Your Trusted Real Estate Channel Partner
                </h2>
              </div>

              <p className="text-[#172027]/80 text-base sm:text-lg font-sans leading-relaxed">
                We work with a network of dedicated real estate professionals and premier
                developers in Nagpur to bring the best property opportunities directly to right buyers.
                With transparency, trust, and long-term relationships at the core, we aim to create genuine
                value for every client and partner we work with.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-b border-[#172027]/10 py-6">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#172027] tracking-tight">
                    500<span className="text-[#eeaf33]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#172027]/70 font-medium mt-1">
                    Happy Families
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#172027] tracking-tight">
                    50<span className="text-[#eeaf33]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#172027]/70 font-medium mt-1">
                    Verified Projects
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#172027] tracking-tight">
                    10<span className="text-[#eeaf33]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#172027]/70 font-medium mt-1">
                    Years of Trust
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#284153] text-[#284153] hover:bg-[#284153] hover:text-white hover:border-[#284153] font-semibold text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(40,65,83,0.3)] group"
                >
                  <span className="transition-colors duration-300 group-hover:text-white">Our Journey</span>
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white text-[#284153]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Building Showcase Card with Stacked Card Geometry */}
            <div className="lg:col-span-6 relative pt-4 pr-4 sm:pr-6 pb-8 sm:pb-12">
              {/* Backing Layer 1: Left/Bottom Stacked Card Layer (Soft Organic Cream) */}
              <div className="absolute top-8 -left-3 sm:-left-5 w-[96%] h-[92%] rounded-[2.5rem] bg-[#EBE5D8] border border-[#172027]/5 transform -rotate-3 pointer-events-none shadow-sm" />

              {/* Backing Layer 2: Top-Right Organic Curve Accent Layer */}
              <div className="absolute -top-1 right-2 sm:right-4 w-[75%] h-[40%] rounded-t-[3rem] bg-[#F2ECE0] transform rotate-2 pointer-events-none opacity-80" />

              {/* Main Card Container with Luxury Building Image */}
              <div className="relative z-10 w-full aspect-[4/3] rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#172027] shadow-[0_20px_50px_rgba(23,32,39,0.25)] border border-[#eeaf33]/30 overflow-hidden group">
                <Image
                  src="/images/about/about-showcase.jpg"
                  alt="VisionSquare Infra Luxury Architecture Building in Nagpur"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Floating Dark Overlay Quote Card (Bottom Right Overlapping Badge) */}
              <div className="absolute -bottom-2 right-0 sm:-bottom-4 sm:right-2 md:-bottom-6 md:right-0 z-30 bg-[#0F161C] border border-[#284153] shadow-[0_15px_35px_rgba(0,0,0,0.4)] rounded-2xl p-5 sm:p-6 max-w-[210px] sm:max-w-[240px] w-full">
                <div className="w-8 h-[2px] bg-[#eeaf33] mb-3" />
                <p className="font-serif text-base sm:text-lg text-[#F8F7F3] leading-snug font-medium">
                  Together
                  <br />
                  we build
                  <br />
                  better tomorrows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR VALUES / WHY CHOOSE US SECTION (Exact Match to Reference Image)
         ======================================================== */}
      <section className="relative pt-20 md:pt-28 pb-0 bg-[#F8F7F3] border-t border-[#172027]/10 text-[#172027] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Eyebrow, Main Headline, Paragraph & Bottom Building Image */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                {/* Header Label */}
                <div className="inline-flex items-center gap-3 text-[#eeaf33] font-bold text-xs uppercase tracking-[0.25em] mb-4">
                  <span>WHY CHOOSE US</span>
                  <span className="w-12 h-[2px] bg-[#eeaf33]" />
                </div>

                {/* Main Headline */}
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#172027] leading-[1.12] mb-6 tracking-tight">
                  Your Trust
                  <br />
                  Builds Our{" "}
                  <span className="italic font-serif text-[#eeaf33]">
                    Success
                  </span>
                </h2>

                {/* Paragraph Description */}
                <p className="text-[#172027]/80 text-base sm:text-lg font-sans leading-relaxed max-w-md mb-8">
                  We don't just sell properties, we build lasting relationships. Our commitment is to provide you with the best experience, backed by transparency, reliability and unmatched support at every step.
                </p>
              </div>
            </div>

            {/* Right Column: 5 Feature Items Layout (Row 1: 3 Items, Row 2: 2 Items) */}
            <div className="lg:col-span-7 space-y-12 pt-2 md:pt-4 pb-16">
              {/* Row 1: Transparency, Trust, Support (3 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
                {/* Item 1: Transparency */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EFEBE0] border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shadow-sm">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#172027]">
                    Transparency
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172027]/70 font-sans leading-relaxed">
                    Honest communication and clear documentation at every step.
                  </p>
                </div>

                {/* Item 2: Trust */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EFEBE0] border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shadow-sm">
                    <Handshake className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#172027]">
                    Trust
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172027]/70 font-sans leading-relaxed">
                    Built on long-term relationships and RERA-compliant projects.
                  </p>
                </div>

                {/* Item 3: Support */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EFEBE0] border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shadow-sm">
                    <Headphones className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#172027]">
                    Support
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172027]/70 font-sans leading-relaxed">
                    Dedicated expert team for your property search & site visits.
                  </p>
                </div>
              </div>

              {/* Row 2: Growth, Excellence (2 Columns aligned with col 1 & col 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-4 sm:pt-6">
                {/* Item 4: Growth */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EFEBE0] border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shadow-sm">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#172027]">
                    Growth
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172027]/70 font-sans leading-relaxed">
                    High-appreciation plot layouts & prime residential locations.
                  </p>
                </div>

                {/* Item 5: Excellence */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EFEBE0] border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shadow-sm">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#172027]">
                    Excellence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172027]/70 font-sans leading-relaxed">
                    Committed to top quality, customer peace of mind, & satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHY PARTNER WITH US SECTION
         ======================================================== */}
      <section className="relative py-20 md:py-28 bg-[#F8F7F3] text-[#172027]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Block: Content & Feature List */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 text-[#eeaf33] font-bold text-xs uppercase tracking-[0.25em] mb-4">
                  <span>WHY PARTNER WITH US</span>
                  <span className="w-12 h-[2px] bg-[#eeaf33]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172027] leading-tight">
                  More Than Just Real Estate Sales
                </h2>
              </div>

              <p className="text-[#172027]/80 text-base sm:text-lg font-sans leading-relaxed">
                We provide you with verified property choices, complete legal clarity, and personalized site visit support to help you find your dream property. With VisionSquare Infra, you get access to premium projects and a partnership built on trust.
              </p>

              {/* Primary Action Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#284153] text-[#284153] hover:bg-[#284153] hover:text-white hover:border-[#284153] font-semibold text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(40,65,83,0.3)] group"
                >
                  <span className="transition-colors duration-300 group-hover:text-white">Become a Partner</span>
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white text-[#284153]" />
                </Link>
              </div>

              {/* Feature Points List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#172027]/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#172027]">
                      Exclusive Project Access
                    </h4>
                    <p className="text-xs text-[#172027]/70 font-sans mt-0.5">
                      Be the first to know about new property launches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#172027]">
                      Complete Legal Support
                    </h4>
                    <p className="text-xs text-[#172027]/70 font-sans mt-0.5">
                      Get verified NMRDA & RERA documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#172027]">
                      Dedicated Relationship Manager
                    </h4>
                    <p className="text-xs text-[#172027]/70 font-sans mt-0.5">
                      Personal advisor always by your side.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#172027]">
                      Higher Value Potential
                    </h4>
                    <p className="text-xs text-[#172027]/70 font-sans mt-0.5">
                      Prime investment locations in growing hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block: Partner Handshake Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] bg-[#172027] shadow-[0_20px_50px_rgba(40,65,83,0.18)] border border-[#eeaf33]/30 overflow-hidden group">
                <Image
                  src="/images/about/partner-handshake.png"
                  alt="VisionSquare Infra Real Estate Partnership Handshake in Nagpur"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Top Floating Pill Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#eeaf33] bg-[#172027]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#eeaf33]/30 shadow-lg">
                    Channel Partner Support
                  </span>
                </div>

                {/* Bottom Floating Commitment Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#172027]/90 backdrop-blur-md border border-[#eeaf33]/30 rounded-xl p-3.5 shadow-xl">
                  <p className="font-serif text-sm sm:text-base font-bold text-[#F8F7F3] leading-snug">
                    <span className="italic text-[#eeaf33]">Your Growth</span> & Peace of Mind Is Our Priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. LET'S GROW TOGETHER - BOTTOM CTA BAND (Exact Match to Reference Image)
         ======================================================== */}
      <section className="relative py-20 md:py-28 bg-[#172027] text-[#F8F7F3] border-t border-[#eeaf33]/20 overflow-hidden">
        {/* Background Skyline Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/cta-skyline.png"
            alt="VisionSquare Infra City Skyline Sunset Terrace"
            fill
            sizes="100vw"
            className="object-cover object-center sm:object-right"
          />
          {/* Light gradient overlays for bright, clear sunset city skyline image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#172027]/75 via-[#172027]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/50 via-transparent to-black/20 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* Left Column: Heading & Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-3 text-[#eeaf33] font-bold text-xs uppercase tracking-[0.25em]">
                <span>LET'S GROW TOGETHER</span>
                <span className="w-12 h-[2px] bg-[#eeaf33]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F7F3] leading-tight">
                Be a Part of Our Journey
              </h2>
              <p className="text-[#F8F7F3]/85 text-base sm:text-lg font-sans max-w-2xl">
                Join our channel partner network and unlock new property opportunities in Nagpur's growing real estate market.
              </p>
            </div>

            {/* Right Column: Solid Gold CTA Pill Button */}
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#eeaf33] text-[#172027] hover:bg-[#f5be47] font-bold text-base transition-all duration-300 shadow-[0_10px_25px_rgba(238,175,51,0.35)] hover:-translate-y-1 hover:scale-105 group"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Bottom 3-Feature Strip with Vertical Dividers */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-8 border-t border-white/15">
            <div className="flex items-center gap-3 pr-6 sm:pr-10 border-r border-white/20">
              <Users className="w-6 h-6 text-[#eeaf33] shrink-0" />
              <span className="text-sm font-semibold text-[#F8F7F3]">
                50+ Verified Layouts
              </span>
            </div>
            <div className="flex items-center gap-3 pr-6 sm:pr-10 border-r border-white/20">
              <TrendingUp className="w-6 h-6 text-[#eeaf33] shrink-0" />
              <span className="text-sm font-semibold text-[#F8F7F3]">
                Transparent Documentation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#eeaf33] shrink-0" />
              <span className="text-sm font-semibold text-[#F8F7F3]">
                End-to-End Assistance
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
