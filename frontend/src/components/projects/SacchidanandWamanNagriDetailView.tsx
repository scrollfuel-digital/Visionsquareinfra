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
  Play,
  Layers,
  Car,
  Droplets,
  Zap,
  Eye,
  CheckCircle,
  Sun,
  Trees,
  Award,
  ChevronRight,
  Home,
} from "lucide-react";
import type { Project } from "@/types/project";

interface SacchidanandWamanNagriDetailViewProps {
  project: Project;
}

export default function SacchidanandWamanNagriDetailView({
  project,
}: SacchidanandWamanNagriDetailViewProps) {
  // Tabs & Modal states
  const [activePlanTab, setActivePlanTab] = useState<
    "3bhk-cut" | "2bhk-cut" | "masterplan" | "typical" | "floor2" | "basement" | "commercial"
  >("3bhk-cut");
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
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
    "3bhk-cut" | "2bhk-cut" | "masterplan" | "typical" | "floor2" | "basement" | "commercial",
    { image: string; title: string; tag: string }
  > = {
    "3bhk-cut": {
      title: "3 BHK 3D Cut Section (1,692 – 2,146 sq.ft)",
      image: "/images/projects/sacchidanand-waman-nagri/plan-3bhk-cutsection.jpg",
      tag: "3 BEDROOMS • 3 BATHROOMS • SPACIOUS BALCONY • MODULAR KITCHEN",
    },
    "2bhk-cut": {
      title: "2 BHK 3D Cut Section (1,238 – 1,274 sq.ft)",
      image: "/images/projects/sacchidanand-waman-nagri/plan-2bhk-cutsection.jpg",
      tag: "2 BEDROOMS • 2 TOILETS • LIVING & DINING • UTILITY BALCONY",
    },
    masterplan: {
      title: "Township Overall 3D Aerial Masterplan",
      image: "/images/projects/sacchidanand-waman-nagri/township-aerial-masterplan.jpg",
      tag: "TOWERS A, B, C, D • G+2 SPORTS COMPLEX • CLUBHOUSE & POOL",
    },
    typical: {
      title: "Typical 3rd to 9th Floor Architectural Plan",
      image: "/images/projects/sacchidanand-waman-nagri/plan-typical-floor.jpg",
      tag: "OPTIMIZED 2 & 3 BHK FLOOR DISTRIBUTION • 4 APARTMENTS PER CORE",
    },
    floor2: {
      title: "2nd Floor Gymnasium & Club Layout Plan",
      image: "/images/projects/sacchidanand-waman-nagri/plan-2nd-floor.jpg",
      tag: "COMMUNITY CLUB • INDOOR GYM ARENA • PODIUM ACCESS",
    },
    basement: {
      title: "Lower & Upper Basement Parking Matrix",
      image: "/images/projects/sacchidanand-waman-nagri/plan-basement-parking.jpg",
      tag: "2-LEVEL COMPOSITE BASEMENT PARKING • MOTORABLE RAMPS",
    },
    commercial: {
      title: "Ground Floor High-Street Retail Commercial Plaza",
      image: "/images/projects/sacchidanand-waman-nagri/plan-ground-commercial.jpg",
      tag: "HIGH-STREET RETAIL SHOPS • 24M PROPOSED ROAD FRONTAGE",
    },
  };

  // Structured SEO Schema (JSON-LD)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": "https://visionsquareinfra.com/projects/sacchidanand-waman-nagri#complex",
        name: "Sacchidanand Waman Nagri",
        alternateName: "Waman Nagri Nagpur",
        description:
          "Integrated residential township featuring G+11 towers, 2 & 3 BHK luxury residences, G+2 sports complex, G+1 clubhouse, swimming pool, and high-street shopping on Besa Pipla Road, Nagpur.",
        url: "https://visionsquareinfra.com/projects/sacchidanand-waman-nagri",
        telephone: "+91-8956685333",
        image:
          "https://visionsquareinfra.com/images/projects/sacchidanand-waman-nagri/township-aerial-masterplan.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Besa Pipla Road, Beside Jayanti Nagari 7, Pipla",
          addressLocality: "Nagpur",
          addressRegion: "Maharashtra",
          postalCode: "440034",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.0825",
          longitude: "79.0850",
        },
        numberOfBedrooms: ["2", "3"],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Swimming Pool with Deck", value: true },
          { "@type": "LocationFeatureSpecification", name: "G+2 Sports Complex", value: true },
          { "@type": "LocationFeatureSpecification", name: "G+1 Clubhouse & Gym", value: true },
          { "@type": "LocationFeatureSpecification", name: "2-Level Basement Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "High-Street Shopping Plaza", value: true },
          { "@type": "LocationFeatureSpecification", name: "MahaRERA Registered P50500018406", value: true },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://visionsquareinfra.com" },
          { "@type": "ListItem", position: 2, name: "Projects", item: "https://visionsquareinfra.com/projects" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Sacchidanand Waman Nagri",
            item: "https://visionsquareinfra.com/projects/sacchidanand-waman-nagri",
          },
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
            <span className="text-[#eeaf33] font-medium">Sacchidanand Waman Nagri</span>
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
              href="/documents/sacchidanand-waman-nagri-brochure.pdf"
              download="Sacchidanand-Waman-Nagri-Brochure.pdf"
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
                  G+11 TOWNSHIP
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#284153]/15 text-[#172027]/80 text-xs font-medium uppercase tracking-wider font-sans shadow-sm">
                  2 &amp; 3 BHK Luxurious Flats
                </span>
                <span className="px-3 py-1 rounded-full bg-[#284153]/10 text-[#172027] text-xs font-medium font-sans">
                  MahaRERA: P50500018406
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#eeaf33] uppercase mb-2">
                INTEGRATED LUXURY TOWNSHIP • BESA PIPLA ROAD
              </p>

              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#172027] mb-4">
                Sacchidanand Waman Nagri
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed max-w-2xl font-normal">
                A grand residential township on Besa Pipla Road. Featuring 4 high-rise towers, G+2 sports complex, G+1 clubhouse, swimming pool, and high-street shopping plaza.
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

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#284153]/20 hover:border-[#eeaf33]/60 text-[#172027] font-sans text-xs font-semibold tracking-wider transition-all cursor-pointer shadow-sm"
              >
                <Play className="h-3.5 w-3.5 text-[#eeaf33] fill-[#eeaf33]" />
                <span>Watch Video Tour</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar (Clean 4-Card Ribbon matching Infinity) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Building2 className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Township
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">4 Towers (A, B, C, D)</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">Sanctioned up to G+11</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Home className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Super Built-Up
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">1,238 – 2,146 sq.ft</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">2 &amp; 3 BHK Units</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Dumbbell className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Recreation
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">G+2 Sports Complex</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">Clubhouse &amp; Pool</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Award className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Bank Approvals
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">SBI • HDFC • ICICI • PNB</p>
              <span className="text-[11px] text-[#172027]/60 font-sans">Pre-Approved Loans</span>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* 3. 3D MASTERPLAN & DAY/NIGHT ARCHITECTURE */}
        {/* ========================================================================= */}
        <section aria-labelledby="masterplan-heading" className="mb-20 sm:mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  TOWNSHIP OVERVIEW
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="masterplan-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                3D Masterplan &amp; Edifice Elevations
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Masterplan Large Card */}
            <div
              onClick={() =>
                setActiveLightboxImage(
                  "/images/projects/sacchidanand-waman-nagri/township-aerial-masterplan.jpg"
                )
              }
              className="lg:col-span-8 group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-white h-[380px] sm:h-[460px] cursor-pointer shadow-md"
            >
              <Image
                src="/images/projects/sacchidanand-waman-nagri/township-aerial-masterplan.jpg"
                alt="Sacchidanand Waman Nagri Township 3D Aerial Masterplan"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold font-sans">
                3D AERIAL MASTERPLAN
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans text-white">
                <span>Towers A, B, C, D • Sports Complex G+2 • Swimming Pool • Commercial Arcade</span>
                <Maximize2 className="h-4 w-4 text-[#eeaf33] shrink-0" />
              </div>
            </div>

            {/* Day & Night Thumbnails */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div
                onClick={() =>
                  setActiveLightboxImage(
                    "/images/projects/sacchidanand-waman-nagri/elevation-day.jpg"
                  )
                }
                className="group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-white h-[180px] sm:h-[218px] cursor-pointer shadow-sm"
              >
                <Image
                  src="/images/projects/sacchidanand-waman-nagri/elevation-day.jpg"
                  alt="Waman Nagri Day Elevation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-sans font-bold text-white">
                  Day Front Elevation &amp; Retail
                </div>
              </div>

              <div
                onClick={() =>
                  setActiveLightboxImage(
                    "/images/projects/sacchidanand-waman-nagri/elevation-night.jpg"
                  )
                }
                className="group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-white h-[180px] sm:h-[218px] cursor-pointer shadow-sm"
              >
                <Image
                  src="/images/projects/sacchidanand-waman-nagri/elevation-night.jpg"
                  alt="Waman Nagri Night Elevation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-sans font-bold text-white">
                  Night Illumination &amp; Plaza
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SIX PILLARS OF EXCELLENCE */}
        {/* ========================================================================= */}
        <section aria-labelledby="pillars-heading" className="mb-20 sm:mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                TOWNSHIP HIGHLIGHTS
              </span>
              <span className="h-px w-8 bg-[#eeaf33]" />
            </div>
            <h2 id="pillars-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
              Why Sacchidanand Waman Nagri
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "4 High-Rise Towers", desc: "Sanctioned up to G+11" },
              { title: "G+2 Sports Complex", desc: "Indoor badminton & courts" },
              { title: "G+1 Clubhouse", desc: "Yoga center & swimming pool" },
              { title: "2-Level Basements", desc: "Composite multi-level parking" },
              { title: "High-Street Retail", desc: "Doorstep daily convenience" },
              { title: "Bank Pre-Approved", desc: "SBI, HDFC, ICICI, PNB" },
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
        {/* 5. 3D CUT SECTIONS & BLUEPRINT TABS (INTERACTIVE) */}
        {/* ========================================================================= */}
        <section aria-labelledby="plans-heading" className="mb-20 sm:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  3D CUT SECTIONS &amp; BLUEPRINTS
                </span>
              </div>
              <h2 id="plans-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Floor Plans &amp; Spatial Matrix
              </h2>
            </div>

            {/* Plan Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white border border-[#284153]/15 font-sans text-xs shadow-sm">
              <button
                type="button"
                onClick={() => setActivePlanTab("3bhk-cut")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "3bhk-cut" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                3 BHK Cut Section
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("2bhk-cut")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "2bhk-cut" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                2 BHK Cut Section
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("masterplan")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "masterplan" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Township Masterplan
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("typical")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "typical" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Typical Floor (3-9)
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("floor2")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "floor2" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                2nd Floor (Gym)
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("basement")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "basement" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Basement Parking
              </button>

              <button
                type="button"
                onClick={() => setActivePlanTab("commercial")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePlanTab === "commercial" ? "bg-[#172027] text-white shadow-sm" : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Ground Commercial
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

          {/* Room Dimensions Schedule */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#284153]/15 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#284153]/15">
              <div>
                <h3 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wider text-[#172027]">
                  Authentic Spatial Schedule
                </h3>
                <p className="font-sans text-xs text-[#172027]/70 mt-1">
                  Brochure verified measurements for Besa Pipla township flats.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-[#eeaf33]">
                <Compass className="h-4 w-4" />
                <span className="text-[#172027]">Cross-Ventilated Tower Layout</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { space: "3 BHK Super Built-Up", size: "1,692 – 2,146 sq.ft" },
                { space: "2 BHK Super Built-Up", size: "1,238 – 1,274 sq.ft" },
                { space: "3 BHK Drawing Room", size: "10'4\" × 24'0\"" },
                { space: "3 BHK Dining Area", size: "12'0\" × 11'6\"" },
                { space: "3 BHK Master Bed 1", size: "11'0\" × 13'6\"" },
                { space: "3 BHK Bedroom 2", size: "10'0\" × 13'6\"" },
                { space: "3 BHK Bedroom 3", size: "10'0\" × 12'0\"" },
                { space: "3 BHK Kitchen", size: "11'0\" × 8'0\"" },
                { space: "3 BHK Balcony", size: "16'4\" × 6'6\"" },
                { space: "2 BHK Living & Dining", size: "15'1\" × 11'2\"" },
                { space: "2 BHK Master Bed", size: "9'8\" × 14'6\"" },
                { space: "2 BHK Bedroom 2", size: "11'8\" × 10'8\"" },
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
        {/* 6. AMENITIES & RECREATION (PAGE 7 OF PDF) */}
        {/* ========================================================================= */}
        <section aria-labelledby="amenities-heading" className="mb-20 sm:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  AMENITIES &amp; LIFESTYLE
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="amenities-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Township Club &amp; Sports Complex
              </h2>
            </div>
            <span className="text-xs font-sans text-[#172027]/70">G+2 Sports • G+1 Club • Swimming Pool</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              {
                category: "HEALTH & WELLNESS",
                items: ["Swimming Pool & Sun Deck", "Meditation & Yoga Area", "Walking & Jogging Track", "Modern Gymnasium"],
              },
              {
                category: "GAMES & SPORTS",
                items: ["G+2 Sports Complex", "Mini Basketball Court", "Snooker & Billiards", "Carrom & Chess Room"],
              },
              {
                category: "ENTERTAINMENT",
                items: ["G+1 Exclusive Club House", "Indoor Game Zone", "Children's Play Area", "Matted Play Area"],
              },
              {
                category: "NATURE & CAMPUS",
                items: ["Central Landscaped Garden", "Garden Walkways", "Spiritual Temple", "2-Level Basement Parking"],
              },
            ].map((col, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#284153]/10">
                  <span className="font-sans text-base font-bold uppercase tracking-wider text-[#172027]">
                    {col.category}
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#172027]/80">
                  {col.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#eeaf33] shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Special Features Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#eeaf33] shrink-0" />
              <div>
                <span className="text-xs font-bold font-sans text-[#172027] block">Smart Lock</span>
                <span className="text-[10px] text-[#172027]/60 font-sans">Biometric Security</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm flex items-center gap-3">
              <Zap className="h-6 w-6 text-[#eeaf33] shrink-0" />
              <div>
                <span className="text-xs font-bold font-sans text-[#172027] block">Generator Backup</span>
                <span className="text-[10px] text-[#172027]/60 font-sans">100% Common Areas</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm flex items-center gap-3">
              <Sun className="h-6 w-6 text-[#eeaf33] shrink-0" />
              <div>
                <span className="text-xs font-bold font-sans text-[#172027] block">Internal Concrete Road</span>
                <span className="text-[10px] text-[#172027]/60 font-sans">Street Lighting Setup</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#eeaf33] shrink-0" />
              <div>
                <span className="text-xs font-bold font-sans text-[#172027] block">24M Road Facing</span>
                <span className="text-[10px] text-[#172027]/60 font-sans">Prime Besa Pipla Location</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SPECIFICATIONS (PAGE 12 OF PDF) */}
        {/* ========================================================================= */}
        <section aria-labelledby="specs-heading" className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                QUALITY BENCHMARKS
              </span>
              <span className="h-px w-8 bg-[#eeaf33]" />
            </div>
            <h2 id="specs-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
              Construction Specifications
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
              Jaquar Sanitary • Johnson/Kone Elevators • ISI Copper Wiring
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Structure & Plaster",
                items: [
                  "Earthquake-resistant RCC frame structure",
                  "Inside wall OBD painting with smooth putty",
                  "External paint with weather-shield protective coating",
                ],
              },
              {
                title: "Flooring & Kitchen",
                items: [
                  "Vitrified tiles across all living spaces",
                  "Anti-skid floor tiles in toilets & balconies",
                  "Granite cooking platform with stainless steel sink",
                ],
              },
              {
                title: "Sanitary, Water & Elevators",
                items: [
                  "Sleek CP fittings & sanitary of Jaquar or equivalent",
                  "Separate dual taps for drinking & domestic water",
                  "Automatic lifts of Johnson / Kone / Otis with power backup",
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
        {/* 8. LOCATION MAP, CONNECTIVITY & BANKING PARTNERS */}
        {/* ========================================================================= */}
        <section aria-labelledby="location-heading" className="mb-20 sm:mb-24">
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PRIME PIPLA LOCATION
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="location-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Key Distances &amp; Connectivity
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Beside Jayanti Nagari 7, moments from Zudio, AM Cinema, and Besa Chowk.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              {/* Location Map View */}
              <div
                onClick={() =>
                  setActiveLightboxImage(
                    "/images/projects/sacchidanand-waman-nagri/location-map.jpg"
                  )
                }
                className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#FAF9F5] p-4 h-[400px] sm:h-[480px] cursor-pointer shadow-sm flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/projects/sacchidanand-waman-nagri/location-map.jpg"
                    alt="Sacchidanand Waman Nagri Location Map Besa Pipla Road"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 text-[#eeaf33] text-xs font-bold font-sans shadow-sm">
                  BESA PIPLA LOCATION MAP
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
                      MAHARERA REGISTRATION
                    </span>
                    <span className="font-sans text-sm font-bold text-[#172027] block">
                      P50500018406
                    </span>
                    <span className="text-[10px] text-[#172027]/60 font-sans">maharera.maharashtra.gov.in</span>
                  </div>
                  <div
                    onClick={() =>
                      setActiveLightboxImage(
                        "/images/projects/sacchidanand-waman-nagri/maharera-qr.jpg"
                      )
                    }
                    className="relative h-12 w-12 bg-white p-1 rounded-lg shrink-0 cursor-pointer shadow-sm border border-slate-200"
                    title="Click to view MahaRERA QR"
                  >
                    <Image
                      src="/images/projects/sacchidanand-waman-nagri/maharera-qr.jpg"
                      alt="MahaRERA QR"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { destination: "AM Cinema / Zudio", time: "0.1 Km" },
                    { destination: "St. Vincent Pallotti", time: "0.7 Km" },
                    { destination: "Haldiram's Besa", time: "1.4 Km" },
                    { destination: "Poddar International", time: "2.2 Km" },
                    { destination: "D-Mart Beltarodi", time: "3.2 Km" },
                    { destination: "Nagpur Airport", time: "6.0 Km" },
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

                {/* Banking Partners Pills */}
                <div className="p-3 rounded-xl bg-[#F8F7F3] border border-[#284153]/15 text-[11px] font-sans flex items-center justify-between">
                  <span className="text-[#172027]/70 font-medium">Banking Partners:</span>
                  <span className="text-[#172027] font-semibold">SBI • HDFC • ICICI • PNB</span>
                </div>
              </div>
            </div>

            {/* Developer Details */}
            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#284153]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#eeaf33] font-bold font-sans block mb-1">
                  DEVELOPED BY
                </span>
                <h4 className="font-sans text-xl font-bold text-[#172027]">
                  Sacchidanand Realities Pvt. Ltd.
                </h4>
                <p className="text-xs font-sans text-[#172027]/60 mt-1">
                  Flat No 104, Sanchayani Complex, Trimurti Nagar Square, Ring Road, Nagpur - 440022
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
              READY FOR POSSESSION &amp; BOOKINGS
            </span>

            <h2 id="cta-heading" className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#172027] tracking-wide">
              Experience Sacchidanand Waman Nagri
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed font-normal">
              Book a personal site visit, explore the 3D cut section show flats, and tour the G+2 sports complex on Besa Pipla Road.
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
                href="/documents/sacchidanand-waman-nagri-brochure.pdf"
                download="Sacchidanand-Waman-Nagri-Brochure.pdf"
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
      {/* VIDEO MODAL */}
      {/* ========================================================================= */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black border border-[#284153]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:text-[#eeaf33] z-20 cursor-pointer"
              aria-label="Close Video"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/kBfikLRtI-M?autoplay=1"
              title="Sacchidanand Waman Nagri Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

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
                  Thank you, <span className="text-[#eeaf33] font-bold">{formData.name}</span>. Our sales desk for Sacchidanand Waman Nagri will contact you on {formData.phone}.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#eeaf33] font-bold block mb-1">
                    BESA PIPLA TOWNSHIP
                  </span>
                  <h3 id="modal-title" className="font-sans text-2xl font-bold text-[#172027]">
                    Schedule a Site Visit
                  </h3>
                  <p className="font-sans text-xs text-[#172027]/60 mt-1">
                    Besa Pipla Road, Beside Jayanti Nagari 7, Pipla
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
                      placeholder="e.g. Ramesh Deshmukh"
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
                        placeholder="+91 89566 85333"
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
                        <option value="3 BHK">3 BHK Luxury Flat</option>
                        <option value="2 BHK">2 BHK Luxury Flat</option>
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
