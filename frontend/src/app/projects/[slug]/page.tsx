import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import ProjectDetailView from "@/components/projects/ProjectDetailView";
import InfinityDetailView from "@/components/projects/InfinityDetailView";
import TheOneRiseDetailView from "@/components/projects/TheOneRiseDetailView";
import SacchidanandWamanNagriDetailView from "@/components/projects/SacchidanandWamanNagriDetailView";
import SkyConnectDetailView from "@/components/projects/SkyConnectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  if (slug === "skyconnect-7-crown") {
    return {
      title: "SkyConnect 7 Crown | 3 BHK Luxury Apartments in Jaiprakash Nagar, Nagpur",
      description:
        "Exclusive 3 BHK luxury residences in Jaiprakash Nagar, Nagpur by SkyConnect Infrastructures. Featuring contemporary G+6 architecture, rooftop sky garden, covered parking, smart security, and seamless airport connectivity.",
      keywords: [
        "SkyConnect 7 Crown Nagpur",
        "3 BHK luxury apartments Jaiprakash Nagar",
        "flats beside Hotel Trance Nagpur",
        "apartments near Nagpur Airport",
        "SkyConnect Infrastructures",
        "flats in Jaiprakash Nagar Nagpur",
        "Vision Square Infrastructure",
      ],
      alternates: {
        canonical: "https://visionsquareinfra.com/projects/skyconnect-7-crown",
      },
      openGraph: {
        title: "SkyConnect 7 Crown | 3 BHK Luxury Apartments in Jaiprakash Nagar, Nagpur",
        description:
          "Contemporary G+6 luxury living with rooftop sky garden, 25' drawing hall, and individual covered parking in Jaiprakash Nagar, Nagpur.",
        url: "https://visionsquareinfra.com/projects/skyconnect-7-crown",
        siteName: "Vision Square Infrastructure",
        images: [
          {
            url: "/images/projects/skyconnect-7-crown.jpeg",
            width: 1200,
            height: 630,
            alt: "SkyConnect 7 Crown Architecture",
          },
        ],
        locale: "en_IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "SkyConnect 7 Crown | 3 BHK Luxury Apartments in Jaiprakash Nagar, Nagpur",
        description:
          "Exclusive 3 BHK luxury residences in Jaiprakash Nagar, Nagpur with rooftop sky garden and individual covered parking.",
        images: ["/images/projects/skyconnect-7-crown.jpeg"],
      },
    };
  }

  if (slug === "the-one-rise") {
    return {
      title: "The ONE Rise | 2 & 3 BHK Luxury Apartments on Wardha Road, Nagpur",
      description:
        "G+13 storey landmark featuring 2 & 3 BHK residences, ground commercial arcade, rooftop infinity skypool, and two sky-amenity levels on Wardha Road, Somalwada, Nagpur. MahaRERA: PR1190002601318.",
      keywords: [
        "The ONE Rise Nagpur",
        "2 BHK 3 BHK Wardha Road",
        "luxury apartments Somalwada Nagpur",
        "MahaRERA PR1190002601318",
        "Mahalaxmi Group Nagpur",
        "infinity pool apartments Nagpur",
        "commercial shops Wardha Road",
        "Vision Square Infrastructure",
      ],
      alternates: {
        canonical: "https://visionsquareinfra.com/projects/the-one-rise",
      },
      openGraph: {
        title: "The ONE Rise | 2 & 3 BHK Luxury Apartments on Wardha Road, Nagpur",
        description:
          "G+13 signature edifice with rooftop infinity skypool, 3.6M ceiling height, and zero carpet wastage on Wardha Road, Nagpur. MahaRERA: PR1190002601318.",
        url: "https://visionsquareinfra.com/projects/the-one-rise",
        siteName: "Vision Square Infrastructure",
        images: [
          {
            url: "/images/projects/the-one-rise/elevation-day.jpg",
            width: 1200,
            height: 630,
            alt: "The ONE Rise G+13 Edifice Wardha Road",
          },
        ],
        locale: "en_IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "The ONE Rise | 2 & 3 BHK Luxury Apartments on Wardha Road, Nagpur",
        description:
          "G+13 storey landmark with rooftop infinity pool and commercial arcade on Wardha Road, Nagpur. MahaRERA: PR1190002601318.",
        images: ["/images/projects/the-one-rise/elevation-day.jpg"],
      },
    };
  }

  if (slug === "infinity-elegance") {
    return {
      title: "Infinity Elegance | 4 BHK Ultra-Luxurious Apartments in Dhantoli, Nagpur",
      description:
        "Exclusive 4 BHK ultra-luxurious apartments on Tikekar Road, Dhantoli, Nagpur by Birdhouse Real Estate & Vision Square Infrastructure. Featuring hydraulic stack parking, wavy cantilevered balconies, and rooftop sky gym.",
      keywords: [
        "Infinity Elegance Nagpur",
        "4 BHK luxury apartments Dhantoli",
        "ultra luxury flats in Nagpur",
        "Birdhouse Real Estate",
        "Tikekar Road Dhantoli property",
        "mechanical stack parking apartments",
        "rooftop gym apartments Nagpur",
        "Vision Square Infrastructure",
      ],
      alternates: {
        canonical: "https://visionsquareinfra.com/projects/infinity-elegance",
      },
      openGraph: {
        title: "Infinity Elegance | 4 BHK Ultra-Luxurious Apartments in Dhantoli, Nagpur",
        description:
          "Experience curated 4 BHK living with sculpted wavy balconies, hydraulic stack mechanical parking, and rooftop sky gym in prestigious Dhantoli, Nagpur.",
        url: "https://visionsquareinfra.com/projects/infinity-elegance",
        siteName: "Vision Square Infrastructure",
        images: [
          {
            url: "/images/projects/infinity-elegance/elevation-tower.jpg",
            width: 1200,
            height: 630,
            alt: "Infinity Elegance 4 BHK Tower Elevation",
          },
        ],
        locale: "en_IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Infinity Elegance | 4 BHK Ultra-Luxurious Apartments in Dhantoli, Nagpur",
        description:
          "4 BHK Ultra-Luxurious Residences on Tikekar Road, Dhantoli, Nagpur with hydraulic stack parking and rooftop sky amenities.",
        images: ["/images/projects/infinity-elegance/elevation-tower.jpg"],
      },
    };
  }

  if (slug === "sacchidanand-waman-nagri") {
    return {
      title: "Sacchidanand Waman Nagri | 2 & 3 BHK Luxury Flats on Besa Pipla Road, Nagpur",
      description:
        "Integrated residential township featuring G+11 towers, 2 & 3 BHK luxury residences, G+2 sports complex, G+1 clubhouse, swimming pool, and high-street shopping on Besa Pipla Road, Nagpur. MahaRERA: P50500018406.",
      keywords: [
        "Sacchidanand Waman Nagri",
        "2 BHK 3 BHK flats Besa Pipla Road",
        "apartments near Jayanti Nagari 7",
        "MahaRERA P50500018406",
        "Sacchidanand Realities Nagpur",
        "flats near AM Cinema Zudio Nagpur",
        "township in Besa Nagpur",
        "Vision Square Infrastructure",
      ],
      alternates: {
        canonical: "https://visionsquareinfra.com/projects/sacchidanand-waman-nagri",
      },
      openGraph: {
        title: "Sacchidanand Waman Nagri | 2 & 3 BHK Luxury Flats on Besa Pipla Road, Nagpur",
        description:
          "G+11 integrated township with G+2 sports complex, clubhouse, swimming pool, and high-street commercial shops on Besa Pipla Road, Nagpur. MahaRERA: P50500018406.",
        url: "https://visionsquareinfra.com/projects/sacchidanand-waman-nagri",
        siteName: "Vision Square Infrastructure",
        images: [
          {
            url: "/images/projects/sacchidanand-waman-nagri/township-aerial-masterplan.jpg",
            width: 1200,
            height: 630,
            alt: "Sacchidanand Waman Nagri Township Masterplan",
          },
        ],
        locale: "en_IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Sacchidanand Waman Nagri | 2 & 3 BHK Luxury Flats on Besa Pipla Road, Nagpur",
        description:
          "G+11 integrated township with G+2 sports complex and swimming pool on Besa Pipla Road, Nagpur. MahaRERA: P50500018406.",
        images: ["/images/projects/sacchidanand-waman-nagri/township-aerial-masterplan.jpg"],
      },
    };
  }

  return {
    title: `${project.name} | Vision Square Infrastructure`,
    description: project.tagline || project.description,
    openGraph: {
      title: `${project.name} | Vision Square Infrastructure`,
      description: project.tagline || project.description,
      images: [
        {
          url: project.image || "/images/hero-bg.jpg",
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#172027]">
      {slug === "sacchidanand-waman-nagri" ? (
        <SacchidanandWamanNagriDetailView project={project} />
      ) : slug === "the-one-rise" ? (
        <TheOneRiseDetailView project={project} />
      ) : slug === "infinity-elegance" ? (
        <InfinityDetailView project={project} />
      ) : slug === "skyconnect-7-crown" ? (
        <SkyConnectDetailView project={project} />
      ) : (
        <ProjectDetailView project={project} />
      )}
    </main>
  );
}
