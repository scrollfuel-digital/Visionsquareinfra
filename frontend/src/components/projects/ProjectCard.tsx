import type { Project } from "@/types/project";
export default function ProjectCard({ project }: { project: Project }) { return <article><h2>{project.name}</h2><p>{project.description}</p></article>; }
