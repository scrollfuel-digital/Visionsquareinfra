"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

// INDIVIDUAL MENU IMAGE STYLING CONFIGURATION FOR VISIONSQUARE INFRA
const NAV_LINKS = [
  {
    id: 1,
    title: "Home",
    path: "/",
    image: "/images/projects/skyconnect-7-crown.jpeg",
    fit: "object-cover",
    position: "object-center",
    scale: "scale-100",
    className: "w-full h-full",
    style: {},
  },
  {
    id: 2,
    title: "About",
    path: "/about-us",
    image: "/images/projects/pyramid-amara.jpg",
    fit: "object-cover",
    position: "object-center",
    scale: "scale-100",
    className: "w-full h-full",
    style: {},
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    image: "/images/projects/vision-imperial.jpg",
    fit: "object-cover",
    position: "object-[50%_20%]",
    scale: "scale-100",
    className: "w-full h-full",
    style: {},
  },
  {
    id: 5,
    title: "Blog",
    path: "/blogs",
    image: "/images/projects/the-one-rise.jpeg",
    fit: "object-cover",
    position: "object-center",
    scale: "scale-100",
    className: "w-full h-full",
    style: {},
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    image: "/images/projects/infinity-elegance.jpeg",
    fit: "object-cover",
    position: "object-center",
    scale: "scale-100",
    className: "w-full h-full",
    style: {},
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(NAV_LINKS[0]);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* MAIN LOGO - Absolute (Scrolls naturally with the page, NOT fixed) */}
      <div className="absolute top-4 left-4 sm:left-6 md:left-10 z-30">
        <Link href="/" aria-label="VisionSquare Infra Home">
          <Image
            src="/images/logo/VISIONSQUARE infra.png"
            alt="VisionSquare Infra Logo"
            width={300}
            height={120}
            priority
            className="h-11 sm:h-14 md:h-16 lg:h-18 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
          />
        </Link>
      </div>

      {/* Header Menu Button - Prominent & Large (Scrolls naturally with the page, NOT fixed) */}
      {!open && (
        <header className="absolute top-6 right-6 sm:right-10 md:right-14 z-40">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-3.5 text-[#9A7432] hover:text-white transition duration-300 group cursor-pointer"
          >
            <span className="hidden sm:block text-lg sm:text-xl font-bold tracking-[0.25em] uppercase font-cinzel">
              Menu
            </span>

            <span className="flex flex-col gap-1.5 w-7 sm:w-8">
              <span className="h-[2.5px] bg-[#9A7432] group-hover:bg-white transition-colors rounded-full"></span>
              <span className="h-[2.5px] w-5 self-end bg-[#9A7432] group-hover:bg-white group-hover:w-full transition-all rounded-full"></span>
            </span>
          </button>
        </header>
      )}

      {/* Full Screen Menu Drawer - TRANSPARENT GLASSMORPHISM BACKDROP */}
      <div
        className={`fixed inset-0 z-50 bg-[#172027]/90 backdrop-blur-2xl transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo inside Menu Page - CENTER ALIGNED ON LEFT COLUMN */}
        <div className="absolute top-6 left-0 right-0 lg:right-auto lg:w-[420px] flex justify-center z-20 pointer-events-auto">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo/VISIONSQUARE infra.png"
              alt="VisionSquare Infra Logo"
              width={300}
              height={120}
              priority
              className="h-11 sm:h-14 md:h-16 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-5 right-6 sm:top-7 sm:right-10 z-20 flex items-center gap-3 px-7 py-3 rounded-full text-white text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] font-cinzel cursor-pointer shadow-lg select-none border-0 outline-none bg-[#9A7432] hover:bg-[#172027] transition-colors"
        >
          <span>CLOSE</span>
          <X size={20} strokeWidth={2.5} className="text-white" />
        </button>

        <div className="flex h-full flex-col lg:flex-row overflow-y-auto">
          {/* Navigation - CENTER ALIGNED & INCREASED ELEGANT FONT SIZE */}
          <nav className="w-full lg:w-[420px] lg:border-r border-white/15 flex flex-col justify-center items-center text-center px-6 sm:px-10 pt-36 pb-20 space-y-3 relative z-10 bg-[#172027]">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.id}
                  href={link.path}
                  onMouseEnter={() => setHovered(link)}
                  onClick={() => setOpen(false)}
                  className={`group relative py-3.5 uppercase tracking-[0.35em] text-xl sm:text-2xl font-cinzel font-medium transition-all duration-300 flex flex-col items-center ${
                    isActive
                      ? "text-[#9A7432]"
                      : "text-white/80 hover:text-[#9A7432]"
                  }`}
                >
                  {link.title}
                  <span className="h-[2px] w-0 bg-[#9A7432] transition-all duration-300 group-hover:w-16 mt-1"></span>
                </Link>
              );
            })}
          </nav>

          {/* Right Image Preview - INDIVIDUAL PER-IMAGE SIZE & POSITION CONTROLS */}
          <div className="hidden lg:block flex-1 relative overflow-hidden bg-[#172027] pointer-events-none">
            {NAV_LINKS.map((link) => (
              <img
                key={link.id}
                src={link.image}
                alt={link.title}
                className={`absolute inset-0 ${link.fit || "object-cover"} ${
                  link.position || "object-center"
                } ${
                  link.className || "w-full h-full"
                } transition-all duration-700 ${
                  hovered?.id === link.id ? "opacity-90" : "opacity-0"
                }`}
                style={link.style || {}}
              />
            ))}

            {/* Left Edge Dark Gradient Blend into Navigation Menu */}
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#172027] via-[#172027]/50 to-transparent pointer-events-none w-36"></div>
          </div>
        </div>

        {/* Back To Top Button */}
        <button
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setOpen(false);
          }}
          className="absolute bottom-8 right-8 w-12 h-12 rounded-2xl bg-[#9A7432] hover:bg-white text-white hover:text-[#172027] flex items-center justify-center shadow-xl cursor-pointer font-bold text-lg transition-colors"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </>
  );
}

export default Navbar;
