import { useState } from "react";
import info from "../data/info";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { email, github, linkedin } = info.contact;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message filled in (no backend needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Add your email in src/data/info.js first!");
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <h2>Let's Connect! 💌</h2>
      <p>
        Want to chat about code, projects or just say hi? Find me on social
        media or send me a message here!
      </p>

      <div className="socials">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {email && <a href={`mailto:${email}`}>Email</a>}
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input name="name" placeholder="name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="email" value={form.email} onChange={handleChange} required />
        <textarea name="message" rows="5" placeholder="message" value={form.message} onChange={handleChange} required />
        <button type="submit" className="btn">send message</button>
      </form>
    </section>
  );
}