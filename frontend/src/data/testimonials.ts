export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Purchasing our triplex villa at Vision Heights was the best decision for our family. The legal diligence was impeccable, the layout design is truly world-class, and the team ensured complete transparency from agreement to construction milestones.",
    author: "Ramesh & Sunita Varma",
    role: "Senior Director, IT Services",
    project: "Vision Heights",
    location: "Kollur, Hyderabad",
    rating: 5,
  },
  {
    id: "2",
    quote: "As an NRI investor looking for clear-title HMDA plotted developments with genuine appreciation, Vision Square Infra stood far above other builders. The wide arterial roads, underground cabling, and landscaped parks exceeded expectations.",
    author: "Dr. Ananya Rao",
    role: "Healthcare Entrepreneur (Dallas, USA)",
    project: "Vision Imperial Park",
    location: "Mokila Corridor",
    rating: 5,
  },
  {
    id: "3",
    quote: "The architectural finesse of Vision Horizon commercial suites is unmatched in this corridor. The team delivered clear documentation on time, and the prime location promises fantastic rental yields. Highly recommend Vision Square Infra!",
    author: "Vikramaditya Reddy",
    role: "Founder & Angel Investor",
    project: "Vision Horizon",
    location: "Kokapet / Financial District",
    rating: 5,
  },
];
