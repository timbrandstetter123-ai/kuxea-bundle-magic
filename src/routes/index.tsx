import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Package, ShieldCheck, Sparkles, TrendingUp, Truck, Globe2, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/kuxea-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuxea Reselling — Verified Suppliers, Real Profit." },
      {
        name: "description",
        content:
          "Das ultimative Reselling-Bundle: 60+ verifizierte Supplier, Step-by-Step Resell Guides (DE/EN), Listing-Anleitung & Profit Tracker. Von Kuxea.",
      },
      { property: "og:title", content: "Kuxea Reselling — Verified Suppliers, Real Profit." },
      { property: "og:description", content: "60+ verifizierte Supplier, Resell Guides, Profit Tracker. Das Komplettpaket für ernsthafte Reseller." },
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
      <Bundle />
      <Inside />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Kuxea" className="h-8 w-8 object-contain" width={32} height={32} />
          <span className="font-display text-lg tracking-wide text-gold-gradient animate-shimmer">
            KUXEA <span className="text-muted-foreground font-sans text-xs tracking-[0.3em] ml-1">RESELLING</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#bundle" className="hover:text-gold transition">Bundle</a>
          <a href="#inside" className="hover:text-gold transition">Was drin ist</a>
          <a href="#faq" className="hover:text-gold transition">FAQ</a>
        </nav>
        <a
          href="#bundle"
          className="bg-gold-gradient text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:shadow-gold-glow transition-all"
        >
          Jetzt holen
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
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-background/40 backdrop-blur-sm text-xs tracking-[0.2em] uppercase text-gold mb-8 animate-fade-up">
          <Crown className="w-3.5 h-3.5" /> Reselling. Aber richtig.
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] animate-fade-up">
          Verdiene Geld mit
          <br />
          <span className="text-gold-gradient animate-shimmer italic">echtem Reselling.</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up">
          60+ verifizierte Supplier. Exakte Resell-Guides in Deutsch &amp; Englisch.
          Step-by-Step Listing-Anleitung. Plus ein kostenloser Profit Tracker.
          Alles, was du brauchst — in einem Bundle.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a
            href="#bundle"
            className="group bg-gold-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:shadow-gold-glow transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Jetzt für 39,99 € sichern
          </a>
          <a
            href="#inside"
            className="px-8 py-4 rounded-full font-medium text-sm text-foreground/80 border border-border hover:border-gold/60 transition"
          >
            Was ist drin? →
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-gold" /> Sofortiger Zugriff</span>
          <span className="flex items-center gap-1.5"><Globe2 className="w-4 h-4 text-gold" /> DE &amp; EN</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-gold" /> Lebenslange Updates</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "60+", label: "Verifizierte Supplier" },
    { value: "100%", label: "Tested & Approved" },
    { value: "2", label: "Sprachen (DE / EN)" },
    { value: "∞", label: "Lifetime Updates" },
  ];
  return (
    <section className="relative py-20 border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-gold-gradient">{s.value}</div>
            <div className="mt-2 text-xs tracking-widest uppercase text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Bundle() {
  const features = [
    "60+ verifizierte Supplier (geprüft & aktiv)",
    "Komplette Resell-Guides — Deutsch & Englisch",
    "1:1 Anleitung: Wie du richtig listest",
    "Kostenloser Profit Tracker (Excel/Sheets)",
    "Insider-Tipps für maximale Marge",
    "Lebenslange Updates & neue Supplier",
    "Sofortiger digitaler Download",
    "Private Community Zugang",
  ];

  return (
    <section id="bundle" className="relative py-28 md:py-40 scroll-mt-20">
      <div className="absolute inset-0 bg-[image:var(--gradient-radial)] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Das Flagship Bundle</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            EVERYTHING <span className="text-gold-gradient italic">Full Bundle</span>
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gold-gradient opacity-30 blur-2xl group-hover:opacity-50 transition-opacity rounded-3xl" />
          <div className="relative bg-card border border-gold/30 rounded-3xl p-8 md:p-14 shadow-luxe">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold tracking-wider uppercase mb-4">
                  <Crown className="w-3 h-3" /> Most Popular
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold">Alles, was du zum Reselln brauchst.</h3>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Schluss mit fake Suppliern und mittelmäßigen Anleitungen. Das Komplettpaket.
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-xs text-muted-foreground line-through">79,99 €</div>
                <div className="font-display text-6xl md:text-7xl font-black text-gold-gradient leading-none">
                  39<span className="text-3xl">,99€</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">Einmalzahlung • Lifetime</div>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="w-full bg-gold-gradient text-primary-foreground py-5 rounded-2xl font-bold text-lg hover:shadow-gold-glow transition-all inline-flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5" />
              Bundle für 39,99 € freischalten
            </button>
            <p className="text-center text-xs text-muted-foreground mt-4">
              🔒 Sichere Bezahlung • Sofortiger Download • 100% digital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Inside() {
  const items = [
    { icon: Package, title: "Supplier Vault", desc: "Über 60 handverlesene & verifizierte Lieferanten — keine Fakes, nur echte Quellen." },
    { icon: TrendingUp, title: "Profit Tracker", desc: "Behalte jeden Euro im Blick. Vorgefertigte Sheets, sofort einsatzbereit." },
    { icon: Globe2, title: "Resell Guides DE/EN", desc: "Step-by-Step Anleitungen in beiden Sprachen — vom Einkauf bis zum Verkauf." },
    { icon: Truck, title: "Listing Mastery", desc: "1:1 Walkthrough, wie du Produkte richtig listest und schneller verkaufst." },
    { icon: ShieldCheck, title: "Insider Tipps", desc: "Wissen, das normalerweise nur in privaten Discord-Channels bleibt." },
    { icon: Zap, title: "Lifetime Updates", desc: "Neue Supplier, neue Strategien — du bekommst alles automatisch." },
  ];
  return (
    <section id="inside" className="py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Was du bekommst</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Ein Bundle. <span className="text-gold-gradient italic">Alles drin.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition">
                <Icon className="w-5 h-5 text-gold" />
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
    { name: "Leon M.", text: "Hab in 2 Wochen den Preis 5x wieder reingeholt. Die Supplier sind Gold wert.", rating: 5 },
    { name: "Sara K.", text: "Endlich kein Rätselraten mehr. Der Profit Tracker allein ist das Geld wert.", rating: 5 },
    { name: "Marvin B.", text: "Beste Investition als Anfänger. Die DE Guides sind super easy zu folgen.", rating: 5 },
  ];
  return (
    <section className="py-28 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Echte Reseller</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Sie haben's <span className="text-gold-gradient italic">geschafft.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 rounded-2xl bg-background border border-border">
              <div className="flex gap-1 mb-4 text-gold">
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
    { q: "Was bekomme ich genau?", a: "Du bekommst direkten Zugriff auf 60+ verifizierte Supplier, komplette Resell-Guides auf Deutsch und Englisch, eine 1:1 Listing-Anleitung sowie einen kostenlosen Profit Tracker. Plus lebenslange Updates." },
    { q: "Ist das für Anfänger geeignet?", a: "Absolut. Die Guides sind step-by-step aufgebaut und führen dich von Null bis zum ersten Verkauf." },
    { q: "Wie schnell bekomme ich Zugriff?", a: "Sofort nach Zahlung. Du erhältst per E-Mail den Link zum gesamten Bundle." },
    { q: "Gibt es eine Geld-zurück-Garantie?", a: "Da es sich um digitale Produkte mit sofortigem Zugriff handelt, sind alle Verkäufe final." },
  ];
  return (
    <section id="faq" className="py-28 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Häufige <span className="text-gold-gradient italic">Fragen</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl bg-card border border-border p-6 hover:border-gold/40 transition">
              <summary className="cursor-pointer font-semibold flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
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
        <div className="flex items-center gap-2">
          <img src={logo} alt="Kuxea" className="h-8 w-8 object-contain" width={32} height={32} loading="lazy" />
          <span className="font-display text-gold-gradient">KUXEA RESELLING</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kuxea Reselling. Folge mir auf TikTok @kuxea.reselling
        </p>
      </div>
    </footer>
  );
}
