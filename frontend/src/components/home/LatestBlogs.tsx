"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { ArrowRight, Calendar, Clock, User, Sparkles } from "lucide-react";

const TOPICS = [
  "Real estate investment in Nagpur",
  "Property buying tips",
  "Residential properties in Nagpur",
  "Plot buying guides",
  "Best locations to buy property in Nagpur",
  "Factors to consider before buying a property",
  "First-time homebuying tips",
  "Property investment planning",
  "Real estate market trends",
  "Understanding location and connectivity",
  "Long-term property investment",
];

export default function LatestBlogs() {
  const recentBlogs = blogs.slice(0, 3);

  return (
    <section className="relative py-20 bg-[#F8F7F3] text-[#172027] border-t border-[#172027]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-[#9A7432]/10 border border-[#9A7432]/30 text-[#9A7432] text-xs uppercase tracking-[0.25em] font-bold rounded-none">
            <Sparkles size={14} /> Property Journal & Guides
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172027] leading-tight">
            Nagpur Real Estate & <span className="italic text-[#9A7432]">Property Insights</span>
          </h2>

          <p className="font-sans text-[#4A5568] text-base leading-relaxed">
            Making a property decision becomes easier when you have the right information. Our real estate blog brings together practical property guides, investment insights, buying tips, and information about real estate trends to help homebuyers and investors make informed decisions.
          </p>
        </div>

        {/* Covered Topics Bar */}
        <div className="bg-white p-6 md:p-8 border border-[#9A7432]/30 rounded-none mb-14 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#172027] mb-2 text-center">
            Explore Our Latest Real Estate Articles
          </h3>
          <p className="text-xs text-[#4A5568] text-center mb-5 font-sans font-medium uppercase tracking-wider">
            Our blog covers topics such as:
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {TOPICS.map((topic) => (
              <Link
                key={topic}
                href="/blogs"
                className="px-3.5 py-1.5 bg-[#F8F7F3] border border-[#9A7432]/25 text-[#172027] text-xs font-bold uppercase tracking-wider rounded-none hover:bg-[#9A7432] hover:text-white transition-all duration-300"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>

        {/* Recent 3 Blog Cards Grid (Sharp 90° Corners) */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {recentBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group relative bg-white border border-[#9A7432]/30 rounded-none overflow-hidden shadow-md hover:shadow-xl hover:border-[#172027] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden rounded-none">
                  <Image
                    src={
                      post.image ||
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#172027] text-white text-[10px] font-bold uppercase tracking-wider rounded-none border border-[#9A7432]/40">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#9A7432] font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#172027] group-hover:text-[#9A7432] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#4A5568] leading-relaxed line-clamp-2 font-sans">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#9A7432]/15 mt-2">
                <span className="text-[11px] text-[#4A5568] font-medium flex items-center gap-1">
                  <User size={12} className="text-[#9A7432]" /> {post.author}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#172027] group-hover:text-[#9A7432] uppercase tracking-wider">
                  Read <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
