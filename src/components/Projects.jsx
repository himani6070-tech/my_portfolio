import { useState } from "react";
import info from "../data/info";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="projects">
      <h2>Projects 🚀</h2>
      <p className="hint">hover (or tap) any project to learn more!</p>

      <div className="projects">
        {info.projects.map((p, i) => (
          <article
            key={p.title}
            className={`card ${active === i ? "is-active" : ""}`}
            onClick={() => setActive(active === i ? null : i)}
          >
            <div
              className="card__media"
              style={
                p.image ? { backgroundImage: `url(${p.image})` } : undefined
              }
            >
              {!p.image && <span className="card__letter">{p.title[0]}</span>}
            </div>

            <div className="card__overlay">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="card__links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    view live
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    github
                  </a>
                )}
              </div>
            </div>

            <h3 className="card__title">{p.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}