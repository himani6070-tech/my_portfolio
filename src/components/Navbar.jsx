import { useState } from "react";
import info from "../data/info";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#top" className="navbar__logo">
        {info.firstName}
        <span>.</span>
      </a>
      <button
        className="navbar__toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>
      <nav className={`navbar__links ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}