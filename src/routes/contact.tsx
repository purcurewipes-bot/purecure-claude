import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitWeb3Form } from "@/lib/web3forms";
import { brand } from "@/config/brand";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PURCURE — Get in touch" },
      { name: "description", content: "Questions, partnerships, or feedback? Reach out to the PURCURE team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitWeb3Form(form, `PURCURE Contact: ${form.subject}`);
    if (res.ok) {
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      toast.error(res.error);
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold leading-[1.05]">
          Let's <span className="text-gradient">talk.</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Questions about products, retail, or partnerships? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        {/* Info */}
        <aside className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: brand.email },
            {
              icon: Phone,
              label: "Phone",
              value: (
                <div className="space-y-1">
                  <div>India: {brand.phoneIndia}</div>
                  <div>USA: {brand.phoneIntl}</div>
                </div>
              ),
            },
            { icon: MapPin, label: "Location", value: brand.location },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="h-11 w-11 grid place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-0.5 font-medium text-foreground">{value}</div>
              </div>
            </div>
          ))}
        </aside>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-7 md:p-10 shadow-card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" required>
              <input
                required
                maxLength={120}
                value={form.name}
                onChange={update("name")}
                className="input"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={update("email")}
                className="input"
              />
            </Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Phone (optional)">
              <input
                type="tel"
                maxLength={40}
                value={form.phone}
                onChange={update("phone")}
                className="input"
              />
            </Field>
            <Field label="Subject" required>
              <input
                required
                maxLength={200}
                value={form.subject}
                onChange={update("subject")}
                className="input"
              />
            </Field>
          </div>
          <Field label="Message" required>
            <textarea
              required
              maxLength={4000}
              rows={6}
              value={form.message}
              onChange={update("message")}
              className="input resize-none"
            />
          </Field>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft hover:opacity-90 disabled:opacity-60 transition"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.7rem 1rem;
          font-size: 0.95rem;
          outline: none;
          transition: box-shadow .15s, border-color .15s;
        }
        .input:focus {
          border-color: var(--color-ring);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-ring) 25%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
