import info from "../data/info";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__text">
        <h2>About Me 🌸</h2>
        {info.about.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <div className="about__photo">
        {info.aboutPhoto ? (
          <img src={info.aboutPhoto} alt={`${info.firstName}`} />
        ) : (
          <div className="photo-fallback">📸</div>
        )}
      </div>
    </section>
  );
}