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
  Play,
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
  Layers,
  Car,
  Zap,
  Droplets,
  Sun,
  Video,
  Eye,
  Clock,
  Home,
  CheckCircle,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import type { Project } from "@/types/project";

interface SkyConnectDetailViewProps {
  project: Project;
}

export default function SkyConnectDetailView({ project }: SkyConnectDetailViewProps) {
  // Tabs & Modal states
  const [activeFloorPlanTab, setActiveFloorPlanTab] = useState<"2d" | "3d" | "parking">("2d");
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("All");
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

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
      setIsSiteVisitModalOpen(false);
      setFormData({ name: "", phone: "", email: "", visitDate: "", message: "" });
    }, 2800);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Filter gallery images
  const galleryItems = project.gallery || [];
  const filteredGallery =
    selectedGalleryCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedGalleryCategory);

  const galleryCategories = [
    "All",
    ...Array.from(new Set(galleryItems.map((item) => item.category))),
  ];

  // Structured SEO Schema (JSON-LD)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": "https://visionsquareinfra.com/projects/skyconnect-7-crown#complex",
        name: "SkyConnect 7 Crown",
        alternateName: "7 Crown Jaiprakash Nagar Nagpur",
        description:
          "Exclusive 3 BHK luxury residences in Jaiprakash Nagar, Nagpur. Featuring contemporary architecture, rooftop living, smart security, covered parking, and seamless connectivity.",
        url: "https://visionsquareinfra.com/projects/skyconnect-7-crown",
        telephone: "+91-8989-666-888",
        image: "https://visionsquareinfra.com/images/projects/skyconnect-7-crown.jpeg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar",
          addressLocality: "Jaiprakash Nagar",
          addressRegion: "Nagpur, Maharashtra",
          postalCode: "440025",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.1158",
          longitude: "79.0682",
        },
        numberOfBedrooms: "3",
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Rooftop Sky Garden", value: true },
          { "@type": "LocationFeatureSpecification", name: "Individual Covered Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Smart Video Door Bell", value: true },
          { "@type": "LocationFeatureSpecification", name: "Solar Powered Common Lighting", value: true },
          { "@type": "LocationFeatureSpecification", name: "Automatic Rescue Device Elevator", value: true },
          { "@type": "LocationFeatureSpecification", name: "Rainwater Harvesting System", value: true },
          { "@type": "LocationFeatureSpecification", name: "24x7 CCTV Surveillance", value: true },
          { "@type": "LocationFeatureSpecification", name: "EV Charging Provision", value: true },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://visionsquareinfra.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://visionsquareinfra.com/projects",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SkyConnect 7 Crown",
            item: "https://visionsquareinfra.com/projects/skyconnect-7-crown",
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

      {/* Background Ambient Warm Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#eeaf33]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#284153]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-[#eeaf33]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. BREADCRUMBS & TOP BAR */}
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
            <span className="text-[#eeaf33] font-medium">{project.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#284153]/15 hover:border-[#eeaf33]/50 text-[#172027] transition-all text-xs cursor-pointer shadow-sm"
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
              href="/documents/skyconnect-7-crown-brochure.pdf"
              download="SkyConnect-7-Crown-Brochure.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 text-[#172027] hover:bg-[#eeaf33] hover:text-[#172027] transition-all text-xs font-semibold cursor-pointer shadow-sm"
            >
              <Download className="h-3.5 w-3.5 text-[#eeaf33]" />
              <span>Brochure PDF</span>
            </a>
          </div>
        </nav>

        {/* ========================================================================= */}
        {/* 2. PROJECT HERO HEADER */}
        {/* ========================================================================= */}
        <header className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#284153]/15">
            <div className="max-w-3xl">
              {/* Badges & Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 text-[#172027] text-xs font-bold uppercase tracking-widest font-sans">
                  <Sparkles className="h-3 w-3 text-[#eeaf33]" />
                  {project.status ? project.status.toUpperCase() : "BOOKING OPEN"}
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#284153]/15 text-[#172027]/80 text-xs font-medium uppercase tracking-wider font-sans shadow-sm">
                  Exclusive 3 BHK Residences
                </span>
                <span className="px-3 py-1 rounded-full bg-[#284153]/10 text-[#172027] text-xs font-medium font-sans">
                  By SKYCONNECT INFRASTRUCTURES
                </span>
              </div>

              {/* Eyebrow & Main Title */}
              <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#eeaf33] uppercase mb-2">
                {project.brandTagline || "WHERE LIVING MEETS THE SKY — CROWN YOUR LIFE WITH EXCELLENCE"}
              </p>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#172027] uppercase mb-4">
                {project.name}
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed max-w-2xl font-normal">
                {project.description}
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsSiteVisitModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#DE9F20] hover:shadow-xl hover:shadow-[#eeaf33]/20 hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                <span>Schedule Private Visit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {project.videoUrl && (
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#eeaf33] text-[#172027] font-sans text-xs font-semibold tracking-wider hover:bg-[#eeaf33]/15 transition-all cursor-pointer shadow-sm"
                >
                  <Play className="h-3.5 w-3.5 text-[#eeaf33] fill-current" />
                  <span>Watch Walkthrough Tour</span>
                </button>
              )}

              <a
                href="tel:+918989666888"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#284153]/20 hover:border-[#eeaf33]/60 text-[#172027] font-sans text-xs font-semibold tracking-wider transition-all cursor-pointer shadow-sm"
              >
                <Phone className="h-3.5 w-3.5 text-[#eeaf33]" />
                <span>+91 8989-666-888</span>
              </a>
            </div>
          </div>

          {/* Quick Info Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <MapPin className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Location
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">
                Jaiprakash Nagar
              </p>
              <span className="text-[11px] text-[#172027]/60">Beside Hotel Trance, Wardha Rd</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Home className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Configuration
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">
                3 BHK Luxury Homes
              </p>
              <span className="text-[11px] text-[#172027]/60">Spacious Drawing & 3 Balconies</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Car className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Parking
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">
                Covered Individual Bays
              </p>
              <span className="text-[11px] text-[#172027]/60">Dedicated Stilt Parking & EV Ready</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Building2 className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Elevation & Rooftop
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">
                G+6 Edifice with Sky Garden
              </p>
              <span className="text-[11px] text-[#172027]/60">Lift with ARD to Terrace</span>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* 3. ARCHITECTURAL SHOWCASE: EDIFICE & HIGHLIGHTS */}
        {/* ========================================================================= */}
        <section aria-labelledby="architecture-heading" className="mb-20 sm:mb-24">
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image side with zoom trigger */}
              <div
                onClick={() => setActiveLightboxImage(project.image || "/images/projects/skyconnect-7-crown.jpeg")}
                className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-[#172027] h-[440px] sm:h-[520px] cursor-pointer shadow-lg"
              >
                <Image
                  src={project.image || "/images/projects/skyconnect-7-crown.jpeg"}
                  alt="SkyConnect 7 Crown Landmark Architecture"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/85 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                  ARCHITECTURAL RENDERING
                </div>
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                  <Maximize2 className="h-4 w-4" />
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-white/90 font-sans">
                  <span className="text-[#eeaf33] font-bold block mb-0.5 font-sans text-sm">
                    G+6 Signature Facade
                  </span>
                  Architectural vertical fins, cantilevered glass balconies, and grand arrival porch.
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-[#eeaf33]" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                    LANDMARK CORRIDOR
                  </span>
                </div>

                <h2 id="architecture-heading" className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#172027] leading-tight">
                  Contemporary Grandeur in the Heart of Nagpur
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed font-normal">
                  SkyConnect 7 Crown stands as a beacon of refined residential architecture in Jaiprakash Nagar. Meticulously engineered with earthquake-resistant RCC framing, clean architectural geometries, soaring floor heights, and generous balconies, this address blends tranquil residential comfort with fast transit access to Nagpur’s thriving commercial hubs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="font-sans text-2xl font-bold text-[#172027] block mb-1">
                      25-Ft Living
                    </span>
                    <p className="font-sans text-xs text-[#172027]/70">
                      Spacious 25&apos; × 12&apos;8&quot; drawing &amp; dining hall designed for graceful entertaining.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="font-sans text-2xl font-bold text-[#172027] block mb-1">
                      3 Balconies
                    </span>
                    <p className="font-sans text-xs text-[#172027]/70">
                      Front sitting balcony &amp; dual standing decks ensuring continuous cross-breeze.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFloorPlanTab("2d");
                      const el = document.getElementById("floor-plans-section");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#eeaf33] hover:text-[#DE9F20] transition-colors cursor-pointer"
                  >
                    <span>Inspect 3 BHK Blueprint</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {project.videoUrl && (
                    <button
                      type="button"
                      onClick={() => setIsVideoModalOpen(true)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#172027] hover:text-[#eeaf33] transition-colors cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5 text-[#eeaf33] fill-current" />
                      <span>Watch Walkthrough Tour</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SIX PILLARS OF EXCELLENCE (PAGE 2 OF PDF) */}
        {/* ========================================================================= */}
        {project.keyHighlightsPillars && (
          <section aria-labelledby="pillars-heading" className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PROJECT FOUNDATION
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="pillars-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Six Pillars of Refined Living
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Engineered for refined comfort, enduring investment value, and daily convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyHighlightsPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white border border-[#284153]/15 hover:border-[#eeaf33] transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-2xl font-bold text-[#eeaf33] transition-colors">
                      0{idx + 1}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-[#F8F7F3] border border-[#284153]/15 flex items-center justify-center text-[#eeaf33]">
                      <Check className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-[#172027] mb-2 group-hover:text-[#eeaf33] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#172027]/70 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 5. ARCHITECTURAL ELEVATIONS: FRONT & BACK NIGHT VIEWS (PAGE 3 OF PDF) */}
        {/* ========================================================================= */}
        {project.elevationViews && (
          <section aria-labelledby="elevations-heading" className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGE 03 • ELEVATION PERSPECTIVES
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="elevations-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Night Front &amp; Back Perspectives
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Sculpted illumination highlighting vertical structural fins, expansive cantilevered decks, and rooftop crown.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Front View */}
              <div
                onClick={() => setActiveLightboxImage(project.elevationViews!.front)}
                className="group relative rounded-3xl overflow-hidden border border-[#284153]/15 bg-white shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="relative h-[420px] sm:h-[480px] w-full">
                  <Image
                    src={project.elevationViews.front}
                    alt="SkyConnect 7 Crown Night Front View"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                    NIGHT FRONT PERSPECTIVE
                  </div>
                  <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-14 text-xs text-white/90 font-sans">
                    <span className="text-[#eeaf33] font-bold block mb-0.5 text-sm font-sans">
                      Grand Arrival Driveway &amp; Architectural Fins
                    </span>
                    Illuminated multi-tier balconies, warm perimeter lighting, and decorative vertical fins.
                  </div>
                </div>
              </div>

              {/* Back View */}
              {project.elevationViews.back && (
                <div
                  onClick={() => setActiveLightboxImage(project.elevationViews!.back!)}
                  className="group relative rounded-3xl overflow-hidden border border-[#284153]/15 bg-white shadow-md hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="relative h-[420px] sm:h-[480px] w-full">
                    <Image
                      src={project.elevationViews.back}
                      alt="SkyConnect 7 Crown Night Back View"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                      NIGHT BACK PERSPECTIVE
                    </div>
                    <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-14 text-xs text-white/90 font-sans">
                      <span className="text-[#eeaf33] font-bold block mb-0.5 text-sm font-sans">
                        Rooftop Garden &amp; Stepped Terraces
                      </span>
                      Lush landscaped sky garden, open-air sitting pavilions, and bedroom balconies.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 6. ARCHITECTURAL FLOOR PLANS & SPATIAL MATRIX (PAGES 4 & 5 OF PDF) */}
        {/* ========================================================================= */}
        {project.floorPlans && (
          <section id="floor-plans-section" aria-labelledby="plans-heading" className="mb-20 sm:mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-px w-8 bg-[#eeaf33]" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                    PAGES 04 & 05 • ARCHITECTURAL BLUEPRINTS
                  </span>
                </div>
                <h2 id="plans-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                  Floor Plans &amp; Spatial Matrix
                </h2>
              </div>

              {/* Plan Switcher Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#284153]/15 font-sans text-xs shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveFloorPlanTab("2d")}
                  className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFloorPlanTab === "2d"
                      ? "bg-[#172027] text-white shadow-sm"
                      : "text-[#172027]/70 hover:text-[#172027]"
                  }`}
                >
                  Floor Map 2D Plan
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFloorPlanTab("3d")}
                  className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFloorPlanTab === "3d"
                      ? "bg-[#172027] text-white shadow-sm"
                      : "text-[#172027]/70 hover:text-[#172027]"
                  }`}
                >
                  Isometric 3D Plan
                </button>

                {project.floorPlans.parkingPlan && (
                  <button
                    type="button"
                    onClick={() => setActiveFloorPlanTab("parking")}
                    className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeFloorPlanTab === "parking"
                        ? "bg-[#172027] text-white shadow-sm"
                        : "text-[#172027]/70 hover:text-[#172027]"
                    }`}
                  >
                    Parking Plan
                  </button>
                )}
              </div>
            </div>

            {/* Plan Display Card */}
            <div className="rounded-3xl p-4 sm:p-6 lg:p-8 bg-white border border-[#284153]/15 shadow-md mb-8">
              <div
                onClick={() => {
                  const currentPlan =
                    activeFloorPlanTab === "2d"
                      ? project.floorPlans!.blueprint2D
                      : activeFloorPlanTab === "3d"
                      ? (project.floorPlans!.isometric3D || project.floorPlans!.blueprint2D)
                      : (project.floorPlans!.parkingPlan || project.floorPlans!.blueprint2D);
                  setActiveLightboxImage(currentPlan);
                }}
                className="group relative rounded-2xl overflow-hidden bg-[#FAF9F5] border border-slate-200 cursor-pointer min-h-[460px] sm:min-h-[580px] flex items-center justify-center p-4 sm:p-6"
              >
                <div className="relative w-full h-[460px] sm:h-[580px]">
                  <Image
                    src={
                      activeFloorPlanTab === "2d"
                        ? project.floorPlans.blueprint2D
                        : activeFloorPlanTab === "3d"
                        ? (project.floorPlans.isometric3D || project.floorPlans.blueprint2D)
                        : (project.floorPlans.parkingPlan || project.floorPlans.blueprint2D)
                    }
                    alt={`SkyConnect 7 Crown ${activeFloorPlanTab.toUpperCase()} Plan Blueprint`}
                    fill
                    priority
                    className="object-contain transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                  {activeFloorPlanTab === "2d"
                    ? "2D ARCHITECTURAL LAYOUT PLAN"
                    : activeFloorPlanTab === "3d"
                    ? "3D ISOMETRIC FURNISHED BLUEPRINT"
                    : "STILT & GROUND COVERED PARKING PLAN"}
                </div>

                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 text-white/90 text-xs font-sans">
                  <Maximize2 className="h-3.5 w-3.5 text-[#eeaf33]" />
                  <span>Click to Enlarge</span>
                </div>
              </div>
            </div>

            {/* Spatial Dimension Schedule Table (Page 4 of PDF) */}
            {project.floorPlans.dimensions && project.floorPlans.dimensions.length > 0 && (
              <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#284153]/15 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#284153]/15">
                  <div>
                    <h3 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wider text-[#172027]">
                      Verbatim Spatial Dimension Schedule
                    </h3>
                    <p className="font-sans text-xs text-[#172027]/70 mt-1">
                      Precise individual room dimensions and carpet schedules from official blueprints.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans text-[#eeaf33]">
                    <Compass className="h-4 w-4" />
                    <span className="text-[#172027] font-medium">Vastu Compliant Natural Cross-Ventilation</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-sans">
                  {project.floorPlans.dimensions.map((dim, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 hover:border-[#eeaf33]/50 transition-colors"
                    >
                      <span className="text-[11px] font-sans uppercase tracking-wider text-[#172027]/60 block mb-1">
                        {dim.space}
                      </span>
                      <span className="font-sans text-base sm:text-lg font-bold text-[#172027]">
                        {dim.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ========================================================================= */}
        {/* 7. CURATED GALLERY OF SPACES (PAGE 6 OF PDF) */}
        {/* ========================================================================= */}
        {galleryItems.length > 0 && (
          <section aria-labelledby="gallery-heading" className="mb-20 sm:mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-px w-8 bg-[#eeaf33]" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                    PAGE 06 • RESIDENCE WALKTHROUGH
                  </span>
                </div>
                <h2 id="gallery-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                  Curated Gallery of Spaces
                </h2>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedGalleryCategory(category)}
                    className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedGalleryCategory === category
                        ? "bg-[#172027] text-white shadow-sm"
                        : "bg-white border border-[#284153]/15 text-[#172027]/70 hover:text-[#172027] shadow-sm"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxImage(item.image)}
                  className="group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-white h-[280px] sm:h-[320px] cursor-pointer shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#172027]/85 backdrop-blur-md text-[11px] font-sans font-bold text-[#eeaf33]">
                    {item.category}
                  </div>
                  <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-12 text-left">
                    <span className="font-sans text-base sm:text-lg font-bold text-white block group-hover:text-[#eeaf33] transition-colors">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 8. PREMIUM AMENITIES (PAGE 7 OF PDF) */}
        {/* ========================================================================= */}
        {project.amenitiesDetailed && project.amenitiesDetailed.length > 0 && (
          <section aria-labelledby="amenities-heading" className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGE 07 • ELEVATED LIFESTYLE
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="amenities-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Premium Project Amenities
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Curated conveniences designed for seamless modern living, clean energy, and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 font-sans">
              {project.amenitiesDetailed.map((amenity, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#284153]/15 hover:border-[#eeaf33] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eeaf33]/15 border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33] shrink-0">
                    {idx === 0 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : idx === 1 ? (
                      <Layers className="h-5 w-5" />
                    ) : idx === 2 ? (
                      <Car className="h-5 w-5" />
                    ) : idx === 3 ? (
                      <Video className="h-5 w-5" />
                    ) : idx === 4 ? (
                      <Home className="h-5 w-5" />
                    ) : idx === 5 ? (
                      <Sun className="h-5 w-5" />
                    ) : idx === 6 ? (
                      <Zap className="h-5 w-5" />
                    ) : idx === 7 ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : idx === 8 ? (
                      <Building2 className="h-5 w-5" />
                    ) : idx === 9 ? (
                      <Droplets className="h-5 w-5" />
                    ) : (
                      <CheckCircle className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#172027] leading-tight">
                      {amenity}
                    </h4>
                    <span className="text-[10px] text-[#172027]/55 font-medium mt-0.5 block">
                      Included Specification
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 9. TECHNICAL SPECIFICATIONS (PAGE 7 OF PDF) */}
        {/* ========================================================================= */}
        {project.specificationsDetailed && project.specificationsDetailed.length > 0 && (
          <section aria-labelledby="specs-heading" className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGE 07 • CONSTRUCTION QUALITY
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="specs-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Technical Specifications
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Transparent grade-of-material disclosure engineered for structural permanence and aesthetic refinement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans mb-8">
              {project.specificationsDetailed.map((spec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white border border-[#284153]/15 hover:border-[#eeaf33]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#284153]/10">
                    <div className="h-8 w-8 rounded-lg bg-[#F8F7F3] border border-[#eeaf33]/40 flex items-center justify-center text-[#eeaf33]">
                      <Award className="h-4 w-4" />
                    </div>
                    <h3 className="font-sans text-lg font-bold text-[#172027] uppercase tracking-wider">
                      {spec.category}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {spec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172027]/80 font-sans font-normal">
                        <CheckCircle2 className="h-4 w-4 text-[#eeaf33] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/15 text-xs font-sans text-[#172027]/70">
              <span className="text-[#eeaf33] font-bold uppercase tracking-wider mr-2">Official Note:</span>
              M.S.E.B. Network charges, Stamp Duty, Registration fees, and GST as applicable. Any custom internal modification requires advance consultation with site engineering.
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 10. LOCATION & CONNECTIVITY MAP (PAGE 8 OF PDF) */}
        {/* ========================================================================= */}
        {project.connectivityNodes && (
          <section aria-labelledby="location-heading" className="mb-20 sm:mb-24">
            <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-12 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
                {/* Left Distances Breakdown */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="h-px w-8 bg-[#eeaf33]" />
                      <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                        PAGE 08 • STRATEGIC CORRIDOR
                      </span>
                    </div>
                    <h2 id="location-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027] mb-3">
                      Distances That Connect
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-[#172027]/75 font-normal leading-relaxed">
                      Positioned in the prime residential hub of Jaiprakash Nagar, minutes from Wardha Road, metro stations, airport, and Nagpur&apos;s leading dining and retail centers.
                    </p>
                  </div>

                  {/* Radar Grid */}
                  <div className="grid grid-cols-2 gap-3.5 font-sans">
                    {project.connectivityNodes.map((node, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <MapPin className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />
                          <span className="text-xs text-[#172027] truncate font-medium">
                            {node.destination}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#eeaf33] bg-[#eeaf33]/15 px-2 py-0.5 rounded-full shrink-0">
                          {node.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 text-xs text-[#172027]/70 font-sans">
                    <span className="text-[#eeaf33] font-bold block mb-1">
                      Key Transit Landmarks:
                    </span>
                    Somalwada Road Underpass · Manish Nagar Flyover · Radisson Blu Hotel · Ujjwal Nagar Metro Station.
                  </div>

                  <a
                    href="https://maps.google.com/?q=Plot+30-31,+Beside+Hotel+Trance,+Jaiprakash+Nagar,+Nagpur+-+440025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#172027] hover:bg-[#284153] text-white transition-all text-xs font-bold uppercase tracking-wider font-sans shadow-sm"
                  >
                    <span>Open Location in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Right Connectivity Map Card */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() =>
                      setActiveLightboxImage(
                        "/images/projects/skyconnect-7-crown/connectivity-map.jpg"
                      )
                    }
                    className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#FAF9F5] p-4 h-[420px] sm:h-[480px] cursor-pointer shadow-sm flex items-center justify-center"
                    title="Click to view full connectivity map"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/projects/skyconnect-7-crown/connectivity-map.jpg"
                        alt="SkyConnect 7 Crown Connectivity Transit Map"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-102"
                      />
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#172027]/90 text-[#eeaf33] text-xs font-bold font-sans">
                      TRANSIT &amp; ROAD CORRIDOR MAP
                    </div>
                    <div className="absolute bottom-4 right-4 p-2 rounded-full bg-[#172027]/80 text-white">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer & Channel Partner Card */}
              <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#284153]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#eeaf33] font-bold font-sans block mb-1">
                    DEVELOPER &amp; INFRASTRUCTURE PARTNER
                  </span>
                  <h4 className="font-sans text-xl font-bold text-[#172027]">
                    SKYCONNECT INFRASTRUCTURES
                  </h4>
                  <p className="text-xs font-sans text-[#172027]/60 mt-1">
                    Karve Nagar &amp; Jaiprakash Nagar, Nagpur
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSiteVisitModalOpen(true)}
                    className="px-6 py-3 rounded-full bg-[#eeaf33] text-[#172027] text-xs font-bold uppercase tracking-wider font-sans hover:bg-[#DE9F20] transition-colors cursor-pointer shadow-sm"
                  >
                    Contact Sales Office
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 11. OFFICIAL CONTACT & SITE VISIT SCHEDULING (PAGE 8 OF PDF) */}
        {/* ========================================================================= */}
        <section
          id="brochure-section"
          aria-labelledby="cta-heading"
          className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border-2 border-[#eeaf33]/40 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Contact Addresses */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold block mb-2">
                  OFFICIAL CHANNEL DESK
                </span>
                <h2 id="cta-heading" className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#172027] mb-3">
                  Schedule A Private Showing
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#172027]/75 font-normal leading-relaxed">
                  Direct booking assistance, floor inventory inspection, and spot allotment support through Vision Square Infra.
                </p>
              </div>

              <div className="space-y-3.5 font-sans text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#eeaf33] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#eeaf33] tracking-wider block">
                      SITE ADDRESS
                    </span>
                    <span className="text-[#172027] font-medium">
                      {project.contactInfo?.siteAddress ||
                        "7 CROWN, Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar, Nagpur – 440025"}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-[#eeaf33] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#eeaf33] tracking-wider block">
                      CORPORATE OFFICE
                    </span>
                    <span className="text-[#172027] font-medium">
                      {project.contactInfo?.officeAddress ||
                        "2nd Floor, Slesha Apartment, 201, Near Airport, Karve Nagar, Nagpur, Maharashtra – 440025"}
                    </span>
                  </div>
                </div>

                {project.contactInfo?.phones && (
                  <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10 flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#eeaf33] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#eeaf33] tracking-wider block">
                        DIRECT HOTLINES
                      </span>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#172027] font-mono mt-1 font-semibold">
                        {project.contactInfo.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="hover:text-[#eeaf33] transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-6 bg-[#F8F7F3] p-6 sm:p-8 rounded-3xl border border-[#284153]/15 shadow-sm">
              <h3 className="font-sans text-xl font-bold text-[#172027] mb-1">
                Book A Private Site Consultation
              </h3>
              <p className="font-sans text-xs text-[#172027]/60 mb-5">
                Our luxury relationship manager will arrange personal viewing &amp; detailed brochure packet.
              </p>

              {formSubmitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-[#eeaf33] mx-auto mb-3" />
                  <h4 className="font-sans text-xl font-bold text-[#172027] mb-1">
                    Booking Request Confirmed
                  </h4>
                  <p className="font-sans text-xs text-[#172027]/70 max-w-xs mx-auto">
                    We have received your site visit request. Our private client team will call you shortly on {formData.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 font-sans">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#172027] placeholder:text-gray-400 focus:outline-none focus:border-[#eeaf33]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#172027] placeholder:text-gray-400 focus:outline-none focus:border-[#eeaf33]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#172027] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#172027] focus:outline-none focus:border-[#eeaf33]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#172027] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#172027] placeholder:text-gray-400 focus:outline-none focus:border-[#eeaf33]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#172027] mb-1">
                      Notes or Inquiries
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mention any specific floor preferences or inquiries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#172027] placeholder:text-gray-400 focus:outline-none focus:border-[#eeaf33] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#eeaf33] text-[#172027] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#DE9F20] transition-all shadow-md cursor-pointer mt-2"
                  >
                    Confirm Private Site Visit
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {activeLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
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
              alt="SkyConnect 7 Crown Enlarged Visual"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIDEO TOUR MODAL */}
      {/* ========================================================================= */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="SkyConnect 7 Crown Video Walkthrough"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white border-2 border-[#eeaf33]/40 rounded-3xl overflow-hidden p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 text-[#172027]">
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#eeaf33] block">
                  WALKTHROUGH TOUR
                </span>
                <h4 className="font-sans text-xl font-bold text-[#172027]">
                  {project.name} Video Tour
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-[#172027] transition-colors"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <video
                src={project.videoUrl || "/videos/SKY%20connect.mp4"}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCHEDULE SITE VISIT MODAL */}
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
                <h3 className="font-sans text-2xl font-bold text-[#172027]">
                  Visit Request Confirmed
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#172027]/80 max-w-sm mx-auto">
                  Thank you, <span className="text-[#eeaf33] font-bold">{formData.name}</span>. Our private client team for SkyConnect 7 Crown will contact you shortly on {formData.phone}.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#eeaf33] font-bold block mb-1">
                    EXCLUSIVE 3 BHK SHOWCASE
                  </span>
                  <h3 id="modal-title" className="font-sans text-2xl font-bold text-[#172027]">
                    Schedule a Site Visit
                  </h3>
                  <p className="font-sans text-xs text-[#172027]/60 mt-1">
                    Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar, Nagpur
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
                      placeholder="e.g. Dr. Rajesh Sharma"
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
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F3] border border-slate-300 text-[#172027] text-xs font-sans focus:outline-none focus:border-[#eeaf33] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#172027] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F3] border border-slate-300 text-[#172027] text-xs font-sans focus:outline-none focus:border-[#eeaf33] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#172027] mb-1">
                      Notes or Inquiries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific requirements or preferred visit time..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F3] border border-slate-300 text-[#172027] text-xs font-sans focus:outline-none focus:border-[#eeaf33] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#DE9F20] transition-colors cursor-pointer mt-2 shadow-sm"
                  >
                    Confirm Site Visit Request
                  </button>

                  <p className="text-[10px] text-center text-[#172027]/60 font-sans">
                    By submitting, you agree to receive official project updates from Vision Square Infrastructure &amp; SkyConnect Infrastructures.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
