import ProjectCard from "./ProjectCard.jsx";

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid">
      {projects.map((p, i) => <ProjectCard key={p.id} project={p} delay={(i % 3) * 80} />)}
    </div>
  );
}
