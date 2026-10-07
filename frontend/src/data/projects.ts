import type { Project } from "@/types/project";

export const projects: Project[] = [
  
  {
    slug: "skyconnect-7-crown",
    name: "SkyConnect 7 Crown",
    tagline: "More than a home. A signature way of living.",
    description: "A premium 3 BHK residential address designed around spacious living, refined finishes, smart security and contemporary lifestyle amenities in Jaiprakash Nagar, Nagpur.",
    status: "booking open",
    category: "Luxury Villas",
    location: "Jaiprakash Nagar, Nagpur",
    area: "Signature Address",
    units: "Exclusive 3 BHK Homes",
    image: "/images/projects/skyconnect-7-crown.jpeg",
    highlights: ["3 BHK Premium Homes", "Covered Parking", "Rooftop Garden", "Smart Security", "24×7 Security & Water"],
    priceStarting: "Price on Request",
    completionYear: "Ready for Possession",
  },
 
  {
    slug: "pyramid-amara",
    name: "Pyramid Amara",
    tagline: "Premium Living on Besa–Pipla Road, Nagpur",
    description: "A grand ~6-acre premium gated township featuring 6 high-rise towers rising 14–16 floors. Thoughtfully designed 2 & 3 BHK residences with RERA approval.",
    status: "booking open",
    category: "Luxury Villas",
    location: "Besa–Pipla Road, Nagpur",
    area: "~6 Acres Total Area",
    units: "2 & 3 BHK Premium Residences",
    image: "/images/projects/pyramid-amara.jpg",
    highlights: ["~6 Acres Township", "6 High-Rise Towers", "14–16 Floors", "2 & 3 BHK Configurations", "RERA Approved"],
    priceStarting: "Price on Request",
    completionYear: "Under Construction",
  },
  {
    slug: "sky-joy",
    name: "Sky Joy",
    tagline: "India's First Luxury Waterfront Plotted Development",
    description: "Spread across approximately 78 acres in Mondha, Hingna, featuring a ~3-acre man-made beach and wave pool, and a grand 28,000 sq. ft. clubhouse with 40+ world-class lifestyle amenities.",
    status: "booking open",
    category: "Gated Plots",
    location: "Mondha, Hingna, South Nagpur",
    area: "~78 Acres Total Area",
    units: "918 Luxury Waterfront Plots",
    image: "/images/projects/vision-imperial.jpg",
    highlights: ["~78 Acres Waterfront Living", "918 Total Plots", "28,000 sq.ft Clubhouse", "~3 Acres Beach & Wave Pool", "MahaRERA PP1190002502095"],
    priceStarting: "Price on Request",
    completionYear: "RERA Approved",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
