import { createFileRoute, Link } from "@tanstack/react-router";
import banner from "@/assets/purcure-banner.png";
import carLifestyle from "@/assets/fragrance-free-car1.jpg";
import { useState } from "react";
import {
  SprayCan,
  Droplet,
  Package,
  Plane,
  Sparkles,
  Zap,
  Feather,
  Leaf,
  Briefcase,
  Dumbbell,
  Heart,
  Plus,
  Minus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PURCURE — Freshness for Every Moment" },
      {
        name: "description",
        content:
          "Premium wet wipes for travel, work, gym and daily care. Alcohol free, paraben free, pH balanced, infused with Vitamin E.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: SprayCan, title: "Fragrance Free", desc: "Clean and gentle care without any added fragrance." },
  { icon: Droplet, title: "Alcohol Free", desc: "Alcohol free formula that's gentle on skin." },
  { icon: Leaf, title: "Infused with Vitamin E", desc: "Nourishing Vitamin E for soft, healthy skin." },
  { icon: Package, title: "Individually Wrapped", desc: "Hygienic & fresh every time you use it." },
  { icon: Plane, title: "Travel Friendly", desc: "Perfect travel companion wherever you go." },
  { icon: Sparkles, title: "Everyday Freshness", desc: "Stay fresh, confident & refreshed all day." },
  { icon: Zap, title: "On The Go Ready", desc: "Easy to carry, easy to use anytime, anywhere." },
  { icon: Feather, title: "Soft & Skin Friendly", desc: "Soft on skin, perfect for daily care." },
];

const lifestyle = [
  {
    icon: Plane,
    title: "Travel",
    desc: "Airports, road trips & long flights — stay fresh in transit.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Briefcase,
    title: "Office",
    desc: "A subtle reset between meetings and busy work hours.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    desc: "Quick post-workout refresh before your next stop.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Heart,
    title: "Face & Body",
    desc: "Gentle, on-the-go personal care for everyday confidence.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
];

const faqs = [
  {
    q: "What makes Purcure Wet Wipes different?",
    a: "Purcure Wet Wipes are designed for convenience, freshness, and everyday use, with individually wrapped options that are easy to carry wherever you go.",
  },
  {
    q: "Are your wipes individually wrapped?",
    a: "Yes. Selected Purcure products are individually wrapped to help maintain freshness and provide on-the-go convenience.",
  },
  {
    q: "Are Purcure Wet Wipes suitable for everyday use?",
    a: "Our wipes are designed for daily cleansing and freshening up, whether you're at home, work, traveling, or on the move.",
  },
  {
    q: "How can I contact your team?",
    a: "You can reach us through our contact page or email us at info@purcure.com",
  },
  {
    q: "Do you offer bulk or wholesale orders?",
    a: "Absolutely. Visit our Become a Partner page to connect with us about distribution, retail or wholesale opportunities.",
  },
];

function HomePage() {
  return (
    <>
      {/* FULL-WIDTH HERO BANNER */}
      <section className="relative w-full">
        <img
          src={banner}
          alt="PURCURE — Freshness for Every Moment. Premium wet wipes for your everyday needs."
          className="w-full h-auto block"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold hover:bg-accent transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE PURCURE — bubble grid */}
      <section className="relative mt-24 py-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, oklch(1 0 0 / 0.9), oklch(0.97 0.035 190 / 0.78))",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto flex items-center justify-center gap-4 text-primary">
            <span className="h-px w-16 bg-current opacity-40" />
            <Droplet size={20} className="fill-current" />
            <span className="h-px w-16 bg-current opacity-40" />
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold">
            Why Choose <span className="text-gradient">Purcure?</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Designed for everyday care, made for modern lifestyles.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-16 grid gap-x-6 gap-y-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center group">
              <div className="relative h-28 w-28 rounded-full grid place-items-center transition-transform group-hover:-translate-y-1">
                <div
                  className="absolute inset-0 rounded-full border-2 border-white/70 shadow-soft"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95), oklch(0.92 0.08 170 / 0.42) 55%, oklch(0.31 0.09 232 / 0.16))",
                    boxShadow:
                      "inset 0 0 25px rgba(255,255,255,0.7), 0 8px 20px -8px oklch(0.31 0.09 232 / 0.25)",
                  }}
                />
                <div className="absolute top-3 left-4 h-3 w-3 rounded-full bg-white/80 blur-[1px]" />
                <Icon className="relative z-10 text-primary" size={36} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed px-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl px-6 mt-14 flex flex-wrap justify-center gap-3 text-sm">
          <span className="rounded-full bg-card border border-border px-5 py-2 font-medium shadow-card">
            Resealable Pack
          </span>
          <span className="rounded-full bg-card border border-border px-5 py-2 font-medium shadow-card">
            Formulated for both Men & Women
          </span>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3]">
          <img
            src={carLifestyle}
            alt="PURCURE in everyday life"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Built for the way you <span className="text-gradient">actually live.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            PURCURE was born from a simple belief: everyday hygiene should feel effortless,
            gentle and dependable. From early commutes and busy office days to gym sessions,
            long flights and weekend escapes — we kept reaching for wipes that felt better,
            cared more for our skin and travelled with us. So we built our own. Today, PURCURE
            is a modern personal-care brand making premium wipes for real life — pure, sure
            and secure, anywhere you go.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* MADE FOR EVERYDAY LIFE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Lifestyle
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Made for everyday life
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the airport lounge to your desk to the gym — PURCURE fits naturally into your routine.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {lifestyle.map(({ icon: Icon, title, desc, img }) => (
            <article
              key={title}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition aspect-[3/4]"
            >
              <img
                src={img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30">
                  <Icon size={18} />
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">{title}</h3>
                <p className="mt-1 text-sm opacity-90 leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            FAQs
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display font-semibold">{q}</span>
        <span className="h-8 w-8 grid place-items-center rounded-full bg-accent text-primary shrink-0">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 -mt-1 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}
