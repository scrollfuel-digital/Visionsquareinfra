"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Award, Trees } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-[#172027] border-t border-[#284153] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#eeaf33]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#284153]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase with Luxury Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#eeaf33]/25 shadow-[0_20px_50px_rgba(23,32,39,0.9)] group">
              <Image
                src="/images/about/about-hero.jpg"
                alt="Vision Square Infra Luxury Architectural Development"
                width={800}
                height={500}
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/90 via-[#172027]/20 to-transparent" />

              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#172027]/90 border border-[#eeaf33]/35 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="block font-serif text-3xl font-light text-[#eeaf33]">15+ Years</span>
                  <span className="text-xs uppercase tracking-wider text-[#F8F7F3]/80">Shaping Hyderabad's Skyline</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33]">
                  <Award className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Border */}
            <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#eeaf33]/40 rounded-tl-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-[#eeaf33]/40 rounded-br-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Narrative & Key Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-semibold">
                About Vision Square Infra
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F7F3] leading-tight mb-6">
              Crafting Landmarks with{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F8F7F3] via-[#eeaf33] to-[#eeaf33]">
                Integrity & Vision
              </span>
            </h2>

            <p className="text-[#F8F7F3]/90 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Vision Square Infrastructure is committed to redefining Hyderabad's real estate ecosystem. With deep-rooted expertise in strategic land procurement, master planning, and modern architectural execution, we curate spaces that deliver both elevated living and phenomenal capital appreciation.
            </p>

            <p className="text-[#F8F7F3]/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Whether you are looking for an exclusive villa overlooking serene horizons or a future-ready HMDA approved plot with crystal-clear legal documentation, our developments are designed for generations to cherish.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#284153]/40 border border-[#284153]">
                <ShieldCheck className="h-5 w-5 text-[#eeaf33] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F8F7F3]">100% Clear Titles</h4>
                  <p className="text-xs text-[#F8F7F3]/70">HMDA, RERA approved with spot registration</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#284153]/40 border border-[#284153]">
                <MapPin className="h-5 w-5 text-[#eeaf33] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F8F7F3]">Prime High-ROI Corridors</h4>
                  <p className="text-xs text-[#F8F7F3]/70">Minutes from ORR, Financial District & Neopolis</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#284153]/40 border border-[#284153]">
                <Trees className="h-5 w-5 text-[#eeaf33] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F8F7F3]">Sustainable Masterplanning</h4>
                  <p className="text-xs text-[#F8F7F3]/70">Underground utilities, rainwater harvesting & parks</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#284153]/40 border border-[#284153]">
                <CheckCircle2 className="h-5 w-5 text-[#eeaf33] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F8F7F3]">Timely Execution</h4>
                  <p className="text-xs text-[#F8F7F3]/70">Uncompromising quality and adherence to schedules</p>
                </div>
              </div>
            </div>

            {/* Link to Full About Page */}
            <div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-[#eeaf33] transition-all hover:text-[#f5be47] group"
              >
                <span>Read More About Our Story & Leadership</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
