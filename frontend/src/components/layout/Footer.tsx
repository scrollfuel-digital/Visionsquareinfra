import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#FAF4ED] text-[#F8F7F3] font-sans border-t border-white/10 pt-16 pb-10 overflow-hidden z-20">
      {/* Ambient Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#9A7432]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo/viplogo.png"
                alt="VisionSquare Infra"
                width={360}
                height={120}
                priority
                className="h-20 sm:h-24 md:h-28 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-[#a3b3bf] text-sm leading-relaxed">
              VisionSquare Infra is a real estate channel partner in Nagpur, India. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-4 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a3b3bf]">
              <li>
                <Link href="/" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Offerings */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-4 tracking-wider">
              Properties & Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a3b3bf]">
              <li>
                <Link href="/projects" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Plots & Land Opportunities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact#enquiry" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Free Site Visit Scheduling
                </Link>
              </li>
              <li>
                <Link href="/contact#enquiry" className="hover:text-[#9A7432] hover:translate-x-1 transition-all inline-block">
                  Booking Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-4 tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-[#a3b3bf]">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#9A7432] shrink-0" />
                <span>+91 9699660972</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#9A7432] shrink-0" />
                <span>info@visionsquareinfra.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#9A7432] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  Bidoba Sahkari Sanstha, Plot no 133, Wardha Road, Near Hotel Center Point, Bante Layout, Sonegaon, Ujwal Nagar, Nagpur-440025
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#9A7432] shrink-0" />
                <span className="text-xs">Mon–Sat: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7b8e9b]">
          <p>© {new Date().getFullYear()} VisionSquare Infra Private Limited · Real Estate Channel Partner, Nagpur.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#9A7432] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#9A7432] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#9A7432] transition-colors">
              Channel Partner Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}