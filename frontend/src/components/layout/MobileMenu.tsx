"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#172027]/96 backdrop-blur-2xl transition-all duration-300 md:hidden animate-in fade-in">
      {/* Top Header in drawer */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#284153]">
        <span className="font-serif text-lg tracking-wider text-[#eeaf33] uppercase text-xs font-semibold">
          Menu
        </span>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eeaf33]/30 bg-[#284153]/50 text-[#eeaf33] transition-colors hover:border-[#eeaf33]/60 hover:bg-[#284153]"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col items-center justify-center gap-6 px-6 py-8">
        {links.map((link, idx) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="font-serif text-3xl font-medium tracking-wide text-[#F8F7F3] transition-all duration-200 hover:scale-105 hover:text-[#eeaf33]"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-4 w-full max-w-xs">
          <Link
            href="/contact"
            onClick={onClose}
            className="luxury-cta-btn flex w-full items-center justify-center py-3.5 text-base"
          >
            <span>Book Site Visit</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      {/* Footer Info */}
      <div className="border-t border-[#284153] bg-[#172027] px-6 py-6 text-xs text-[#F8F7F3]/70">
        <div className="flex flex-col gap-2.5 max-w-xs mx-auto">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-[#eeaf33]" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-[#eeaf33]" />
            <span>info@visionsquareinfra.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#eeaf33]" />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
