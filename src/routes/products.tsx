import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import sachetImg from "@/assets/product-sachet-front.png";
import sachetLying from "@/assets/product-sachet.png";
import boxBack from "@/assets/product-box-back.png";
import boxFront from "@/assets/product-box-front.png";
import displayImg from "@/assets/product-display.jpg";
import fragrancePack from "@/assets/fragrance-free-pack.png";
import fragranceLifestyle from "@/assets/fragrance-free-lifestyle.png";
import fragranceCar from "@/assets/fragrance-free-car.png";
import {
  Briefcase,
  Dumbbell,
  Plane,
  TreePine,
  CheckCircle2,
  Loader2,
  Sun,
  HeartPulse,
  ChevronLeft,
  ChevronRight,
  Waves,
  Baby,
  Bath,
  Leaf,
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

const flagshipProducts = [
  {
    name: "Fragrance-Free Personal Cleansing Wipes",
    scent: "Fragrance Free",
    size: "25 large wipes · resealable",
    desc: "Alcohol-free, paraben-free, pH balanced and infused with Vitamin E — gentle daily care for sensitive skin.",
    images: [fragrancePack, fragranceLifestyle, fragranceCar],
  },
  {
    name: "Aloe-Cucumber Individually Wrapped Wipes",
    scent: "Aloe & Cucumber",
    size: "25 Ct. · individually wrapped",
    desc: "Hygienically sealed single-wipe sachets — the perfect travel and on-the-go companion.",
    images: [boxFront, boxBack, displayImg, sachetLying, sachetImg],
  },
];

const upcoming = [
  { 
    name: "Flushable Wipes", 
    desc: "Septic & sewer safe everyday wipes.", 
    icon: Waves, 
    color: "from-blue-500/10 to-teal-500/10 text-blue-600" 
  },
  { 
    name: "Baby Wipes", 
    desc: "Ultra-gentle for delicate baby skin.", 
    icon: Baby, 
    color: "from-pink-500/10 to-rose-500/10 text-pink-600" 
  },
  { 
    name: "Bath & Body Wipes", 
    desc: "Full-body refresh, anywhere, anytime.", 
    icon: Bath, 
    color: "from-purple-500/10 to-indigo-500/10 text-purple-600" 
  },
  { 
    name: "Facial Bamboo Tissue", 
    desc: "Soft, sustainable bamboo facial tissue.", 
    icon: Leaf, 
    color: "from-green-500/10 to-emerald-500/10 text-green-600" 
  },
];

const scenarios = [
  { icon: Plane, title: "Travel", desc: "Stay fresh in transit, hotels, and long flights." },
  { icon: Dumbbell, title: "Gym", desc: "Quick post-workout refresh before your next stop." },
  { icon: Briefcase, title: "Office", desc: "A subtle reset between meetings and busy hours." },
  { icon: TreePine, title: "Outdoor", desc: "Hiking, camping, festivals — clean wherever." },
  { icon: Sun, title: "Daily", desc: "An effortless part of your everyday routine." },
  { icon: HeartPulse, title: "Personal Hygiene", desc: "Gentle, dependable care anytime you need it." },
];

function ImageSlider({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-accent to-background p-8 flex items-center justify-center select-none overflow-hidden group">
      {/* Images container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt={`${name} view ${i + 1}`}
            className={`absolute max-h-full w-auto object-contain transition-all duration-500 ease-in-out ${
              i === index 
                ? "opacity-100 scale-100 pointer-events-auto" 
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-background hover:scale-105 active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-background hover:scale-105 active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Slide indicators (dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 text-center flex flex-col items-center">
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">Our Products</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold leading-[1.1] text-foreground">
          Wipes designed for <span className="text-gradient">every moment.</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Premium personal cleansing wipes — built for travel, the gym, the office, and every part of daily life.
        </p>
      </section>

      {/* FLAGSHIP PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Flagship Range</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Our current bestsellers</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {flagshipProducts.map((v) => (
            <article
              key={v.name}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-soft hover:-translate-y-1 transition duration-300"
            >
              <ImageSlider images={v.images} name={v.name} />
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
              className="group relative rounded-3xl border border-border bg-card p-8 flex flex-col justify-between shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${u.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
              <div>
                <div className={`h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br ${u.color} shrink-0`}>
                  <u.icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{u.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/80 bg-accent px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
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
