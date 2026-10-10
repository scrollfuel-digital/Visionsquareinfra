"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "@/data/blogs";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LatestBlogs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % blogs.length);
  const handlePrevious = () =>
    setCurrentIndex((index) => (index - 1 + blogs.length) % blogs.length);

  const currentBlog = blogs[currentIndex];

  return (
    <section className="relative py-20 bg-[#F8F7F3] text-[#172027] border-t border-[#172027]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-[#9A7432]/10 border border-[#9A7432]/30 text-[#9A7432] text-xs uppercase tracking-[0.25em] font-bold rounded-none font-serif">
            <Sparkles size={14} /> Property Journal & Guides
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172027] leading-tight">
            The <span className="text-[#9A7432]">Knowledge Corner</span>
          </h2>

          <p className="font-sans text-[#4A5568] text-base leading-relaxed">
            Making a property decision becomes easier when you have the right information. Our real estate blog brings together practical property guides, investment insights, buying tips, and information about real estate trends to help homebuyers and investors make informed decisions.
          </p>
        </div>

        {/* ========================================================
            PROFILE-CARD TESTIMONIAL CAROUSEL STYLE BLOG SECTION
           ======================================================== */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          {/* Desktop Layout (Overlapping Image & Card) */}
          <div className="hidden md:flex relative items-center">
            {/* Blog Image Frame */}
            <div className="w-[460px] h-[460px] rounded-none overflow-hidden bg-[#172027] border border-[#9A7432]/30 flex-shrink-0 relative shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBlog.slug}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={
                      currentBlog.image ||
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={currentBlog.title}
                    fill
                    sizes="460px"
                    className="object-cover rounded-none"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/70 via-transparent to-transparent" />

                  {/* Floating Category Badge */}
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#172027] text-[#9A7432] text-xs font-bold uppercase tracking-widest rounded-none border border-[#9A7432]/40 shadow-lg">
                    {currentBlog.category}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Overlapping Blog Card */}
            <div className="bg-white border border-[#9A7432]/30 rounded-none shadow-2xl p-8 sm:p-10 ml-[-70px] z-10 max-w-xl flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBlog.slug}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  {/* Meta Bar */}
                  <div className="flex items-center gap-4 text-xs text-[#9A7432] font-semibold mb-4 border-b border-[#9A7432]/15 pb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {currentBlog.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {currentBlog.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-[#4A5568]">
                      <User size={13} className="text-[#9A7432]" /> {currentBlog.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#172027] mb-4 leading-snug">
                    {currentBlog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#4A5568] text-base leading-relaxed mb-8 font-sans">
                    {currentBlog.excerpt}
                  </p>

                  {/* Action Link */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#9A7432]/15">
                    <Link
                      href={`/blogs/${currentBlog.slug}`}
                      className="btn-gold-pill group text-xs uppercase tracking-wider"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    <Link
                      href="/blogs"
                      className="text-xs font-bold uppercase tracking-wider text-[#172027] hover:text-[#9A7432] transition-colors flex items-center gap-1"
                    >
                      <BookOpen size={14} /> View All
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden max-w-sm mx-auto bg-white border border-[#9A7432]/30 rounded-none shadow-xl overflow-hidden">
            {/* Image Container */}
            <div className="w-full aspect-[4/3] bg-[#172027] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBlog.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={
                      currentBlog.image ||
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={currentBlog.title}
                    fill
                    sizes="400px"
                    className="object-cover"
                    priority
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#172027] text-[#9A7432] text-[10px] font-bold uppercase tracking-wider rounded-none border border-[#9A7432]/40">
                    {currentBlog.category}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Container */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBlog.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 text-[11px] text-[#9A7432] font-semibold mb-3">
                    <span>{currentBlog.publishedAt}</span>
                    <span>•</span>
                    <span>{currentBlog.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#172027] mb-3 leading-snug">
                    {currentBlog.title}
                  </h3>

                  <p className="text-xs text-[#4A5568] leading-relaxed mb-6 font-sans">
                    {currentBlog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${currentBlog.slug}`}
                    className="btn-gold-pill w-full justify-center text-xs"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Carousel Controls (Prev, Dots, Next) */}
          <div className="flex justify-center items-center gap-6 mt-10">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              aria-label="Previous blog article"
              className="w-11 h-11 rounded-none bg-white border border-[#9A7432]/40 shadow-md flex items-center justify-center hover:bg-[#172027] hover:text-white transition-colors cursor-pointer text-[#172027]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2.5">
              {blogs.map((_, blogIndex) => (
                <button
                  key={blogIndex}
                  onClick={() => setCurrentIndex(blogIndex)}
                  className={cn(
                    "w-3 h-3 rounded-none transition-all cursor-pointer border border-[#9A7432]/40",
                    blogIndex === currentIndex
                      ? "bg-[#9A7432] w-8"
                      : "bg-white hover:bg-[#9A7432]/30"
                  )}
                  aria-label={`Go to article ${blogIndex + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next blog article"
              className="w-11 h-11 rounded-none bg-white border border-[#9A7432]/40 shadow-md flex items-center justify-center hover:bg-[#172027] hover:text-white transition-colors cursor-pointer text-[#172027]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View All Blogs CTA Footer */}
        <div className="text-center pt-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9A7432] hover:text-[#172027] transition-colors border-b border-[#9A7432] pb-1 font-serif"
          >
            Browse All 11 Real Estate Articles & Guides <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
