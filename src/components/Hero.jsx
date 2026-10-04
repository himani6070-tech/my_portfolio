import info from "../data/info";

export default function Hero() {
  const initials = info.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <h1>
          Hello! I'm {info.firstName}. <span className="wave">👋</span>
        </h1>
        <p>{info.tagline} ✨</p>
        <a href="#projects" className="btn">
          See my projects
        </a>
      </div>
      <div className="hero__avatar">
        {info.avatar ? (
          <img src={info.avatar} alt={info.name} />
        ) : (
          <div className="avatar-fallback">{initials}</div>
        )}
      </div>
    </section>
  );
}