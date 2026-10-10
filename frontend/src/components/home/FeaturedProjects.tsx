"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Home,
  Trees,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Waves,
} from "lucide-react";

interface SpecGridItem {
  iconType: "home" | "leaf" | "shield" | "check" | "building" | "waves";
  title: string;
  sub: string;
}

interface ProjectItem {
  number: string;
  slug: string;
  taglineBadge: string;
  nameLine1: string;
  nameLine2: string;
  tagline: string;
  description: string;
  location: string;
  image: string;
  specsGrid: [SpecGridItem, SpecGridItem, SpecGridItem, SpecGridItem];

}

const projectsList: ProjectItem[] = [
  {
    number: "01",
    slug: "skyconnect-7-crown",
    taglineBadge: "SIGNATURE RESIDENCES",
    nameLine1: "7 CROWN",
    nameLine2: "SKYCONNECT",
    tagline: "MORE THAN A HOME. A SIGNATURE WAY OF LIVING.",
    description:
      "A premium 3 BHK residential address designed around spacious living, refined finishes, smart security, and contemporary rooftop amenities in Jaiprakash Nagar, Nagpur.",
    location: "Jaiprakash Nagar, Nagpur",
    image: "/images/projects/skyconnect-7-crown.jpeg",
    specsGrid: [
      { iconType: "home", title: "3 BHK PREMIUM", sub: "RESIDENCES" },
      { iconType: "leaf", title: "ROOFTOP GARDEN", sub: "DECK" },
      { iconType: "shield", title: "SMART SECURITY", sub: "SYSTEM" },
      { iconType: "check", title: "READY FOR", sub: "POSSESSION" },
    ]
  },
  {
    number: "02",
    slug: "one-rise",
    taglineBadge: "LUXURY APARTMENTS",
    nameLine1: "ONE",
    nameLine2: "RISE",
    tagline: "RESIDE BEYOND THE SKYLINE.",
    description:
      "A signature-styled 2 & 3 BHK residential development featuring a G+13-storey magnificent edifice, premium construction, cross-ventilated homes, and rooftop lifestyle spaces.",
    location: "Prime Location, Nagpur",
    image: "/images/projects/the-one-rise.jpeg",
    specsGrid: [
      { iconType: "building", title: "G+13 STOREY", sub: "SIGNATURE EDIFICE" },
      { iconType: "waves", title: "INFINITY POOL", sub: "& SKY DECK" },
      { iconType: "home", title: "2 & 3 BHK", sub: "RESIDENCES" },
      { iconType: "check", title: "PRIME LOCATION", sub: "NAGPUR" },
    ],
    
  },
  {
    number: "03",
    slug: "infinity-elegance",
    taglineBadge: "ULTRA-LUXURY APARTMENTS",
    nameLine1: "INFINITY",
    nameLine2: "ELEGANCE",
    tagline: "LUXURY, REDEFINED FOR THE MODERN YOU.",
    description:
      "An ultra-luxurious 4 BHK residential project designed with spacious living areas, premium finishes, smart security, mechanical car parking, and refined rooftop amenities in Dhantoli, Nagpur.",
    location: "Dhantoli, Nagpur",
    image: "/images/projects/infinity-elegance.jpeg",
    specsGrid: [
      { iconType: "home", title: "4 BHK ULTRA-LUXURY", sub: "APARTMENTS" },
      { iconType: "building", title: "MECHANICAL CAR", sub: "PARKING" },
      { iconType: "leaf", title: "ROOFTOP GARDEN", sub: "& GYMNASIUM" },
      { iconType: "check", title: "EV CHARGING", sub: "& SOLAR POWER" },
    ],
   
  },
  {
    number: "04",
    slug: "sacchidanand-waman-nagri",
    taglineBadge: "SIGNATURE RESIDENCES",
    nameLine1: "SACCHIDANAND",
    nameLine2: "WAMAN NAGRI",
    tagline: "A LUXURIOUS HAVEN FOR COMFORT AND ELEGANCE.",
    description:
      "A premium residential project offering thoughtfully designed 2 & 3 BHK luxury flats with modern amenities, swimming pool, clubhouse, and excellent connectivity on Besa Pipla Road, Nagpur.",
    location: "Besa Pipla Road, Nagpur",
    image: "/images/projects/sacchidanand-waman-nagri.jpeg",
    specsGrid: [
      { iconType: "home", title: "2 & 3 BHK", sub: "LUXURY FLATS" },
      { iconType: "waves", title: "SWIMMING POOL", sub: "& CLUBHOUSE" },
      { iconType: "shield", title: "24×7 SECURITY", sub: "& POWER BACKUP" },
      { iconType: "leaf", title: "ROOFTOP GARDEN", sub: "& YOGA DECK" },
    ],
    
  },
];

