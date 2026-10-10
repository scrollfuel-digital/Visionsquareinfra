import type { Metadata } from "next";
import type React from "react";
import { Cinzel, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visionsquareinfra.com"),
  title: {
    default: "Vision Square Infrastructure",
    template: "%s | Vision Square Infrastructure",
  },
  description: "Building better spaces for modern living.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzelFont.variable} ${serifFont.variable} ${sansFont.variable}`}>
      <body className="font-sans antialiased bg-[#172027] text-[#F8F7F3]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
