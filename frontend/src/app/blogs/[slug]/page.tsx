import { notFound } from "next/navigation";
import { getBlog } from "@/data/blogs";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const blog = getBlog((await params).slug);
  if (!blog) notFound();
  return <main><h1>{blog.title}</h1><p>{blog.excerpt}</p></main>;
}
