"use client";

import ShutterBlindsCarousel, { Slide } from "@/components/ui/shutter-blinds-carousel";

export const HERO_SLIDES: Slide[] = [
  {
    image: "/images/projects/the-one-rise.jpeg",
    title: "The ONE Rise",
    caption: "Nagpur — Reside Beyond Skyline with G+13 Storeyed Edifice & Rooftop Lifestyle",
    alt: "The ONE Rise Luxury Apartments in Nagpur",
  },
  {
    image: "/images/herosection/infinity.png",
    title: "Infinity Elegance",
    caption: "Tikekar Road, Dhantoli, Nagpur — 4 BHK Ultra-Luxurious Residential Apartments",
    alt: "Infinity Elegance Ultra Luxury Apartments in Dhantoli Nagpur",
  },
  {
    image: "/images/projects/sacchidanand-waman-nagri.jpeg",
    title: "Sacchidanand Waman Nagri",
    caption: "Besa Pipla Road, Nagpur — 2 & 3 BHK Thoughtfully Designed Luxurious Flats",
    alt: "Sacchidanand Waman Nagri Luxury Flats in Pipla Nagpur",
  },
  {
    image: "/images/projects/skyconnect-7-crown.jpeg",
    title: "SkyConnect 7 Crown",
    caption: "Jaiprakash Nagar, Nagpur — Ultra-Luxury 3 BHK Signature Residences",
    alt: "SkyConnect 7 Crown Luxury Residences in Nagpur",
  },
  {
    image: "/images/projects/pyramid-amara.jpg",
    title: "Pyramid Amara",
    caption: "Besa–Pipla Road, Nagpur — 6 High-Rise Towers & Gated Community",
    alt: "Pyramid Amara High-Rise Township in Nagpur",
  },
  {
    image: "/images/projects/vision-imperial.jpg",
    title: "Sky Joy Waterfront",
    caption: "South Nagpur — India's First Waterfront Plotted Community",
    alt: "Sky Joy Waterfront Plots in Nagpur",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#172027]">
      <ShutterBlindsCarousel
        slides={HERO_SLIDES}
        height="100vh"
        slats={9}
        duration={760}
        stagger={55}
        autoplay={5000}
        ink="#eeaf33"
        ariaLabel="Vision Square Infra Signature Developments Carousel"
      />
    </section>
  );
}
