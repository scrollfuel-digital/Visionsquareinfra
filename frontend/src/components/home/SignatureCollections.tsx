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
  Volume2,
  VolumeX,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * Types & Interfaces
 * ------------------------------------------------------------------------- */
interface ShowcaseSpec {
  value: string;
  label: string;
}

interface ShowcaseChip {
  value: string;
  label: string;
}

interface ShowcaseProject {
  id: string;
  tagBadge: string;
  locationBadge: string;
  titlePrimary: string;
  titleSecondary?: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  videoCard: {
    videoSrc?: string;
    imageSrc?: string;
    videoBadge: string;
    tagText: string;
  };
  specs: [ShowcaseSpec, ShowcaseSpec, ShowcaseSpec, ShowcaseSpec];
  externalLink?: string;
  exploreButtonText: string;

  // Modal Info
  modalTitle: string;
  modalAddress: string;
  chips: [ShowcaseChip, ShowcaseChip, ShowcaseChip, ShowcaseChip];
  highlights: [string, string, string];

  // Video Modal Specifics
  videoModalType: "crown-dual" | "waman-youtube" | "preview-card";
  videoModalHeading: string;
  videoModalFeatures?: string;
  videoModalSubline?: string;
  videoModalDescription?: string;
  videoModalLocation?: string;
}

interface SignatureCollectionsProps {
  className?: string;
}

/* -------------------------------------------------------------------------
 * Showcase Projects Configuration Data
 * ------------------------------------------------------------------------- */
