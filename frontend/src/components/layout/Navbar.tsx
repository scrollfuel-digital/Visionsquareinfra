"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 pointer-events-none transition-all duration-300 ${
          scrolled ? "py-2.5 sm:py-3" : "py-3.5 sm:py-5"
        }`}
      >
        {/* Golden Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-28 bg-[radial-gradient(ellipse_at_top,_rgba(229,169,60,0.22)_0%,_transparent_70%)] blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            className="
              pointer-events-auto
              relative
              flex
              items-center
              justify-between
              rounded-full
              h-16
              sm:h-[72px]
              md:h-20
              px-5
              sm:px-8
              md:px-10
              transition-all
              duration-300
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, rgba(12,12,15,0.22) 100%), rgba(18,18,22,0.22)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow:
                "inset 0 1.5px 2px rgba(255,255,255,0.4), inset 0 0 20px rgba(231,197,139,0.15), 0 10px 30px rgba(0,0,0,0.65)",
            }}
          >
            {/* =====================================================
                LOGO
                The logo fits inside the rounded navbar pill container.
            ====================================================== */}
            <div
              className="
                relative
                z-20
                flex
                items-center
                h-full
                pointer-events-auto
              "
            >
              <Link
                href="/"
                className="group relative flex items-center h-full"
                aria-label="VisionSquare Infra Home"
              >
                <Image
                  src="/images/logo/visionS infra.png"
                  alt="VisionSquare Infra"
                  width={500}
                  height={200}
                  priority
                  className="
                    w-auto
                    h-10
                    sm:h-12
                    md:h-14
                    lg:h-[58px]
                    max-h-[80%]
                    object-contain
                    object-left
                    transition-transform
                    duration-300
                    group-hover:scale-[1.02]
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
                  "
                />
              </Link>
            </div>

            {/* =====================================================
                DESKTOP NAVIGATION
            ====================================================== */}
            <ul
              className="
                hidden
                md:flex
                items-center
                gap-7
                lg:gap-10
                absolute
                left-1/2
                -translate-x-1/2
              "
            >
              {links.map((l) => {
                const isActive = pathname === l.to;

                return (
                  <li key={l.to} className="relative">
                    <Link
                      href={l.to}
                      className={`
                        relative
                        block
                        py-1
                        text-lg
                        lg:text-xl
                        whitespace-nowrap
                        transition-colors
                        duration-200
                        ${
                          isActive
                            ? "text-white font-medium"
                            : "text-white/80 hover:text-white font-normal"
                        }
                      `}
                      style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                      }}
                    >
                      {l.label}

                      {isActive ? (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="
                            absolute
                            -bottom-1.5
                            left-0
                            right-0
                            h-[2.5px]
                            bg-[#E5A93C]
                            rounded-full
                            shadow-[0_2px_8px_rgba(229,169,60,0.8)]
                          "
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      ) : (
                        <span
                          className="
                            absolute
                            -bottom-1.5
                            left-1/2
                            right-1/2
                            h-[2px]
                            bg-[#E5A93C]/70
                            rounded-full
                            transition-all
                            duration-300
                            opacity-0
                            hover:opacity-100
                          "
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* =====================================================
                DESKTOP CTA
            ====================================================== */}
            <div className="hidden md:block ml-auto relative z-30">
              <Link
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-2.5
                  lg:px-6
                  lg:py-3
                  text-sm
                  lg:text-base
                  font-medium
                  text-[#120F0A]
                  shadow-[0_4px_18px_rgba(229,169,60,0.35)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:shadow-[0_6px_22px_rgba(229,169,60,0.5)]
                  active:scale-[0.98]
                  whitespace-nowrap
                "
                style={{
                  background:
                    "linear-gradient(135deg, #F6C85E 0%, #E5A93C 50%, #C88A24 100%)",
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                <span>Book Site Visit</span>

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.2}
                />
              </Link>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ====================================================== */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="
                ml-auto
                flex
                md:hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                border
                border-white/20
                transition-all
                hover:bg-white/20
                active:scale-95
                relative
                z-30
              "
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu
                className="h-5 w-5"
                strokeWidth={2.2}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* ==========================================================
          MOBILE GLASS DRAWER
      =========================================================== */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Background Overlay */}
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
            />

            {/* Mobile Drawer */}
            <motion.div
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
                bg-[#121110]
                border-l
                border-white/15
                px-6
                pb-8
                pt-6
                shadow-2xl
                text-white
              "
            >
              {/* Mobile Logo + Close */}
              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  pb-5
                "
              >
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/images/logo/visionS infra.png"
                    alt="VisionSquare Infra"
                    width={300}
                    height={100}
                    priority
                    className="
                      h-16
                      sm:h-[72px]
                      w-auto
                      max-w-[240px]
                      object-contain
                      object-left
                    "
                  />
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
                    hover:bg-white/20
                    transition-all
                    active:scale-95
                  "
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <ul className="space-y-3">
                {links.map((l) => {
                  const isActive = pathname === l.to;

                  return (
                    <li key={l.to}>
                      <Link
                        href={l.to}
                        onClick={() => setOpen(false)}
                        className={`
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3
                          text-xl
                          transition-all
                          duration-200
                          ${
                            isActive
                              ? "bg-[#E5A93C]/15 text-[#E5A93C] font-medium border border-[#E5A93C]/30"
                              : "text-white/80 hover:bg-white/5 hover:text-white font-normal"
                          }
                        `}
                        style={{
                          fontFamily:
                            '"Playfair Display", Georgia, serif',
                        }}
                      >
                        <span>{l.label}</span>

                        {isActive && (
                          <div className="h-2 w-2 rounded-full bg-[#E5A93C]" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-8 pt-4 border-t border-white/10">
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

              {/* Bottom Text */}
              <div className="mt-auto pt-8 text-center">
                <p className="text-[11px] tracking-[0.25em] text-white/40 uppercase">
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