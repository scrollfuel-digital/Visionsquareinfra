
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CurvedHeader from "@/components/ui/curved-menu";

const links = [
  { label: "About", to: "/about-us" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Detect scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile drawer after navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ================= MAIN NAVBAR (TOP OF PAGE) ================= */}
      <AnimatePresence mode="wait">
        {!scrolled ? (
          <motion.header
            key="header-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-x-0 top-0 z-50"
          >
            <div className="w-full bg-[#121110]/80 backdrop-blur-lg border-b border-white/10">
              <nav className="relative mx-auto w-full max-w-7xl flex items-center justify-between h-16 sm:h-[72px] md:h-20 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="relative z-20 flex h-full shrink-0 items-center">
                  <Link href="/" className="group relative flex h-full items-center" aria-label="VisionSquare Infra Home">
                    <div className="relative flex h-14 sm:h-16 md:h-[72px] w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[240px] items-center">
                      <Image
                        src="/images/logo/visionS infra.png"
                        alt="VisionSquare Infra"
                        width={500}
                        height={200}
                        priority
                        className="h-12 sm:h-14 md:h-16 w-auto max-w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </Link>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 lg:gap-10">
                  {links.map((link) => {
                    const isActive = pathname === link.to;

                    return (
                      <li key={link.to} className="relative">
                        <Link
                          href={link.to}
                          className={`group relative block whitespace-nowrap py-2 lg:text-xl transition-colors duration-300 ${
                            isActive ? "text-[#DE9F20] font-medium" : "text-[#F8F7F3] font-normal hover:text-[#EEAF33]"
                          }`}
                          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                        >
                          {link.label}
                          {isActive && (
                            <motion.span
                              layoutId="activeTabUnderline"
                              className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] rounded-full bg-[#DE9F20] shadow-[0_2px_8px_rgba(229,169,60,0.55)]"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Desktop CTA */}
                <div className="relative z-30 ml-auto hidden md:block">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base font-medium text-[#120F0A] shadow-[0_4px_18px_rgba(229,169,60,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(135deg, #F6C85E 0%, #E5A93C 50%, #C88A24 100%)",
                      fontFamily: '"Playfair Display", Georgia, serif',
                    }}
                  >
                    <span>Book Site Visit</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} />
                  </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="relative z-30 ml-auto md:hidden">
                  <CurvedHeader />
                </div>
              </nav>
            </div>
          </motion.header>
        ) : (
          <motion.div
            key="header-scrolled"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3 pointer-events-auto"
          >
            {/* Pill 1: Contact Us Capsule */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0d1013] text-white border border-white/15 shadow-2xl font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95"
            >
              <span className="w-2.5 h-2.5 rounded-full border-2 border-white/80 shrink-0 transition-transform duration-300 group-hover:scale-125" />
              <span>CONTACT US</span>
            </Link>

            {/* Pill 2: Menu Capsule with Curved Navigation Drawer */}
            <CurvedHeader />
          </motion.div>
        )}
      </AnimatePresence>


      {/* ================= NAVIGATION DRAWER ================= */}

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100]">
            {/* Background overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                absolute
                inset-0
                bg-black/70
                backdrop-blur-md
              "
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile drawer */}

            <motion.div
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 220,
              }}
              className="
                absolute
                right-0
                top-0
                flex
                h-full
                w-[85%]
                max-w-[360px]
                flex-col
                overflow-y-auto
                border-l
                border-white/15
                bg-[#121110]
                px-6
                pb-8
                pt-6
                text-white
                shadow-2xl
              "
            >
              {/* Mobile logo and close button */}

              <div
                className="
                  mb-8
                  flex
                  min-h-[72px]
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-white/10
                  pb-5
                "
              >
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex min-w-0 flex-1 items-center"
                  aria-label="VisionSquare Infra Home"
                >
                  <div className="relative flex h-14 w-full max-w-[220px] items-center">
                    <Image
                      src="/images/logo/visionS infra.png"
                      alt="VisionSquare Infra"
                      width={300}
                      height={100}
                      priority
                      className="
                        h-12
                        sm:h-14
                        w-auto
                        max-w-full
                        object-contain
                        object-left
                      "
                    />
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    transition-all
                    hover:bg-white/20
                    active:scale-95
                  "
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile navigation links */}

              <ul className="space-y-3">
                {links.map((link) => {
                  const isActive = pathname === link.to;

                  return (
                    <li key={link.to}>
                      <Link
                        href={link.to}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          border
                          px-4
                          py-3
                          text-xl
                          transition-all
                          duration-200
                          ${
                            isActive
                              ? "border-[#E5A93C]/30 bg-[#E5A93C]/15 text-[#E5A93C] font-medium"
                              : "border-transparent text-white/85 hover:border-white/10 hover:bg-white/5 hover:text-[#EEAF33] font-normal"
                          }
                        `}
                        style={{
                          fontFamily:
                            '"Playfair Display", Georgia, serif',
                        }}
                      >
                        <span>{link.label}</span>

                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CTA */}

              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    py-3.5
                    text-center
                    font-medium
                    text-[#120F0A]
                    shadow-[0_4px_20px_rgba(229,169,60,0.4)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #F6C85E 0%, #E5A93C 50%, #C88A24 100%)",
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                  }}
                >
                  <span>Book Site Visit</span>

                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={2.2}
                  />
                </Link>
              </div>

              {/* Bottom text */}

              <div className="mt-auto pt-8 text-center">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                  VisionSquare Infra Private Limited
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export { Navbar };
export default Navbar;
