import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Check, FileText, Table2, Crown } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Your Downloads — Kuxeya Reselling" },
      {
        name: "description",
        content:
          "Thank you for your purchase. Download your Kuxeya reselling guides (EN/DE) and the profit tracker instantly.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: DownloadsPage,
});

type Item = {
  icon: typeof FileText;
  title: string;
  desc: string;
  file: string;
  size: string;
  kind: string;
};

const items: Item[] = [
  {
    icon: FileText,
    title: "Reseller Guide — English",
    desc: "Step-by-step guide: mindset, sourcing, pricing, listings, shipping & scaling.",
    file: "/downloads/kuxeya-reseller-guide-en.pdf",
    size: "PDF",
    kind: "EN",
  },
  {
    icon: FileText,
    title: "Reseller Guide — Deutsch",
    desc: "Schritt-für-Schritt: Mindset, Sourcing, Preise, Listings, Versand & Skalierung.",
    file: "/downloads/kuxeya-reseller-guide-de.pdf",
    size: "PDF",
    kind: "DE",
  },
  {
    icon: Table2,
    title: "Profit Tracker",
    desc: "CSV-Vorlage für jeden Flip: Einkauf, Gebühren, Versand, Profit & ROI.",
    file: "/downloads/kuxeya-profit-tracker.csv",
    size: "CSV",
    kind: "Tool",
  },
];

function DownloadsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 50% -10%, rgba(236,72,153,0.18), transparent 60%), #0a0a0f",
        color: "#f5f5f7",
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        padding: "64px 20px",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            fontSize: 12,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#d4d4d8",
          }}
        >
          <Check size={14} /> Payment confirmed
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.05,
            margin: "18px 0 10px",
            fontWeight: 800,
          }}
        >
          Welcome to{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg,#f9a8d4,#e5e7eb,#f9a8d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}
          >
            Kuxeya Reselling.
          </span>
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: 17, maxWidth: 620 }}>
          Deine Dateien stehen bereit. Lade sie hier sofort herunter — der Link
          bleibt jederzeit gültig.
        </p>

        <div
          style={{
            display: "grid",
            gap: 16,
            marginTop: 36,
          }}
        >
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.file}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: 20,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 18,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    flexShrink: 0,
                    borderRadius: 14,
                    display: "grid",
                    placeItems: "center",
                    background:
                      "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
                      {it.title}
                    </h3>
                    <span
                      style={{
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: "#d4d4d8",
                      }}
                    >
                      {it.size} · {it.kind}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "6px 0 0",
                      color: "#a1a1aa",
                      fontSize: 14,
                    }}
                  >
                    {it.desc}
                  </p>
                </div>
                <a
                  href={it.file}
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 18px",
                    borderRadius: 12,
                    background:
                      "linear-gradient(135deg,#ec4899,#f9a8d4)",
                    color: "#0a0a0f",
                    fontWeight: 700,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Download size={16} /> Download
                </a>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 40,
            padding: 20,
            border: "1px dashed rgba(255,255,255,0.15)",
            borderRadius: 16,
            color: "#a1a1aa",
            fontSize: 14,
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <Crown size={18} style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            Speichere die Dateien lokal ab. Bei Problemen mit dem Download
            schreib uns einfach kurz — wir schicken sie dir nochmal zu.
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <Link
            to="/"
            style={{
              color: "#f9a8d4",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
