"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="w-full pt-20 pb-16 px-4 md:px-8 bg-[#F8F7F3] text-[#172027]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Heading (Matching Signature Gold Font Design) */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#172027] tracking-tight leading-tight uppercase"
        >
          ABOUT{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EEAF33] via-[#9A7432] to-[#EEAF33]">
            VISIONSQUARE INFRA
          </span>
        </motion.h2>

        {/* Signature divider */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-6 mb-8 h-px w-28 origin-center bg-[#EEAF33]"
        />

        {/* Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-base md:text-xl font-bold uppercase tracking-[0.2em] mb-6 text-[#9A7432]"
        >
          Signature Living
        </motion.h3>

        {/* Paragraphs */}
        <div className="text-sm md:text-[18px] leading-relaxed max-w-5xl mx-auto space-y-6 text-center text-[#172027]/80 font-sans">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            A distinguished real estate developer with a legacy of excellence in
            Nagpur. Renowned for its commitment to thoughtful design, precision
            build quality, MahaRERA transparency, and ethical execution. VisionSquare
            Infra Private Limited curates refined residential spaces, high-rise
            townships, and waterfront plotted developments that embody comfort,
            trust, and enduring value.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            Rooted by principles of integrity, uncompromising quality, timely
            delivery, and a strong customer-centric ethos, VisionSquare Infra
            follows a refined approach to luxury—subtle, considered, and timeless
            in expression. From 3 BHK signature residences in Jaiprakash Nagar and 6
            high-rise towers on Besa–Pipla Road to India's first waterfront plotted
            development in Hingna, each development reflects a dedication to creating
            homes that transcend structure, offering lasting elegance and a foundation
            for meaningful living.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          className="mt-10"
        >
          <Link
            href="/about-us"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9A7432] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#172027] hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="h-4 w-4 text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
