import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = { title: "Blogs" };

export default function BlogsPage() {
  return <main><h1>Blogs</h1><ul>{blogs.map((blog) => <li key={blog.slug}><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></li>)}</ul></main>;
}
