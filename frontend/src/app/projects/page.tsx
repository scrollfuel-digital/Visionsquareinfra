import type { Metadata } from "next";
import SignatureCollections from "@/components/home/SignatureCollections";

export const metadata: Metadata = {
  title: "Projects & Signature Developments | Vision Square Infrastructure",
  description: "Explore our curated residential enclaves, high-rise townships, and waterfront plots in Nagpur.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      <SignatureCollections />
    </main>
  );
}
