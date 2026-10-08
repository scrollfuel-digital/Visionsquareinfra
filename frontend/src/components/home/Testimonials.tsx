"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [activeIndex] = useState(0);

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-16 md:pb-20 bg-[#172027] border-t border-[#284153] overflow-hidden">
      {/* Background ambient gold & slate aura */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#eeaf33]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#284153]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#eeaf33]" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#eeaf33] font-bold">
              Client Testimonials
            </span>
            <span className="h-px w-8 bg-[#eeaf33]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F7F3] leading-tight mb-4">
            Stories of{" "}
            <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F8F7F3] via-[#eeaf33] to-[#eeaf33]">
              Trust & Fulfillment
            </span>
          </h2>
          <p className="font-sans text-[#F8F7F3]/75 text-base font-normal">
            Hear from families and investors who built their dreams and grew their wealth with Vision Square Infra.
          </p>
        </div>

        {/* Testimonials Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`relative flex flex-col justify-between p-8 rounded-3xl bg-[#284153]/35 border transition-all duration-500 backdrop-blur-md ${idx === activeIndex
                  ? "border-[#eeaf33]/50 shadow-[0_15px_35px_rgba(238,175,51,0.12)] -translate-y-1"
                  : "border-[#284153]/75 hover:border-[#eeaf33]/40"
                }`}
            >
              <div>
                {/* Gold Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#eeaf33]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#eeaf33]" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-[#eeaf33]/30" />
                </div>

                {/* Quote Text */}
                <p className="font-serif text-[#F8F7F3] text-lg sm:text-xl font-normal leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Verification Details */}
              <div className="pt-6 border-t border-[#284153]">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#eeaf33]/40 shadow-md bg-[#172027]">
                    <Image
                      src={t.avatar || "/images/testimonials/avatar-user.png"}
                      alt={t.author}
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#F8F7F3] font-bold leading-snug">
                      {t.author}
                    </h4>
                    <p className="font-sans text-xs text-[#F8F7F3]/70 font-normal mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#284153]/30 border border-[#284153]/70 backdrop-blur-sm text-center">
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#eeaf33] font-bold block mb-1">
              4.9 / 5.0
            </span>
            <span className="font-sans text-xs text-[#F8F7F3]/75 uppercase tracking-wider font-semibold">
              Customer Satisfaction
            </span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#eeaf33] font-bold block mb-1">
              100%
            </span>
            <span className="font-sans text-xs text-[#F8F7F3]/75 uppercase tracking-wider font-semibold">
              Clear & Spot Registrations
            </span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#eeaf33] font-bold block mb-1">
              500+
            </span>
            <span className="font-sans text-xs text-[#F8F7F3]/75 uppercase tracking-wider font-semibold">
              Delighted Families
            </span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#eeaf33] font-bold block mb-1">
              Zero
            </span>
            <span className="font-sans text-xs text-[#F8F7F3]/75 uppercase tracking-wider font-semibold">
              Dispute Land Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
