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
} from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectDetailViewProps {
  project: Project;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  // Tabs & Modal states
  const [activeFloorPlanTab, setActiveFloorPlanTab] = useState<"2d" | "3d" | "parking">("2d");
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("All");
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#172027] text-[#F8F7F3] pt-24 sm:pt-28 md:pt-32 pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#eeaf33]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#284153]/35 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. BREADCRUMBS & TOP BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 text-xs font-sans">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60">
            <Link href="/" className="hover:text-[#eeaf33] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#eeaf33] transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#eeaf33] font-medium">{project.name}</span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#131c22] border border-[#eeaf33]/40 text-[#eeaf33] text-[11px] font-bold uppercase tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#eeaf33] animate-pulse" />
              {project.status || "Booking Open"}
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px] font-semibold uppercase tracking-wider">
              {project.category || "Luxury Residences"}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO HEADLINE & SHOWCASE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                {project.brandTagline || "Where Living Meets The Sky"}
              </span>
              <span className="h-px w-8 bg-[#eeaf33]" />
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-[0.08em] leading-[1.08] uppercase mb-3">
              {project.name}
            </h1>

            <p className="font-sans italic text-sm sm:text-base text-[#eeaf33] font-medium mb-4">
              {project.tagline || "Crown Your Life With Excellence"}
            </p>

            <p className="font-sans text-xs sm:text-sm text-white/80 font-normal leading-relaxed mb-6 max-w-xl">
              {project.description}
            </p>

            {/* Quick 4-Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#131c22]/80 border border-[#284153]/80 backdrop-blur-md mb-8">
              <div>
                <span className="block font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                  {project.units ? project.units.split(" ")[0] + " " + (project.units.split(" ")[1] || "") : "3 BHK"}
                </span>
                <span className="text-[10px] uppercase font-semibold text-white/60 tracking-wider font-sans">
                  Configuration
                </span>
              </div>

              <div>
                <span className="block font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                  G+6
                </span>
                <span className="text-[10px] uppercase font-semibold text-white/60 tracking-wider font-sans">
                  Signature Address
                </span>
              </div>

              <div>
                <span className="block font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                  24×7
                </span>
                <span className="text-[10px] uppercase font-semibold text-white/60 tracking-wider font-sans">
                  Security &amp; Water
                </span>
              </div>

              <div>
                <span className="block font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
                  Ready
                </span>
                <span className="text-[10px] uppercase font-semibold text-white/60 tracking-wider font-sans">
                  Possession
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSiteVisitModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#f5be47] transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Schedule Site Visit</span>
              </button>

              {project.videoUrl && (
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#eeaf33] text-[#eeaf33] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#eeaf33] hover:text-[#172027] transition-all cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Watch Walkthrough</span>
                </button>
              )}

              <a
                href="#brochure-section"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/20 text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Brochure Details</span>
              </a>
            </div>
          </div>

          {/* Right Main Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div
              onClick={() => setActiveLightboxImage(project.image || "/images/projects/skyconnect-7-crown.jpeg")}
              className="relative h-[400px] sm:h-[460px] md:h-[500px] w-full rounded-[2.2rem] overflow-hidden border-2 border-[#284153]/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)] cursor-pointer group"
              title="Click to zoom project render"
            >
              <Image
                src={project.image || "/images/projects/skyconnect-7-crown.jpeg"}
                alt={`${project.name} Architectural Render`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#172027]/85 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location || "Jaiprakash Nagar, Nagpur"}
                </span>
              </div>

              <div className="absolute top-5 right-5 p-2 rounded-full bg-[#172027]/80 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Bottom Card Ribbon */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#172027]/90 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs font-sans">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#eeaf33] tracking-widest block">
                    PROJECT ADDRESS
                  </span>
                  <span className="text-white font-medium">
                    {project.area || "Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar"}
                  </span>
                </div>
                <span className="text-[#eeaf33] font-bold text-sm tracking-wider">
                  NAGPUR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. KEY HIGHLIGHTS (PAGE 2 OF PDF) */}
        {/* ========================================================================= */}
        {project.keyHighlightsPillars && project.keyHighlightsPillars.length > 0 && (
          <div className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  CORE DISTINCTIONS
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
                Key Project Highlights
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/70 mt-2 font-normal">
                Engineered for refined comfort, enduring investment value, and daily convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyHighlightsPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#131c22]/80 border border-[#284153]/70 backdrop-blur-sm transition-all duration-300 hover:border-[#eeaf33]/60 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#eeaf33]/15 flex items-center justify-center text-[#eeaf33] font-mono text-sm font-bold group-hover:bg-[#eeaf33] group-hover:text-[#172027] transition-colors">
                      0{idx + 1}
                    </span>
                    <Sparkles className="h-4 w-4 text-[#eeaf33] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white mb-2 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-white/75 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. ARCHITECTURAL ELEVATIONS: FRONT & BACK NIGHT VIEWS (PAGE 3 OF PDF) */}
        {/* ========================================================================= */}
        {project.elevationViews && (
          <div className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  ARCHITECTURAL ELEVATIONS
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
                Night Front &amp; Back Perspectives
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/70 mt-2 font-normal">
                Sculpted illumination highlighting vertical structural fins and private cantilevered balconies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Front View */}
              <div
                onClick={() => setActiveLightboxImage(project.elevationViews!.front)}
                className="group relative rounded-3xl overflow-hidden border border-[#284153] bg-[#131c22] shadow-xl cursor-pointer"
              >
                <div className="relative h-[440px] sm:h-[500px] w-full">
                  <Image
                    src={project.elevationViews.front}
                    alt="7 Crown Night Front View"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#172027]/80 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                    NIGHT FRONT VIEW
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-xs text-white/80 font-sans">
                    <span className="text-[#eeaf33] font-bold block mb-0.5 text-sm font-sans">
                      Grand Ground Driveway &amp; Fin Facade
                    </span>
                    Illuminated multi-tier balconies and decorative vertical fins.
                  </div>
                </div>
              </div>

              {/* Back View */}
              {project.elevationViews.back && (
                <div
                  onClick={() => setActiveLightboxImage(project.elevationViews!.back!)}
                  className="group relative rounded-3xl overflow-hidden border border-[#284153] bg-[#131c22] shadow-xl cursor-pointer"
                >
                  <div className="relative h-[440px] sm:h-[500px] w-full">
                    <Image
                      src={project.elevationViews.back}
                      alt="7 Crown Night Back View"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#172027]/80 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                      NIGHT BACK VIEW
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 text-xs text-white/80 font-sans">
                      <span className="text-[#eeaf33] font-bold block mb-0.5 text-sm font-sans">
                        Rooftop Garden &amp; Stepped Terraces
                      </span>
                      Cascading open terraces and panoramic cross-ventilated bedroom balconies.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. FLOOR PLANS: 2D BLUEPRINT & 3D ISOMETRIC (PAGES 4 & 5 OF PDF) */}
        {/* ========================================================================= */}
        {project.floorPlans && (
          <div className="mb-20 sm:mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-px w-8 bg-[#eeaf33]" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                    SPATIAL ENGINEERING
                  </span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
                  Architectural Floor Plans
                </h2>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#131c22] border border-[#284153] font-sans text-xs">
                <button
                  type="button"
                  onClick={() => setActiveFloorPlanTab("2d")}
                  className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFloorPlanTab === "2d"
                      ? "bg-[#eeaf33] text-[#172027] shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Floor Map 2D
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFloorPlanTab("3d")}
                  className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFloorPlanTab === "3d"
                      ? "bg-[#eeaf33] text-[#172027] shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Isometric Map 3D
                </button>

                {project.floorPlans.parkingPlan && (
                  <button
                    type="button"
                    onClick={() => setActiveFloorPlanTab("parking")}
                    className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeFloorPlanTab === "parking"
                        ? "bg-[#eeaf33] text-[#172027] shadow-md"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Parking Plan
                  </button>
                )}
              </div>
            </div>

            {/* Plan Display Card */}
            <div className="rounded-3xl p-4 sm:p-6 lg:p-8 bg-[#131c22]/90 border border-[#284153] shadow-2xl mb-8">
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
                className="relative h-[320px] sm:h-[440px] md:h-[520px] w-full rounded-2xl overflow-hidden bg-white/5 cursor-pointer group flex items-center justify-center"
                title="Click to view full plan schematic"
              >
                <Image
                  src={
                    activeFloorPlanTab === "2d"
                      ? project.floorPlans.blueprint2D
                      : activeFloorPlanTab === "3d"
                      ? (project.floorPlans.isometric3D || project.floorPlans.blueprint2D)
                      : (project.floorPlans.parkingPlan || project.floorPlans.blueprint2D)
                  }
                  alt={`${project.name} ${activeFloorPlanTab.toUpperCase()} Plan`}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#172027]/80 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Spatial Dimension Breakdown Table (Page 4 of PDF) */}
            {project.floorPlans.dimensions && project.floorPlans.dimensions.length > 0 && (
              <div className="rounded-2xl p-6 bg-[#131c22]/70 border border-[#284153]">
                <h4 className="font-sans text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#eeaf33]" />
                  <span>Individual Space Dimensions &amp; Carpet Area Schedule</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-sans">
                  {project.floorPlans.dimensions.map((dim, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#172027] border border-[#284153]/60 transition-colors hover:border-[#eeaf33]/40"
                    >
                      <span className="block text-xs text-white/60 uppercase tracking-wider font-semibold">
                        {dim.space}
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-[#eeaf33] mt-1 font-mono">
                        {dim.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. CURATED GALLERY OF VIEWS (PAGE 6 OF PDF) */}
        {/* ========================================================================= */}
        {galleryItems.length > 0 && (
          <div className="mb-20 sm:mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-px w-8 bg-[#eeaf33]" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                    RESIDENCE WALKTHROUGH
                  </span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
                  Curated Gallery of Spaces
                </h2>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 font-sans text-xs">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedGalleryCategory(category)}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      selectedGalleryCategory === category
                        ? "bg-[#eeaf33] text-[#172027] font-bold shadow-md"
                        : "bg-[#131c22] border border-[#284153] text-white/70 hover:text-white"
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
                  className="group relative rounded-2xl overflow-hidden border border-[#284153] bg-[#131c22] h-64 sm:h-72 cursor-pointer shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#eeaf33] font-sans">
                    {item.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-sans text-xs">
                    <span className="font-sans font-bold text-sm text-white tracking-wide">
                      {item.title}
                    </span>
                    <Maximize2 className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#eeaf33]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 7. PREMIUM AMENITIES (PAGE 7 OF PDF) */}
        {/* ========================================================================= */}
        {project.amenitiesDetailed && project.amenitiesDetailed.length > 0 && (
          <div className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  ELEVATED LIFESTYLE
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
                Premium Project Amenities
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/70 mt-2 font-normal">
                Curated conveniences designed for seamless modern living and sustainability.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 font-sans">
              {project.amenitiesDetailed.map((amenity, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#131c22]/80 border border-[#284153]/70 transition-all duration-300 hover:border-[#eeaf33]/60 hover:-translate-y-1 flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eeaf33]/15 flex items-center justify-center text-[#eeaf33] shrink-0">
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
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {amenity}
                    </h4>
                    <span className="text-[10px] text-white/55 font-medium mt-0.5 block">
                      Included Specification
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 8. DETAILED SPECIFICATIONS (PAGE 7 OF PDF) */}
        {/* ========================================================================= */}
        {project.specificationsDetailed && project.specificationsDetailed.length > 0 && (
          <div className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  CONSTRUCTION QUALITY
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
                Technical Specifications
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/70 mt-2 font-normal">
                Transparent grade-of-material disclosure engineered for permanence and aesthetic refinement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              {project.specificationsDetailed.map((spec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#131c22]/80 border border-[#284153]/70"
                >
                  <h3 className="font-sans text-lg font-bold text-[#eeaf33] mb-3 flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{spec.category}</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-white/80 font-normal">
                    {spec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-[#eeaf33] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 9. LOCATION & CONNECTIVITY MAP (PAGE 8 OF PDF) */}
        {/* ========================================================================= */}
        {project.connectivityNodes && (
          <div className="mb-20 sm:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Distances Breakdown */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-px w-8 bg-[#eeaf33]" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                    STRATEGIC CORRIDOR
                  </span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4">
                  Distances That Connect
                </h2>
                <p className="font-sans text-xs sm:text-sm text-white/75 font-normal leading-relaxed mb-6">
                  Positioned in the prime residential hub of Jaiprakash Nagar, minutes from Wardha Road, metro stations, airport, and Nagpur&apos;s leading dining and retail centers.
                </p>

                {/* Radar Grid */}
                <div className="grid grid-cols-2 gap-3.5 font-sans mb-6">
                  {project.connectivityNodes.map((node, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#131c22] border border-[#284153] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <MapPin className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />
                        <span className="text-xs text-white truncate font-medium">
                          {node.destination}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#eeaf33] bg-[#eeaf33]/15 px-2 py-0.5 rounded-full shrink-0">
                        {node.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#131c22]/60 border border-white/10 text-xs text-white/70 font-sans">
                  <span className="text-[#eeaf33] font-bold block mb-1">
                    Key Transit Landmarks:
                  </span>
                  Somalwada Road Underpass · Manish Nagar Flyover · Radisson Blu Hotel · Ujjwal Nagar Metro Station.
                </div>
              </div>

              {/* Right Connectivity Map Card */}
              <div className="lg:col-span-6">
                <div
                  onClick={() =>
                    setActiveLightboxImage(
                      "/images/projects/skyconnect-7-crown/connectivity-map.jpg"
                    )
                  }
                  className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-[#284153] bg-[#131c22] cursor-pointer group shadow-2xl"
                  title="Click to view full connectivity map"
                >
                  <Image
                    src="/images/projects/skyconnect-7-crown/connectivity-map.jpg"
                    alt="SkyConnect 7 Crown Connectivity Transit Map"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-[#172027]/80 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 10. OFFICIAL CONTACT & SITE VISIT SCHEDULING (PAGE 8 OF PDF) */}
        {/* ========================================================================= */}
        <div
          id="brochure-section"
          className="rounded-[2.5rem] p-6 sm:p-10 lg:p-12 bg-[#131c22] border-2 border-[#284153] shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Contact Addresses */}
            <div className="lg:col-span-6">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold block mb-2">
                OFFICIAL CHANNEL DESK
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white mb-4">
                Schedule A Private Showing
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/75 font-normal leading-relaxed mb-6">
                Direct booking assistance, floor inventory inspection, and spot allotment support through Vision Square Infra.
              </p>

              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#172027] border border-white/10 flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#eeaf33] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#eeaf33] tracking-wider block">
                      SITE ADDRESS
                    </span>
                    <span className="text-white/90">
                      {project.contactInfo?.siteAddress ||
                        "7 CROWN, Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar, Nagpur – 440025"}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#172027] border border-white/10 flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-[#eeaf33] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#eeaf33] tracking-wider block">
                      CORPORATE OFFICE
                    </span>
                    <span className="text-white/90">
                      {project.contactInfo?.officeAddress ||
                        "2nd Floor, Slesha Apartment, 201, Near Airport, Karve Nagar, Nagpur, Maharashtra – 440025"}
                    </span>
                  </div>
                </div>

                {project.contactInfo?.phones && (
                  <div className="p-4 rounded-xl bg-[#172027] border border-white/10 flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#eeaf33] shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#eeaf33] tracking-wider block">
                        DIRECT HOTLINES
                      </span>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-white font-mono mt-1">
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
            <div className="lg:col-span-6 bg-[#172027] p-6 sm:p-8 rounded-3xl border border-[#284153]">
              <h3 className="font-sans text-xl font-bold text-white mb-1">
                Book A Private Site Consultation
              </h3>
              <p className="font-sans text-xs text-white/60 mb-5">
                Our luxury relationship manager will arrange personal viewing &amp; detailed brochure packet.
              </p>

              {formSubmitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-[#eeaf33] mx-auto mb-3" />
                  <h4 className="font-sans text-xl font-bold text-white mb-1">
                    Booking Request Confirmed
                  </h4>
                  <p className="font-sans text-xs text-white/70 max-w-xs mx-auto">
                    We have received your site visit request. Our private client team will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 font-sans">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#131c22] border border-[#284153] text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#eeaf33]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#131c22] border border-[#284153] text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#eeaf33]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#131c22] border border-[#284153] text-sm text-white focus:outline-none focus:border-[#eeaf33]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#131c22] border border-[#284153] text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#eeaf33]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#eeaf33] text-[#172027] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#f5be47] transition-all shadow-md cursor-pointer mt-2"
                  >
                    Confirm Private Site Visit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#131c22] border-2 border-[#284153] rounded-3xl overflow-hidden p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-white">
              <span className="font-sans font-bold text-lg text-white">
                {project.name} — High Resolution Schematic
              </span>
              <button
                type="button"
                onClick={() => setActiveLightboxImage(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative h-[70vh] w-full flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden">
              <Image
                src={activeLightboxImage}
                alt="Enlarged Visual"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIDEO TOUR MODAL */}
      {/* ========================================================================= */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#131c22] border-2 border-[#284153] rounded-3xl overflow-hidden p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-white">
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#eeaf33] block">
                  WALKTHROUGH TOUR
                </span>
                <h4 className="font-sans text-xl font-bold text-white">
                  {project.name} Video Tour
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
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
      {/* SITE VISIT SCHEDULING MODAL (POPUP) */}
      {/* ========================================================================= */}
      {isSiteVisitModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setIsSiteVisitModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#131c22] border-2 border-[#eeaf33]/40 rounded-[2rem] p-6 sm:p-8 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#eeaf33] block mb-1">
                  EXCLUSIVE SITE TOUR
                </span>
                <h4 className="font-sans text-2xl font-bold text-white">
                  {project.name}
                </h4>
                <p className="font-sans text-xs text-white/70 mt-0.5">
                  Book a private on-site inspection with our senior relationship manager.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSiteVisitModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center bg-[#172027] rounded-2xl border border-[#eeaf33]/40">
                <CheckCircle2 className="h-12 w-12 text-[#eeaf33] mx-auto mb-3" />
                <h5 className="font-sans text-xl font-bold text-white mb-1">
                  Site Visit Request Received
                </h5>
                <p className="font-sans text-xs text-white/70 max-w-xs mx-auto">
                  Our private client relationship team will get in touch shortly with confirmed appointment slot and directions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5 font-sans">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#172027] border border-[#284153] text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#eeaf33]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#172027] border border-[#284153] text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#eeaf33]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#172027] border border-[#284153] text-sm text-white focus:outline-none focus:border-[#eeaf33]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#f5be47] transition-all shadow-md cursor-pointer"
                  >
                    Confirm Site Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
