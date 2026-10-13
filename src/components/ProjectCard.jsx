import Reveal from "./Reveal.jsx";
import Cover from "./Cover.jsx";

export default function ProjectCard({ project, delay = 0 }) {
  const { title, category, year, desc, tools, links, size } = project;
  return (
    <Reveal as="article" className={"project s-" + size} delay={delay}>
      <div className="cover-wrap">
        <Cover project={project} />
        <div className="cover-over">{tools.join("  ·  ")}</div>
      </div>
      <p className="pmeta"><span>{category}</span><span>{year}</span></p>
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <p className="ptools">{tools.join(", ")}</p>
      {links.length > 0 && (
        <p className="plinks">
          {links.map((l) => <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
        </p>
      )}
    </Reveal>
  );
}
