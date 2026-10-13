import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import Button from "../components/Button.jsx";
import Portrait from "../components/Portrait.jsx";
import Marquee from "../components/Marquee.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-text">
          <p className="eyebrow rise" style={{ "--d": "0ms" }}>{profile.role} · {profile.city}</p>
          <h1 className="name"><span className="line"><span style={{ "--d": "80ms" }}>{profile.name}<em>.</em></span></span></h1>
          <p className="headline rise" style={{ "--d": "260ms" }}>{profile.headline}</p>
          <p className="intro rise" style={{ "--d": "340ms" }}>{profile.intro}</p>
          <div className="actions rise" style={{ "--d": "420ms" }}>
            <Button to="/work">View Work</Button>
            <Button to="/about" variant="ghost">About Me</Button>
            <Button to="/contact" variant="text">Contact →</Button>
          </div>
        </div>
        <figure className="hero-visual rise" style={{ "--d": "300ms" }}>
          <Portrait />
          <figcaption>{profile.facts.map((f) => <span key={f}>{f}</span>)}</figcaption>
        </figure>
        <span className="scroll-cue" aria-hidden="true">Scroll</span>
      </section>

      <Marquee items={profile.marquee} />

      <section className="wrap section">
        <SectionHeading num="01" title="Selected work"><Link className="more" to="/work">All projects →</Link></SectionHeading>
        <ProjectGrid projects={projects.slice(0, 2)} />
      </section>

      <section className="wrap section tight">
        <Reveal className="glance">
          <div><b>{projects.length}</b><span>projects</span></div>
          <div><b>2</b><span>internships</span></div>
          <div><b>Java + JS</b><span>full stack</span></div>
          <div><b>TEDx</b><span>speaker</span></div>
        </Reveal>
      </section>
    </>
  );
}