function renderSpecIcon(type: string) {
  const iconClasses = "h-4 w-4 text-[#9A7432]";
  switch (type) {
    case "home":
      return <Home className={iconClasses} />;
    case "leaf":
      return <Trees className={iconClasses} />;
    case "shield":
      return <ShieldCheck className={iconClasses} />;
    case "building":
      return <Building2 className={iconClasses} />;
    case "waves":
      return <Waves className={iconClasses} />;
    case "check":
    default:
      return <CheckCircle2 className={iconClasses} />;
  }
}

interface FeaturedProjectsProps {
  showIntroHeader?: boolean;
}

export default function FeaturedProjects({ showIntroHeader = true }: FeaturedProjectsProps) {
  return (
    <section className="relative bg-white text-[#172027]">
      {/* Top Section Intro Banner */}
      {showIntroHeader && (
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">
          <div className="flex flex-col items-center text-center justify-center border-b border-[#172027]/10 pb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#284153]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#284153] font-bold">
                DESIGNED TO INSPIRE
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-5xl font-serif font-extrabold text-[#172027] tracking-tight leading-tight uppercase"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EEAF33] via-[#9A7432] to-[#EEAF33]">
               Defining Skylines
              </span>
            </motion.h2>
          </div>
        </div>
      )}

      {/* Full-Bleed Sticky Sections */}
      <div className="relative w-full">
        {projectsList.map((project, index) => {
          const zIndexStyle = (index + 1) * 10;

          return (
            <div
              key={project.slug}
              style={{
                zIndex: zIndexStyle,
              }}
              className="sticky top-0 w-full min-h-screen h-screen bg-white text-[#172027] border-t border-[#172027]/15 flex flex-col lg:flex-row overflow-hidden rounded-none"
            >
              {/* LEFT SIDE: Full-Height Showcase Image with Sharp Corners */}
              <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-full rounded-none overflow-hidden group border-r border-[#172027]/10 shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.nameLine1} ${project.nameLine2}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Top Location Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#172027]/85 backdrop-blur-md border border-[#EEAF33]/40 text-[#EEAF33] text-xs font-bold uppercase tracking-widest font-sans shadow-md">
                    <MapPin className="h-3.5 w-3.5 text-[#EEAF33]" />
                    {project.location}
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE: Plain Cream Text Area */}
              <div className="relative w-full lg:w-1/2 bg-[#F8F7F3] flex flex-col justify-center p-6 sm:p-10 lg:p-14 h-full overflow-y-auto">
                {/* Subtle Watermark Index Number */}
                <div className="font-serif text-[160px] sm:text-[220px] font-bold text-[#9A7432]/[0.08] absolute -top-8 right-2 sm:right-6 pointer-events-none select-none z-0 leading-none">
                  {project.number}
                </div>

                <div className="relative z-10 max-w-xl">
                  {/* 2-Line Project Name */}
                  <h3 className="font-serif text-5xl sm:text-5xl lg:text-4xl font-bold text-[#9A7432] tracking-tight uppercase leading-[1.06] mb-3">
                    <span className="block">{project.nameLine1}</span>
                    <span className="block">{project.nameLine2}</span>
                  </h3>

                  {/* Tagline */}
                  <div className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9A7432] mb-4">
                    {project.tagline}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* 2x2 Feature Grid with Center Divider */}
                  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 py-4 my-2">
                    <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px bg-[#9A7432]/25 hidden sm:block" />

                    {project.specsGrid.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-[#9A7432]/35 bg-[#9A7432]/10 flex items-center justify-center shrink-0 shadow-sm">
                          {renderSpecIcon(spec.iconType)}
                        </div>
                        <div>
                          <div className="font-sans text-xs font-bold uppercase tracking-wider text-[#172027]">
                            {spec.title}
                          </div>
                          <div className="font-sans text-[10px] font-medium uppercase tracking-wider text-[#9A7432]">
                            {spec.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 mt-4 border-t border-[#9A7432]/20">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9A7432] text-white font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#172027] hover:shadow-xl hover:-translate-y-0.5 cursor-pointer shrink-0"
                    >
                      <span>EXPLORE PROJECT DETAILS</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>

                  
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Footer Navigation CTA */}
      <div className="relative z-50 bg-white py-16 text-center border-t border-[#172027]/10">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-[#284153] text-[#284153] font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#284153] hover:text-white hover:shadow-lg group cursor-pointer"
        >
          <span>View All Projects</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
