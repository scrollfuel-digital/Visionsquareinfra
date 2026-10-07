"use client";

import React, { useEffect, useState } from "react";

export default function ContactPage() {
  const WHATSAPP_NUMBER = "[Your WhatsApp Number]";

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNum: "",
    emailAdd: "",
    propReq: "Residential Project",
    budgetRange: "Select budget",
    contactTime: "Anytime",
    messageText: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);
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
          background: linear-gradient(135deg, var(--navy) 0%, var(--dark) 100%);
          position: relative;
          overflow: hidden;
          padding-top: 90px;
          padding-bottom: 170px;
          color: var(--white);
        }

        .hero-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(238, 175, 51, 0.18) 0%, transparent 70%);
          pointer-events: none;
          animation: pulseGlow 6s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.15); opacity: 1; }
        }

        .skyline-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          pointer-events: none;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

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
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .hero-h1 {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          font-weight: 600;
          line-height: 1.12;
          color: var(--white);
          margin-bottom: 20px;
        }

        .hero-h1 .gold-italic {
          color: var(--gold);
          font-style: italic;
          font-weight: 600;
        }

        .hero-paragraph {
          color: #d5dde2;
          font-size: 1.08rem;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 580px;
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
          padding: 14px 28px;
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
          box-shadow: 0 8px 24px var(--gold-glow);
        }

        .btn-gold .arrow {
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .btn-gold:hover .arrow {
          transform: translateX(5px);
        }

        .btn-outline-white {
          background: transparent;
          color: var(--white);
          font-weight: 600;
          font-size: 0.98rem;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }

        .btn-outline-white:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--white);
          transform: translateY(-3px);
        }

        .hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .chip {
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: var(--white);
          padding: 7px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .chip:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(238, 175, 51, 0.3);
        }

        /* Right Column Art */
        .hero-art-container {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rotating-ring {
          position: absolute;
          width: 320px;
          height: 320px;
          border: 2px dashed rgba(238, 175, 51, 0.25);
          border-radius: 50%;
          animation: rotateRing 30s linear infinite;
        }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .building-svg {
          width: 280px;
          height: 300px;
          filter: drop-shadow(0 0 20px rgba(238, 175, 51, 0.4));
          position: relative;
          z-index: 2;
        }

        .building-path {
          stroke: var(--gold);
          stroke-width: 2.5;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawBuilding 2.5s ease-out forwards;
        }

        @keyframes drawBuilding {
          to { stroke-dashoffset: 0; }
        }

        .glass-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 3;
          white-space: nowrap;
        }

        .glass-card-1 {
          top: 15px;
          left: -20px;
          animation: floatBob 4.5s ease-in-out infinite 0s;
        }

        .glass-card-2 {
          top: 175px;
          right: -20px;
          animation: floatBob 4.8s ease-in-out infinite 1.3s;
        }

        .glass-card-3 {
          bottom: 25px;
          left: -10px;
          animation: floatBob 5.2s ease-in-out infinite 2.6s;
        }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .glass-icon {
          width: 36px;
          height: 36px;
          background: rgba(238, 175, 51, 0.22);
          color: var(--gold);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
          border: 1px solid rgba(238, 175, 51, 0.4);
        }

        .glass-text-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--white);
          line-height: 1.2;
        }

        .glass-text-sub {
          font-size: 0.76rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .fade-up-init {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUpAnim 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }

        @keyframes fadeUpAnim {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* MAIN CONTENT OVERLAP */
        .main-section {
          margin-top: -100px;
          position: relative;
          z-index: 10;
          padding-bottom: 90px;
          background: transparent;
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

        .btn-submit:hover {
          background: #1e3343;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(40, 65, 83, 0.35);
        }

        .btn-submit:active {
          transform: translateY(1px);
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

        /* HOW IT WORKS SECTION */
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

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .step-card {
          background: var(--cream);
          border-radius: 16px;
          padding: 32px 28px;
          border: 1px solid transparent;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .step-card:hover {
          background: var(--white);
          border-color: var(--gold);
          transform: translateY(-6px);
          box-shadow: 0 15px 35px var(--gold-glow);
        }

        .step-num {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .step-card:hover .step-num {
          transform: scale(1.15);
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 10px;
        }

        .step-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* ASK US ABOUT SECTION */
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

        /* FOOTER */
        footer {
          background: var(--dark);
          color: #8a99a4;
          font-size: 0.88rem;
          text-align: center;
          padding: 32px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* SCROLL REVEAL CLASS */
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
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .hero {
            padding-top: 60px;
            padding-bottom: 150px;
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
            height: 360px;
          }

          .glass-card-1 { left: 0; }
          .glass-card-2 { right: 0; }
          .glass-card-3 { left: 20px; }
        }

        @media (max-width: 860px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }

          .main-section {
            margin-top: -80px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }

          .topics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
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
            font-size: 2.3rem;
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

          .reveal, .fade-up-init {
            opacity: 1 !important;
            transform: none !important;
          }

          .building-path {
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-glow"></div>

        {/* Skyline Silhouette */}
        <svg
          className="skyline-svg"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V90H40V120H90V70H140V120H180V50H230V120H300V80H350V120H420V60H480V120H550V40H600V120H680V75H740V120H800V45H860V120H930V85H990V120H1060V55H1120V120H1200V70H1260V120H1330V40H1390V120H1440V120Z"
            fill="rgba(248,247,243,0.05)"
            stroke="rgba(238,175,51,0.35)"
            strokeWidth="1.5"
          />
        </svg>

        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <div>
              <div className="hero-eyebrow-wrap fade-up-init">
                <span className="hero-eyebrow-line"></span>
                <span className="hero-eyebrow">CONTACT US</span>
              </div>

              <h1 className="hero-h1 fade-up-init delay-1">
                Let's find the property that fits{" "}
                <span className="gold-italic">your future</span>
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

                <a href="tel:[Your Phone Number]" className="btn-outline-white">
                  <span>☎ Call Our Team</span>
                </a>
              </div>

              <div className="hero-chips fade-up-init delay-3">
                <span className="chip">✔ Verified Projects</span>
                <span className="chip">⌖ Free Site Visits</span>
                <span className="chip">◈ Transparent Guidance</span>
              </div>
            </div>

            {/* Right Column Art */}
            <div className="hero-art-container">
              <div className="rotating-ring"></div>

              <svg
                className="building-svg"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Windows and accents */}
                <path
                  d="M45 140h20M45 170h20M45 200h20M45 230h20 M100 80h40M100 110h40M100 140h40M100 170h40M100 200h40M100 230h40 M185 130h50M185 160h50M185 190h50M185 220h50"
                  stroke="rgba(238,175,51,0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* Main 3 Buildings Line Art */}
                <path
                  className="building-path"
                  d="M30 270V120l50-30v180M80 270V50l80-40v260M160 270V100l110 60v110z"
                />

                {/* Baseline */}
                <path
                  className="building-path"
                  d="M20 270h260"
                  style={{ animationDelay: "1s" }}
                />
              </svg>

              {/* Floating Glass Cards */}
              <div className="glass-card glass-card-1">
                <div className="glass-icon">✔</div>
                <div>
                  <div className="glass-text-title">Verified Projects</div>
                  <div className="glass-text-sub">Curated for you</div>
                </div>
              </div>

              <div className="glass-card glass-card-2">
                <div className="glass-icon">⌖</div>
                <div>
                  <div className="glass-text-title">Free Site Visits</div>
                  <div className="glass-text-sub">We arrange & guide</div>
                </div>
              </div>

              <div className="glass-card glass-card-3">
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

      {/* MAIN CONTENT (OVERLAP) */}
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
                    <div className="contact-val">[Your Phone Number]</div>
                  </div>
                </a>

                <a href="mailto:[Your Email Address]" className="contact-row">
                  <div className="contact-icon">✉</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-val">[Your Email Address]</div>
                  </div>
                </a>

                <div className="contact-row">
                  <div className="contact-icon">⌖</div>
                  <div>
                    <div className="contact-label">Office</div>
                    <div className="contact-val">[Your Office Address, Nagpur]</div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon">◷</div>
                  <div>
                    <div className="contact-label">Hours</div>
                    <div className="contact-val">Mon–Sat, 10:00 AM – 7:00 PM</div>
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

              <form onSubmit={handleSubmit} className="form-grid">
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
                      className="form-input"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <div className="input-underline"></div>
                  </div>
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
                      className="form-input"
                      value={formData.phoneNum}
                      onChange={handleChange}
                    />
                    <div className="input-underline"></div>
                  </div>
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
                      className="form-input"
                      value={formData.emailAdd}
                      onChange={handleChange}
                    />
                    <div className="input-underline"></div>
                  </div>
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
                  <button type="submit" className="btn-submit">
                    <span>Submit Enquiry</span>
                    <span>→</span>
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
                    Your enquiry is ready in WhatsApp. Send it and our team will get back
                    to you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2 className="section-title">Your property journey, made simple</h2>
            <p className="section-subtitle">
              As your channel partner, we work for a smooth, well-informed buying
              experience.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card reveal">
              <div className="step-num">01</div>
              <h3 className="step-title">Share Your Needs</h3>
              <p className="step-desc">
                Tell us your budget, preferred location and property type.
              </p>
            </div>

            <div className="step-card reveal">
              <div className="step-num">02</div>
              <h3 className="step-title">Get Curated Options</h3>
              <p className="step-desc">
                We shortlist verified projects and plots with clear details on location,
                layout and connectivity.
              </p>
            </div>

            <div className="step-card reveal">
              <div className="step-num">03</div>
              <h3 className="step-title">Visit & Decide</h3>
              <p className="step-desc">
                We arrange site visits and support you through documentation and booking.
              </p>
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

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>© 2026 VisionSquare Infra · Real Estate Channel Partner, Nagpur</p>
        </div>
      </footer>
    </>
  );
}
