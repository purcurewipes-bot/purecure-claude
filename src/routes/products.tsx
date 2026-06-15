import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import sachetImg from "@/assets/product-sachet-front.png";
import sachetLying from "@/assets/product-sachet.png";
import boxBack from "@/assets/product-box-back.png";
import displayImg from "@/assets/product-display.jpg";
import fragrancePack from "@/assets/fragrance-free-pack.png";
import fragranceLifestyle from "@/assets/fragrance-free-lifestyle.png";
import {
  Briefcase,
  Dumbbell,
  Plane,
  TreePine,
  CheckCircle2,
  Loader2,
  Sun,
  HeartPulse,
} from "lucide-react";
import { toast } from "sonner";
import { submitWeb3Form } from "@/lib/web3forms";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — PURCURE Premium Hygiene Wipes" },
      {
        name: "description",
        content:
          "Explore PURCURE wipes: Aloe-Cucumber individually wrapped wipes and Fragrance-Free Personal Cleansing Wipes — made for everyday freshness.",
      },
    ],
  }),
  component: ProductsPage,
});

const variants = [
  {
    name: "Aloe-Cucumber Individually Wrapped Wipes",
    scent: "Aloe & Cucumber",
    size: "25 Ct. · individually wrapped",
    desc: "Hygienically sealed single-wipe sachets — the perfect travel and on-the-go companion.",
    img: displayImg,
  },
  {
    name: "Fragrance-Free Personal Cleansing Wipes",
    scent: "Fragrance Free",
    size: "25 large wipes · resealable",
    desc: "Alcohol-free, paraben-free, pH balanced and infused with Vitamin E — gentle daily care for sensitive skin.",
    img: fragrancePack,
  },
];

const upcoming = [
  { name: "Flushable Wipes", desc: "Septic & sewer safe everyday wipes.", img: sachetImg },
  { name: "Baby Wipes", desc: "Ultra-gentle for delicate baby skin.", img: sachetLying },
  { name: "Facial Bamboo Tissue", desc: "Soft, sustainable bamboo facial tissue.", img: boxBack },
  { name: "Bath & Body Wipes", desc: "Full-body refresh, anywhere, anytime.", img: displayImg },
];

const scenarios = [
  { icon: Plane, title: "Travel", desc: "Stay fresh in transit, hotels, and long flights." },
  { icon: Dumbbell, title: "Gym", desc: "Quick post-workout refresh before your next stop." },
  { icon: Briefcase, title: "Office", desc: "A subtle reset between meetings and busy hours." },
  { icon: TreePine, title: "Outdoor", desc: "Hiking, camping, festivals — clean wherever." },
  { icon: Sun, title: "Daily", desc: "An effortless part of your everyday routine." },
  { icon: HeartPulse, title: "Personal Hygiene", desc: "Gentle, dependable care anytime you need it." },
];

function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 lg:pt-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-sm font-medium text-primary">Our Products</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Wipes designed for <span className="text-gradient">every moment.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Premium personal cleansing wipes — built for travel, the gym, the office and every part of daily life.
          </p>
        </div>
        <div className="relative h-[400px] lg:h-[520px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-[3rem] blur-3xl" />
          <img
            src={fragranceLifestyle}
            alt="PURCURE fragrance-free wipes"
            className="relative max-h-full w-auto object-contain drop-shadow-2xl rounded-3xl"
          />
        </div>
      </section>

      {/* FLAGSHIP PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Flagship Range</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Our current bestsellers</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {variants.map((v) => (
            <article
              key={v.name}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-soft hover:-translate-y-1 transition"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-background grid place-items-center p-8">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">{v.scent}</span>
                <h3 className="mt-2 font-display text-2xl font-bold">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.size}</p>
                <p className="mt-4 text-foreground/85 leading-relaxed">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Upcoming</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Coming soon to PURCURE</h2>
          <p className="mt-3 text-muted-foreground">A growing family of clean, gentle care — launching soon.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((u) => (
            <article
              key={u.name}
              className="relative rounded-3xl border border-border bg-card overflow-hidden shadow-card"
            >
              <span className="absolute top-3 right-3 z-10 rounded-full bg-foreground/85 text-background text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                Coming Soon
              </span>
              <div className="aspect-square bg-gradient-to-br from-secondary to-background grid place-items-center p-6 grayscale opacity-70">
                <img src={u.img} alt={u.name} loading="lazy" className="w-full h-full object-contain" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{u.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{u.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHERE TO USE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display text-4xl font-bold text-center">Where to use</h2>
        <p className="mt-3 text-center text-muted-foreground">A wipe for every part of your day.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-7 shadow-card hover:shadow-soft transition"
            >
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductsContactSection />
    </>
  );
}

function ProductsContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitWeb3Form(
      { name: form.name, email: form.email, message: form.message },
      "New PURCURE Product Inquiry"
    );
    if (res.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error(res.error);
    }
    setLoading(false);
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <span className="text-sm font-medium text-primary">Contact Us</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          Questions about our <span className="text-gradient">products?</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Drop us a line and our team will get back to you shortly.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-card p-7 md:p-10 shadow-card relative overflow-hidden">
        {sent ? (
          <div className="py-10 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="h-16 w-16 grid place-items-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 size={36} className="animate-pulse" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
            <p className="mt-2 text-muted-foreground max-w-sm">
              We&apos;ve received your message and will get back to you shortly.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-medium text-primary hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <label className="block">
              <span className="text-sm font-semibold">Name <span className="text-destructive">*</span></span>
              <input
                required
                maxLength={120}
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Email <span className="text-destructive">*</span></span>
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Message <span className="text-destructive">*</span></span>
              <textarea
                required
                maxLength={4000}
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="How can we help?"
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft hover:opacity-90 disabled:opacity-60 transition"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
