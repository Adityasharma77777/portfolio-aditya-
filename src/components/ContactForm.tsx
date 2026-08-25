import { useState } from "react";
import type { FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // NOTE: This form is validated on the client only. No backend or email
      // service is connected yet — wire this up to an API route, or a
      // service like Formspree / EmailJS, before relying on it in production.
      setSubmitted(true);
      setValues({ name: "", email: "", message: "" });
    }
  };

  if (submitted) {
    return (
      <div
        className="card-glass flex flex-col items-center gap-3 rounded-xl p-10 text-center"
        role="status"
      >
        <CheckCircle2 className="h-9 w-9" style={{ color: "var(--color-accent)" }} />
        <h3 className="text-lg font-bold text-white">Message ready to send</h3>
        <p className="max-w-sm text-sm" style={{ color: "var(--color-text-muted)" }}>
          Your message passed validation. Connect a backend or email service to
          actually deliver it — see the note in{" "}
          <code className="mono-tag text-xs" style={{ color: "var(--color-accent-2)" }}>
            ContactForm.tsx
          </code>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mono-tag mt-2 text-xs font-medium underline"
          style={{ color: "var(--color-accent)" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="card-glass space-y-5 rounded-xl p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mono-tag mb-1.5 block text-xs uppercase" style={{ color: "var(--color-text-dim)" }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-md border bg-transparent px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[var(--color-accent)]"
          style={{ borderColor: errors.name ? "var(--color-danger)" : "var(--color-border-strong)" }}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs" style={{ color: "var(--color-danger)" }}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mono-tag mb-1.5 block text-xs uppercase" style={{ color: "var(--color-text-dim)" }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border bg-transparent px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[var(--color-accent)]"
          style={{ borderColor: errors.email ? "var(--color-danger)" : "var(--color-border-strong)" }}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs" style={{ color: "var(--color-danger)" }}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mono-tag mb-1.5 block text-xs uppercase" style={{ color: "var(--color-text-dim)" }}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-md border bg-transparent px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[var(--color-accent)]"
          style={{ borderColor: errors.message ? "var(--color-danger)" : "var(--color-border-strong)" }}
          placeholder="Tell me a bit about what you'd like to discuss..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs" style={{ color: "var(--color-danger)" }}>
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-8"
        style={{ background: "var(--color-accent)" }}
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
