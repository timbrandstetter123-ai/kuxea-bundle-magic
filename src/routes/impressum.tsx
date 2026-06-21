import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/kuxeya-logo.png.asset.json";

const logo = logoAsset.url;

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Kuxeya Reselling" },
      { name: "description", content: "Legal information and imprint for Kuxeya Reselling." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Kuxeya Reselling" className="h-9 w-9 object-contain rounded-full" width={36} height={36} />
            <span className="font-display text-pink-silver-gradient font-bold">KUXEYA RESELLING</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-pink transition">← Back</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10">
          <span className="text-pink-silver-gradient italic">Impressum</span>
        </h1>

        <section className="space-y-6 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Tim Brandsteter<br />
              Blumbergerstraße 4b<br />
              84166 Adlkofen<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-2">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:infokuxeya@gmail.com" className="text-pink hover:underline">infokuxeya@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-2">Umsatzsteuer</h2>
            <p>
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Tim Brandsteter<br />
              Blumbergerstraße 4b<br />
              84166 Adlkofen
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-2">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer noopener" className="text-pink hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-2">Haftung für Inhalte</h2>
            <p className="text-sm text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-2">Urheberrecht</h2>
            <p className="text-sm text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kuxeya Reselling
      </footer>
    </div>
  );
}
