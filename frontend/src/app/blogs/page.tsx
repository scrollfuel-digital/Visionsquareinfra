"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import type { Blog } from "@/types/blog";
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  CheckCircle2,
  X,
  Compass,
  Building2,
  TrendingUp,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

const COVERED_TOPICS = [
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

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Real Estate Investment",
    "Property Buying Tips",
    "Residential Properties",
    "Plot Buying Guides",
    "Location Guides",
    "Buyer Advisory",
    "First-Time Buyers",
    "Investment Planning",
    "Market Trends",
    "Location & Connectivity",
    "Long-Term Investment",
  ];

  const filteredPosts = blogs.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogs[0];

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#F8F7F3] text-[#172027] font-sans antialiased min-h-screen pt-24 md:pt-32 pb-20 selection:bg-[#9A7432] selection:text-white">
      
      {/* ── 1. HERO HEADER BANNER (NAGPUR REAL ESTATE & PROPERTY INSIGHTS) ── */}
      <section className="relative pt-12 pb-14 px-6 bg-[#F8F7F3] text-center overflow-hidden border-b border-[#172027]/10">
        <div className="relative max-w-4xl mx-auto space-y-5 z-10">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-none bg-[#9A7432]/10 border border-[#9A7432]/30 text-[#9A7432] text-xs uppercase tracking-[0.25em] font-bold">
            <Sparkles size={14} className="text-[#9A7432] animate-pulse" />{" "}
            VisionSquare Property Journal
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#172027] tracking-tight leading-tight uppercase">
            The{" "}
            <span className="font-serif text-[#9A7432]">Knowledge Corner</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-sans text-[#4A5568] font-normal max-w-3xl mx-auto leading-relaxed">
            Making a property decision becomes easier when you have the right information. Our real estate blog brings together practical property guides, investment insights, buying tips, and information about real estate trends to help homebuyers and investors make informed decisions.
          </p>
        </div>
      </section>

      {/* ── 2. FEATURED SPOTLIGHT ARTICLE (SHARP CORNERS) ────────────────── */}
      {featuredPost && (
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div
            className="bg-white rounded-none overflow-hidden border border-[#9A7432]/30 shadow-xl hover:shadow-[0_25px_60px_rgba(23,32,39,0.15)] hover:border-[#172027] transition-all duration-500 grid lg:grid-cols-12 gap-8 items-center group cursor-pointer"
            onClick={() => setSelectedArticle(featuredPost)}
          >
            {/* Image Column */}
            <div className="lg:col-span-7 relative h-[320px] lg:h-[440px] overflow-hidden rounded-none">
              <Image
                src={
                  featuredPost.image ||
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                }
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute top-5 left-5 px-4 py-1.5 rounded-none bg-[#172027] text-white border border-[#9A7432] text-xs font-bold uppercase tracking-wider shadow-md">
                ⭐ Featured Article
              </span>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 lg:pr-10 space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#9A7432] font-semibold">
                <span className="flex items-center gap-1">
                  <Calendar size={13} /> {featuredPost.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#172027] group-hover:text-[#9A7432] transition-colors leading-snug">
                {featuredPost.title}
              </h2>

              <p className="text-[#4A5568] text-sm leading-relaxed font-sans font-normal">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(featuredPost);
                  }}
                  className="inline-flex items-center gap-2 bg-[#9A7432] hover:bg-[#172027] text-white px-7 py-3.5 rounded-none text-xs font-bold uppercase tracking-widest transition duration-300 shadow-md cursor-pointer group-hover:scale-105"
                >
                  <span>Read Full Article</span>
                  <ArrowRight
                    size={14}
                    className="text-white group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

     

      {/* ── 4. SEARCH & CATEGORY FILTERS (SHARP CORNERS) ───────────────────── */}
      <section ref={gridRef} className="pt-12 pb-6 px-6 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchQuery("");
                }}
                className={`px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat && !searchQuery
                    ? "bg-[#172027] text-white shadow-md border border-[#172027]"
                    : "bg-white text-[#172027] border border-[#9A7432]/30 hover:border-[#172027] hover:text-[#9A7432]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A7432]"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#9A7432]/30 rounded-none py-3 pl-11 pr-4 text-xs text-[#172027] focus:outline-none focus:border-[#9A7432] font-sans"
            />
          </div>
        </div>
      </section>

      {/* ── 5. ARTICLES GRID (SHARP CORNERS, 90-DEGREE EDGES) ───────────────── */}
      <section className="py-8 px-6 max-w-7xl mx-auto pb-16">
        {filteredPosts.length === 0 ? (
          <div className="bg-white border border-[#9A7432]/30 p-12 text-center space-y-4">
            <BookOpen size={40} className="text-[#9A7432] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-[#172027]">No Articles Found</h3>
            <p className="text-sm text-[#4A5568]">Try searching for another topic or clear your search query.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-2.5 bg-[#9A7432] text-white text-xs font-bold uppercase rounded-none hover:bg-[#172027] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => setSelectedArticle(post)}
                className="group relative bg-white rounded-none overflow-hidden border border-[#9A7432]/30 shadow-md hover:shadow-[0_25px_60px_rgba(23,32,39,0.15)] hover:border-[#172027] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                {/* Light Flare Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                <div>
                  {/* Article Cover Image with Zoom */}
                  <div className="relative h-60 overflow-hidden bg-gray-100 rounded-none">
                    <Image
                      src={
                        post.image ||
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                      }
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Tag - SHARP CORNERS */}
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-none bg-[#172027]/90 backdrop-blur-md border border-[#9A7432]/40 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Article Info */}
                  <div className="p-7 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#9A7432] font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#172027] group-hover:text-[#9A7432] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[#4A5568] text-xs leading-relaxed line-clamp-3 font-sans font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-7 pt-0 flex items-center justify-between border-t border-[#9A7432]/15 mt-4">
                  <span className="text-[11px] text-[#4A5568] font-medium flex items-center gap-1">
                    <User size={12} className="text-[#9A7432]" /> {post.author}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172027] group-hover:text-[#9A7432] transition-colors uppercase tracking-wider">
                    Read Article{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1.5 transition-transform duration-300"
                    />
                  </span>
                </div>

                {/* Bottom Gold Accent Line */}
                <div className="h-1 w-12 bg-[#9A7432]/40 group-hover:w-full group-hover:bg-[#9A7432] transition-all duration-500" />
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── ARTICLE MODAL (SHARP CORNERS) ───────────────────────────────── */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FAF4ED] rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-[#9A7432]/40 relative text-[#172027] shadow-2xl space-y-6">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-none bg-[#172027] text-white hover:bg-[#9A7432] transition cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="px-4 py-1.5 rounded-none bg-[#9A7432]/15 border border-[#9A7432]/40 text-[#9A7432] text-[10px] font-bold uppercase tracking-widest inline-block">
              {selectedArticle.category}
            </span>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#172027] leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#4A5568] border-y border-[#9A7432]/20 py-3 font-sans">
              <span className="flex items-center gap-1.5 font-bold text-[#172027]">
                <User size={14} className="text-[#9A7432]" />{" "}
                {selectedArticle.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {selectedArticle.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {selectedArticle.readTime}
              </span>
            </div>

            <div className="relative h-64 sm:h-80 w-full rounded-none overflow-hidden border border-[#9A7432]/30">
              <Image
                src={
                  selectedArticle.image ||
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                }
                alt={selectedArticle.title}
                fill
                className="w-full h-full object-cover rounded-none"
              />
            </div>

            <div
              className="text-[#4A5568] text-sm leading-relaxed space-y-4 font-sans font-normal border-b border-[#9A7432]/20 pb-6"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content || "" }}
            />

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-7 py-3 bg-[#9A7432] text-white text-xs font-bold uppercase rounded-none hover:bg-[#172027] transition cursor-pointer tracking-widest"
              >
                Close Article
              </button>

              <Link
                href={`/blogs/${selectedArticle.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#172027] hover:text-[#9A7432] transition"
              >
                <span>Full Page View</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
