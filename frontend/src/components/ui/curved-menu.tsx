"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Phone, MapPin, Globe, Mail, ArrowUpRight } from "lucide-react";

export interface iNavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

export interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void;
  index: number;
}

export interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
}

export interface iHeaderProps {
  navItems?: iNavItem[];
  footer?: React.ReactNode;
  buttonClassName?: string;
}

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
};

export const defaultNavItems: iNavItem[] = [
  {
    heading: "Home",
    href: "/",
    subheading: "Signature Luxury Residences",
  },
  {
    heading: "About Us",
    href: "/about-us",
    subheading: "Architectural Excellence",
  },
  {
    heading: "Projects",
    href: "/projects",
    subheading: "Our Curated Enclaves",
  },
  {
    heading: "Blogs",
    href: "/blogs",
    subheading: "Insights & Updates",
  },
  {
    heading: "Contact",
    href: "/contact",
    subheading: "Book a Site Visit",
  },
];

const CustomFooter: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-sm justify-between text-white/80 px-8 sm:px-16 py-6 border-t border-white/10 gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-white/70">
          <a
            href="tel:+919876543210"
            className="hover:text-[#EEAF33] transition-colors flex items-center gap-1.5 text-xs"
            aria-label="Phone"
          >
            <Phone size={16} />
            <span>Call Us</span>
          </a>
          <a
            href="mailto:contact@visionsquareinfra.com"
            className="hover:text-[#EEAF33] transition-colors flex items-center gap-1.5 text-xs"
            aria-label="Email"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <a
            href="/contact"
            className="hover:text-[#EEAF33] transition-colors flex items-center gap-1.5 text-xs"
            aria-label="Website"
          >
            <Globe size={16} />
            <span>Visit</span>
          </a>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#EEAF33]">
          Nagpur, Maharashtra
        </span>
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
        VisionSquare Infra Private Limited
      </p>
    </div>
  );
};

const NavLink: React.FC<iNavLinkProps> = ({
  heading,
  href,
  setIsActive,
  index,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-white/15 py-4 sm:py-6 transition-colors duration-500 uppercase"
    >
      <Link ref={ref} onMouseMove={handleMouseMove} href={href} className="w-full">
        <div className="relative flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <span className="text-[#EEAF33] transition-colors duration-500 text-2xl sm:text-3xl font-serif italic">
              0{index}.
            </span>
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 8 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.04,
                delayChildren: 0.1,
              }}
              className="relative z-10 block text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white transition-colors duration-300 group-hover:text-[#EEAF33]"
            >
              {heading.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 4 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>
          </div>
          <span className="text-xs text-white/50 group-hover:text-[#EEAF33] transition-colors font-sans tracking-widest hidden sm:inline-block">
            Explore →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const Curve: React.FC = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!height) return null;

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full pointer-events-none"
      style={{ fill: "#172027" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

const CurvedNavbar: React.FC<
  iCurvedNavbarProps & { footer?: React.ReactNode }
> = ({ setIsActive, navItems, footer }) => {
  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100dvh] w-screen max-w-lg fixed right-0 top-0 z-[100] bg-[#172027] text-white shadow-2xl"
    >
      <div className="h-full pt-16 flex flex-col justify-between">
        <div className="flex flex-col text-5xl gap-3 px-8 sm:px-16">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#EEAF33] font-bold">
              Navigation
            </span>
            <button
              onClick={() => setIsActive(false)}
              className="p-1 rounded-full text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <section className="bg-transparent mt-2">
            <div className="mx-auto max-w-7xl">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.href}
                  {...item}
                  setIsActive={setIsActive}
                  index={index + 1}
                />
              ))}
            </div>
          </section>
        </div>
        {footer}
      </div>
      <Curve />
    </motion.div>
  );
};

const Header: React.FC<iHeaderProps> = ({
  navItems = defaultNavItems,
  footer = <CustomFooter />,
  buttonClassName = "",
}) => {
  const [isActive, setIsActive] = useState(false);

  // Close curved drawer on window resize or route change
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Pill Button matching exact design image (media_1791547055912.png) */}
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className={`inline-flex items-center justify-center px-6 py-2.5 sm:py-3 rounded-full bg-[#EAEAEA] text-[#172027] border border-black/10 shadow-xl font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 cursor-pointer ${buttonClassName}`}
      >
        <span>{isActive ? "CLOSE" : "MENU"}</span>
      </button>

      <AnimatePresence mode="wait">
        {isActive && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsActive(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            />
            <CurvedNavbar
              setIsActive={setIsActive}
              navItems={navItems}
              footer={footer}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
