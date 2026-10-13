import { profile, education, experience, skills, doing, achievements, learning } from "../data/profile.js";
import Portrait from "../components/Portrait.jsx";
import Reveal from "../components/Reveal.jsx";

function Block({ title, children }) {
  return (
    <Reveal as="section" className="block">
      <h2 className="block-title">{title}</h2>
      {children}
    </Reveal>
  );
}

function Entry({ date, title, sub, text }) {
  return (
    <div className="entry">
      <span className="date">{date}</span>
      <div>
        <h3>{title}</h3>
        <p className="sub">{sub}</p>
        {text && <p className="text">{text}</p>}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="wrap section about">
      <aside className="about-side">
        <Portrait />
        <h1 className="hello">Hello<em>.</em></h1>
        <p className="who">I'm {profile.name}, <i>{profile.role}</i></p>
        {profile.story.map((p) => <p className="story" key={p}>{p}</p>)}
      </aside>

      <div className="about-main">
        <Block title="Education">{education.map((e) => <Entry key={e.title} {...e} />)}</Block>
        <Block title="Experience">{experience.map((e) => <Entry key={e.title} {...e} />)}</Block>
        <Block title="Skills">
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <h3>{s.group}</h3>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Block>
        <Block title="What I do">
          <div className="doing">
            {doing.map((d, i) => (
              <div key={d.title}><span>0{i + 1}</span><h3>{d.title}</h3><p>{d.text}</p></div>
            ))}
          </div>
        </Block>
        <div className="two">
          <Block title="Achievements"><ul className="plain">{achievements.map((a) => <li key={a}>{a}</li>)}</ul></Block>
          <Block title="Learning"><ul className="plain">{learning.map((a) => <li key={a}>{a}</li>)}</ul></Block>
        </div>
      </div>
    </section>
  );
}
