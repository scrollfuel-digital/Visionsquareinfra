import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about-us", "/contact", "/projects", "/blogs"].map((url) => ({
    url: `https://visionsquare.example${url}`,
  }));
}
