import info from "../data/info";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>My Toolkit 💻</h2>
      <ul className="toolkit">
        {info.toolkit.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}