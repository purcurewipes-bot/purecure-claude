import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitWeb3Form } from "@/lib/web3forms";
import { toast } from "sonner";
import partnerGrowthImage from "@/assets/partner-growth-handshake.png";
import {
  Users,
  ShieldCheck,
  Handshake,
  Package,
  TrendingUp,
  Globe,
  Headphones,
  Mail,
} from "lucide-react";
import { brand } from "@/config/brand";
import { countriesData } from "@/config/countries";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Become a Partner — PURCURE" },
      {
        name: "description",
        content:
          "Partner with PURCURE. We work with distributors, retailers and wholesalers who share our vision for modern hygiene.",
      },
      { property: "og:title", content: "Become a Partner — PURCURE" },
      {
        property: "og:description",
        content:
          "Grow with PURCURE — partnership opportunities for distributors, retailers and wholesalers.",
      },
    ],
  }),
  component: PartnerPage,
});

const businessTypes = [
  "Distributor",
  "Retailer",
  "Wholesaler",
  "E-commerce",
  "Hotel / Hospitality",
  "Other",
];

const countries = countriesData.map((c) => c.name);

const benefits = [
  { icon: ShieldCheck, title: "Premium Quality", subtitle: "Products" },
  { icon: Handshake, title: "Reliable & Long-Term", subtitle: "Partnerships" },
  { icon: Package, title: "Consistent Supply", subtitle: "Support" },
  { icon: TrendingUp, title: "Growing Hygiene", subtitle: "Category" },
  { icon: Globe, title: "Global Partnership", subtitle: "Opportunities" },
];

function PartnerPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    company_name: "",
    email: "",
    country_code: "",
    phone: "",
    country: "",
    business_type: "",
    business_type_other: "",
    website: "",
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitWeb3Form(form, "New PURCURE Partnership Inquiry");
    if (res.ok) {
      toast.success("Inquiry submitted! Our team will be in touch soon.");
      setForm({
        full_name: "",
        company_name: "",
        email: "",
        country_code: "",
        phone: "",
        country: "",
        business_type: "",
        business_type_other: "",
        website: "",
        message: "",
      });
    } else {
      toast.error(res.error);
    }
    setLoading(false);
  };

  return (
    <>
      {/* HERO + FORM */}
      <section className="bg-accent/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left copy */}
          <div className="pt-4">
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] text-foreground">
              Become<br />a Partner
            </h1>
            <p className="mt-6 text-2xl font-semibold text-primary">
              Grow With {brand.name}
            </p>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed max-w-md">
              <p>
                We're always looking to connect with distributors, retailers, wholesalers,
                and business partners who share our vision for modern hygiene and everyday
                convenience.
              </p>
              <p>
                If you're interested in partnering with {brand.name}, fill out the form
                and our team will get in touch with you.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={partnerGrowthImage}
                alt="Business partners shaking hands with a growth arrow in the background"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Right form card */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-card border border-border shadow-card p-7 md:p-10"
          >
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 grid place-items-center rounded-full bg-accent text-primary">
                <Users size={26} />
              </div>
              <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-primary">
                Partnership Inquiry Form
              </h2>
              <div className="mt-3 h-px w-24 bg-border" />
            </div>

            <div className="mt-7 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input
                  required
                  maxLength={120}
                  placeholder="Enter your full name"
                  value={form.full_name}
                  onChange={update("full_name")}
                  className="input"
                />
              </Field>
              <Field label="Company Name" required>
                <input
                  required
                  maxLength={160}
                  placeholder="Enter your company name"
                  value={form.company_name}
                  onChange={update("company_name")}
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Email Address" required>
                <input
                  required
                  type="email"
                  maxLength={255}
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={update("email")}
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <Field label="Phone Number" required>
                <div className="flex gap-2">
                  <select
                    required
                    value={form.country_code}
                    onChange={update("country_code")}
                    className="input w-[120px] shrink-0"
                    style={{ minWidth: "120px" }}
                  >
                    <option value="" disabled>Code</option>
                    {countriesData.map((c) => (
                      <option key={`${c.iso}-${c.code}`} value={c.code}>
                        {c.code} ({c.iso})
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="tel"
                    maxLength={40}
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={update("phone")}
                    className="input flex-1"
                  />
                </div>
              </Field>
              <Field label="Country" required>
                <select
                  required
                  value={form.country}
                  onChange={update("country")}
                  className="input"
                >
                  <option value="" disabled>Select your country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Business Type" required>
                <select
                  required
                  value={form.business_type}
                  onChange={update("business_type")}
                  className="input"
                >
                  <option value="" disabled>Select your business type</option>
                  {businessTypes.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </Field>
            </div>

            {form.business_type === "Other" && (
              <div className="mt-5">
                <Field label="Please specify your business type" required>
                  <input
                    required
                    maxLength={120}
                    placeholder="Specify your business type"
                    value={form.business_type_other}
                    onChange={update("business_type_other")}
                    className="input"
                  />
                </Field>
              </div>
            )}

            <div className="mt-5">
              <Field label="Website (Optional)">
                <input
                  maxLength={255}
                  placeholder="Enter your website"
                  value={form.website}
                  onChange={update("website")}
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" required>
                <textarea
                  required
                  maxLength={4000}
                  rows={5}
                  placeholder="Tell us more about your business and partnership interest…"
                  value={form.message}
                  onChange={update("message")}
                  className="input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-soft hover:opacity-90 disabled:opacity-60 transition"
            >
              {loading ? "Submitting…" : "Submit Inquiry"}
            </button>

            <div className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
              <div className="h-9 w-9 grid place-items-center rounded-full bg-accent text-primary shrink-0">
                <ShieldCheck size={16} />
              </div>
              <p>
                We value long-term partnerships built on trust, quality, and shared growth.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="bg-accent/80 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {benefits.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Icon size={40} className="text-primary" strokeWidth={1.5} />
              <div className="mt-3 font-semibold text-foreground leading-tight">
                {title}<br />{subtitle}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT FOOTER BAND */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
          <div className="flex items-center gap-4 md:pr-8">
            <div className="h-14 w-14 grid place-items-center rounded-full border border-primary-foreground/40">
              <Headphones size={22} />
            </div>
            <div>
              <div className="font-semibold text-lg">We're Here to Help</div>
              <p className="text-sm opacity-85 mt-1">
                Our team typically responds to partnership inquiries within 1–2 business days.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:pl-8 pt-8 md:pt-0">
            <div className="h-14 w-14 grid place-items-center rounded-full border border-primary-foreground/40">
              <Mail size={22} />
            </div>
            <div>
              <div className="font-semibold text-lg">Email Us</div>
              <p className="text-sm opacity-85 mt-1">{brand.email}</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.7rem 0.95rem;
          font-size: 0.95rem;
          outline: none;
          transition: box-shadow .15s, border-color .15s;
        }
        .input:focus {
          border-color: var(--color-ring);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-ring) 22%, transparent);
        }
        select.input { appearance: none; background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%); background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%; background-size: 5px 5px, 5px 5px; background-repeat: no-repeat; color: var(--color-foreground); padding-right: 2.25rem; }
      `}</style>
    </>
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
      <span className="text-sm font-semibold text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