const showcaseProjects: ShowcaseProject[] = [
  {
    id: "crown",
    tagBadge: "SIGNATURE ADDRESS",
    locationBadge: "JAIPRAKASH NAGAR · NAGPUR",
    titlePrimary: "7CROWN",
    titleSecondary: "~ SKYCONNECT",
    tagline: "More than a home. A signature way of living.",
    description:
      "A premium 3 BHK residential address designed around spacious living, refined finishes, smart security and contemporary lifestyle amenities.",
    image: "/images/projects/skyconnect-7-crown.jpeg",
    imageAlt:
      "SkyConnect 7 Crown - Luxury Residential Address in Jaiprakash Nagar, Nagpur",
    videoCard: {
      videoSrc: "/videos/SKY%20connect.mp4",
      videoBadge: "2 VIDEOS",
      tagText: "Tour",
    },
    specs: [
      { value: "3", label: "BHK PREMIUM HOMES" },
      { value: "01", label: "SIGNATURE ADDRESS" },
      { value: "24×7", label: "SECURITY & WATER" },
      { value: "01", label: "ROOFTOP GARDEN" },
    ],
    externalLink:
      "https://visioninfraprojects.com/projects/skyconnect-7-crown#enquire",
    exploreButtonText: "EXPLORE 7 CROWN",
    modalTitle: "SKYCONNECT 7 CROWN",
    modalAddress: "Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar, Nagpur",
    chips: [
      { value: "3 BHK", label: "Premium Homes" },
      { value: "01", label: "Signature Address" },
      { value: "24×7", label: "Security & Water" },
      { value: "01", label: "Rooftop Garden" },
    ],
    highlights: [
      "Spacious 3 BHK layouts planned for optimum natural ventilation and privacy.",
      "Dedicated covered parking with automated entry and smart surveillance.",
      "Curated rooftop garden with sit-outs and 360-degree city views.",
    ],
    videoModalType: "crown-dual",
    videoModalHeading: "SkyConnect 7 Crown · Video Tour",
  },
  {
    id: "amara",
    tagBadge: "6 TOWERS · 14–16 FLOORS",
    locationBadge: "PYRAMID GROUP · BESA–PIPLA ROAD, NAGPUR",
    titlePrimary: "PYRAMID",
    titleSecondary: "AMARA",
    tagline: "Premium living on Besa–Pipla Road.",
    description:
      "A grand ~6-acre premium gated township featuring 6 high-rise towers rising 14–16 floors. Thoughtfully planned 2 & 3 BHK residences with RERA approval.",
    image: "/images/projects/pyramid-amara.jpg",
    imageAlt:
      "Pyramid Amara - Premium 2 & 3 BHK High-Rise Township in Besa-Pipla Road, Nagpur",
    videoCard: {
      imageSrc: "/images/projects/skyconnect-penthouse.jpg",
      videoBadge: "VIDEO",
      tagText: "Tour",
    },
    specs: [
      { value: "~6 Acres", label: "TOTAL AREA" },
      { value: "6 Towers", label: "TOWERS" },
      { value: "14-16 Floors", label: "FLOORS" },
      { value: "2 & 3 BHK", label: "CONFIG" },
    ],
    exploreButtonText: "EXPLORE AMARA",
    modalTitle: "PYRAMID AMARA",
    modalAddress: "Besa–Pipla Road, Nagpur • ~6 Acres Gated Township",
    chips: [
      { value: "~6 Acres", label: "Total Area" },
      { value: "6 Towers", label: "Towers" },
      { value: "14–16", label: "Floors" },
      { value: "2 & 3 BHK", label: "Config" },
    ],
    highlights: [
      "Premium gated township on Besa–Pipla Road with comprehensive clubhouse amenities.",
      "RERA approved project with clear approvals, spot documentation, and high ROI corridor.",
      "6 grand towers rising 14–16 floors with double-height designer entrance lobbies.",
    ],
    videoModalType: "preview-card",
    videoModalHeading: "Pyramid Amara · 6 Towers High-Rise Township",
    videoModalFeatures: "~6 Acres Gated Township · 14–16 Floors",
    videoModalSubline: "2 & 3 BHK High-Rise Homes",
    videoModalDescription:
      "Grand clubhouse, landscaped central garden, multi-tier security, and unmatched connectivity on Besa–Pipla Road.",
    videoModalLocation: "Besa–Pipla Road",
  },
  {
    id: "skyjoy",
    tagBadge: "INDIA'S FIRST WATERFRONT PLOTS",
    locationBadge: "HOABL · MAHARERA PP1190002502095",
    titlePrimary: "SKY JOY",
    tagline: "Where luxury meets the waterfront.",
    description:
      "India's first luxury waterfront plotted development featuring a ~3-acre man-made beach, wave pool, and grand 28,000 sq. ft. clubhouse.",
    image: "/images/projects/vision-imperial.jpg",
    imageAlt:
      "Sky Joy - India's First Waterfront Plots in Mondha, Hingna, South Nagpur",
    videoCard: {
      imageSrc: "/images/projects/neralu-lake-inset.jpg",
      videoBadge: "VIDEO",
      tagText: "Beach Tour",
    },
    specs: [
      { value: "~78 Acres", label: "TOTAL AREA" },
      { value: "918", label: "TOTAL PLOTS" },
      { value: "28,000 sq.ft", label: "CLUBHOUSE" },
      { value: "~3 Acres", label: "BEACH & POOL" },
    ],
    exploreButtonText: "EXPLORE SKY JOY",
    modalTitle: "SKY JOY · WATERFRONT PLOTS",
    modalAddress: "Mondha, Hingna, South Nagpur • MahaRERA PP1190002502095",
    chips: [
      { value: "~78 Acres", label: "Total Area" },
      { value: "918", label: "Total Plots" },
      { value: "28,000 sq.ft", label: "Clubhouse" },
      { value: "~3 Acres", label: "Beach & Pool" },
    ],
    highlights: [
      "India's first luxury waterfront plots with 40+ world-class lifestyle amenities.",
      "Exclusive ~3-acre man-made beach, wave pool, and lakeside walking promenade.",
      "MahaRERA registered (PP1190002502095) with immediate registration and clear title guarantee.",
    ],
    videoModalType: "preview-card",
    videoModalHeading:
      "Sky Joy · India's First Waterfront Plotted Development",
    videoModalFeatures: "~78 Acres Waterfront Plotted Development",
    videoModalSubline: "India's First Waterfront Plots",
    videoModalDescription:
      "~3-acre man-made beach and wave pool with a grand 28,000 sq.ft clubhouse and 40+ world-class lifestyle amenities.",
    videoModalLocation: "Mondha, Hingna, South Nagpur",
  },
  {
    id: "waman",
    tagBadge: "SIGNATURE ADDRESS",
    locationBadge:
      "BESA PIPLA ROAD, BESIDE JAYANTI NAGARI 7 · PIPLA, NAGPUR",
    titlePrimary: "SACCHIDANAND",
    titleSecondary: "~ WAMAN NAGRI",
    tagline:
      "A luxurious residential haven designed for comfort, elegance, and convenience.",
    description:
      "A premium residential project offering thoughtfully designed 2 & 3 BHK luxury flats with modern amenities, excellent connectivity, and a blend of comfort and elegance in Pipla, Nagpur.",
    image: "/images/projects/sacchidanand-waman-nagri.jpeg",
    imageAlt:
      "Sacchidanand Waman Nagri - 2 & 3 BHK Luxury Flats in Besa Pipla Road, Nagpur",
    videoCard: {
      imageSrc: "/images/projects/sacchidanand-waman-nagri.jpeg",
      videoBadge: "VIDEO",
      tagText: "Tour",
    },
    specs: [
      { value: "2 & 3", label: "BHK LUXURY FLATS" },
      { value: "01", label: "SIGNATURE ADDRESS" },
      { value: "24×7", label: "SECURITY & POWER BACKUP" },
      { value: "01", label: "ROOFTOP GARDEN" },
    ],
    exploreButtonText: "EXPLORE WAMAN NAGRI",
    modalTitle: "SACCHIDANAND WAMAN NAGRI",
    modalAddress: "Besa Pipla Road, Beside Jayanti Nagari 7, Pipla, Nagpur",
    chips: [
      { value: "2 & 3 BHK", label: "Luxury Flats" },
      { value: "Club & Pool", label: "Modern Amenities" },
      { value: "24×7", label: "CCTV & Backup" },
      { value: "Prime", label: "Besa Pipla Road" },
    ],
    highlights: [
      "Thoughtfully designed 2 & 3 BHK luxury flats with swimming pool, gym, and clubhouse.",
      "Mini basketball court, yoga & meditation area, landscaped gardens, and children's play area.",
      "24×7 CCTV security, generator power backup, and commercial spaces on Besa Pipla Road.",
    ],
    videoModalType: "waman-youtube",
    videoModalHeading: "Sacchidanand Waman Nagri · Video Walkthrough",
    videoModalLocation: "Besa Pipla Road, Nagpur",
  },
  {
    id: "infinity",
    tagBadge: "SIGNATURE ADDRESS",
    locationBadge: "PLOT NO. 40, TIKEKAR ROAD · DHANTOLI, NAGPUR",
    titlePrimary: "INFINITY",
    titleSecondary: "~ ELEGANCE",
    tagline: "Luxury, redefined for the modern you.",
    description:
      "An ultra-luxurious 4 BHK residential project designed with spacious living areas, premium finishes, smart security, mechanical car parking, and refined rooftop amenities in Dhantoli, Nagpur.",
    image: "/images/projects/infinity-elegance.jpeg",
    imageAlt:
      "Infinity Elegance - 4 BHK Ultra-Luxurious Apartments in Dhantoli, Nagpur",
    videoCard: {
      imageSrc: "/images/projects/infinity-elegance.jpeg",
      videoBadge: "PREVIEW",
      tagText: "Tour",
    },
    specs: [
      { value: "4", label: "BHK ULTRA-LUXURIOUS" },
      { value: "01", label: "SIGNATURE ADDRESS" },
      { value: "24×7", label: "SECURITY & SMART INFRA" },
      { value: "01", label: "ROOFTOP GARDEN" },
    ],
    exploreButtonText: "EXPLORE INFINITY",
    modalTitle: "INFINITY ELEGANCE",
    modalAddress: "Plot No. 40, Tikekar Road, Dhantoli, Nagpur",
    chips: [
      { value: "4 BHK", label: "Ultra Luxury" },
      { value: "Mechanical", label: "Car Parking" },
      { value: "Rooftop", label: "Garden & Lounge" },
      { value: "EV & Solar", label: "Smart Infra" },
    ],
    highlights: [
      "Ultra-luxurious 4 BHK residential apartments with expansive living areas and premium finishes.",
      "Mechanical car parking system, EV charging station, and solar electricity for common areas.",
      "Rooftop garden & celebration area, video door bell, senior citizen seating, and 24-hour security.",
    ],
    videoModalType: "preview-card",
    videoModalHeading: "Infinity Elegance · Ultra Luxury Residences",
    videoModalFeatures: "4 BHK Ultra Luxury · Rooftop Amenities",
    videoModalSubline: "4 BHK Ultra Luxury Residences",
    videoModalDescription:
      "Mechanical parking, rooftop garden & celebration deck, senior citizen seating, and bespoke ultra-luxury finishes in Dhantoli.",
    videoModalLocation: "Tikekar Road, Dhantoli",
  },
  {
    id: "onerise",
    tagBadge: "SIGNATURE ADDRESS",
    locationBadge: "PRIME LOCATION · NAGPUR",
    titlePrimary: "THE ONE",
    titleSecondary: "~ RISE",
    tagline: "Reside beyond the skyline.",
    description:
      "A signature-styled 2 & 3 BHK residential development featuring a G+13-storey magnificent edifice, premium construction, cross-ventilated homes, recreational amenities, and exclusive rooftop lifestyle spaces.",
    image: "/images/projects/the-one-rise.jpeg",
    imageAlt: "The ONE Rise - G+13 Storeyed Magnificent Edifice in Nagpur",
    videoCard: {
      imageSrc: "/images/projects/the-one-rise.jpeg",
      videoBadge: "PREVIEW",
      tagText: "Tour",
    },
    specs: [
      { value: "2 & 3", label: "BHK SIGNATURE HOMES" },
      { value: "G+13", label: "MAGNIFICENT EDIFICE" },
      { value: "24×7", label: "SECURITY & HIGH-SPEED LIFTS" },
      { value: "01", label: "INFINITY POOL & ROOFTOP" },
    ],
    exploreButtonText: "EXPLORE THE ONE RISE",
    modalTitle: "THE ONE RISE",
    modalAddress:
      "Prime Location, Nagpur • G+13 Storeyed Magnificent Edifice",
    chips: [
      { value: "2 & 3 BHK", label: "Signature Homes" },
      { value: "G+13", label: "Storeyed Edifice" },
      { value: "Infinity", label: "Swimming Pool" },
      { value: "Rooftop", label: "Lifestyle Spaces" },
    ],
    highlights: [
      "G+13 storeyed magnificent edifice with cross-ventilated 2 & 3 BHK signature-styled residences.",
      "Rooftop infinity swimming pool, landscape garden, gym, yoga deck, and indoor kids game area.",
      "Function hall with pantry, library, creche / work from home lounge, and premium commercial spaces.",
    ],
    videoModalType: "preview-card",
    videoModalHeading: "The ONE Rise · G+13 Storeyed Edifice Showcase",
    videoModalFeatures: "G+13 Storeyed Edifice · Infinity Pool",
    videoModalSubline: "2 & 3 BHK Signature Apartments",
    videoModalDescription:
      "G+13 storeyed magnificent edifice with infinity swimming pool, rooftop lifestyle spaces, cross-ventilated homes, and prime commercial units.",
    videoModalLocation: "Prime Location",
  },
];

