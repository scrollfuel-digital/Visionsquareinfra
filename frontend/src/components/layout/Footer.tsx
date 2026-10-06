import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#172027] text-[#F8F7F3]/70 border-t border-[#284153] pt-20 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#eeaf33]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#284153]">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="VisionSquare Infra"
                width={200}
                height={52}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[#F8F7F3]/70 text-sm leading-relaxed max-w-sm mb-6 font-light">
              Pioneering architectural excellence, premium gated communities, and HMDA approved plotted townships across Hyderabad's fastest-appreciating corridors.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#F8F7F3]/85">
              <span className="inline-block h-2 w-2 rounded-full bg-[#eeaf33]" />
              <span>RERA Registered & HMDA Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[#F8F7F3] text-base font-medium mb-5 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-[#eeaf33] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#eeaf33] transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#eeaf33] transition-colors">
                  Market Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#eeaf33] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="font-serif text-[#F8F7F3] text-base font-medium mb-5 tracking-wider">
              Developments
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/projects/vision-heights" className="hover:text-[#eeaf33] transition-colors">
                  Vision Heights (Villas)
                </Link>
              </li>
              <li>
                <Link href="/projects/vision-imperial-park" className="hover:text-[#eeaf33] transition-colors">
                  Vision Imperial Park (Plots)
                </Link>
              </li>
              <li>
                <Link href="/projects/vision-horizon-commercial" className="hover:text-[#eeaf33] transition-colors">
                  Vision Horizon (Commercial)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-[#F8F7F3] text-base font-medium mb-5 tracking-wider">
              Head Office
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#eeaf33] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Financial District, Gachibowli, Hyderabad, Telangana 500032
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#eeaf33] shrink-0" />
                <span className="text-xs">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#eeaf33] shrink-0" />
                <span className="text-xs">info@visionsquareinfra.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F7F3]/50">
          <p>© {new Date().getFullYear()} Vision Square Infrastructure. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#eeaf33] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#eeaf33] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#eeaf33] transition-colors">
              RERA Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
