import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "../animations/FadeIn";

export default function Projects() {
  return (
    <FadeIn>
      <section
        id="projects"
        className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16"
      >
        <SectionTitle
          title="Enterprise Systems Built"
          eyebrow="SELECTED WORK"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}