/* -------------------------------------------------------------------------
 * Subcomponent: Showcase Card
 * ------------------------------------------------------------------------- */
interface ShowcaseCardProps {
  project: ShowcaseProject;
  imageOnRight: boolean;
  isLast: boolean;
  onOpenLightbox: (src: string) => void;
  onOpenVideo: (project: ShowcaseProject) => void;
  onOpenExplore: (project: ShowcaseProject) => void;
}

function ShowcaseCard({
  project,
  imageOnRight,
  isLast,
  onOpenLightbox,
  onOpenVideo,
  onOpenExplore,
}: ShowcaseCardProps) {
  // Visual Media Element
  const visualElement = (
    <div
      className={`lg:col-span-6 xl:col-span-6 ${
        imageOnRight ? "order-1 lg:order-2" : ""
      }`}
    >
      <div className="relative group w-full">
        {/* Main Image Frame */}
        <div
          onClick={() => onOpenLightbox(project.image)}
          className="relative h-[360px] sm:h-[420px] lg:h-[450px] w-full rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden shadow-[0_15px_35px_rgba(23,32,39,0.10)] cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
          title={`Click to view ${project.titlePrimary}`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority={project.id === "crown"}
            sizes="(max-width: 768px) 100vw, 550px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/40 via-transparent to-transparent pointer-events-none" />

          {/* Tag Badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#eeaf33] text-white text-[11px] font-bold uppercase tracking-[0.14em] shadow-md font-sans">
              {project.tagBadge}
            </span>
          </div>

          {/* Zoom Indicator */}
          <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#172027]/75 backdrop-blur-md text-[#F8F7F3] p-1.5 rounded-full border border-white/20 shadow-lg">
            <Maximize2 className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Overlapping Video / Preview Thumbnail Card */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onOpenVideo(project);
          }}
          className={`absolute ${
            imageOnRight
              ? "-right-2 sm:-right-3 -bottom-3 sm:-bottom-4"
              : "-left-2 sm:-left-3 -bottom-3 sm:-bottom-4"
          } w-36 sm:w-48 h-24 sm:h-30 rounded-2xl overflow-hidden border-4 border-[#FAF9F5] shadow-2xl z-20 cursor-pointer transition-transform duration-300 hover:scale-105 group/video`}
          title={`Watch ${project.titlePrimary} video`}
        >
          {project.videoCard.videoSrc ? (
            <video
              src={project.videoCard.videoSrc}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-110 pointer-events-none"
            />
          ) : (
            <Image
              src={project.videoCard.imageSrc!}
              alt={`${project.titlePrimary} Preview Video`}
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 group-hover/video:scale-110"
            />
          )}

          <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/15 transition-colors" />

          {/* Animated Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-9 h-9 rounded-full bg-[#eeaf33]/45 animate-ping pointer-events-none" />
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#eeaf33] text-[#172027] flex items-center justify-center shadow-xl group-hover/video:scale-110 transition-transform">
                <Play className="h-3.5 sm:h-4 w-3.5 sm:h-4 fill-[#172027] translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* Card Meta Badges */}
          <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[9px] font-semibold text-white drop-shadow-md z-10 font-sans">
            <span className="inline-flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
              <span className="w-1 h-1 rounded-full bg-[#eeaf33] animate-pulse" />
              {project.videoCard.videoBadge}
            </span>
            <span className="bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm text-[8px]">
              {project.videoCard.tagText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Info & Specs Details Element
  const infoElement = (
    <div
      className={`lg:col-span-6 xl:col-span-6 flex flex-col justify-center ${
        imageOnRight ? "order-2 lg:order-1 lg:pr-2" : "lg:pl-2"
      }`}
    >
      <div className="font-sans font-bold text-[11px] sm:text-xs text-[#284153] uppercase tracking-[0.2em] mb-2">
        {project.locationBadge}
      </div>

      <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#284153] tracking-[0.16em] leading-[1.12] uppercase mb-2">
        {project.titlePrimary}
        {project.titleSecondary && (
          <>
            <br />
            {project.titleSecondary}
          </>
        )}
      </h3>

      <p className="font-sans italic text-xs sm:text-sm text-[#284153]/85 font-medium mb-2.5">
        {project.tagline}
      </p>

      <p className="font-sans text-xs sm:text-[13px] text-[#284153]/75 font-normal leading-relaxed mb-4 max-w-md">
        {project.description}
      </p>

      {/* 2x2 Specs Grid */}
      <div className="border-t border-[#172027]/12 pt-3.5 pb-3.5 mb-5 max-w-md">
        <div className="grid grid-cols-2 gap-y-3.5">
          <div className="pr-3 border-r border-[#172027]/12">
            <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
              {project.specs[0].value}
            </div>
            <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#284153]/65 mt-0.5">
              {project.specs[0].label}
            </div>
          </div>

          <div className="pl-4">
            <div className="font-sans text-xl sm:text-2xl font-bold text-[#eeaf33] tracking-tight">
              {project.specs[1].value}
            </div>
            <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#284153]/65 mt-0.5">
              {project.specs[1].label}
            </div>
          </div>

          <div className="pr-3 border-r border-[#172027]/12">
            <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
              {project.specs[2].value}
            </div>
            <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#284153]/65 mt-0.5">
              {project.specs[2].label}
            </div>
          </div>

          <div className="pl-4">
            <div className="font-sans text-lg sm:text-xl font-bold text-[#eeaf33]">
              {project.specs[3].value}
            </div>
            <div className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#284153]/65 mt-0.5">
              {project.specs[3].label}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5">
        {project.externalLink ? (
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#eeaf33] text-[#eeaf33] font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#eeaf33] hover:text-[#172027] hover:shadow-md group cursor-pointer"
          >
            <span>{project.exploreButtonText}</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onOpenExplore(project)}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#eeaf33] text-[#eeaf33] font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#eeaf33] hover:text-[#172027] hover:shadow-md group cursor-pointer"
          >
            <span>{project.exploreButtonText}</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={() => onOpenExplore(project)}
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold tracking-[0.14em] uppercase hover:bg-[#f5be47] transition-all shadow-sm cursor-pointer"
        >
          <Phone className="h-3 w-3" />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`bg-[#FAF9F5] rounded-[2.2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_-15px_rgba(23,32,39,0.12),0_10px_25px_-5px_rgba(23,32,39,0.06)] ${
        isLast ? "" : "mb-20 sm:mb-28"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        {imageOnRight ? (
          <>
            {infoElement}
            {visualElement}
          </>
        ) : (
          <>
            {visualElement}
            {infoElement}
          </>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Subcomponent: Video Modal
 * ------------------------------------------------------------------------- */
interface VideoModalProps {
  project: ShowcaseProject;
  onClose: () => void;
  onOpenExplore: (project: ShowcaseProject) => void;
}

function VideoModal({ project, onClose, onOpenExplore }: VideoModalProps) {
  const [activeCrownVideo, setActiveCrownVideo] = useState<1 | 2>(1);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172027]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FAF9F5] border-2 border-[#172027] rounded-3xl overflow-hidden p-5 sm:p-7 shadow-2xl text-[#172027]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#172027]/12 mb-3">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#eeaf33] block">
              RESIDENTIAL WALKTHROUGH TOUR
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#284153] font-bold tracking-wide">
              {project.id === "crown"
                ? activeCrownVideo === 1
                  ? "SkyConnect 7 Crown · Video Tour 1 (Architecture & Overview)"
                  : "SkyConnect 7 Crown · Video Tour 2 (Interior & Living Spaces)"
                : project.videoModalHeading}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-[#172027] transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Video Switcher for Crown */}
        {project.id === "crown" && (
          <div className="flex flex-wrap items-center gap-2 mb-4 font-sans">
            <button
              type="button"
              onClick={() => setActiveCrownVideo(1)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeCrownVideo === 1
                  ? "bg-[#eeaf33] text-[#172027] shadow-sm font-bold scale-[1.02]"
                  : "bg-black/5 text-[#172027]/70 hover:bg-black/10 hover:text-[#172027]"
              }`}
            >
              <Play className="h-3 w-3 fill-current" />
              <span>Video 1 · Project Tour</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCrownVideo(2)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeCrownVideo === 2
                  ? "bg-[#eeaf33] text-[#172027] shadow-sm font-bold scale-[1.02]"
                  : "bg-black/5 text-[#172027]/70 hover:bg-black/10 hover:text-[#172027]"
              }`}
            >
              <Play className="h-3 w-3 fill-current" />
              <span>Video 2 · Walkthrough</span>
            </button>

            <span className="text-[11px] text-[#172027]/55 ml-auto hidden sm:inline-block font-medium">
              Switch between 2 walkthrough videos
            </span>
          </div>
        )}

        {/* Video Player Display */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
          {project.videoModalType === "crown-dual" ? (
            <video
              key={activeCrownVideo}
              src={
                activeCrownVideo === 1
                  ? "/videos/SKY%20connect.mp4"
                  : "/videos/SKYconnect%202.mp4"
              }
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            >
              Your browser does not support the video tag.
            </video>
          ) : project.videoModalType === "waman-youtube" ? (
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/kBfikLRtI-M?autoplay=1"
              title="Sacchidanand Waman Nagri Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <Image
                src={project.image}
                alt="Walkthrough Video Preview"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between text-white text-xs font-sans">
                  <span className="inline-flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#eeaf33] animate-pulse" />
                    {project.videoModalFeatures}
                  </span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="text-white text-center max-w-md mx-auto">
                  <div className="w-14 h-14 rounded-full bg-[#eeaf33] text-[#172027] flex items-center justify-center mx-auto mb-3 shadow-xl">
                    <Play className="h-6 w-6 fill-[#172027] translate-x-0.5" />
                  </div>
                  <h5 className="font-serif text-lg sm:text-xl font-bold mb-1 text-white">
                    {project.videoModalSubline}
                  </h5>
                  <p className="font-sans text-xs text-white/85 leading-relaxed font-normal">
                    {project.videoModalDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/70 font-sans">
                  <span>{project.videoModalLocation}</span>
                  <span>Nagpur</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="font-sans text-xs text-[#172027]/70 font-normal">
            Schedule a private site visit to experience floor plans and availability in person.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenExplore(project);
            }}
            className="px-6 py-2.5 rounded-full bg-[#eeaf33] text-[#172027] font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#f5be47] transition-all shadow-sm shrink-0"
          >
            Enquire Details
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Subcomponent: Lightbox Modal
 * ------------------------------------------------------------------------- */
interface LightboxModalProps {
  imageSrc: string;
  onClose: () => void;
}

function LightboxModal({ imageSrc, onClose }: LightboxModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172027]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF9F5] border-2 border-[#172027] rounded-3xl overflow-hidden p-5 shadow-2xl text-[#172027]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#172027]/12 mb-4">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#284153] font-bold tracking-wide">
              ARCHITECTURE SHOWCASE
            </h4>
            <p className="font-sans text-xs text-[#284153]/70 font-normal">
              Signature Residential &amp; Waterfront Collection · Nagpur
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-[#172027] transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-black max-h-[75vh]">
          <Image
            src={imageSrc}
            alt="Architecture Full View"
            width={1280}
            height={1280}
            className="w-full h-auto object-contain max-h-[75vh]"
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Subcomponent: Explore / Lead Modal
 * ------------------------------------------------------------------------- */
interface ExploreModalProps {
  project: ShowcaseProject;
  onClose: () => void;
}

function ExploreModal({ project, onClose }: ExploreModalProps) {
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
      onClose();
      setFormData({ name: "", phone: "", email: "", visitDate: "", message: "" });
    }, 2800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172027]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full my-8 bg-[#FAF9F5] border-2 border-[#172027] rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl text-[#172027]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-[#172027]/12 mb-6">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#eeaf33] block mb-1">
              SIGNATURE ENCLAVE SHOWCASE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#284153] font-bold tracking-[0.16em] uppercase">
              {project.modalTitle}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#284153]/70 mt-1 flex items-center gap-1.5 font-normal">
              <MapPin className="h-3.5 w-3.5 text-[#eeaf33]" />
              <span>{project.modalAddress}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-[#172027] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Feature Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          {project.chips.map((chip, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white border border-[#172027]/10 text-center"
            >
              <span className="block text-base font-bold text-[#eeaf33]">
                {chip.value}
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#172027]/60 tracking-wider">
                {chip.label}
              </span>
            </div>
          ))}
        </div>

        {/* Highlights List */}
        <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/80 border border-[#172027]/10 text-xs sm:text-sm text-[#172027]/85 font-light">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#eeaf33] shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}
        {formSubmitted ? (
          <div className="py-8 text-center bg-white rounded-2xl border border-[#eeaf33]/40">
            <CheckCircle2 className="h-12 w-12 text-[#eeaf33] mx-auto mb-3" />
            <h4 className="font-serif text-xl font-bold text-[#284153] mb-1">
              Enquiry Received
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#284153]/70 max-w-sm mx-auto">
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, visitDate: e.target.value })
                  }
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
  );
}

/* -------------------------------------------------------------------------
 * Main Component: SignatureCollections
 * ------------------------------------------------------------------------- */
export default function SignatureCollections({
  className = "",
}: SignatureCollectionsProps = {}) {
  // Modal selection states store the active project object directly
  const [activeVideoModal, setActiveVideoModal] =
    useState<ShowcaseProject | null>(null);
  const [activeExploreModal, setActiveExploreModal] =
    useState<ShowcaseProject | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  return (
    <section
      id="signature-collections"
      className={`relative pt-28 sm:pt-28 md:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 bg-[#F8F7F3] text-[#172027] overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#eeaf33]" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
              Signature Collections
            </span>
            <span className="h-px w-8 bg-[#eeaf33]" />
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#284153] uppercase tracking-[0.16em] sm:tracking-[0.22em] leading-tight">
            Curated Architectural Enclaves
          </h2>
          <p className="font-sans italic text-xs sm:text-sm md:text-base text-[#284153]/75 font-normal mt-2.5 tracking-wide">
            More than a home. A signature way of living.
          </p>
        </div>

        {/* Dynamic Alternating Project Cards */}
        {showcaseProjects.map((project, idx) => (
          <ShowcaseCard
            key={project.id}
            project={project}
            imageOnRight={idx % 2 === 1}
            isLast={idx === showcaseProjects.length - 1}
            onOpenLightbox={(src) => setActiveLightbox(src)}
            onOpenVideo={(p) => setActiveVideoModal(p)}
            onOpenExplore={(p) => setActiveExploreModal(p)}
          />
        ))}
      </div>

      {/* Video Walkthrough Modal */}
      {activeVideoModal && (
        <VideoModal
          project={activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
          onOpenExplore={(p) => setActiveExploreModal(p)}
        />
      )}

      {/* Lightbox Modal */}
      {activeLightbox && (
        <LightboxModal
          imageSrc={activeLightbox}
          onClose={() => setActiveLightbox(null)}
        />
      )}

      {/* Explore / Enquire / Call Modal */}
      {activeExploreModal && (
        <ExploreModal
          project={activeExploreModal}
          onClose={() => setActiveExploreModal(null)}
        />
      )}
    </section>
  );
}
