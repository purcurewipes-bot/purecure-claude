import { createFileRoute } from "@tanstack/react-router";
import { Heart, Plane, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PURCURE — Freshness That Moves With You" },
      {
        name: "description",
        content:
          "PURCURE creates premium hygiene wipes designed for real everyday moments — work, travel, workouts, commuting and daily routines.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Gentle on Skin", desc: "Soft, comfortable formulations made for daily use." },
  { icon: Plane, title: "On-The-Go Ready", desc: "Designed to fit naturally into modern life." },
  { icon: ShieldCheck, title: "Quality First", desc: "Premium materials and reliable performance." },
  { icon: Sparkles, title: "Customer Obsessed", desc: "Built around how people actually live." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <span className="inline-block text-sm font-medium text-primary">About Us</span>
      <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold leading-[1.05]">
        Freshness that <span className="text-gradient">moves with you.</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        At PURCURE, we believe staying clean and refreshed should be simple, comfortable, and
        convenient — wherever life takes you.
      </p>

      {/* OUR STORY with image */}
      <section className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
            alt="PURCURE everyday care"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our Story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            PURCURE was created with one simple idea: everyday hygiene should feel better,
            work better, and fit naturally into the modern lifestyle. We started by asking
            ourselves what we wanted from a wipe — soft on skin, dependable on long days,
            convenient enough to live in a handbag, gym kit or laptop sleeve, and free from
            harsh ingredients.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            From those early conversations grew a brand committed to premium quality,
            thoughtful formulation, and travel-friendly design. Headquartered in Ahmedabad,
            India, PURCURE today crafts personal cleansing wipes that bring confidence and
            comfort to people on the move — at work, in transit, post-workout, or just
            mid-day. Pure. Sure. Secure.
          </p>
        </div>
      </section>

      {/* VISION & MISSION — portrait: stacked, horizontal: side-by-side */}
      <section className="mt-20 grid grid-cols-1 landscape:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <h2 className="font-display text-3xl font-bold">Our Vision</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To become a globally trusted hygiene and personal care brand known for quality,
            innovation, and everyday convenience. We aim to create products that bring
            comfort, freshness, and confidence into everyday life around the world.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <h2 className="font-display text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To make everyday hygiene easier, more comfortable, and more accessible for modern
            lifestyles. We're committed to creating high-quality products that deliver
            freshness, convenience, and dependable everyday care.
          </p>
        </div>
      </section>

      <hr className="my-16 border-border" />

      <section>
        <h2 className="font-display text-3xl font-bold">Our Values</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition"
            >
              <div className="h-11 w-11 grid place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
