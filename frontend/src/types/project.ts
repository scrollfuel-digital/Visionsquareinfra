export type ProjectStatus = "ongoing" | "completed" | "booking open" | "upcoming";

export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  status?: ProjectStatus;
  category?: "Luxury Villas" | "Gated Plots" | "Commercial Hub";
  location?: string;
  area?: string;
  units?: string;
  image?: string;
  highlights?: string[];
  priceStarting?: string;
  completionYear?: string;
};
