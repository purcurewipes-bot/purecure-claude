import { Link } from "@tanstack/react-router";
import { brand } from "@/config/brand";
import { Instagram, Mail, Phone, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
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
          <div className="mt-4 flex gap-3">
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-9 w-9 grid place-items-center rounded-full bg-background border border-border text-[#25D366] hover:bg-[#25D366] hover:text-white transition shadow-sm"
            >
              <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.402.002 9.795-4.39 9.798-9.795.002-2.618-1.015-5.08-2.868-6.935C16.29 2.022 13.824.996 11.2.996 5.795.996 1.402 5.39 1.4 10.795c-.001 1.545.413 3.053 1.202 4.417l-.988 3.605 3.693-.969zm13.167-7.22c-.27-.135-1.602-.79-1.85-.88-.25-.09-.43-.135-.61.135-.18.27-.69.88-.845 1.055-.15.18-.3.2-.57.065-.27-.135-1.14-.42-2.172-1.34-1.03-.92-1.724-2.05-1.926-2.39-.2-.34-.02-.52.15-.69.15-.15.34-.4.5-.6.17-.2.22-.34.34-.57.12-.23.06-.43-.03-.61-.09-.18-.8-1.938-1.1-2.65-.29-.71-.59-.615-.8-.625-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.17 3.17 1.33 3.39.16.22 2.3 3.52 5.58 4.93.78.33 1.39.53 1.86.68.78.25 1.49.21 2.05.13.62-.09 1.602-.656 1.83-1.28.23-.625.23-1.16.16-1.28-.07-.12-.25-.18-.52-.315z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/purcurewipes/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 grid place-items-center rounded-full bg-background border border-border text-foreground hover:bg-accent transition shadow-sm"
            >
              <Instagram size={18} />
            </a>
          </div>
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
