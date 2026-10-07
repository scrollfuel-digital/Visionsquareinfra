import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import SignatureCollections from "@/components/home/SignatureCollections";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#172027] text-[#F8F7F3]">
      {/* 1st: Hero Section */}
      <Hero />

      {/* 2nd: About Us Section */}
      <AboutPreview />

      {/* 3rd: Project Section */}
      <FeaturedProjects />

      {/* 4th: Testimonials Section */}
      <Testimonials />

      {/* 5th: Signature Collections (Neralu Korlaparthi) */}
      <SignatureCollections />
    </main>
  );
}