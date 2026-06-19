import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Package, ShieldCheck, Sparkles, TrendingUp, Truck, Globe2, Zap, Rocket, Gem } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoAsset from "@/assets/kuxeya-logo.png.asset.json";

const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuxeya Reselling — Verified Suppliers. Real Profit." },
      {
        name: "description",
        content:
          "The ultimate reselling bundle: 60+ verified suppliers, step-by-step resell guides (EN/DE), listing mastery & a free profit tracker. By Kuxeya.",
      },
      { property: "og:title", content: "Kuxeya Reselling — Verified Suppliers. Real Profit." },
      { property: "og:description", content: "60+ verified suppliers, resell guides, profit tracker. The complete pack for serious resellers." },
      { property: "og:image", content: heroBg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBg },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Bundles />
      <Inside />
      <FAQ />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Kuxeya Reselling" className="h-9 w-9 object-contain rounded-full" width={36} height={36} />
          <span className="font-display text-lg tracking-wide text-pink-silver-gradient animate-shimmer font-bold">
            KUXEYA <span className="text-muted-foreground font-sans text-xs tracking-[0.3em] ml-1 font-normal">RESELLING</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#bundles" className="hover:text-pink transition">Bundles</a>
          <a href="#inside" className="hover:text-pink transition">What's Inside</a>
          <a href="#faq" className="hover:text-pink transition">FAQ</a>
        </nav>
        <a
          href="#bundles"
          className="bg-pink-gradient text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:shadow-pink-glow transition-all"
        >
          Get Yours
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink/40 bg-background/40 backdrop-blur-sm text-xs tracking-[0.2em] uppercase text-pink mb-8 animate-fade-up">
          <Crown className="w-3.5 h-3.5" /> Reselling. Done Right.
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] animate-fade-up">
          Make real money
          <br />
          <span className="text-pink-silver-gradient animate-shimmer italic">with reselling.</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up">
          60+ verified suppliers. Exact resell guides in English &amp; German.
          Step-by-step listing mastery. Plus a free profit tracker.
          Everything you need — in one bundle.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a
            href="#bundles"
            className="group bg-pink-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:shadow-pink-glow transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            See all bundles
          </a>
          <a
            href="#inside"
            className="px-8 py-4 rounded-full font-medium text-sm text-foreground/80 border border-border hover:border-pink/60 transition"
          >
            What's inside? →
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-pink" /> Instant access</span>
          <span className="flex items-center gap-1.5"><Globe2 className="w-4 h-4 text-pink" /> EN &amp; DE</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-pink" /> Lifetime updates</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "60+", label: "Verified Suppliers" },
    { value: "100%", label: "Tested & Approved" },
    { value: "2", label: "Languages (EN / DE)" },
    { value: "∞", label: "Lifetime Updates" },
  ];
  return (
    <section className="relative py-20 border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-pink-silver-gradient">{s.value}</div>
            <div className="mt-2 text-xs tracking-widest uppercase text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

type Bundle = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceCents: string;
  oldPrice?: string;
  badge?: string;
  icon: typeof Rocket;
  featured?: boolean;
  features: string[];
  cta: string;
};

