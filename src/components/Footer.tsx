import { Link } from "@tanstack/react-router";
import { brand } from "@/config/brand";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/PURCURE-logo.png";
import { submitWeb3Form } from "@/lib/web3forms";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const res = await submitWeb3Form(
      { email, message: `New newsletter subscriber: ${email}`, from_name: email },
      "PURCURE Newsletter Subscription"
    );
    setLoading(false);
    if (res.ok) {
      setSubscribed(true);
      setEmail("");
      toast.success("Thanks for subscribing!");
    } else {
      toast.error(res.error);
    }
  };

  return (
    <footer className="mt-24 border-t border-border bg-accent/70">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt={brand.name} className="h-20 w-auto object-contain" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            {brand.tagline}
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Premium hygiene wipes designed for real, everyday moments.
          </p>
          <form onSubmit={onSubscribe} className="mt-6 max-w-sm">
            <h4 className="font-display font-semibold mb-2">Subscribe to our newsletter</h4>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 size={16} /> Subscribed — thanks!
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "…" : "Subscribe"}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-display font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {brand.nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 text-primary shrink-0" />
              <a href={`mailto:${brand.email}`} className="hover:text-foreground transition">
                {brand.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1 text-primary shrink-0" />
              <div>
                <div>{brand.phoneIndia}</div>
                <div>{brand.phoneIntl}</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={14} className="mt-1 text-[#25D366] shrink-0" />
              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                WhatsApp: {brand.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-primary shrink-0" />
              <span>{brand.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
