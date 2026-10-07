"use client";

import React, { useEffect, useState, useRef } from "react";
import { submitContactForm } from "@/services/contactService";
import type { ContactFormData } from "@/types/contact";

export default function ContactPage() {
  const WHATSAPP_NUMBER = "[Your WhatsApp Number]";

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNum: "",
    emailAdd: "",
    propReq: "Residential Project",
    budgetRange: "Select budget",
    contactTime: "Anytime",
    messageText: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const heroRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<SVGSVGElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
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

      if (buildingRef.current) {
        buildingRef.current.style.transform = `translate(${normX * -22}px, ${normY * -16}px)`;
      }
      if (card1Ref.current) {
        card1Ref.current.style.transform = `translate(${normX * 14}px, ${normY * 14}px)`;
      }
      if (card2Ref.current) {
        card2Ref.current.style.transform = `translate(${normX * 28}px, ${normY * 28}px)`;
      }
      if (card3Ref.current) {
        card3Ref.current.style.transform = `translate(${normX * 42}px, ${normY * 42}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (buildingRef.current) buildingRef.current.style.transform = "translate(0px, 0px)";
      if (card1Ref.current) card1Ref.current.style.transform = "translate(0px, 0px)";
      if (card2Ref.current) card2Ref.current.style.transform = "translate(0px, 0px)";
      if (card3Ref.current) card3Ref.current.style.transform = "translate(0px, 0px)";
    };

    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove);
      heroEl.addEventListener("mouseleave", handleMouseLeave);
    }

    // Generate 12 Drifting Hollow Gold Squares
    const driftContainer = driftContainerRef.current;
    if (driftContainer && driftContainer.children.length === 0) {
      const sizes = [6, 10, 14];
      for (let i = 0; i < 12; i++) {
        const square = document.createElement("div");
        square.className = "drift-square";
        const size = sizes[i % 3];
        const left = Math.floor(Math.random() * 90) + 5;
        const duration = 9 + Math.random() * 8;
        const delay = -(Math.random() * duration);
        const opacity = 0.2 + Math.random() * 0.45;

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
        heroEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const cleanPhone = formData.phoneNum.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length !== 10) {
      newErrors.phoneNum = "Please enter a valid 10-digit phone number.";
    }

    if (formData.emailAdd && formData.emailAdd.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAdd)) {
        newErrors.emailAdd = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setServerMessage("");

    const response = await submitContactForm(formData);
    setIsSubmitting(false);

    if (response.success) {
      setSubmitted(true);
      setServerMessage(response.message);

      let msg = `Hello VisionSquare Infra,\n\nI would like to enquire about properties in Nagpur.\n\n`;
      if (formData.fullName) msg += `*Name:* ${formData.fullName}\n`;
      if (formData.phoneNum) msg += `*Phone:* ${formData.phoneNum}\n`;
      if (formData.emailAdd) msg += `*Email:* ${formData.emailAdd}\n`;
      if (formData.propReq) msg += `*Requirement:* ${formData.propReq}\n`;
      if (formData.budgetRange && formData.budgetRange !== "Select budget")
        msg += `*Budget:* ${formData.budgetRange}\n`;
      if (formData.contactTime) msg += `*Preferred Time:* ${formData.contactTime}\n`;
      if (formData.messageText) msg += `*Message:* ${formData.messageText}\n`;

      const encodedMsg = encodeURIComponent(msg);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 800);
    } else {
      if (response.errors) {
        setErrors(response.errors);
      } else {
        setServerMessage(response.message || "Form submission failed. Please try again.");
      }
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phoneNum: "",
      emailAdd: "",
      propReq: "Residential Project",
      budgetRange: "Select budget",
      contactTime: "Anytime",
      messageText: "",
    });
    setSubmitted(false);
    setErrors({});
    setServerMessage("");
  };

  const directWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello VisionSquare Infra, I would like to know more about your properties in Nagpur."
  )}`;

  return (
    <>
      <style jsx global>{`
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
          --safe-top: env(safe-area-inset-top, 0px);
          --safe-bottom: env(safe-area-inset-bottom, 0px);
          --safe-left: env(safe-area-inset-left, 0px);
          --safe-right: env(safe-area-inset-right, 0px);
        }

        html {
          scroll-behavior: smooth;
          font-size: 16px;
          background-color: var(--white);
          color: var(--text-dark);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
        }

        body {
          padding-top: var(--safe-top);
          padding-bottom: var(--safe-bottom);
          padding-left: var(--safe-left);
          padding-right: var(--safe-right);
          overflow-x: hidden;
          line-height: 1.6;
          background-color: var(--white);
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 22px;
          width: 100%;
        }

        /* HERO SECTION */
        .hero {
          background: linear-gradient(135deg, #F3EFE6 0%, #FAF8F5 55%, #EFEADF 100%);
          position: relative;
          overflow: hidden;
          padding-top: 140px;
          padding-bottom: 90px;
          color: var(--dark);
          border-bottom: 2px solid rgba(238, 175, 51, 0.35);
        }

        /* Drifting Squares Container */
        .drift-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .drift-square {
          position: absolute;
          border: 1.5px solid var(--gold);
          background: transparent;
          pointer-events: none;
        }

        @keyframes floatSquare {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-560px) rotate(200deg);
            opacity: 0;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 30px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Left Column */
        .hero-eyebrow-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .hero-eyebrow-line {
          height: 2px;
          width: 44px;
          background: var(--gold);
          display: inline-block;
          border-radius: 2px;
          animation: expandLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes expandLine {
          from { width: 0; }
          to { width: 44px; }
        }

        .hero-eyebrow {
          color: var(--gold);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .hero-h1 {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4.2rem);
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
          margin-bottom: 32px;
          max-width: 600px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
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

        .btn-gold .arrow {
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .btn-gold:hover .arrow {
          transform: translateX(6px);
        }

        .btn-outline-navy {
          background: transparent;
          color: var(--navy);
          font-weight: 700;
          font-size: 0.98rem;
          padding: 15px 28px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--navy);
          transition: all 0.3s ease;
        }

        .btn-outline-navy:hover {
          background: var(--navy);
          color: var(--white);
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(40, 65, 83, 0.2);
        }

        .hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .chip {
          background: var(--white);
          border: 1px solid rgba(40, 65, 83, 0.3);
          color: var(--navy);
          padding: 7px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .chip:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--dark);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(238, 175, 51, 0.3);
        }

        /* Right Column Art */
        .hero-art-container {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s ease-out;
        }

        .rotating-ring {
          position: absolute;
          width: 320px;
          height: 320px;
          border: 1.5px dashed rgba(238, 175, 51, 0.3);
          stroke-dasharray: 4 10;
          border-radius: 50%;
          animation: rotateRing 50s linear infinite;
        }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .building-svg {
          width: 280px;
          height: 300px;
          filter: drop-shadow(0 6px 14px rgba(238, 175, 51, 0.3));
          position: relative;
          z-index: 2;
          transition: transform 0.35s ease-out;
        }

        .building-main-path {
          stroke: var(--gold);
          stroke-width: 3;
          stroke-linejoin: round;
          stroke-linecap: round;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawBuilding 2.6s ease-out forwards;
        }

        .building-sec-path {
          stroke: var(--gold);
          stroke-width: 2;
          stroke-linejoin: round;
          stroke-linecap: round;
          opacity: 0.55;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawBuilding 2.6s ease-out 1.2s forwards;
        }

        @keyframes drawBuilding {
          to { stroke-dashoffset: 0; }
        }

        .window-rect {
          fill: var(--gold);
          opacity: 0.05;
          animation: windowBlink 3.4s ease-in-out infinite;
        }

        @keyframes windowBlink {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.95; }
        }

        /* Floating Cards */
        .glass-card {
          position: absolute;
          background: var(--white);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 20px 40px -20px rgba(40, 65, 83, 0.35);
          z-index: 3;
          white-space: nowrap;
          transition: transform 0.35s ease-out;
        }

        .glass-card-1 {
          top: 15px;
          left: -20px;
          animation: floatBob 6s ease-in-out infinite 0s;
        }

        .glass-card-2 {
          top: 175px;
          right: -20px;
          animation: floatBob 6s ease-in-out infinite -2s;
        }

        .glass-card-3 {
          bottom: 25px;
          left: -10px;
          animation: floatBob 6s ease-in-out infinite -4s;
        }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        .glass-icon {
          width: 36px;
          height: 36px;
          background: rgba(238, 175, 51, 0.18);
          color: var(--gold);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .glass-text-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--dark);
          line-height: 1.2;
        }

        .glass-text-sub {
          font-size: 0.76rem;
          color: var(--text-muted);
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
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        /* MAIN CONTENT SECTION */
        .main-section {
          position: relative;
          z-index: 10;
          padding-top: 20px;
          padding-bottom: 90px;
          background: var(--white);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 28px;
          align-items: start;
        }

        .content-card {
          background: var(--white);
          border-radius: 20px;
          border: 1px solid var(--border-light);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
          padding: 34px;
          transition: all 0.3s ease;
        }

        .content-card:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.09);
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .card-subtext {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 28px;
        }

        .contact-rows {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 28px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 14px;
          border-bottom: 1px solid rgba(23, 32, 39, 0.08);
          border-radius: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .contact-row:last-child {
          border-bottom: none;
        }

        .contact-row:hover {
          background: rgba(238, 175, 51, 0.07);
          transform: translateX(6px);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          background: var(--navy);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          font-size: 1.25rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-row:hover .contact-icon {
          background: var(--gold);
          color: var(--dark);
          transform: rotate(-8deg);
          box-shadow: 0 4px 12px rgba(238, 175, 51, 0.4);
        }

        .contact-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .contact-val {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--dark);
        }

        .btn-whatsapp {
          background: var(--gold);
          color: var(--dark);
          font-weight: 700;
          font-size: 1.02rem;
          padding: 16px;
          border-radius: 12px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(238, 175, 51, 0.3);
        }

        .btn-whatsapp::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 40%;
          height: 200%;
          background: rgba(255, 255, 255, 0.4);
          transform: rotate(30deg);
          animation: shineSweep 4s infinite;
        }

        @keyframes shineSweep {
          0% { left: -60%; }
          20% { left: 130%; }
          100% { left: 130%; }
        }

        .btn-whatsapp:hover {
          background: #f5b942;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(238, 175, 51, 0.45);
        }

        /* FORM STYLES */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark);
          transition: color 0.3s ease;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          background: var(--cream);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 12px 16px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--dark);
          outline: none;
          transition: all 0.3s ease;
        }

        .form-input.has-error, .form-select.has-error, .form-textarea.has-error {
          border-color: #e53e3e;
          background: #fff5f5;
        }

        .error-msg {
          font-size: 0.78rem;
          color: #e53e3e;
          margin-top: 3px;
        }

        .form-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--gold);
          background: var(--white);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(238, 175, 51, 0.2);
        }

        .form-group:focus-within .form-label {
          color: var(--gold);
        }

        .input-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--gold);
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .form-input:focus ~ .input-underline,
        .form-select:focus ~ .input-underline,
        .form-textarea:focus ~ .input-underline {
          width: 100%;
          left: 0;
        }

        .btn-submit {
          background: var(--navy);
          color: var(--white);
          font-weight: 700;
          font-size: 1.02rem;
          padding: 16px;
          border-radius: 12px;
          border: none;
          border-bottom: 3px solid var(--gold);
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(40, 65, 83, 0.25);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-submit::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 40%;
          height: 200%;
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(30deg);
          animation: shineSweep 5s infinite 1.5s;
        }

        .btn-submit:hover:not(:disabled) {
          background: #1e3343;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(40, 65, 83, 0.35);
        }

        .btn-submit:active:not(:disabled) {
          transform: translateY(1px);
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2.5px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .privacy-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 12px;
          text-align: center;
        }

        .confirmation-box {
          background: rgba(238, 175, 51, 0.12);
          border: 1.5px solid var(--gold);
          border-radius: 14px;
          padding: 24px;
          text-align: center;
          margin-top: 20px;
          animation: fadeIn 0.4s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .check-svg {
          width: 50px;
          height: 50px;
          margin: 0 auto 12px;
        }

        .check-circle {
          stroke: var(--gold);
          stroke-width: 2;
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          animation: strokeAnim 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .check-mark {
          stroke: var(--gold);
          stroke-width: 3;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: strokeAnim 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.5s forwards;
        }

        @keyframes strokeAnim {
          to { stroke-dashoffset: 0; }
        }

        .btn-reset {
          background: transparent;
          color: var(--navy);
          border: 1px solid var(--navy);
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 0.88rem;
          margin-top: 14px;
          transition: all 0.2s ease;
        }

        .btn-reset:hover {
          background: var(--navy);
          color: #fff;
        }

        /* ASK US ABOUT SECTION */
        .section-padding {
          padding: 90px 0;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 50px;
        }

        .eyebrow {
          color: var(--gold);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
        }

        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.02rem;
        }

        .topics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .topic-tile {
          background: var(--cream);
          border-left: 3px solid var(--gold);
          padding: 18px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.96rem;
          color: var(--dark);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: default;
        }

        .topic-tile:hover {
          background: var(--navy);
          color: var(--white);
          transform: translateX(8px);
          border-left-color: var(--gold);
          box-shadow: 0 6px 16px rgba(40, 65, 83, 0.2);
        }

        /* CTA BAND */
        .cta-band {
          background: linear-gradient(135deg, var(--navy) 0%, var(--dark) 100%);
          color: var(--white);
          border-radius: 24px;
          padding: 60px 30px;
          text-align: center;
          margin: 40px auto 90px;
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
          max-width: 560px;
          margin: 0 auto 32px;
        }

        .btn-pulse-wrap {
          position: relative;
          display: inline-block;
        }

        .pulse-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50px;
          border: 2px solid var(--gold);
          animation: pulseRing 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 1; }
          100% { transform: scale(1.15); opacity: 0; }
        }

        /* COMPREHENSIVE FOOTER STYLES */
        footer {
          background: var(--dark);
          color: #d5dde2;
          font-size: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-top {
          padding: 75px 0 50px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.1fr 1.3fr;
          gap: 40px;
        }

        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 14px;
        }

        .footer-brand-title span {
          color: var(--gold);
        }

        .footer-desc {
          color: #a3b3bf;
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 20px;
          max-width: 360px;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(238, 175, 51, 0.12);
          border: 1px solid rgba(238, 175, 51, 0.3);
          color: var(--gold);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gold);
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 20px;
          letter-spacing: 0.03em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #a3b3bf;
          text-decoration: none;
          transition: all 0.25s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--gold);
          transform: translateX(4px);
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #a3b3bf;
          font-size: 0.9rem;
        }

        .footer-icon {
          color: var(--gold);
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .footer-bottom {
          background: #11181d;
          padding: 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-bottom-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #7b8e9b;
          font-size: 0.82rem;
        }

        .footer-legal-links {
          display: flex;
          gap: 20px;
        }

        .footer-legal-links a {
          color: #7b8e9b;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-legal-links a:hover {
          color: var(--gold);
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

        /* RESPONSIVE DESIGN */
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero {
            padding-top: 120px;
            padding-bottom: 70px;
            text-align: center;
          }

          .hero-eyebrow-wrap {
            justify-content: center;
          }

          .hero-paragraph {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta-group {
            justify-content: center;
          }

          .hero-chips {
            justify-content: center;
          }

          .hero-art-container {
            height: 330px;
          }

          .glass-card-1 { left: 0; padding: 10px 14px; }
          .glass-card-2 { right: 0; padding: 10px 14px; }
          .glass-card-3 { left: 10px; padding: 10px 14px; }
        }

        @media (max-width: 860px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }

          .topics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }

          .topics-grid {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-group.full-width {
            grid-column: span 1;
          }

          .hero-h1 {
            font-size: 2.2rem;
          }

          .content-card {
            padding: 24px 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

          .reveal, .fade-up-init, .building-main-path, .building-sec-path, .window-rect, .glass-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }

          .building-main-path, .building-sec-path {
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero" ref={heroRef}>
        {/* 12 Drifting Hollow Gold Squares */}
        <div className="drift-container" ref={driftContainerRef}></div>

        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <div>
              <div className="hero-eyebrow-wrap fade-up-init">
                <span className="hero-eyebrow-line"></span>
                <span className="hero-eyebrow">CONTACT US</span>
              </div>

              <h1 className="hero-h1 fade-up-init delay-1">
                Let's find the property that fits <em>your future</em>
              </h1>

              <p className="hero-paragraph fade-up-init delay-2">
                VisionSquare Infra is a real estate channel partner in Nagpur. We help
                you shortlist verified residential projects and plots, arrange site
                visits, and guide you from first enquiry to booking.
              </p>

              <div className="hero-cta-group fade-up-init delay-3">
                <a href="#enquiry" className="btn-gold">
                  <span>Send Enquiry</span>
                  <span className="arrow">→</span>
                </a>

                <a href="tel:[Your Phone Number]" className="btn-outline-navy">
                  <span>☎ Call Our Team</span>
                </a>
              </div>

              <div className="hero-chips fade-up-init delay-4">
                <span className="chip">Verified Projects</span>
                <span className="chip">Free Site Visits</span>
                <span className="chip">Transparent Guidance</span>
              </div>
            </div>

            {/* Right Column Art */}
            <div className="hero-art-container fade-up-init delay-2">
              <div className="rotating-ring"></div>

              <svg
                ref={buildingRef}
                className="building-svg"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 12 Blinking Gold Windows */}
                {/* Building 1 */}
                <rect className="window-rect" x="45" y="140" width="9" height="13" rx="1" style={{ animationDelay: "3s" }} />
                <rect className="window-rect" x="45" y="175" width="9" height="13" rx="1" style={{ animationDelay: "3.9s" }} />
                <rect className="window-rect" x="45" y="210" width="9" height="13" rx="1" style={{ animationDelay: "4.7s" }} />

                {/* Building 2 */}
                <rect className="window-rect" x="95" y="70" width="9" height="13" rx="1" style={{ animationDelay: "3s" }} />
                <rect className="window-rect" x="125" y="70" width="9" height="13" rx="1" style={{ animationDelay: "3.9s" }} />
                <rect className="window-rect" x="95" y="115" width="9" height="13" rx="1" style={{ animationDelay: "4.7s" }} />
                <rect className="window-rect" x="125" y="115" width="9" height="13" rx="1" style={{ animationDelay: "3s" }} />
                <rect className="window-rect" x="95" y="160" width="9" height="13" rx="1" style={{ animationDelay: "3.9s" }} />
                <rect className="window-rect" x="125" y="160" width="9" height="13" rx="1" style={{ animationDelay: "4.7s" }} />

                {/* Building 3 */}
                <rect className="window-rect" x="185" y="130" width="9" height="13" rx="1" style={{ animationDelay: "3s" }} />
                <rect className="window-rect" x="220" y="145" width="9" height="13" rx="1" style={{ animationDelay: "3.9s" }} />
                <rect className="window-rect" x="185" y="180" width="9" height="13" rx="1" style={{ animationDelay: "4.7s" }} />

                {/* Secondary Path (55% opacity) */}
                <path
                  className="building-sec-path"
                  d="M10 270H290M105 90v40M105 160v40M135 70v40M135 140v40M190 150v30M225 165v30"
                />

                {/* Main 3 Buildings Line Art */}
                <path
                  className="building-main-path"
                  d="M30 270V120l50-30v180M80 270V50l80-40v260M160 270V100l110 60v110z"
                />
              </svg>

              {/* Floating Cards */}
              <div className="glass-card glass-card-1" ref={card1Ref}>
                <div className="glass-icon">✔</div>
                <div>
                  <div className="glass-text-title">Verified Projects</div>
                  <div className="glass-text-sub">Curated for you</div>
                </div>
              </div>

              <div className="glass-card glass-card-2" ref={card2Ref}>
                <div className="glass-icon">⌖</div>
                <div>
                  <div className="glass-text-title">Free Site Visits</div>
                  <div className="glass-text-sub">We arrange & guide</div>
                </div>
              </div>

              <div className="glass-card glass-card-3" ref={card3Ref}>
                <div className="glass-icon">◈</div>
                <div>
                  <div className="glass-text-title">Plots & Residential</div>
                  <div className="glass-text-sub">Across Nagpur</div>
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
            <span className="partition-text">ENQUIRY & DIRECT CONTACT</span>
          </div>
          <div className="partition-line"></div>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <section className="main-section" id="enquiry">
        <div className="container">
          <div className="cards-grid">
            {/* Left Card */}
            <div className="content-card reveal">
              <h2 className="card-title">Talk to Our Property Team</h2>
              <p className="card-subtext">
                Call, message or visit. We respond to every enquiry personally.
              </p>

              <div className="contact-rows">
                <a href="tel:[Your Phone Number]" className="contact-row">
                  <div className="contact-icon">☎</div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-val">9699660972, 8788430110</div>
                  </div>
                </a>

                <a href="mailto:[Your Email Address]" className="contact-row">
                  <div className="contact-icon">✉</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-val">info@visionsquareinfra.com</div>
                  </div>
                </a>

                <div className="contact-row">
                  <div className="contact-icon">⌖</div>
                  <div>
                    <div className="contact-label">Office</div>
                    <div className="contact-val">
                      Bidoba Sahkari Sanstha, Plot no 133, Wardha Road, Near Hotel Center Point, Bante Layout, Sonegaon, Ujwal Nagar, Nagpur-440025
                    </div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon">◷</div>
                  <div>
                    <div className="contact-label">Hours</div>
                    <div className="contact-val">Mon–Sun, 10:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>

              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <span>Chat on WhatsApp →</span>
              </a>
            </div>

            {/* Right Card - Form */}
            <div className="content-card reveal">
              <h2 className="card-title">Send Us Your Enquiry</h2>
              <p className="card-subtext">
                Tell us what you are looking for and we will share suitable options.
              </p>

              <form onSubmit={handleSubmit} className="form-grid" noValidate>
                <div className="form-group full-width">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Enter your name"
                      className={`form-input ${errors.fullName ? "has-error" : ""}`}
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <div className="input-underline"></div>
                  </div>
                  {errors.fullName && <div className="error-msg">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNum" className="form-label">
                    Phone Number
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="phoneNum"
                      name="phoneNum"
                      required
                      placeholder="Your 10-digit number"
                      className={`form-input ${errors.phoneNum ? "has-error" : ""}`}
                      value={formData.phoneNum}
                      onChange={handleChange}
                    />
                    <div className="input-underline"></div>
                  </div>
                  {errors.phoneNum && <div className="error-msg">{errors.phoneNum}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="emailAdd" className="form-label">
                    Email Address
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="emailAdd"
                      name="emailAdd"
                      placeholder="your.email@example.com"
                      className={`form-input ${errors.emailAdd ? "has-error" : ""}`}
                      value={formData.emailAdd}
                      onChange={handleChange}
                    />
                    <div className="input-underline"></div>
                  </div>
                  {errors.emailAdd && <div className="error-msg">{errors.emailAdd}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="propReq" className="form-label">
                    Property Requirement
                  </label>
                  <div className="input-wrapper">
                    <select
                      id="propReq"
                      name="propReq"
                      className="form-select"
                      value={formData.propReq}
                      onChange={handleChange}
                    >
                      <option value="Residential Project">Residential Project</option>
                      <option value="Plot / Land">Plot / Land</option>
                      <option value="Investment Opportunity">Investment Opportunity</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budgetRange" className="form-label">
                    Budget Range
                  </label>
                  <div className="input-wrapper">
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      className="form-select"
                      value={formData.budgetRange}
                      onChange={handleChange}
                    >
                      <option value="Select budget">Select budget</option>
                      <option value="Under ₹25 Lakh">Under ₹25 Lakh</option>
                      <option value="₹25–50 Lakh">₹25–50 Lakh</option>
                      <option value="₹50 Lakh – ₹1 Cr">₹50 Lakh – ₹1 Cr</option>
                      <option value="Above ₹1 Cr">Above ₹1 Cr</option>
                    </select>
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="contactTime" className="form-label">
                    Preferred Contact Time
                  </label>
                  <div className="input-wrapper">
                    <select
                      id="contactTime"
                      name="contactTime"
                      className="form-select"
                      value={formData.contactTime}
                      onChange={handleChange}
                    >
                      <option value="Anytime">Anytime</option>
                      <option value="Morning">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening">Evening (4 PM - 7 PM)</option>
                    </select>
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="messageText" className="form-label">
                    Message
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      id="messageText"
                      name="messageText"
                      placeholder="Preferred location, plot size, timeline…"
                      className="form-textarea"
                      value={formData.messageText}
                      onChange={handleChange}
                    ></textarea>
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <span>→</span>
                      </>
                    )}
                  </button>

                  <p className="privacy-text">
                    We respect your privacy and will use your details only to respond to
                    your enquiry.
                  </p>
                </div>
              </form>

              {submitted && (
                <div className="confirmation-box">
                  <svg className="check-svg" viewBox="0 0 52 52">
                    <circle
                      className="check-circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="check-mark"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.4rem",
                      color: "var(--dark)",
                      marginBottom: "6px",
                    }}
                  >
                    Thank you!
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                    {serverMessage ||
                      "Your enquiry is ready in WhatsApp. Send it and our team will get back to you shortly."}
                  </p>
                  <button type="button" onClick={handleReset} className="btn-reset">
                    Send another enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ASK US ABOUT / HOW WE CAN HELP */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">HOW WE CAN HELP</div>
            <h2 className="section-title">Ask Us About</h2>
            <p className="section-subtitle">
              Expert advice across all residential property and land options in Nagpur.
            </p>
          </div>

          <div className="topics-grid reveal">
            <div className="topic-tile">Residential projects in Nagpur</div>
            <div className="topic-tile">Plots & land opportunities</div>
            <div className="topic-tile">Project locations</div>
            <div className="topic-tile">Available properties</div>
            <div className="topic-tile">Features & amenities</div>
            <div className="topic-tile">Location & connectivity</div>
            <div className="topic-tile">Property investment</div>
            <div className="topic-tile">Site visit scheduling</div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="container">
        <div className="cta-band reveal">
          <h2 className="cta-title">Take the first step towards the right property</h2>
          <p className="cta-desc">
            Have questions about real estate projects in Nagpur? Our team is a call away.
          </p>

          <div className="btn-pulse-wrap">
            <div className="pulse-ring"></div>
            <a href="tel:[Your Phone Number]" className="btn-gold">
              <span>☎ Call Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
