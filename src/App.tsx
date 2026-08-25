import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import SecurityFocus from "./sections/SecurityFocus";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import CodingProfile from "./sections/CodingProfile";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="grid-backdrop" />
      <div className="noise-layer" />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SecurityFocus />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <CodingProfile />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <Analytics />
    </div>
  );
}

export default App;
