import info from "../data/info";

export default function Learning() {
  const { currently, next, note } = info.learning;

  return (
    <section className="section" id="learning">
      <h2>Always Learning 🌱</h2>
      <p>{note}</p>

      <div className="learning">
        <div className="learning__box">
          <h3>Learning right now</h3>
          <ul className="tags">
            {currently.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        {next.length > 0 && (
          <div className="learning__box">
            <h3>Up next</h3>
            <ul className="tags">
              {next.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}