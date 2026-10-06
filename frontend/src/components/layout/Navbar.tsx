"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

export const NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blogs" },
  { label: "Gallery", href: "/projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`luxury-navbar-wrapper ${scrolled ? "luxury-navbar-scrolled" : ""}`}>
        <nav className="luxury-navbar" aria-label="Primary navigation">
          {/* Ambient Glow behind the pill */}
          <div className="luxury-navbar-glow" aria-hidden="true" />

          {/* Left Brand / Logo */}
          <Link
            href="/"
            className="group relative flex items-center shrink-0 transition-opacity hover:opacity-90 py-1"
            aria-label="Vision Square Infrastructure Home"
          >
            <Image
              src="/images/logo/logo.png"
              alt="VisionSquare Infra"
              width={220}
              height={56}
              priority
              className="h-9 sm:h-10 md:h-[42px] w-auto object-contain"
            />
          </Link>

          {/* Center-Right Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 xl:gap-12 ml-auto mr-6 lg:mr-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`luxury-nav-link ${isActive ? "luxury-nav-link-active" : ""}`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#eeaf33] shadow-[0_0_8px_#eeaf33]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Button ("Book Site Visit →") */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link href="/contact" className="luxury-cta-btn group">
              <span className="font-serif">Book Site Visit</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-[#eeaf33]/30 bg-[#284153]/40 text-[#eeaf33] transition-all hover:bg-[#284153]/70 hover:border-[#eeaf33]/60"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
