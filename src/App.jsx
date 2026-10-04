import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import info from "./data/info";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Learning />
        <Contact />
      </main>
      <footer className="footer">
        Developed and designed with love ❤️ {info.name}
      </footer>
    </>
  );
}