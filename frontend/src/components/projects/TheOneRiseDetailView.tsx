"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  Phone,
  Mail,
  Compass,
  ArrowRight,
  Download,
  Share2,
  Check,
  X,
  Sparkles,
  Waves,
  Dumbbell,
  Store,
  Layers,
  Car,
  Droplets,
  Zap,
  Eye,
  CheckCircle,
  Home,
  Award,
  ChevronRight,
} from "lucide-react";
import type { Project } from "@/types/project";

interface TheOneRiseDetailViewProps {
  project: Project;
}

export default function TheOneRiseDetailView({ project }: TheOneRiseDetailViewProps) {
  // Tabs & Modal states
  const [activePlanTab, setActivePlanTab] = useState<"3bhk" | "2bhk" | "typical" | "pool12" | "club13" | "ground">("3bhk");
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    unitType: "3 BHK",
    visitDate: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsSiteVisitModalOpen(false);
      setFormData({ name: "", phone: "", unitType: "3 BHK", visitDate: "", message: "" });
    }, 2800);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Blueprint Plan Images
  const planImages: Record<
    "3bhk" | "2bhk" | "typical" | "pool12" | "club13" | "ground",
    { image: string; title: string; tag: string }
  > = {
    "3bhk": {
      title: "3 BHK Signature Residence (1,865 sq.ft)",
      image: "/images/projects/the-one-rise/plan-3bhk-unit.jpg",
      tag: "173.26 SQ.MT • ZERO WASTAGE • 3 BALCONIES • EAST/WEST FACING",
    },
    "2bhk": {
      title: "2 BHK Luxury Residence (1,379 sq.ft)",
      image: "/images/projects/the-one-rise/plan-2bhk-unit.jpg",
      tag: "128.11 SQ.MT • MASTER SUITE • DUAL DECKS • CROSS VENTILATION",
    },
    typical: {
      title: "Typical 2nd to 11th Floor Masterplan",
      image: "/images/projects/the-one-rise/plan-typical-floor.jpg",
      tag: "4 APARTMENTS PER FLOOR • DUAL KONE LIFTS PER WING",
    },
    pool12: {
      title: "12th Floor Sky Deck & Infinity Pool",
      image: "/images/projects/the-one-rise/plan-12th-pool.jpg",
      tag: "39'4\" × 10'4\" INFINITY SKYPOOL • SUNKEN DECK • BABY POOL",
    },
    club13: {
      title: "13th Floor Sky Gymnasium & Club",
      image: "/images/projects/the-one-rise/plan-13th-club.jpg",
      tag: "PANORAMIC FITNESS ARENA • YOGA DECK • FUNCTION HALL",
    },
    ground: {
      title: "Ground Floor Commercial Arcade & Parking",
      image: "/images/projects/the-one-rise/plan-ground-commercial.jpg",
      tag: "12 HIGH-STREET COMMERCIAL SHOPS • 24M ROAD FRONTAGE",
    },
  };

  // Structured SEO Schema (JSON-LD)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": "https://visionsquareinfra.com/projects/the-one-rise#complex",
        name: "The ONE Rise",
        alternateName: "The One Rise Wardha Road Nagpur",
        description:
          "G+13 luxury residential & commercial landmark on Wardha Road, Somalwada, Nagpur. Features 2 & 3 BHK residences, ground shopping arcade, rooftop infinity pool, and sky amenities. MahaRERA: PR1190002601318.",
        url: "https://visionsquareinfra.com/projects/the-one-rise",
        telephone: "+91-8989-666-888",
        image: "https://visionsquareinfra.com/images/projects/the-one-rise/elevation-day.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Wardha Road, Somalwada",
          addressLocality: "Nagpur",
          addressRegion: "Maharashtra",
          postalCode: "440025",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.0965",
          longitude: "79.0688",
        },
        numberOfBedrooms: ["2", "3"],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Rooftop Infinity Skypool", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sky Gymnasium & Yoga Deck", value: true },
          { "@type": "LocationFeatureSpecification", name: "Banquet Function Hall", value: true },
          { "@type": "LocationFeatureSpecification", name: "12 High-Street Commercial Shops", value: true },
          { "@type": "LocationFeatureSpecification", name: "Dual High-Speed Elevators", value: true },
          { "@type": "LocationFeatureSpecification", name: "MahaRERA Registered PR1190002601318", value: true },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://visionsquareinfra.com" },
          { "@type": "ListItem", position: 2, name: "Projects", item: "https://visionsquareinfra.com/projects" },
          { "@type": "ListItem", position: 3, name: "The ONE Rise", item: "https://visionsquareinfra.com/projects/the-one-rise" },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-[#F8F7F3] text-[#172027] pt-24 sm:pt-28 md:pt-32 pb-24 overflow-hidden selection:bg-[#eeaf33] selection:text-[#172027]">
      {/* JSON-LD Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Subtle Background Warm Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#eeaf33]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#284153]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-[#eeaf33]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. TOP BREADCRUMB & QUICK ACTIONS */}
        {/* ========================================================================= */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 text-xs font-sans">
          <div className="flex items-center gap-2 text-[#172027]/60">
            <Link href="/" className="hover:text-[#eeaf33] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#eeaf33] transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#eeaf33] font-medium">The ONE Rise</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#284153]/15 hover:border-[#eeaf33]/50 text-[#172027] transition-all text-xs font-sans cursor-pointer shadow-sm"
              title="Share Project"
            >
              {copiedLink ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#eeaf33]" />
                  <span className="text-[#eeaf33]">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 text-[#eeaf33]" />
                  <span>Share</span>
                </>
              )}
            </button>

            <a
              href="/documents/the-one-rise-brochure.pdf"
              download="The-ONE-Rise-Brochure.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 text-[#172027] hover:bg-[#eeaf33] hover:text-[#172027] transition-all text-xs font-sans font-semibold cursor-pointer shadow-sm"
            >
              <Download className="h-3.5 w-3.5 text-[#eeaf33]" />
              <span>Brochure PDF</span>
            </a>
          </div>
        </nav>

        {/* ========================================================================= */}
        {/* 2. COMPACT HERO HEADER */}
        {/* ========================================================================= */}
        <header className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#284153]/15">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 text-[#172027] text-xs font-bold uppercase tracking-widest font-sans">
                  <Sparkles className="h-3 w-3 text-[#eeaf33]" />
                  G+13 EDIFICE
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#284153]/15 text-[#172027]/80 text-xs font-medium uppercase tracking-wider font-sans shadow-sm">
                  2 &amp; 3 BHK Elegant Living
                </span>
                <span className="px-3 py-1 rounded-full bg-[#284153]/10 text-[#172027] text-xs font-medium font-sans">
                  MahaRERA: PR1190002601318
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#eeaf33] uppercase mb-2">
                RESIDE BEYOND THE SKYLINE • WARDHA ROAD
              </p>

              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#172027] mb-4">
                The ONE Rise
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed max-w-2xl font-normal">
                Reside beyond the skyline on Wardha Road. Featuring 2 &amp; 3 BHK cross-ventilated homes, a rooftop infinity skypool, and two sky-amenity levels by Mahalaxmi Group.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsSiteVisitModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#DE9F20] hover:shadow-xl hover:shadow-[#eeaf33]/20 hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                <span>Schedule Private Visit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="tel:+918989666888"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#284153]/20 hover:border-[#eeaf33]/60 text-[#172027] font-sans text-xs font-semibold tracking-wider transition-all cursor-pointer shadow-sm"
              >
                <Phone className="h-3.5 w-3.5 text-[#eeaf33]" />
                <span>+91 8989-666-888</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar (Clean 4-Card Ribbon matching Infinity) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Building2 className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Structure
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">G+13 Storeys</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">Dual-Wing Edifice</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Home className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Unit Sizes
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">1,379 – 1,869 sq.ft</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">2 &amp; 3 BHK Units</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Waves className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Rooftop Haven
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">12th &amp; 13th Floors</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">Skypool, Gym &amp; Club</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Store className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Road Frontage
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">24M Wide Road</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">12 Commercial Shops</span>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* 3. DUAL-PERSPECTIVE ARCHITECTURAL SHOWCASE (DAY & NIGHT) */}
        {/* ========================================================================= */}
        <section aria-labelledby="edifice-heading" className="mb-20 sm:mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  ARCHITECTURAL PERSPECTIVES
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="edifice-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Day &amp; Night Landmark Presence
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day Facade */}
            <div
              onClick={() => setActiveLightboxImage("/images/projects/the-one-rise/elevation-day.jpg")}
              className="group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-white h-[360px] sm:h-[440px] cursor-pointer shadow-md"
            >
              <Image
                src="/images/projects/the-one-rise/elevation-day.jpg"
                alt="The ONE Rise Day Elevation Wardha Road"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/85 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold font-sans">
                DAY ELEVATION
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans text-white">
                <span>G+13 Contemporary Dual Edifice &amp; High-Street Retail</span>
                <Maximize2 className="h-4 w-4 text-[#eeaf33] shrink-0" />
              </div>
            </div>

            {/* Night Facade */}
            <div
              onClick={() => setActiveLightboxImage("/images/projects/the-one-rise/elevation-night.jpg")}
              className="group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-white h-[360px] sm:h-[440px] cursor-pointer shadow-md"
            >
              <Image
                src="/images/projects/the-one-rise/elevation-night.jpg"
                alt="The ONE Rise Night Facade Illumination"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/85 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold font-sans">
                TWILIGHT ILLUMINATION
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans text-white">
                <span>Grand Illuminated Gate Entrance &amp; Architectural Fins</span>
                <Maximize2 className="h-4 w-4 text-[#eeaf33] shrink-0" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SIX PILLARS OF PLANNING */}
        {/* ========================================================================= */}
        <section aria-labelledby="pillars-heading" className="mb-20 sm:mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                CORE ADVANTAGES
              </span>
              <span className="h-px w-8 bg-[#eeaf33]" />
            </div>
            <h2 id="pillars-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
              Thoughtful Spatial Engineering
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Zero Wastage", desc: "100% usable carpet layout" },
              { title: "4 Units / Floor", desc: "Low density & absolute privacy" },
              { title: "3.6M Ceilings", desc: "Heightened airy living spaces" },
              { title: "Dual Lifts / Wing", desc: "Rapid vertical transit cores" },
              { title: "12 Retail Shops", desc: "Ground floor commercial arcade" },
              { title: "MahaRERA Reg.", desc: "Approved: PR1190002601318" },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#284153]/15 hover:border-[#eeaf33] transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md text-center"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-2xl font-bold text-[#eeaf33] transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="h-7 w-7 rounded-full bg-[#F8F7F3] border border-[#284153]/15 flex items-center justify-center text-[#eeaf33]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h3 className="font-sans text-base font-bold text-[#172027] mb-1 group-hover:text-[#eeaf33] transition-colors">{p.title}</h3>
                <p className="font-sans text-xs text-[#172027]/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. INTERACTIVE FLOOR PLANS & SPATIAL MATRIX */}
        {/* ========================================================================= */}
        <section aria-labelledby="plans-heading" className="mb-20 sm:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  ARCHITECTURAL DRAWINGS
                </span>
              </div>
              <h2 id="plans-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Floor Plans &amp; Unit Layouts
              </h2>
            </div>

            {/* Quick Filter Tabs matching Infinity */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white border border-[#284153]/15 font-sans text-xs shadow-sm">
              <button
                type="button"
                onClick={() => setActivePlanTab("3bhk")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "3bhk" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                3 BHK (1,865 sq.ft)
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("2bhk")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "2bhk" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                2 BHK (1,379 sq.ft)
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("typical")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "typical" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Typical Floor
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("pool12")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "pool12" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                12th Pool
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("club13")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "club13" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                13th Club
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("ground")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "ground" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Ground Shops
              </button>
            </div>
          </div>

          {/* Blueprint Card */}
          <div className="rounded-3xl p-4 sm:p-6 lg:p-8 bg-white border border-[#284153]/15 shadow-md mb-8">
            <div
              onClick={() => setActiveLightboxImage(planImages[activePlanTab].image)}
              className="group relative rounded-2xl overflow-hidden bg-[#FAF9F5] border border-slate-200 cursor-pointer min-h-[460px] sm:min-h-[540px] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="relative w-full h-[460px] sm:h-[540px]">
                <Image
                  src={planImages[activePlanTab].image}
                  alt={planImages[activePlanTab].title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 text-[#eeaf33] text-xs font-bold font-sans shadow-sm">
                {planImages[activePlanTab].title}
              </div>

              <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/85 text-white/90 text-xs font-sans">
                {planImages[activePlanTab].tag}
              </div>

              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 text-white/90 text-xs font-sans">
                <Maximize2 className="h-3.5 w-3.5 text-[#eeaf33]" />
                <span>Click to Enlarge</span>
              </div>
            </div>
          </div>

          {/* Scannable Room Dimensions Grid */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#284153]/15 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#284153]/15">
              <div>
                <h3 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wider text-[#172027]">
                  Authentic Spatial Schedule
                </h3>
                <p className="font-sans text-xs text-[#172027]/70 mt-1">
                  Verified dimensions directly from The ONE Rise architectural blueprints.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-[#eeaf33]">
                <Compass className="h-4 w-4" />
                <span className="text-[#172027]">East-West Cross-Ventilation</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { space: "3 BHK Unit Area", size: "1,865 sq.ft" },
                { space: "2 BHK Unit Area", size: "1,379 sq.ft" },
                { space: "3 BHK Living / Dining", size: "13'9\" × 14'9\"" },
                { space: "3 BHK Master Bed 1", size: "12'8\" × 11'0\"" },
                { space: "3 BHK Bed 2", size: "11'2\" × 12'0\"" },
                { space: "3 BHK Bed 3", size: "11'4\" × 12'0\"" },
                { space: "3 BHK Kitchen", size: "10'0\" × 9'5\"" },
                { space: "3 BHK Balcony", size: "1.80M Wide" },
                { space: "2 BHK Living", size: "11'0\" × 16'0\"" },
                { space: "2 BHK Master Bed", size: "11'0\" × 13'4\"" },
                { space: "12th Floor Sky Pool", size: "39'4\" × 10'4\"" },
                { space: "12th Floor Baby Pool", size: "10'0\" × 10'4\"" },
              ].map((d, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 hover:border-[#eeaf33]/50 transition-colors">
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#172027]/60 block mb-1">{d.space}</span>
                  <span className="font-sans text-base sm:text-lg font-bold text-[#172027]">{d.size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. TWO-LEVEL ROOFTOP SKY AMENITIES (LEVELS 12 & 13) */}
        {/* ========================================================================= */}
        <section aria-labelledby="amenities-heading" className="mb-20 sm:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  LEVELS 12 &amp; 13 • ROOFTOP HAVEN
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="amenities-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Rooftop Skypool &amp; Sky Club
              </h2>
            </div>
            <span className="text-xs font-sans text-[#172027]/70">Class-Above Rooftop Lifestyle</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {[
              { title: "Infinity Skypool", sub: "39'4\" Pool with Sun Deck", img: "/images/projects/the-one-rise/amenity-infinity-pool.jpg" },
              { title: "Sky Gym & Yoga Deck", sub: "Open-Air Wellness", img: "/images/projects/the-one-rise/amenity-gym-yoga.jpg" },
              { title: "Banquet Function Hall", sub: "Celebration with Pantry", img: "/images/projects/the-one-rise/amenity-function-hall.jpg" },
              { title: "Indoor Games Arena", sub: "Billiards & Video Games", img: "/images/projects/the-one-rise/amenity-indoor-games.jpg" },
              { title: "Creche & Co-Working", sub: "Supervised Play & WFH", img: "/images/projects/the-one-rise/amenity-creche-wfh.jpg" },
              { title: "Aerial Rooftop Deck", sub: "Skyline Viewing Terrace", img: "/images/projects/the-one-rise/amenity-rooftop-aerial.jpg" },
              { title: "Grand Entrance Foyer", sub: "Double-Height Lounge", img: "/images/projects/the-one-rise/interior-entrance-foyer.jpg" },
              { title: "Living & Dining Lounge", sub: "Panoramic Glass Balcony", img: "/images/projects/the-one-rise/interior-living-dining.jpg" },
            ].map((amenity, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(amenity.img)}
                className="group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-white h-[200px] sm:h-[240px] cursor-pointer shadow-md"
              >
                <Image
                  src={amenity.img}
                  alt={amenity.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="font-sans text-sm sm:text-base font-bold text-white block group-hover:text-[#eeaf33] transition-colors">
                    {amenity.title}
                  </span>
                  <span className="text-[11px] font-sans text-white/80 block">
                    {amenity.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Features Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: Waves, title: "Infinity Pool", sub: "39'4\" Sky Deck" },
              { icon: Store, title: "12 Retail Shops", sub: "Doorstep Arcade" },
              { icon: Dumbbell, title: "Gym & Yoga", sub: "Level 13 Club" },
              { icon: ShieldCheck, title: "24x7 Security", sub: "CCTV & Intercom" },
              { icon: Droplets, title: "Rainwater", sub: "Eco Harvesting" },
              { icon: Zap, title: "Power Backup", sub: "Johnson/Kone Lifts" },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm text-center">
                  <Icon className="h-6 w-6 text-[#eeaf33] mx-auto mb-2" />
                  <span className="font-sans text-xs font-bold text-[#172027] block">{f.title}</span>
                  <span className="text-[10px] text-[#172027]/60 font-sans">{f.sub}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. TECHNICAL SPECIFICATIONS (MATCHING INFINITY SPEC FORMAT) */}
        {/* ========================================================================= */}
        <section aria-labelledby="specs-heading" className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                ENGINEERING STANDARDS
              </span>
              <span className="h-px w-8 bg-[#eeaf33]" />
            </div>
            <h2 id="specs-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
              Construction Specifications
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
              Asian Paints • Jaquar CP Fittings • KEI Copper Cables • Premium Brands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Walls & Ceiling",
                items: [
                  "6\" outer & 4\" inner red brick masonry",
                  "Designer POP with LED coving in living & bedrooms",
                  "Asian Ultima Protect weather-proof exterior finish",
                ],
              },
              {
                title: "Flooring & Kitchen",
                items: [
                  "2'0\" × 4'0\" large format vitrified tiles",
                  "Anti-skid matte vitrified tiles in balconies & baths",
                  "Semi-modular kitchen with granite/vitrified slab",
                ],
              },
              {
                title: "Bathrooms & Sanitary",
                items: [
                  "Jaquar premium CP fittings & sanitary ware",
                  "Designer dado tiles up to 8 ft height",
                  "Separate wet & dry zones with hot/cold divertor",
                ],
              },
              {
                title: "Doors & Electricals",
                items: [
                  "Veneer-finish main door with designer lock",
                  "2 & 3 track French windows with clear glass",
                  "Fire-resistant KEI copper wiring & Wipro switches",
                ],
              },
            ].map((spec, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#284153]/15 hover:border-[#eeaf33]/40 transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#284153]/10">
                  <div className="h-8 w-8 rounded-lg bg-[#F8F7F3] border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33]">
                    <Award className="h-4 w-4" />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-[#172027] uppercase tracking-wider">
                    {spec.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {spec.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172027]/80 font-sans font-normal">
                      <CheckCircle2 className="h-4 w-4 text-[#eeaf33] shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. LOCATION MAP, CONNECTIVITY & MAHARERA VERIFICATION */}
        {/* ========================================================================= */}
        <section aria-labelledby="location-heading" className="mb-20 sm:mb-24">
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  STRATEGIC CORRIDOR
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="location-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                At The Center of It All
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Direct access to Wardha Road, Metro, Airport, and the Samruddhi Expressway.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              {/* Location Map View */}
              <div
                onClick={() => setActiveLightboxImage("/images/projects/the-one-rise/location-map.jpg")}
                className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#FAF9F5] p-4 h-[400px] sm:h-[480px] cursor-pointer shadow-sm flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/projects/the-one-rise/location-map.jpg"
                    alt="The ONE Rise Location Map Wardha Road"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 text-[#eeaf33] text-xs font-bold font-sans shadow-sm">
                  WARDHA ROAD CORRIDOR MAP
                </div>
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-[#172027]/80 text-white">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Transit Radar & MahaRERA */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#eeaf33]/40 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#172027] font-bold font-sans block">
                      OFFICIAL MAHARERA REGISTRATION
                    </span>
                    <span className="font-sans text-sm font-bold text-[#172027] block">
                      PR1190002601318
                    </span>
                    <span className="text-[10px] text-[#172027]/60 font-sans">maharera.maharashtra.gov.in</span>
                  </div>
                  <div
                    onClick={() => setActiveLightboxImage("/images/projects/the-one-rise/maharera-qr.jpg")}
                    className="relative h-12 w-12 bg-white p-1 rounded-lg shrink-0 cursor-pointer shadow-sm border border-slate-200"
                    title="Click to view MahaRERA QR"
                  >
                    <Image
                      src="/images/projects/the-one-rise/maharera-qr.jpg"
                      alt="MahaRERA QR"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { destination: "Nagpur Airport", time: "5 Min" },
                    { destination: "Metro Station", time: "3 Min" },
                    { destination: "AIIMS & Cancer Inst.", time: "6 Min" },
                    { destination: "MIHAN SEZ Hub", time: "7 Min" },
                    { destination: "IIM & IIIT Campus", time: "8 Min" },
                    { destination: "DPS & Bhavans School", time: "5 Min" },
                  ].map((node, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 text-xs font-sans"
                    >
                      <span className="text-[#172027]/80">{node.destination}</span>
                      <span className="text-[#eeaf33] font-bold">{node.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Developer Footer */}
            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#284153]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#eeaf33] font-bold font-sans block mb-1">
                  DEVELOPED BY
                </span>
                <h4 className="font-sans text-xl font-bold text-[#172027]">MAHALAXMI GROUP</h4>
                <p className="text-xs font-sans text-[#172027]/60 mt-1">
                  Laxmivihar Apt, B/s. Hotel Airport Center Point, Wardha Road, Somalwada, Nagpur - 440025
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsSiteVisitModalOpen(true)}
                className="px-6 py-3 rounded-full bg-[#eeaf33] text-[#172027] text-xs font-bold uppercase tracking-wider font-sans hover:bg-[#DE9F20] transition-colors cursor-pointer shadow-sm shrink-0"
              >
                Inquire With Sales
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. BOTTOM CALL TO ACTION */}
        {/* ========================================================================= */}
        <section aria-labelledby="cta-heading" className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-white border-2 border-[#eeaf33]/40 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#eeaf33]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-[#eeaf33]/20 border border-[#eeaf33]/50 text-[#172027] text-xs font-bold uppercase tracking-widest font-sans inline-block">
              LIMITED 2 &amp; 3 BHK INVENTORY
            </span>

            <h2 id="cta-heading" className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#172027] tracking-wide">
              Reside Beyond The Skyline
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed font-normal">
              Schedule a private walkthrough of The ONE Rise, inspect the G+13 dual-wing floor plans, and view the level-12 skypool deck.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsSiteVisitModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-widest transition-all hover:bg-[#DE9F20] hover:shadow-xl hover:shadow-[#eeaf33]/20 cursor-pointer shadow-md"
              >
                <span>Schedule Private Visit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="/documents/the-one-rise-brochure.pdf"
                download="The-ONE-Rise-Brochure.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-[#284153]/20 hover:border-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-sm"
              >
                <Download className="h-4 w-4 text-[#eeaf33]" />
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* LIGHTBOX PREVIEW MODAL */}
      {/* ========================================================================= */}
      {activeLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#172027] border border-white/20 text-white hover:text-[#eeaf33] transition-colors cursor-pointer z-10"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeLightboxImage}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCHEDULE VISIT MODAL */}
      {/* ========================================================================= */}
      {isSiteVisitModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsSiteVisitModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white border border-[#eeaf33]/40 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsSiteVisitModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8F7F3] border border-slate-200 text-[#172027]/70 hover:text-[#172027] transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="h-5 w-5" />
            </button>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#eeaf33]/20 border border-[#eeaf33] flex items-center justify-center text-[#eeaf33] mx-auto">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-[#172027]">Visit Request Confirmed</h3>
                <p className="font-sans text-xs sm:text-sm text-[#172027]/80 max-w-sm mx-auto">
                  Thank you, <span className="text-[#eeaf33] font-bold">{formData.name}</span>. Our sales desk for The ONE Rise will contact you on {formData.phone}.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#eeaf33] font-bold block mb-1">
                    G+13 SIGNATURE RESIDENCES
                  </span>
                  <h3 id="modal-title" className="font-sans text-2xl font-bold text-[#172027]">
                    Schedule a Site Visit
                  </h3>
                  <p className="font-sans text-xs text-[#172027]/60 mt-1">
                    Wardha Road, Somalwada, Nagpur
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#172027] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F3] border border-slate-300 text-[#172027] text-xs font-sans focus:outline-none focus:border-[#eeaf33] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-medium text-[#172027] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F3] border border-slate-300 text-[#172027] text-xs font-sans focus:outline-none focus:border-[#eeaf33] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-medium text-[#172027] mb-1">
                        Unit Type
                      </label>
                      <select
                        value={formData.unitType}
                        onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F3] border border-slate-300 text-[#172027] text-xs font-sans focus:outline-none focus:border-[#eeaf33] transition-colors"
                      >
                        <option value="3 BHK">3 BHK (1,865 sq.ft)</option>
                        <option value="2 BHK">2 BHK (1,379 sq.ft)</option>
                        <option value="Commercial">Commercial Shop</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#172027] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F3] border border-slate-300 text-[#172027] text-xs font-sans focus:outline-none focus:border-[#eeaf33] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#DE9F20] transition-colors cursor-pointer mt-2 shadow-sm"
                  >
                    Confirm Site Walkthrough
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
