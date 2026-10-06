import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "vision-heights",
    name: "Vision Heights",
    tagline: "Exclusive 4 & 5 BHK Gated Luxury Villas",
    description: "An enclave of contemporary architectural villas designed with private plunge pools, expansive double-height living areas, and resort-grade clubhouse amenities.",
    status: "booking open",
    category: "Luxury Villas",
    location: "Kollur - Tellapur Corridor, Hyderabad",
    area: "35 Acres Township",
    units: "180 Triplex Villas",
    image: "/images/projects/vision-heights.jpg",
    highlights: ["Private Plunge Pool", "45,000 sq.ft Clubhouse", "100% Vastu Compliant", "Underground Cabling"],
    priceStarting: "₹ 4.5 Cr*",
    completionYear: "Dec 2026",
  },
  {
    slug: "vision-imperial-park",
    name: "Vision Imperial Park",
    tagline: "HMDA & RERA Approved Premium Villa Plots",
    description: "Nestled in nature yet minutes from Outer Ring Road, Vision Imperial Park offers clear title villa plots with 100-ft master approach roads, landscaped parks, and grand entrance portals.",
    status: "ongoing",
    category: "Gated Plots",
    location: "Mokila, Shankarpally Road, Hyderabad",
    area: "50+ Acres Masterplan",
    units: "320 Premium Plots (200 - 600 Sq. Yds)",
    image: "/images/projects/vision-imperial.jpg",
    highlights: ["HMDA & RERA Approved", "Bank Loan Assistance", "Avenue Plantation", "24/7 Multi-tier Security"],
    priceStarting: "₹ 38,000 / Sq. Yd*",
    completionYear: "Ready for Registration",
  },
  {
    slug: "vision-horizon-commercial",
    name: "Vision Horizon",
    tagline: "Grade-A Boutique Commercial & Retail Suites",
    description: "State-of-the-art commercial architecture featuring double-glazed high-efficiency glass facade, grand central atrium plaza, and high footfall retail frontage.",
    status: "ongoing",
    category: "Commercial Hub",
    location: "Financial District / Kokapet, Hyderabad",
    area: "4.5 Lakh sq.ft Built-up",
    units: "Flexible Retail & Office Floors",
    image: "/images/projects/vision-horizon.jpg",
    highlights: ["Grade-A Tech Spaces", "High Rental Yield", "Ample Multi-level Parking", "LEED Gold Pre-certified"],
    priceStarting: "₹ 1.2 Cr*",
    completionYear: "Mid 2027",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
