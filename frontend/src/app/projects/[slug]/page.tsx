import { notFound } from "next/navigation";
import { getProject } from "@/data/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <main><h1>{project.name}</h1><p>{project.description}</p></main>;
}
