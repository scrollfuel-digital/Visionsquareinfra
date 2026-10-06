import type { Blog } from "@/types/blog";
export default function BlogCard({ blog }: { blog: Blog }) { return <article><h2>{blog.title}</h2><p>{blog.excerpt}</p></article>; }
