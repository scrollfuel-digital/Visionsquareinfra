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
  Dumbbell,
  Trees,
  Film,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import type { Project } from "@/types/project";

interface InfinityDetailViewProps {
  project: Project;
}

export default function InfinityDetailView({ project }: InfinityDetailViewProps) {
  // Tabs & Modal states
  const [activeFloorPlanTab, setActiveFloorPlanTab] = useState<"typical" | "terrace" | "parking">("typical");
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("All");
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
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
        "@id": "https://visionsquareinfra.com/projects/infinity-elegance#complex",
        name: "Infinity Elegance",
        alternateName: "Infinity Elegance 4 BHK Dhantoli",
        description:
          "Ultra-luxurious 4 BHK residential apartments in Dhantoli, Nagpur. Featuring contemporary wavy cantilevered architecture, hydraulic stack mechanical parking, and private rooftop sky amenities.",
        url: "https://visionsquareinfra.com/projects/infinity-elegance",
        telephone: "+91-8989-666-888",
        image: "https://visionsquareinfra.com/images/projects/infinity-elegance/elevation-tower.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. 40, Tikekar Road",
          addressLocality: "Dhantoli",
          addressRegion: "Nagpur, Maharashtra",
          postalCode: "440012",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.1342",
          longitude: "79.0822",
        },
        numberOfBedrooms: "4",
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Rooftop Sky Gymnasium", value: true },
          { "@type": "LocationFeatureSpecification", name: "Hydraulic Stack Mechanical Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Rooftop Gazebo & Lounge", value: true },
          { "@type": "LocationFeatureSpecification", name: "Open-Air Cinema with Projector", value: true },
          { "@type": "LocationFeatureSpecification", name: "Biometric Digital Lock", value: true },
          { "@type": "LocationFeatureSpecification", name: "EV Charging Station", value: true },
          { "@type": "LocationFeatureSpecification", name: "Solar Electricity for Common Lighting", value: true },
          { "@type": "LocationFeatureSpecification", name: "24x7 Security & CCTV", value: true },
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
            name: "Infinity Elegance",
            item: "https://visionsquareinfra.com/projects/infinity-elegance",
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
            <span className="text-[#eeaf33] font-medium">Infinity Elegance</span>
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
              href="/documents/infinity-elegance-brochure.pdf"
              download="Infinity-Elegance-Brochure.pdf"
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
              {/* Badge & Developer Tag */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eeaf33]/15 border border-[#eeaf33]/40 text-[#172027] text-xs font-bold uppercase tracking-widest font-sans">
                  <Sparkles className="h-3 w-3 text-[#eeaf33]" />
                  BOOKING OPEN
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#284153]/15 text-[#172027]/80 text-xs font-medium uppercase tracking-wider font-sans shadow-sm">
                  4 BHK Ultra-Luxurious Apartments
                </span>
                <span className="px-3 py-1 rounded-full bg-[#284153]/10 text-[#172027] text-xs font-medium font-sans">
                  By BIRDHOUSE REAL ESTATE
                </span>
              </div>

              {/* Eyebrow & Main Title */}
              <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#eeaf33] uppercase mb-2">
                LUXURY, REDEFINED FOR THE MODERN YOU
              </p>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#172027] mb-4">
                Infinity Elegance
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed max-w-2xl font-normal">
                {project.description}
              </p>
            </div>

            {/* Quick Specs & Direct CTAs */}
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
                Plot 40, Tikekar Rd, Dhantoli
              </p>
              <span className="text-[11px] text-[#172027]/60">Central Nagpur</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Home className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Configuration
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">
                4 BHK Ultra-Luxury
              </p>
              <span className="text-[11px] text-[#172027]/60">One Flat Per Floor Ambience</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Car className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Parking
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">
                Hydraulic Stack Parking
              </p>
              <span className="text-[11px] text-[#172027]/60">Allotted 4-Wheeler & 2-Wheeler</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#284153]/15 shadow-sm">
              <div className="flex items-center gap-2 text-[#eeaf33] mb-1">
                <Dumbbell className="h-4 w-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#172027]/60">
                  Rooftop Haven
                </span>
              </div>
              <p className="font-sans text-sm font-bold text-[#172027]">
                Sky Gym & Cinema
              </p>
              <span className="text-[11px] text-[#172027]/60">32' × 17' Gym, Gazebo & Fountain</span>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* 3. ARCHITECTURAL SHOWCASE: WAVY CANTILEVERED FACADE (PAGE 2 OF PDF) */}
        {/* ========================================================================= */}
        <section aria-labelledby="architecture-heading" className="mb-20 sm:mb-24">
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image side with zoom trigger */}
              <div
                onClick={() => setActiveLightboxImage("/images/projects/infinity-elegance/elevation-tower.jpg")}
                className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-[#284153]/15 bg-[#172027] h-[480px] sm:h-[560px] cursor-pointer shadow-lg"
              >
                <Image
                  src="/images/projects/infinity-elegance/elevation-tower.jpg"
                  alt="Infinity Elegance 4 BHK Ultra-Luxurious Tower Elevation Dhantoli"
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
                    Signature Wavy Balconies & Terraces
                  </span>
                  Contemporary wooden-finish soffits, acoustic glass balustrades & decorative vertical fins.
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-[#eeaf33]" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                    SIGNATURE ARCHITECTURE
                  </span>
                </div>

                <h2 id="architecture-heading" className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#172027] leading-tight">
                  Curvilinear Elegance Beyond Convention
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed font-normal">
                  Infinity Elegance introduces a bold sculptural statement to Dhantoli’s historic skyline. Designed with sweeping organic wave balconies, expansive floor-to-ceiling French windows, and natural wood-textured deck ceilings, the facade effortlessly marries modern architectural minimalism with warm residential intimacy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="font-sans text-2xl font-bold text-[#172027] block mb-1">
                      26'2" Decks
                    </span>
                    <p className="font-sans text-xs text-[#172027]/70">
                      Alternate floor cascading decks offering open-sky panoramic cross-ventilation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="font-sans text-2xl font-bold text-[#172027] block mb-1">
                      Lintel-less
                    </span>
                    <p className="font-sans text-xs text-[#172027]/70">
                      Heightened ceilings and lintel-less openings maximizing natural sunlight.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFloorPlanTab("typical");
                      const el = document.getElementById("floor-plans-section");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#eeaf33] hover:text-[#DE9F20] transition-colors cursor-pointer"
                  >
                    <span>Inspect 4 BHK Layout Blueprint</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SIX PILLARS OF EXCELLENCE */}
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
        {/* 5. INTERIOR SHOWCASE: DRAWING HALL & MASTER BEDROOM (PAGES 3 & 7 OF PDF) */}
        {/* ========================================================================= */}
        <section aria-labelledby="interior-heading" className="mb-20 sm:mb-24 space-y-12">
          {/* Drawing Hall Block */}
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGE 03 • LIVING SUITE
                </span>
                <h2 id="interior-heading" className="font-sans text-2xl sm:text-3xl font-bold uppercase text-[#172027] leading-tight">
                  A Luxurious Drawing Hall Designed to Impress Every Moment
                </h2>
                <blockquote className="font-sans text-xs sm:text-sm text-[#172027]/75 leading-relaxed font-normal italic border-l-2 border-[#eeaf33] pl-4">
                  "Experience a luxurious drawing hall where elegance and comfort come together effortlessly. Spacious layouts, premium finishes, and sophisticated décor create an inviting atmosphere for meaningful gatherings. This hall is thoughtfully designed to impress guests while offering a warm and refined space for your everyday living. It reflects a lifestyle of class, style, and absolute comfort, making every moment at home feel truly special."
                </blockquote>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#284153]/15 text-[11px] font-sans text-[#172027]">
                    26'2" × 17'0" Expansive Space
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#284153]/15 text-[11px] font-sans text-[#172027]">
                    800 × 1600mm Vitrified Tiles
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#284153]/15 text-[11px] font-sans text-[#172027]">
                    Direct Deck Connection
                  </span>
                </div>
              </div>

              <div
                onClick={() => setActiveLightboxImage("/images/projects/infinity-elegance/gallery-drawing-hall.jpg")}
                className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-slate-200 h-[340px] sm:h-[420px] cursor-pointer shadow-lg"
              >
                <Image
                  src="/images/projects/infinity-elegance/gallery-drawing-hall.jpg"
                  alt="Infinity Elegance Luxurious Drawing Hall Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                  <Maximize2 className="h-4 w-4" />
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-sans text-white/90">
                  <span className="text-[#eeaf33] font-bold block font-sans text-sm">
                    Grand Living & Dining Architecture
                  </span>
                  Designer chandelier, marble accent media wall & seamless foyer connectivity.
                </div>
              </div>
            </div>
          </div>

          {/* Master Bedroom Block */}
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div
                onClick={() => setActiveLightboxImage("/images/projects/infinity-elegance/gallery-master-bedroom.jpg")}
                className="lg:col-span-7 order-2 lg:order-1 group relative rounded-2xl overflow-hidden border border-slate-200 h-[340px] sm:h-[420px] cursor-pointer shadow-lg"
              >
                <Image
                  src="/images/projects/infinity-elegance/gallery-master-bedroom.jpg"
                  alt="Infinity Elegance Master Bedroom Suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                  <Maximize2 className="h-4 w-4" />
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-sans text-white/90">
                  <span className="text-[#eeaf33] font-bold block font-sans text-sm">
                    Master Suite Sanctuary
                  </span>
                  Wooden textured flooring, ambient coved lighting & private balcony retreat.
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGE 07 • MASTER SUITE
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold uppercase text-[#172027] leading-tight">
                  Where Comfort Turns Into Elegance
                </h2>
                <blockquote className="font-sans text-xs sm:text-sm text-[#172027]/75 leading-relaxed font-normal italic border-l-2 border-[#eeaf33] pl-4">
                  "Step into a bedroom that blends soothing comfort with refined elegance. Every detail is designed to enhance relaxation while showcasing a sophisticated style that elevates your everyday living. From premium finishes to thoughtfully curated lighting and layouts, this space creates a peaceful atmosphere where luxury feels natural. It is more than a bedroom. It is your personal escape, crafted to offer both beauty and comfort in perfect balance."
                </blockquote>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#284153]/15 text-[11px] font-sans text-[#172027]">
                    14'6" × 17'5" Suite
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#284153]/15 text-[11px] font-sans text-[#172027]">
                    10'2" × 6'0" Walk-in Closet
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#284153]/15 text-[11px] font-sans text-[#172027]">
                    19'0" Private Deck
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. ADVANCED STACK MECHANICAL PARKING (PAGE 4 OF PDF) */}
        {/* ========================================================================= */}
        <section aria-labelledby="parking-heading" className="mb-20 sm:mb-24">
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-12 shadow-md relative">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  INNOVATIVE VEHICLE MANAGEMENT • PAGE 04
                </span>
              </div>
              <h2 id="parking-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Elevate Your Space. Simplify Your Parking
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/75 leading-relaxed mt-3 font-normal">
                "Our stack parking systems make space management smarter, seamless, and sustainable. Stack Parking is an innovative vertical parking system designed to maximize parking capacity within limited space. By utilizing hydraulic or mechanical lifts, vehicles are efficiently stacked one above the other, eliminating the need for large parking areas."
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Parking Plan Blueprint */}
              <div
                onClick={() => setActiveLightboxImage("/images/projects/infinity-elegance/plan-ground-parking.jpg")}
                className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#FAF9F5] p-4 h-[380px] sm:h-[460px] cursor-pointer shadow-sm flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/projects/infinity-elegance/plan-ground-parking.jpg"
                    alt="Infinity Elegance Ground Floor Mechanical Parking Plan"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#172027]/90 text-[#eeaf33] text-xs font-bold font-sans">
                  GROUND FLOOR PLAN
                </div>
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-[#172027]/80 text-white">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Facade Line Sketch & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div
                  onClick={() => setActiveLightboxImage("/images/projects/infinity-elegance/sketch-facade-elevation.jpg")}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#FAF9F5] p-4 h-[240px] sm:h-[280px] cursor-pointer shadow-sm flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/projects/infinity-elegance/sketch-facade-elevation.jpg"
                      alt="Infinity Elegance Architectural Elevation Sketch"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#172027]/90 text-[#eeaf33] text-[11px] font-bold font-sans">
                    ENTRANCE ELEVATION
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                  <div className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="text-[#172027] font-bold block mb-1">9M Wide Road</span>
                    <span className="text-[#172027]/70">Broad entrance gateway for effortless vehicular turning radius.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="text-[#172027] font-bold block mb-1">Hydraulic Lifts</span>
                    <span className="text-[#172027]/70">Quiet, automated vertical stacking doubling parking bay capacity.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="text-[#172027] font-bold block mb-1">Direct Lift Access</span>
                    <span className="text-[#172027]/70">Lift core (1650 × 1850) connected to secure lobby (10'0" × 5'5").</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#284153]/10">
                    <span className="text-[#172027] font-bold block mb-1">2-Wheeler Zones</span>
                    <span className="text-[#172027]/70">Dedicated allotted two-wheeler bays and EV charging points.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. ARCHITECTURAL FLOOR PLANS & SPATIAL DIMENSIONS (PAGES 5 & 6 OF PDF) */}
        {/* ========================================================================= */}
        <section id="floor-plans-section" aria-labelledby="plans-heading" className="mb-20 sm:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGES 05 & 06 • ENGINEERING BLUEPRINTS
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
                onClick={() => setActiveFloorPlanTab("typical")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFloorPlanTab === "typical"
                    ? "bg-[#172027] text-white shadow-sm"
                    : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Typical 1st–7th Floor (4 BHK)
              </button>

              <button
                type="button"
                onClick={() => setActiveFloorPlanTab("terrace")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFloorPlanTab === "terrace"
                    ? "bg-[#172027] text-white shadow-sm"
                    : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Terrace &amp; Sky Gym Plan
              </button>

              <button
                type="button"
                onClick={() => setActiveFloorPlanTab("parking")}
                className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFloorPlanTab === "parking"
                    ? "bg-[#172027] text-white shadow-sm"
                    : "text-[#172027]/70 hover:text-[#172027]"
                }`}
              >
                Ground &amp; Parking Plan
              </button>
            </div>
          </div>

          {/* Plan Display Card */}
          <div className="rounded-3xl p-4 sm:p-6 lg:p-8 bg-white border border-[#284153]/15 shadow-md mb-8">
            <div
              onClick={() =>
                setActiveLightboxImage(
                  activeFloorPlanTab === "typical"
                    ? "/images/projects/infinity-elegance/plan-typical-floor.jpg"
                    : activeFloorPlanTab === "terrace"
                    ? "/images/projects/infinity-elegance/plan-terrace-floor.jpg"
                    : "/images/projects/infinity-elegance/plan-ground-parking.jpg"
                )
              }
              className="group relative rounded-2xl overflow-hidden bg-[#FAF9F5] border border-slate-200 cursor-pointer min-h-[500px] sm:min-h-[640px] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="relative w-full h-[500px] sm:h-[640px]">
                <Image
                  src={
                    activeFloorPlanTab === "typical"
                      ? "/images/projects/infinity-elegance/plan-typical-floor.jpg"
                      : activeFloorPlanTab === "terrace"
                      ? "/images/projects/infinity-elegance/plan-terrace-floor.jpg"
                      : "/images/projects/infinity-elegance/plan-ground-parking.jpg"
                  }
                  alt={`Infinity Elegance ${activeFloorPlanTab} plan blueprint`}
                  fill
                  priority
                  className="object-contain transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#172027]/90 backdrop-blur-md border border-[#eeaf33]/40 text-[#eeaf33] text-xs font-bold uppercase tracking-wider font-sans">
                {activeFloorPlanTab === "typical"
                  ? "TYPICAL 1ST TO 7TH FLOOR PLAN (4 BHK)"
                  : activeFloorPlanTab === "terrace"
                  ? "TERRACE & ROOFTOP AMENITIES FLOOR PLAN"
                  : "GROUND FLOOR & MECHANICAL STACK PARKING PLAN"}
              </div>

              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 text-white/90 text-xs font-sans">
                <Maximize2 className="h-3.5 w-3.5 text-[#eeaf33]" />
                <span>Click to Enlarge</span>
              </div>
            </div>
          </div>

          {/* 16-Zone Spatial Dimension Matrix Table */}
          {project.floorPlans?.dimensions && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#284153]/15 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#284153]/15">
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wider text-[#172027]">
                    Verbatim Spatial Dimension Schedule
                  </h3>
                  <p className="font-sans text-xs text-[#172027]/70 mt-1">
                    Authentic room measurements from Infinity Elegance architectural blueprints.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-[#eeaf33]">
                  <Compass className="h-4 w-4" />
                  <span className="text-[#172027]">North-South Optimized Cross-Ventilation</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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

        {/* ========================================================================= */}
        {/* 8. ROOFTOP SPARKLING AMENITIES & RECREATION (PAGE 8 OF PDF) */}
        {/* ========================================================================= */}
        <section aria-labelledby="amenities-heading" className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                PAGE 08 • RECREATION HAVEN
              </span>
              <span className="h-px w-8 bg-[#eeaf33]" />
            </div>
            <h2 id="amenities-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
              Rooftop Sparkling Amenities
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
              An exclusive rooftop retreat crafted for wellness, serene social gatherings, and skyline views.
            </p>
          </div>

          {/* 8 Photo Amenity Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {[
              { title: "Gymnasium", sub: "32' × 17' Fitness Suite", img: "/images/projects/infinity-elegance/amenity-gymnasium.jpg" },
              { title: "Gazebo", sub: "Shaded Sky Lounge", img: "/images/projects/infinity-elegance/amenity-gazebo.jpg" },
              { title: "Rooftop Garden", sub: "Lush Sky Greenery", img: "/images/projects/infinity-elegance/amenity-rooftop-garden.jpg" },
              { title: "Walking Track", sub: "Perimeter Jogging", img: "/images/projects/infinity-elegance/amenity-walking-track.jpg" },
              { title: "Yoga Sitting Space", sub: "Meditation Zone", img: "/images/projects/infinity-elegance/amenity-yoga.jpg" },
              { title: "Rooftop Celebration", sub: "Party & Social Deck", img: "/images/projects/infinity-elegance/amenity-celebration.jpg" },
              { title: "Senior Citizen Seat Out", sub: "Peaceful Pavilion", img: "/images/projects/infinity-elegance/amenity-senior-citizen.jpg" },
              { title: "Beautiful Fountain", sub: "Artistic Water Feature", img: "/images/projects/infinity-elegance/amenity-fountain.jpg" },
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

          {/* Infrastructure & Security Grid */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#284153]/15 shadow-md">
            <h3 className="font-sans text-lg sm:text-xl font-bold uppercase text-[#172027] mb-6">
              Smart Infrastructure &amp; Security Highlights
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/10">
                <Video className="h-6 w-6 text-[#eeaf33] mx-auto mb-2" />
                <span className="font-sans text-xs font-bold text-[#172027] block">Video Door Bell</span>
                <span className="text-[10px] text-[#172027]/60">Biometric Intercom</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/10">
                <ShieldCheck className="h-6 w-6 text-[#eeaf33] mx-auto mb-2" />
                <span className="font-sans text-xs font-bold text-[#172027] block">24 Hrs Security</span>
                <span className="text-[10px] text-[#172027]/60">CCTV Surveillance</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/10">
                <Zap className="h-6 w-6 text-[#eeaf33] mx-auto mb-2" />
                <span className="font-sans text-xs font-bold text-[#172027] block">Power Backup</span>
                <span className="text-[10px] text-[#172027]/60">DG Generator Set</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/10">
                <Car className="h-6 w-6 text-[#eeaf33] mx-auto mb-2" />
                <span className="font-sans text-xs font-bold text-[#172027] block">EV Charging</span>
                <span className="text-[10px] text-[#172027]/60">Dedicated Stations</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/10">
                <Droplets className="h-6 w-6 text-[#eeaf33] mx-auto mb-2" />
                <span className="font-sans text-xs font-bold text-[#172027] block">Rainwater</span>
                <span className="text-[10px] text-[#172027]/60">Harvesting System</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/10">
                <Sun className="h-6 w-6 text-[#eeaf33] mx-auto mb-2" />
                <span className="font-sans text-xs font-bold text-[#172027] block">Solar Power</span>
                <span className="text-[10px] text-[#172027]/60">Common Lighting</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. VISUAL GALLERY */}
        {/* ========================================================================= */}
        <section aria-labelledby="gallery-heading" className="mb-20 sm:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  CURATED PORTFOLIO
                </span>
              </div>
              <h2 id="gallery-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Visual Experience Gallery
              </h2>
            </div>

            {/* Category Filter Pills */}
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

        {/* ========================================================================= */}
        {/* 10. TECHNICAL SPECIFICATIONS (PAGE 9 OF PDF) */}
        {/* ========================================================================= */}
        {project.specificationsDetailed && (
          <section aria-labelledby="specs-heading" className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGE 09 • ENGINEERING STANDARDS
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="specs-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Construction Specifications
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Authentic construction standards, premium brand certifications, and technical fittings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

            {/* Note footnote from brochure */}
            <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/15 text-xs font-sans text-[#172027]/70">
              <span className="text-[#eeaf33] font-bold uppercase tracking-wider mr-2">Official Note:</span>
              Extra charges for M.S.E.B. Network, Stamp Duty & Registration charges. GST as applicable. Extra work will be done with extra payment in advance.
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 11. LOCATION PLAN & STRATEGIC CONNECTIVITY (PAGE 10 OF PDF) */}
        {/* ========================================================================= */}
        <section aria-labelledby="location-heading" className="mb-20 sm:mb-24">
          <div className="rounded-3xl border border-[#284153]/15 bg-white p-6 sm:p-8 lg:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#eeaf33]" />
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
                  PAGE 10 • DHANTOLI CONNECTIVITY
                </span>
                <span className="h-px w-8 bg-[#eeaf33]" />
              </div>
              <h2 id="location-heading" className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#172027]">
                Location Plan &amp; Transit Radar
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#172027]/70 mt-2 font-normal">
                Situated at Plot No. 40, Tikekar Road, Dhantoli, Nagpur — in the epicentre of healthcare, green parks, and transit corridors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              {/* Location Map Visual */}
              <div
                onClick={() => setActiveLightboxImage("/images/projects/infinity-elegance/location-map.jpg")}
                className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#FAF9F5] p-4 h-[400px] sm:h-[480px] cursor-pointer shadow-sm flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/projects/infinity-elegance/location-map.jpg"
                    alt="Infinity Elegance Dhantoli Location Map"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#172027]/90 text-[#eeaf33] text-xs font-bold font-sans">
                  DHANTOLI LOCATION PLAN
                </div>
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-[#172027]/80 text-white">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Transit Nodes Grid */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#284153]/10 flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 bg-white p-1 rounded-xl shadow-sm border border-slate-200">
                    <Image
                      src="/images/projects/infinity-elegance/qr-code-location.jpg"
                      alt="Scan for Location QR"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-sans text-sm font-bold text-[#172027] block">
                      Scan for GPS Location
                    </span>
                    <span className="text-xs font-sans text-[#172027]/60 block">
                      Plot 40, Tikekar Road, Dhantoli, Nagpur
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { destination: "Dhantoli Garden", time: "1 Min" },
                    { destination: "Spandan & Shankara Hospital", time: "2 Min" },
                    { destination: "Dinanath High School", time: "2 Min" },
                    { destination: "Wardha Road Arterial Link", time: "2 Min" },
                    { destination: "Lokmat Square & Central Bazar", time: "3 Min" },
                    { destination: "Hotel Centre Point & Tuli Imperial", time: "3 Min" },
                    { destination: "Congress Nagar T-Point & SBI", time: "3 Min" },
                    { destination: "Ajni Railway Station", time: "4 Min" },
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

                <a
                  href="https://maps.google.com/?q=Plot+No.+40,+Tikekar+Road,+Dhantoli,+Nagpur+-+440+012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#172027] hover:bg-[#284153] text-white transition-all text-xs font-bold uppercase tracking-wider font-sans shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Developer Card (Birdhouse Real Estate) */}
            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#284153]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#eeaf33] font-bold font-sans block mb-1">
                  A PROJECT BY
                </span>
                <h4 className="font-sans text-xl font-bold text-[#172027]">
                  BIRDHOUSE REAL ESTATE
                </h4>
                <p className="text-xs font-sans text-[#172027]/60 mt-1">
                  Shreedhar Apartment, Dhantoli, Nagpur - 440 012
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

        {/* ========================================================================= */}
        {/* 12. BOTTOM LEAD CAPTURE & SITE VISIT MODAL */}
        {/* ========================================================================= */}
        <section aria-labelledby="cta-heading" className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-white border-2 border-[#eeaf33]/40 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#eeaf33]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-[#eeaf33]/20 border border-[#eeaf33]/50 text-[#172027] text-xs font-bold uppercase tracking-widest font-sans inline-block">
              RESERVE YOUR PRIVATE EXPERIENCE
            </span>

            <h2 id="cta-heading" className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#172027] tracking-wide">
              Crown Your Life With Infinity Elegance
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#172027]/75 leading-relaxed font-normal">
              Book a personalized walkthrough of the 4 BHK show suite, inspect the mechanical stack parking, and preview the 32-ft sky gym.
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
                href="/documents/infinity-elegance-brochure.pdf"
                download="Infinity-Elegance-Brochure.pdf"
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
              alt="Infinity Elegance Preview"
              fill
              className="object-contain"
            />
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
                  Thank you, <span className="text-[#eeaf33] font-bold">{formData.name}</span>. Our sales manager for Infinity Elegance will contact you shortly on {formData.phone}.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#eeaf33] font-bold block mb-1">
                    EXCLUSIVE 4 BHK SHOWCASE
                  </span>
                  <h3 id="modal-title" className="font-sans text-2xl font-bold text-[#172027]">
                    Schedule a Site Visit
                  </h3>
                  <p className="font-sans text-xs text-[#172027]/60 mt-1">
                    Plot No. 40, Tikekar Road, Dhantoli, Nagpur
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
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="rahul@example.com"
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
                    By submitting, you agree to receive official project updates from Vision Square Infrastructure & Birdhouse Real Estate.
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
