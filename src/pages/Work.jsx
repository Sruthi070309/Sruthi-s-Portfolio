import { useState } from "react";
import { projects } from "../data/projects.js";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Work() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="wrap section">
      <SectionHeading num={String(shown.length).padStart(2, "0")} title="Selected work">
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button key={c} className={c === active ? "on" : ""} aria-pressed={c === active} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
      </SectionHeading>
      <ProjectGrid projects={shown} />
    </section>
  );
}
