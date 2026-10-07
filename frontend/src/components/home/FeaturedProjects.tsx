"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Building, Check, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="relative pt-[16px] sm:pt-[18px] md:pt-[30px] pb-16 md:pb-24 bg-[#172027] border-t border-[#284153] overflow-hidden">
      {/* Subtle ambient gold & slate radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#eeaf33]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#284153]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#eeaf33]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-semibold">
                Featured Developments
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8F7F3] leading-tight">
              Signature Projects{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F8F7F3] via-[#eeaf33] to-[#eeaf33]">
                Built for Generations
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-serif text-sm uppercase tracking-widest text-[#eeaf33] transition-colors hover:text-[#f5be47] group"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#284153]/35 border border-[#284153]/75 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#eeaf33]/50 hover:shadow-[0_20px_40px_rgba(23,32,39,0.85)]"
            >
              {/* Image Container */}
              <div className="relative h-[251px] sm:h-[283px] w-full overflow-hidden bg-[#172027]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#284153]/40 text-[#F8F7F3]/50">
                    <Building className="h-12 w-12" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172027] via-[#172027]/25 to-transparent" />



                {/* Price Tag overlay */}
                {project.priceStarting && (
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[11px] uppercase tracking-wider text-[#F8F7F3]/60 block">Starting From</span>
                    <span className="font-serif text-xl text-[#F8F7F3] font-medium">{project.priceStarting}</span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#F8F7F3] font-light group-hover:text-[#eeaf33] transition-colors mb-2">
                    {project.name}
                  </h3>

                  {project.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#F8F7F3]/70 mb-4">
                      <MapPin className="h-3.5 w-3.5 text-[#eeaf33] shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  )}

                  <p className="text-[#F8F7F3]/70 text-sm leading-relaxed mb-6 font-light line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights Checklist */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#284153]/70">
                      {project.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-[#F8F7F3]/85">
                          <Check className="h-3 w-3 text-[#eeaf33] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#284153]/70 flex items-center justify-between">
                  <span className="text-xs text-[#F8F7F3]/60 font-light">
                    {project.area || "Masterplanned"}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#eeaf33] transition-colors group-hover:text-[#F8F7F3]"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