const bundles: Bundle[] = [
  {
    id: "resell-guide",
    name: "Resell Guide",
    tagline: "Just the guide. Pure knowledge.",
    price: "5",
    priceCents: ",99€",
    icon: Rocket,
    features: [
      "Complete reselling guide (EN)",
      "From sourcing to first sale",
      "Mindset & pricing basics",
      "Instant digital download",
    ],
    cta: "Get the Guide",
  },
  {
    id: "guide-tracker",
    name: "1-on-1 Reseller Guide + Profit Tracker",
    tagline: "The full guide in EN & DE — plus tracking.",
    price: "9",
    priceCents: ",96€",
    icon: TrendingUp,
    features: [
      "1:1 reseller guide in English & German",
      "Step-by-step listing walkthrough",
      "Free profit tracker (Excel / Sheets)",
      "Track every flip & every euro",
      "Instant digital download",
    ],
    cta: "Get Guide + Tracker",
  },
  {
    id: "asics-supplier",
    name: "Asics Supplier",
    tagline: "Verified sources for Asics sneakers.",
    price: "8",
    priceCents: ",99€",
    icon: Package,
    features: [
      "Verified Asics suppliers",
      "Tested & active sources",
      "EN & DE sheets",
      "Instant access",
    ],
    cta: "Unlock Asics",
  },
  {
    id: "vintage-supplier",
    name: "Vintage Supplier",
    tagline: "Sources for real vintage pieces.",
    price: "8",
    priceCents: ",99€",
    icon: Package,
    features: [
      "Verified vintage suppliers",
      "Tested & active sources",
      "EN & DE sheets",
      "Instant access",
    ],
    cta: "Unlock Vintage",
  },
  {
    id: "lululemon-supplier",
    name: "Lululemon Supplier",
    tagline: "Verified sources for Lululemon.",
    price: "8",
    priceCents: ",99€",
    icon: Package,
    features: [
      "Verified Lululemon suppliers",
      "Tested & active sources",
      "EN & DE sheets",
      "Instant access",
    ],
    cta: "Unlock Lululemon",
  },
  {
    id: "supplier-vault",
    name: "Supplier Vault",
    tagline: "All suppliers in one place. No fluff.",
    price: "19",
    priceCents: ",99€",
    icon: Package,
    features: [
      "50+ verified suppliers",
      "EN & DE supplier sheets",
      "Lifetime supplier updates",
      "Instant access",
    ],
    cta: "Get the Vault",
  },
  {
    id: "everything",
    name: "EVERYTHING Full Bundle",
    tagline: "Everything you need to resell.",
    price: "39",
    priceCents: ",99€",
    oldPrice: "79,99 €",
    badge: "Most Popular",
    icon: Crown,
    featured: true,
    features: [
      "60+ verified suppliers (tested & active)",
      "Full resell guides — English & German",
      "1:1 walkthrough: how to list correctly",
      "Free profit tracker (Excel / Sheets)",
      "1:1 chat support with Kuxeya",
      "Personal supplier recommendations",
      "Listing review & feedback",
      "Priority access to new drops",
      "Insider tips for maximum margin",
      "Lifetime updates & new suppliers",
      "Instant digital download",
    ],
    cta: "Unlock for 39,99 €",
  },
];

function Bundles() {
  return (
    <section id="bundles" className="relative py-28 md:py-36 scroll-mt-20">
      <div className="absolute inset-0 bg-[image:var(--gradient-radial)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-pink mb-4">Choose Your Bundle</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Pick your <span className="text-pink-silver-gradient italic">level.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From your first flip to full-time reseller — there's a bundle for every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bundles.map((b) => (
            <BundleCard key={b.id} bundle={b} />
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          🔒 Secure payment • Instant download • 100% digital
        </p>
      </div>
    </section>
  );
}

