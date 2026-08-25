import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

interface Line {
  type: "prompt" | "output";
  text: string;
}

// Builds the flat sequence of lines (prompt then its output) to be typed out.
function buildScript(): Line[] {
  const lines: Line[] = [];
  profile.terminalLines.forEach((entry) => {
    lines.push({ type: "prompt", text: entry.prompt });
    lines.push({ type: "output", text: entry.output });
  });
  return lines;
}

export default function Terminal() {
  const script = useRef(buildScript()).current;
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLines(script);
      setDone(true);
      return;
    }

    if (lineIndex >= script.length) {
      setDone(true);
      return;
    }

    const current = script[lineIndex];
    const speed = current.type === "prompt" ? 55 : 8;

    if (charIndex <= current.text.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIndex] = { type: current.type, text: current.text.slice(0, charIndex) };
          return next;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, current.type === "prompt" ? 120 : 380);
      return () => clearTimeout(pause);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, lineIndex]);

  return (
    <div
      className="card-glass w-full max-w-md overflow-hidden rounded-xl shadow-2xl"
      style={{ boxShadow: "0 0 60px -20px var(--color-accent-soft)" }}
      role="img"
      aria-label="Terminal window demonstrating a simulated whoami, skills and status command sequence"
    >
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: "var(--color-border)", background: "var(--color-bg-raised)" }}
      >
        <span className="h-3 w-3 rounded-full" style={{ background: "#e0665a" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#d9a441" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#35d68a" }} />
        <span className="mono-tag ml-3 text-xs" style={{ color: "var(--color-text-dim)" }}>
          zsh — aditya@security
        </span>
      </div>

      <div className="mono-tag min-h-[210px] px-5 py-5 text-[13px] leading-relaxed sm:text-sm">
        {visibleLines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.type === "prompt" ? (
              <span>
                <span style={{ color: "var(--color-accent-2)" }}>$</span>{" "}
                <span className="text-white">{line.text}</span>
              </span>
            ) : (
              <span style={{ color: "var(--color-text-muted)" }}>{line.text}</span>
            )}
          </div>
        ))}
        <span
          className={`inline-block h-4 w-2 translate-y-0.5 ${done ? "cursor-blink" : ""}`}
          style={{ background: "var(--color-accent)" }}
        />
      </div>
    </div>
  );
}
