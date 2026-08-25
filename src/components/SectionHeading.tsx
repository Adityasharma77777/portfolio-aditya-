import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`mono-tag mb-3 flex items-center gap-2 text-xs font-medium uppercase text-accent ${
          align === "center" ? "justify-center" : ""
        }`}
        style={{ color: "var(--color-accent)" }}
      >
        <span className="h-px w-6" style={{ background: "var(--color-accent)" }} />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
