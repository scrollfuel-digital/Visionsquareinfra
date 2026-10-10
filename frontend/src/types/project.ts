export type ProjectStatus =
  | "ongoing"
  | "completed"
  | "booking open"
  | "upcoming"
  | "near completion"
  | string;

export type RoomDimension = {
  space: string;
  size: string;
};

export type ProjectSpecification = {
  category: string;
  items: string[];
};

export type ConnectivityNode = {
  destination: string;
  time: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

export type ProjectContactInfo = {
  siteAddress: string;
  officeAddress: string;
  phones: string[];
  email: string;
  website?: string;
};

export type KeyHighlightPillar = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  status?: ProjectStatus;
  category?:
    | "Luxury Villas"
    | "Gated Plots"
    | "Commercial Hub"
    | "Eco-Luxury Habitat"
    | "Luxury Flats"
    | "Ultra Luxury Apartments"
    | "Luxury Apartments"
    | string;
  location?: string;
  area?: string;
  units?: string;
  image?: string;
  highlights?: string[];
  priceStarting?: string;
  completionYear?: string;
  videoUrl?: string;

  // Detailed Brochure & Architectural Data
  brandLogo?: string;
  brandTagline?: string;
  brochurePdf?: string;
  developerName?: string;
  reraNumber?: string;
  keyHighlightsPillars?: KeyHighlightPillar[];
  elevationViews?: {
    front: string;
    back?: string;
  };
  floorPlans?: {
    blueprint2D: string;
    isometric3D?: string;
    terracePlan?: string;
    parkingPlan?: string;
    dimensions: RoomDimension[];
  };
  gallery?: GalleryItem[];
  amenitiesDetailed?: string[];
  specificationsDetailed?: ProjectSpecification[];
  connectivityNodes?: ConnectivityNode[];
  contactInfo?: ProjectContactInfo;
};
