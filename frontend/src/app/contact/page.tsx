"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    project: "7 Crown SkyConnect (Jaiprakash Nagar)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        project: "7 Crown SkyConnect (Jaiprakash Nagar)",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative bg-[#F8F7F3] text-[#172027] font-sans antialiased min-h-screen pt-24 md:pt-32 pb-20 selection:bg-[#9A7432] selection:text-white">
      {/* ── SECTION 1: CORPORATE OFFICE HERO BANNER (100% FULL-BLEED SCREEN EDGES) ── */}
      <section className="w-full mb-24 overflow-hidden border-b border-[#172027]/10">
        <div className="grid lg:grid-cols-12 w-full min-h-[500px] lg:min-h-[580px]">
          {/* Left Column: Corporate Office Info Box (50% Width) */}
          <div className="lg:col-span-6 bg-[#FAF4ED] p-8 sm:p-14 lg:p-24 flex flex-col justify-center space-y-8">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7432] font-bold block mb-2">
                HEADQUARTERS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#172027] tracking-tight leading-tight uppercase font-bold">
                Corporate <span className="italic font-serif text-[#9A7432] font-normal lowercase">Office</span>
              </h1>
            </div>

            <div className="space-y-6 text-sm md:text-base text-[#172027] font-medium leading-relaxed max-w-lg">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-[#9A7432] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-base md:text-lg text-[#172027]">
                    VisionSquare Infra Private Limited
                  </p>
                  <p className="text-[#4A5568]">
                    Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar, Nagpur, Maharashtra 440025, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 pt-2">
                <Phone size={22} className="text-[#9A7432] shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="font-bold text-base md:text-lg text-[#172027] hover:text-[#9A7432] transition"
                >
                  +91 98765 43210 / +91 98222 86549
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 pt-2">
                <Mail size={22} className="text-[#9A7432] shrink-0" />
                <a
                  href="mailto:contact@visionsquareinfra.com"
                  className="font-medium text-base md:text-lg text-[#172027] hover:text-[#9A7432] transition"
                >
                  contact@visionsquareinfra.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Building Image (50% Width Edge-to-Edge) */}
          <div className="lg:col-span-6 relative w-full min-h-[400px] lg:min-h-[580px] overflow-hidden">
            <Image
              src="/images/projects/skyconnect-7-crown.jpeg"
              alt="VisionSquare Infra Corporate Headquarters"
              fill
              priority
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172027]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WE'RE HERE TO HELP (4-COLUMN GRID) ──────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7432] font-bold block mb-2">
          GET IN TOUCH WITH US
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#172027] mb-14 tracking-tight uppercase font-bold">
          We’re Here <span className="italic font-serif text-[#9A7432] font-normal lowercase">To Help</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Sales & Enquiries */}
          <div className="bg-[#FAF4ED] rounded-2xl p-8 border border-[#9A7432]/20 hover:border-[#9A7432] transition-all duration-300 hover:shadow-xl space-y-3 group text-center">
            <h3 className="text-lg font-serif font-bold text-[#172027] group-hover:text-[#9A7432] transition uppercase tracking-wider">
              Sales & Enquiries
            </h3>
            <p className="text-xs text-[#4A5568] break-all font-medium">
              sales@visionsquareinfra.com
            </p>
            <p className="text-xs text-[#9A7432] font-bold pt-1">+91 98765 43210</p>
          </div>

          {/* Card 2: Land Inquiries */}
          <div className="bg-[#FAF4ED] rounded-2xl p-8 border border-[#9A7432]/20 hover:border-[#9A7432] transition-all duration-300 hover:shadow-xl space-y-3 group text-center">
            <h3 className="text-lg font-serif font-bold text-[#172027] group-hover:text-[#9A7432] transition uppercase tracking-wider">
              Land Inquiries
            </h3>
            <p className="text-xs text-[#4A5568] break-all font-medium">
              land@visionsquareinfra.com
            </p>
            <p className="text-xs text-[#9A7432] font-bold pt-1">+91 98765 43210</p>
          </div>

          {/* Card 3: HR & Careers */}
          <div className="bg-[#FAF4ED] rounded-2xl p-8 border border-[#9A7432]/20 hover:border-[#9A7432] transition-all duration-300 hover:shadow-xl space-y-3 group text-center">
            <h3 className="text-lg font-serif font-bold text-[#172027] group-hover:text-[#9A7432] transition uppercase tracking-wider">
              HR & Careers
            </h3>
            <p className="text-xs text-[#4A5568] break-all font-medium">
              careers@visionsquareinfra.com
            </p>
            <p className="text-xs text-[#9A7432] font-bold pt-1">+91 98765 43210</p>
          </div>

          {/* Card 4: Media & PR */}
          <div className="bg-[#FAF4ED] rounded-2xl p-8 border border-[#9A7432]/20 hover:border-[#9A7432] transition-all duration-300 hover:shadow-xl space-y-3 group text-center">
            <h3 className="text-lg font-serif font-bold text-[#172027] group-hover:text-[#9A7432] transition uppercase tracking-wider">
              Media & PR
            </h3>
            <p className="text-xs text-[#4A5568] break-all font-medium">
              media@visionsquareinfra.com
            </p>
            <p className="text-xs text-[#9A7432] font-bold pt-1">+91 98765 43210</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTERACTIVE ENQUIRY FORM ─────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-[#FAF4ED] rounded-3xl p-8 sm:p-12 border border-[#9A7432]/40 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#9A7432]/15 text-[#9A7432] text-xs uppercase tracking-widest font-bold">
            <Sparkles size={14} className="text-[#9A7432]" /> Instant Consultation
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#172027] uppercase tracking-tight">
            Schedule Your <span className="italic font-serif text-[#9A7432] font-normal lowercase">Site Visit</span>
          </h3>

          {submitted ? (
            <div className="bg-white border border-[#9A7432]/40 rounded-2xl p-8 text-center text-[#172027] animate-in fade-in duration-300">
              <CheckCircle2 size={48} className="text-[#9A7432] mx-auto mb-3" />
              <h4 className="text-2xl font-serif font-bold mb-2">Thank You!</h4>
              <p className="text-sm text-[#4A5568] font-sans">
                Your site visit request has been received. Our sales executive will call you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left pt-2">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="w-full rounded-xl border border-gray-300 py-4 px-5 outline-none focus:border-[#9A7432] focus:ring-1 focus:ring-[#9A7432] transition bg-white text-[#172027] text-sm font-sans"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="w-full rounded-xl border border-gray-300 py-4 px-5 outline-none focus:border-[#9A7432] focus:ring-1 focus:ring-[#9A7432] transition bg-white text-[#172027] text-sm font-sans"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Mobile Number *"
                  className="w-full rounded-xl border border-gray-300 py-4 px-5 outline-none focus:border-[#9A7432] focus:ring-1 focus:ring-[#9A7432] transition bg-white text-[#172027] text-sm font-sans"
                />
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#9A7432]/40 py-4 px-5 outline-none bg-[#FAF4ED] text-[#172027] font-bold text-sm cursor-pointer font-sans"
                >
                  <option value="7 Crown SkyConnect (Jaiprakash Nagar)">
                    7 Crown SkyConnect (Jaiprakash Nagar)
                  </option>
                  <option value="Pyramid Amara (Besa–Pipla Road)">
                    Pyramid Amara (Besa–Pipla Road)
                  </option>
                  <option value="Sky Joy Waterfront (Hingna, South Nagpur)">
                    Sky Joy Waterfront (Hingna, South Nagpur)
                  </option>
                  <option value="The ONE Rise (Prime Location)">
                    The ONE Rise (Prime Location)
                  </option>
                  <option value="Infinity Elegance (Dhantoli)">
                    Infinity Elegance (Dhantoli)
                  </option>
                  <option value="Sacchidanand Waman Nagri (Pipla)">
                    Sacchidanand Waman Nagri (Pipla)
                  </option>
                </select>
              </div>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message / Special Requirements..."
                className="w-full rounded-xl border border-gray-300 p-5 outline-none focus:border-[#9A7432] focus:ring-1 focus:ring-[#9A7432] transition bg-white text-[#172027] text-sm font-sans"
              ></textarea>

              <button
                type="submit"
                className="w-full btn-gold-pill py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Submit Site Visit Request</span> <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
