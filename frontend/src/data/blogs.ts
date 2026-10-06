import type { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  { slug: "building-better-communities", title: "Building better communities", excerpt: "Our approach to resilient, people-first infrastructure.", category: "Company" },
];

export function getBlog(slug: string) { return blogs.find((blog) => blog.slug === slug); }
