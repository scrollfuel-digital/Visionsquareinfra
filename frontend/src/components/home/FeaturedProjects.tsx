"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  Waves,
  Ruler,
  Trees,
} from "lucide-react";

interface FeaturedItem {
  slug: string;
  badge: string;
  location: string;
  titleGold: string;
  titleWhite: string;
  description: string;
  image: string;
  defaultSpecs: [string, string];
  hoverSpecs: [
    { label: string; icon: "ruler" | "building" | "waves" | "trees" },
    { label: string; icon: "ruler" | "building" | "waves" | "trees" }
  ];
}

const featuredProjects: FeaturedItem[] = [
  {
    slug: "skyconnect-7-crown",
    badge: "LUXURY RESIDENCES",
    location: "JAIPRAKASH NAGAR, NAGPUR",
    titleGold: "SkyConnect",
    titleWhite: "7 Crown",
    description:
      "A premium residential address in Jaiprakash Nagar, offering thoughtfully designed spacious homes, modern amenities, rooftop living, and seamless city connectivity.",
    image: "/images/projects/skyconnect-7-crown.jpeg",
    defaultSpecs: ["3 BHK Luxury Homes", "Jaiprakash Nagar"],
    hoverSpecs: [
      { label: "Spacious 3 BHK Residences", icon: "ruler" },
      { label: "Premium RCC Construction", icon: "building" },
    ],
  },
  {
    slug: "pyramid-amara",
    badge: "PYRAMID GROUP",
    location: "BESA–PIPLA ROAD, NAGPUR",
    titleGold: "Pyramid",
    titleWhite: "Amara",
    description:
      "A grand ~6-acre premium gated township featuring 6 high-rise towers rising 14–16 floors. Thoughtfully planned 2 & 3 BHK residences with RERA approval.",
    image: "/images/projects/pyramid-amara.jpg",
    defaultSpecs: ["2 & 3 BHK", "6 Towers · 14–16 Floors"],
    hoverSpecs: [
      { label: "6 High-Rise Towers · 14–16 Floors", icon: "building" },
      { label: "~6 Acres Gated Township", icon: "trees" },
    ],
  },
  {
    slug: "sky-joy",
    badge: "HOABL · MAHARERA",
    location: "SOUTH NAGPUR",
    titleGold: "Sky",
    titleWhite: "Joy",
    description:
      "India's first luxury waterfront plotted development featuring a ~3-acre man-made beach, wave pool, and grand 28,000 sq. ft. clubhouse.",
    image: "/images/projects/vision-imperial.jpg",
    defaultSpecs: ["~78 Acres", "Man-Made Beach & Wave Pool"],
    hoverSpecs: [
      { label: "~3-Acre Beach & Wave Pool", icon: "waves" },
      { label: "28,000 sq.ft Clubhouse", icon: "building" },
    ],
  },
];

function getSpecIcon(type: "ruler" | "building" | "waves" | "trees") {
  switch (type) {
    case "ruler":
      return <Ruler className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />;
    case "building":
      return <Building2 className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />;
    case "waves":
      return <Waves className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />;
    case "trees":
      return <Trees className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />;
  }
}

