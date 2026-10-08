export type ProjectStatus = "ongoing" | "completed" | "booking open" | "upcoming" | "near completion" | string;

export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  status?: ProjectStatus;
  category?: "Luxury Villas" | "Gated Plots" | "Commercial Hub" | "Eco-Luxury Habitat" | "Luxury Flats" | "Ultra Luxury Apartments" | "Luxury Apartments" | string;
  location?: string;
  area?: string;
  units?: string;
  image?: string;
  highlights?: string[];
  priceStarting?: string;
  completionYear?: string;
  videoUrl?: string;
};