function BundleCard({ bundle }: { bundle: Bundle }) {
  const Icon = bundle.icon;
  const isFeatured = bundle.featured;

  return (
    <div className={`relative group flex ${isFeatured ? "lg:-my-4" : ""}`}>
      {isFeatured && (
        <div className="absolute -inset-1 bg-pink-gradient opacity-40 blur-2xl group-hover:opacity-60 transition-opacity rounded-3xl" />
      )}
      <div
        className={`relative flex flex-col w-full rounded-3xl p-7 transition-all ${
          isFeatured
            ? "bg-card border border-pink/40 shadow-luxe"
            : "bg-card/60 border border-border hover:border-pink/40"
        }`}
      >
        {bundle.badge && (
          <div className={`inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase mb-4 ${
            isFeatured
              ? "bg-pink/15 border border-pink/40 text-pink"
              : "bg-silver/10 border border-silver/30 text-silver"
          }`}>
            <Crown className="w-3 h-3" /> {bundle.badge}
          </div>
        )}

        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
          isFeatured ? "bg-pink-gradient" : "bg-pink/10 border border-pink/30"
        }`}>
          <Icon className={`w-5 h-5 ${isFeatured ? "text-primary-foreground" : "text-pink"}`} />
        </div>

        <h3 className="font-display text-2xl font-bold">{bundle.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{bundle.tagline}</p>

        <div className="mt-5 mb-6">
          {bundle.oldPrice && (
            <div className="text-xs text-muted-foreground line-through">{bundle.oldPrice}</div>
          )}
          <div className="flex items-baseline gap-0.5">
            <span className={`font-display text-5xl font-black leading-none ${
              isFeatured ? "text-pink-silver-gradient" : "text-foreground"
            }`}>
              {bundle.price}
            </span>
            <span className={`text-xl font-bold ${isFeatured ? "text-pink" : "text-foreground"}`}>
              {bundle.priceCents}
            </span>
          </div>
          <div className="text-[11px] text-muted-foreground mt-1">One-time • Lifetime</div>
        </div>

        <ul className="space-y-2.5 mb-7 flex-1">
          {bundle.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
              <Check className="w-4 h-4 text-pink shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all inline-flex items-center justify-center gap-2 ${
            isFeatured
              ? "bg-pink-gradient text-primary-foreground hover:shadow-pink-glow"
              : "bg-foreground/5 border border-border text-foreground hover:border-pink hover:bg-pink/10"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          {bundle.cta}
        </button>
      </div>
    </div>
  );
}

function Inside() {
  const items = [
    { icon: Package, title: "Supplier Vault", desc: "Over 60 hand-picked & verified suppliers — no fakes, only real sources." },
    { icon: TrendingUp, title: "Profit Tracker", desc: "Keep an eye on every euro. Pre-built sheets, ready to use." },
    { icon: Globe2, title: "Resell Guides EN/DE", desc: "Step-by-step guides in both languages — from sourcing to selling." },
    { icon: Truck, title: "Listing Mastery", desc: "1:1 walkthrough on how to list products correctly and sell faster." },
    { icon: ShieldCheck, title: "Insider Tips", desc: "Knowledge that normally stays inside private Discord channels." },
    { icon: Zap, title: "Lifetime Updates", desc: "New suppliers, new strategies — you get everything automatically." },
  ];
  return (
    <section id="inside" className="py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-pink mb-4">What You Get</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">One bundle. <span className="text-pink-silver-gradient italic">Everything in.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-pink/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/30 flex items-center justify-center mb-5 group-hover:bg-pink/20 transition">
                <Icon className="w-5 h-5 text-pink" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Leon M.", text: "Made 5x my money back in 2 weeks. The suppliers are pure gold.", rating: 5 },
    { name: "Sara K.", text: "No more guessing. The profit tracker alone is worth the price.", rating: 5 },
    { name: "Marvin B.", text: "Best investment as a beginner. The guides are super easy to follow.", rating: 5 },
  ];
  return (
    <section className="py-28 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-pink mb-4">Real Resellers</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">They <span className="text-pink-silver-gradient italic">made it.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 rounded-2xl bg-background border border-border">
              <div className="flex gap-1 mb-4 text-pink">
                {Array.from({ length: r.rating }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="text-sm text-muted-foreground">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What exactly do I get?", a: "You get direct access to 60+ verified suppliers, full resell guides in English and German, a 1:1 listing walkthrough and a free profit tracker. Plus lifetime updates." },
    { q: "Is this beginner friendly?", a: "Absolutely. The guides are built step by step and take you from zero to your first sale." },
    { q: "How fast do I get access?", a: "Instantly after payment. You receive the link to the full bundle via email." },
    { q: "Is there a refund policy?", a: "Because these are digital products with instant access, all sales are final." },
  ];
  return (
    <section id="faq" className="py-28 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-pink mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Common <span className="text-pink-silver-gradient italic">questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl bg-card border border-border p-6 hover:border-pink/40 transition">
              <summary className="cursor-pointer font-semibold flex justify-between items-center list-none">
                {f.q}
                <span className="text-pink text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Kuxeya Reselling" className="h-9 w-9 object-contain rounded-full" width={36} height={36} loading="lazy" />
          <span className="font-display text-pink-silver-gradient font-bold">KUXEYA RESELLING</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kuxeya Reselling. Follow on TikTok @kuxeya.reselling
        </p>
      </div>
    </footer>
  );
}