export default function FeaturedProjects() {
  return (
    <section className="relative pt-[20px] sm:pt-[26px] md:pt-[38px] pb-16 md:pb-24 bg-[#172027] border-t border-[#284153]/50 overflow-hidden">
      {/* Subtle ambient gold & slate radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#eeaf33]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#284153]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                OUR PROJECTS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#F8F7F3] font-bold leading-[1.12]">
              Crafted for
              <br />
              <span className="italic text-[#eeaf33] font-bold">
                Exceptional Living
              </span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#F8F7F3]/75 font-normal leading-relaxed max-w-sm sm:max-w-md md:text-right">
            Premium plots, 2 &amp; 3 BHK apartments, and waterfront developments in Nagpur&apos;s most sought-after corridors.
          </p>
        </div>

        {/* 4 Stat Boxes (Metrics Bar) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="rounded-2xl bg-[#131c22]/70 border border-[#284153]/60 py-5 sm:py-6 px-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#eeaf33]/40 hover:-translate-y-1">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#eeaf33] tracking-tight mb-1">
              3
            </div>
            <div className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F8F7F3]/65">
              PREMIUM PROJECTS
            </div>
          </div>

          <div className="rounded-2xl bg-[#131c22]/70 border border-[#284153]/60 py-5 sm:py-6 px-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#eeaf33]/40 hover:-translate-y-1">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#eeaf33] tracking-tight mb-1">
              918+
            </div>
            <div className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F8F7F3]/65">
              TOTAL PLOTS
            </div>
          </div>

          <div className="rounded-2xl bg-[#131c22]/70 border border-[#284153]/60 py-5 sm:py-6 px-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#eeaf33]/40 hover:-translate-y-1">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#eeaf33] tracking-tight mb-1">
              84+
            </div>
            <div className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F8F7F3]/65">
              ACRES DEVELOPED
            </div>
          </div>

          <div className="rounded-2xl bg-[#131c22]/70 border border-[#284153]/60 py-5 sm:py-6 px-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#eeaf33]/40 hover:-translate-y-1">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#eeaf33] tracking-tight mb-1">
              RERA
            </div>
            <div className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F8F7F3]/65">
              ALL APPROVED
            </div>
          </div>
        </div>

        {/* 3 Projects Full-Bleed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative h-[520px] sm:h-[550px] lg:h-[580px] rounded-[2.2rem] overflow-hidden border border-[#284153]/60 bg-[#131c22] transition-all duration-500 hover:border-[#eeaf33] hover:shadow-[0_20px_50px_rgba(238,175,51,0.18)] hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* Full Bleed Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={`${project.titleGold} ${project.titleWhite} - Vision Square Infra`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Dynamic Vignette & Dark Overlay (smoothly deepens on hover for crisp legibility) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1014] via-[#0c1014]/40 to-[#0c1014]/20 group-hover:from-[#0c1014]/98 group-hover:via-[#0c1014]/75 group-hover:to-black/30 transition-all duration-500" />
              </div>

              {/* Top Bar: Pill Badge + Circle Arrow Button */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] bg-[#172027]/80 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] shadow-md group-hover:border-[#eeaf33] transition-colors font-sans">
                  {project.badge}
                </span>

                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 bg-[#172027]/80 backdrop-blur-md border border-white/15 text-white/80 group-hover:bg-[#eeaf33] group-hover:border-[#eeaf33] group-hover:text-[#172027] group-hover:scale-105 shadow-md">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 p-5 sm:p-6 md:p-7 flex flex-col justify-end">
                {/* Location */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#eeaf33] mb-1.5 font-sans">
                  <MapPin className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>

                {/* 2-Line Project Title */}
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-bold leading-[1.08] mb-2.5">
                  <span className="text-[#eeaf33] block">{project.titleGold}</span>
                  <span className="text-[#F8F7F3] block">{project.titleWhite}</span>
                </h3>

                {/* Expandable Description and First Spec on Hover */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mb-3">
                  <div className="overflow-hidden">
                    <p className="font-sans text-xs sm:text-[13px] text-[#F8F7F3]/90 font-normal leading-relaxed mb-3 pt-1">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#F8F7F3]/90 font-medium pb-1 font-sans">
                      {getSpecIcon(project.hoverSpecs[0].icon)}
                      <span className="truncate">{project.hoverSpecs[0].label}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Specs & RERA Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#F8F7F3]/80 font-normal font-sans">
                  {/* Default Specs (Shown when not hovered) */}
                  <div className="group-hover:hidden flex items-center gap-2 truncate pr-2 text-xs text-[#F8F7F3]/75 font-normal">
                    <span>{project.defaultSpecs[0]}</span>
                    <span className="text-[#eeaf33]">·</span>
                    <span className="truncate">{project.defaultSpecs[1]}</span>
                  </div>

                  {/* Second Hover Spec (Shown on hover) */}
                  <div className="hidden group-hover:flex items-center gap-2 text-xs text-[#F8F7F3]/90 font-medium truncate pr-2">
                    {getSpecIcon(project.hoverSpecs[1].icon)}
                    <span className="truncate">{project.hoverSpecs[1].label}</span>
                  </div>

                  {/* RERA Pill Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-[#eeaf33]/40 text-[#eeaf33] text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-sm font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eeaf33] animate-pulse" />
                    RERA
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Footer Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-[#eeaf33] text-[#eeaf33] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#eeaf33] hover:text-[#172027] hover:shadow-lg group cursor-pointer"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
