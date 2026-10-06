import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>{projects.map((project) => <li key={project.slug}><Link href={`/projects/${project.slug}`}>{project.name}</Link></li>)}</ul>
    </main>
  );
}
