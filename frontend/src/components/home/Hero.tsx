"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const HERO_IMAGES = [
  "/images/projects/skyconnect-7-crown.jpeg",
  "/images/projects/pyramid-amara.jpg",
  "/images/projects/vision-heights.webp",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#172027]">
      {/* 3 Project Building Images Crossfading every 4 seconds */}
      {HERO_IMAGES.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={src}
              alt={`Vision Square Architecture Building ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover object-center transition-transform duration-[4000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Subtle top & bottom ambient vignette for seamless navbar transparency & smooth section transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 z-20 pointer-events-none" />
    </section>
  );
}
