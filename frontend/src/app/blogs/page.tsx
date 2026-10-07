"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Search,
  User,
  MapPin,
  FileCheck,
  TrendingUp,
  Building2,
  Sparkles,
  Compass,
  CheckCircle,
  Newspaper,
  BookMarked
} from "lucide-react";

const TOPICS = [
  "All Topics",
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
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  const heroRef = useRef<HTMLDivElement>(null);
  const SpotlightRef = useRef<HTMLDivElement>(null);
  const driftContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IntersectionObserver for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Mouse Parallax Effect on Hero
    const heroEl = heroRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      if (SpotlightRef.current) {
        SpotlightRef.current.style.transform = `translate(${normX * -18}px, ${normY * -12}px)`;
      }
    };

    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove);
    }

    // Generate 10 Drifting Hollow Gold Squares
    const driftContainer = driftContainerRef.current;
    if (driftContainer && driftContainer.childElementCount === 0) {
      const sizes = [6, 10, 14];
      for (let i = 0; i < 10; i++) {
        const square = document.createElement("div");
        square.className = "drift-square";
        const size = sizes[i % 3];
        const left = Math.floor(Math.random() * 90) + 5;
        const duration = 10 + Math.random() * 8;
        const delay = -(Math.random() * duration);
        const opacity = 0.15 + Math.random() * 0.35;

        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.left = `${left}%`;
        square.style.bottom = `-20px`;
        square.style.opacity = `${opacity}`;
        square.style.animation = `floatSquare ${duration}s linear infinite ${delay}s`;
        driftContainer.appendChild(square);
      }
    }

    return () => {
      observer.disconnect();
      if (heroEl) {
        heroEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Filter blogs based on topic selection and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesQuery =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedTopic === "All Topics") return matchesQuery;

    const topicKey = selectedTopic.toLowerCase();
    const catMatch = blog.category.toLowerCase().includes(topicKey);
    const titleMatch = blog.title.toLowerCase().includes(topicKey);
    const excerptMatch = blog.excerpt.toLowerCase().includes(topicKey);

    return matchesQuery && (catMatch || titleMatch || excerptMatch);
  });

  return (
    <>
      <style>{`
        :root {
          --cream: #F8F7F3;
          --gold: #EEAF33;
          --gold-hover: #d99a22;
          --gold-glow: rgba(238, 175, 51, 0.35);
          --navy: #284153;
          --dark: #172027;
          --white: #ffffff;
          --text-dark: #172027;
          --text-muted: #5b6a75;
          --border-light: rgba(23, 32, 39, 0.12);
          --font-heading: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 22px;
          width: 100%;
        }

        /* DISTINCT EDITORIAL BLOG HERO SECTION */
        .blog-hero {
          background: linear-gradient(135deg, #F8F7F3 0%, #FFFFFF 60%, #F5F3EB 100%);
          color: var(--text-dark);
          padding-top: 140px;
          padding-bottom: 90px;
          position: relative;
          overflow: hidden;
          border-bottom: 2px solid var(--gold);
        }

        .drift-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .drift-square {
          position: absolute;
          border: 1.5px solid var(--gold);
          background: transparent;
          pointer-events: none;
        }

        @keyframes floatSquare {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: var(--opacity, 0.4); }
          90% { opacity: var(--opacity, 0.4); }
          100% { transform: translateY(-500px) rotate(180deg); opacity: 0; }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Left Column */
        .hero-eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(238, 175, 51, 0.15);
          border: 1px solid var(--gold);
          color: var(--dark);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-h1 {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 4.6vw, 4rem);
          font-weight: 600;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 20px;
        }

        .hero-h1 em {
          font-style: italic;
          font-weight: 600;
          background: linear-gradient(100deg, #EEAF33 30%, #ffdf8f 50%, #EEAF33 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          display: inline-block;
          animation: goldShine 3.5s linear infinite;
        }

        @keyframes goldShine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .hero-paragraph {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 28px;
          max-width: 620px;
        }

        /* Hero Integrated Search */
        .hero-search-box {
          position: relative;
          max-width: 540px;
          margin-bottom: 24px;
        }

        .hero-search-input {
          width: 100%;
          padding: 16px 20px 16px 52px;
          border-radius: 50px;
          border: 1.5px solid var(--border-light);
          background: var(--white);
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: var(--dark);
          outline: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .hero-search-input:focus {
          border-color: var(--gold);
          box-shadow: 0 12px 35px rgba(238, 175, 51, 0.22);
        }

        .hero-search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gold);
        }

        .hero-quick-chips {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .quick-tag {
          background: var(--white);
          border: 1px solid var(--border-light);
          color: var(--navy);
          padding: 5px 14px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .quick-tag:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--dark);
          transform: translateY(-2px);
        }

        /* Right Column Editorial Visual */
        .editorial-spotlight-card {
          background: var(--white);
          border-radius: 24px;
          border: 1px solid var(--border-light);
          padding: 32px;
          box-shadow: 0 25px 50px -12px rgba(40, 65, 83, 0.15);
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease-out;
        }

        .editorial-spotlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, var(--gold), #ffdf8f, var(--navy));
        }

        .spotlight-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .spotlight-label {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .spotlight-edition {
          font-size: 0.75rem;
          background: var(--cream);
          padding: 4px 10px;
          border-radius: 50px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .spotlight-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.25;
          margin-bottom: 14px;
        }

        .spotlight-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .spotlight-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          background: var(--cream);
          padding: 16px;
          border-radius: 16px;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--navy);
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .fade-up-init {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUpAnim 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.36s; }

        @keyframes fadeUpAnim {
          to { opacity: 1; transform: translateY(0); }
        }

        /* SECTION PARTITION BADGE BAR */
        .section-partition {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          padding-top: 20px;
        }

        .partition-line {
          flex: 1;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(238, 175, 51, 0.4), transparent);
        }

        .partition-pill {
          background: #F8F7F3;
          border: 1px solid rgba(238, 175, 51, 0.5);
          color: var(--navy);
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 22px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(238, 175, 51, 0.15);
        }

        .partition-icon {
          color: var(--gold);
          font-size: 0.95rem;
        }

        /* TOPIC TILES & FILTER SECTION */
        .topics-filter-section {
          padding: 50px 0 30px;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 36px;
        }

        .eyebrow {
          color: var(--gold);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.6;
        }

        .topic-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 30px;
        }

        .topic-pill-btn {
          background: var(--cream);
          border: 1px solid var(--border-light);
          color: var(--dark);
          padding: 9px 18px;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .topic-pill-btn:hover {
          background: rgba(238, 175, 51, 0.15);
          border-color: var(--gold);
          color: var(--navy);
          transform: translateY(-2px);
        }

        .topic-pill-btn.active {
          background: var(--navy);
          color: var(--white);
          border-color: var(--navy);
          box-shadow: 0 4px 14px rgba(40, 65, 83, 0.25);
        }

        /* ARTICLES GRID */
        .articles-section {
          padding: 20px 0 80px;
          background: var(--white);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .article-card {
          background: var(--white);
          border-radius: 20px;
          border: 1px solid var(--border-light);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .article-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--gold), #ffdf8f);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .article-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 45px rgba(40, 65, 83, 0.12);
          border-color: rgba(238, 175, 51, 0.5);
        }

        .article-card:hover::before {
          opacity: 1;
        }

        .article-cat-badge {
          display: inline-block;
          align-self: flex-start;
          background: rgba(238, 175, 51, 0.14);
          color: var(--dark);
          border: 1px solid rgba(238, 175, 51, 0.4);
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .article-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.25;
          margin-bottom: 12px;
          transition: color 0.25s ease;
        }

        .article-card:hover .article-title {
          color: #d99a22;
        }

        .article-excerpt {
          color: var(--text-muted);
          font-size: 0.94rem;
          line-height: 1.6;
          margin-bottom: 22px;
          flex-grow: 1;
        }

        .article-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid rgba(23, 32, 39, 0.08);
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--navy);
          text-decoration: none;
          margin-top: 16px;
          transition: all 0.25s ease;
        }

        .read-more-link:hover {
          color: var(--gold);
          transform: translateX(4px);
        }

        /* MAKE BETTER PROPERTY DECISIONS SECTION */
        .value-prop-section {
          background: var(--cream);
          padding: 90px 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .value-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-top: 40px;
        }

        .value-card {
          background: var(--white);
          border-radius: 16px;
          border: 1px solid var(--border-light);
          padding: 26px 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(40, 65, 83, 0.1);
          border-color: var(--gold);
        }

        .value-icon-box {
          width: 48px;
          height: 48px;
          background: var(--navy);
          color: var(--gold);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .value-card-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .value-card-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.55;
        }

        /* STAY UPDATED CTA BAND */
        .cta-band {
          background: linear-gradient(135deg, var(--navy) 0%, var(--dark) 100%);
          color: var(--white);
          border-radius: 24px;
          padding: 60px 30px;
          text-align: center;
          margin: 70px auto 90px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(23, 32, 39, 0.25);
        }

        .cta-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 700;
          margin-bottom: 14px;
        }

        .cta-desc {
          color: #d5dde2;
          font-size: 1.08rem;
          max-width: 620px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .btn-gold {
          background: var(--gold);
          color: var(--dark);
          font-weight: 700;
          font-size: 0.98rem;
          padding: 15px 28px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 2px solid var(--gold);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(238, 175, 51, 0.25);
          cursor: pointer;
        }

        .btn-gold:hover {
          background: #f5b942;
          border-color: #f5b942;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px var(--gold-glow);
        }

        .btn-outline-navy {
          background: transparent;
          color: var(--white);
          font-weight: 700;
          font-size: 0.98rem;
          padding: 15px 28px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--white);
          transition: all 0.3s ease;
        }

        .btn-outline-navy:hover {
          background: var(--white);
          color: var(--navy);
          transform: translateY(-3px);
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
          .value-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .blog-hero { padding-top: 120px; padding-bottom: 70px; text-align: center; }
          .hero-paragraph { margin-left: auto; margin-right: auto; }
          .hero-search-box { margin-left: auto; margin-right: auto; }
          .hero-quick-chips { justify-content: center; }
        }

        @media (max-width: 640px) {
          .articles-grid { grid-template-columns: 1fr; }
          .value-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* DISTINCT DEDICATED EDITORIAL HERO SECTION */}
      <section className="blog-hero" ref={heroRef}>
        <div className="drift-container" ref={driftContainerRef}></div>

        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <div>
              <div className="hero-eyebrow-badge fade-up-init">
                <BookMarked size={14} className="text-[#EEAF33]" />
                <span>BLOGS & INSIGHTS HUB</span>
              </div>

              <h1 className="hero-h1 fade-up-init delay-1">
                Nagpur Real Estate & <em>Property Insights</em>
              </h1>

              <p className="hero-paragraph fade-up-init delay-2">
                Making a property decision becomes easier when you have the right information.
                Our real estate blog brings together practical property guides, investment insights,
                buying tips, and information about real estate trends to help homebuyers and investors
                make informed decisions.
              </p>

              {/* Integrated Hero Search Input */}
              <div className="hero-search-box fade-up-init delay-3">
                <Search className="hero-search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search articles, Wardha Road, plot guides, NMRDA..."
                  className="hero-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Hero Quick Search Tags */}
              <div className="hero-quick-chips fade-up-init delay-4">
                <span className="font-semibold text-slate-500 mr-1">Popular:</span>
                <button type="button" className="quick-tag" onClick={() => setSelectedTopic("Best locations to buy property in Nagpur")}>
                  Wardha Road & MIHAN
                </button>
                <button type="button" className="quick-tag" onClick={() => setSelectedTopic("Plot buying guides")}>
                  NMRDA & RL Rules
                </button>
                <button type="button" className="quick-tag" onClick={() => setSelectedTopic("First-time homebuying tips")}>
                  First-Time Buying
                </button>
              </div>
            </div>

            {/* Right Column - Dedicated Editorial Magazine Spotlight Card */}
            <div className="fade-up-init delay-2">
              <div className="editorial-spotlight-card" ref={SpotlightRef}>
                <div className="spotlight-header">
                  <span className="spotlight-label">
                    <Sparkles size={14} />
                    <span>INSIGHTS SPOTLIGHT</span>
                  </span>
                  <span className="spotlight-edition">2026 NAGPUR EDITION</span>
                </div>

                <h3 className="spotlight-title">
                  Navigating Nagpur's Emerging Real Estate Corridors
                </h3>
                <p className="spotlight-desc">
                  Explore expert analysis on Metro Phase II expansion, Wardha Road residential plots, and RERA/NMRDA verification standards.
                </p>

                <div className="spotlight-stats-grid">
                  <div>
                    <div className="stat-num">100%</div>
                    <div className="stat-lbl">Verified Content</div>
                  </div>
                  <div>
                    <div className="stat-num">11+</div>
                    <div className="stat-lbl">Property Topics</div>
                  </div>
                  <div>
                    <div className="stat-num">Free</div>
                    <div className="stat-lbl">Buyer Guidance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PARTITION DIVIDER BAR */}
      <div className="container">
        <div className="section-partition">
          <div className="partition-line"></div>
          <div className="partition-pill">
            <span className="partition-icon">◈</span>
            <span className="partition-text">EXPLORE PROPERTY GUIDES & INSIGHTS</span>
          </div>
          <div className="partition-line"></div>
        </div>
      </div>



      {/* ARTICLES CARDS GRID */}
      <section className="articles-section" id="articles">
        <div className="container">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-[#F8F7F3] rounded-3xl border border-slate-200">
              <BookOpen size={48} className="mx-auto text-[#EEAF33] mb-4" />
              <h3 className="font-serif text-2xl font-bold text-[#284153]">No matching articles found</h3>
              <p className="text-slate-500 mt-2">Try clearing your search query or selecting "All Topics".</p>
              <button
                onClick={() => { setSelectedTopic("All Topics"); setSearchQuery(""); }}
                className="mt-6 btn-gold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="articles-grid">
              {filteredBlogs.map((blog) => (
                <article key={blog.slug} className="article-card reveal">
                  <div>
                    <span className="article-cat-badge">{blog.category}</span>
                    <h3 className="article-title">
                      <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="article-excerpt">{blog.excerpt}</p>
                  </div>

                  <div>
                    <div className="article-meta">
                      <span className="flex items-center gap-1">
                        <User size={13} className="text-[#EEAF33]" /> {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-[#EEAF33]" /> {blog.readTime}
                      </span>
                    </div>

                    <Link href={`/blogs/${blog.slug}`} className="read-more-link">
                      <span>Read Full Article</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MAKE BETTER PROPERTY DECISIONS (VALUE PROPOSITION) */}
      <section className="value-prop-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">INFORMED CHOICE</div>
            <h2 className="section-title">Make Better Property Decisions</h2>
            <p className="section-subtitle">
              Buying a home or investing in property requires more than simply comparing prices.
              Location, connectivity, infrastructure, development, documentation, surrounding facilities,
              and future potential can all play an important role in choosing the right property. Our articles
              explain these topics in simple language to help you understand the important factors before making a decision.
            </p>
          </div>

          <div className="value-grid reveal">
            <div className="value-card">
              <div className="value-icon-box">
                <MapPin size={22} />
              </div>
              <h3 className="value-card-title">Location & Connectivity</h3>
              <p className="value-card-desc">
                Evaluating proximity to major road corridors, Metro Phase II stations, and commute times to key Nagpur employment hubs.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Building2 size={22} />
              </div>
              <h3 className="value-card-title">Infrastructure & Amenities</h3>
              <p className="value-card-desc">
                Checking power, water, internal concrete roads, drainage systems, and modern gated township facilities.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <FileCheck size={22} />
              </div>
              <h3 className="value-card-title">Documentation & Approvals</h3>
              <p className="value-card-desc">
                Verifying NMRDA layout sanctions, Release Letters (RL), RERA registration, and clear land ownership titles.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <TrendingUp size={22} />
              </div>
              <h3 className="value-card-title">Future Growth Potential</h3>
              <p className="value-card-desc">
                Analyzing long-term capital appreciation, surrounding commercial developments, and neighborhood potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STAY UPDATED CTA BAND */}
      <section className="container">
        <div className="cta-band reveal">
          <h2 className="cta-title">Stay Updated With Nagpur Property Insights</h2>
          <p className="cta-desc">
            Whether you are searching for plots for sale in Nagpur, exploring residential projects,
            or considering a property investment, our latest articles can help you stay informed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#articles" className="btn-gold">
              <span>Read Our Latest Blogs</span>
              <span className="arrow">→</span>
            </a>
            <a href="tel:[Your Phone Number]" className="btn-outline-navy">
              <span>☎ Talk to Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
