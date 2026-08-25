import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Container from "../components/Container";
import Terminal from "../components/Terminal";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono-tag mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs"
            style={{ borderColor: "var(--color-border-strong)", color: "var(--color-accent)" }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: "var(--color-accent)" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--color-accent)" }} />
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-glow text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mono-tag mt-4 text-base font-medium sm:text-lg"
            style={{ color: "var(--color-accent-2)" }}
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-accent)" }}
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--color-border-strong)" }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ color: "var(--color-accent-2)" }}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </Container>
    </section>
  );
}
