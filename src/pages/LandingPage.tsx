import { clubs } from '../data/clubs';
import { leagueLevels } from '../data/leagues';

interface LandingPageProps {
  onStart: () => void;
}

const uniqueLeagues = new Set(clubs.map((c) => c.league)).size;
const uniqueBundeslaender = new Set(clubs.map((c) => c.bundesland)).size;

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* German flag stripe */}
      <div className="h-1.5 bg-gradient-to-r from-black via-red-600 to-yellow-400" />

      {/* Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚽</span>
          <span className="font-bold text-lg tracking-tight">DFB Vereinsfinder</span>
        </div>
        <button
          onClick={onStart}
          className="bg-red-600 hover:bg-red-500 transition-colors px-5 py-2 rounded-lg text-sm font-semibold"
        >
          App öffnen
        </button>
      </nav>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <div className="w-[600px] h-[600px] bg-red-700/10 rounded-full blur-3xl" />
        </div>

        <div className="relative">
          <span className="inline-block text-7xl mb-6 animate-bounce">⚽</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Fußballvereine<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              in Deutschland
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Entdecke hunderte Fußballvereine — von der Kreisklasse bis zur 1. Bundesliga.
            Filtere nach Bundesland, Liga und Altersgruppe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="bg-red-600 hover:bg-red-500 transition-all hover:scale-105 px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-red-900/40"
            >
              Vereine entdecken →
            </button>
            <a
              href="#features"
              className="border border-gray-700 hover:border-gray-500 transition-colors px-8 py-4 rounded-xl text-lg font-semibold text-gray-300 hover:text-white"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900/60 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-5xl font-extrabold text-yellow-400 mb-2">{clubs.length}+</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Vereine</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-red-500 mb-2">{uniqueLeagues}</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Spielklassen</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-white mb-2">{uniqueBundeslaender}</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Bundesländer</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Was du damit machen kannst</h2>
        <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
          Alles auf einen Blick — schnell, einfach, kostenlos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-gray-600 transition-colors"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* League ladder */}
      <section className="bg-gray-900/60 border-y border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Alle Spielklassen</h2>
          <div className="flex flex-col gap-2">
            {leagueLevels.map((l) => {
              const count = clubs.filter((c) => c.league === l.level).length;
              return (
                <div key={l.level} className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl px-5 py-3">
                  <span className="text-2xl font-black text-gray-700 w-7 shrink-0">{l.tier}</span>
                  <span className="flex-1 font-semibold">{l.level}</span>
                  <span className="text-sm text-gray-400">{count} Verein{count !== 1 ? 'e' : ''}</span>
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-red-600 to-yellow-400 shrink-0"
                    style={{ width: `${Math.max(8, (count / clubs.length) * 220)}px` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Bereit? Finde deinen Verein.
        </h2>
        <p className="text-gray-400 mb-10 text-lg max-w-lg mx-auto">
          Suche nach Name, Stadt oder nutze die Filter — schnell und ohne Anmeldung.
        </p>
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all hover:scale-105 px-10 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-red-900/30"
        >
          Jetzt starten ⚽
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-600 text-sm">
        <p>DFB Vereinsfinder &mdash; Fußball in Deutschland</p>
        <div className="flex justify-center gap-1.5 mt-2">
          <span className="bg-black w-5 h-3 rounded-sm border border-gray-700 inline-block" />
          <span className="bg-red-600 w-5 h-3 rounded-sm inline-block" />
          <span className="bg-yellow-400 w-5 h-3 rounded-sm inline-block" />
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: '🔍',
    title: 'Schnelle Suche',
    desc: 'Suche nach Vereinsname, Kurzname oder Stadt — Ergebnisse erscheinen sofort beim Tippen.',
  },
  {
    icon: '🗺️',
    title: 'Nach Bundesland filtern',
    desc: 'Zeige nur Vereine aus deinem Bundesland an — alle 16 Bundesländer sind abgedeckt.',
  },
  {
    icon: '🏆',
    title: 'Liga auswählen',
    desc: 'Von der 1. Bundesliga bis zur Kreisklasse — filtere nach der gewünschten Spielklasse.',
  },
  {
    icon: '👶',
    title: 'Altersgruppen',
    desc: 'Finde Vereine mit bestimmten Jugend- oder Seniorenmannschaften für jede Altersklasse.',
  },
  {
    icon: '📋',
    title: 'Vereinsdetails',
    desc: 'Klicke auf einen Verein und sieh Gründungsjahr, Mitgliederzahl, Stadion, Farben und mehr.',
  },
  {
    icon: '📊',
    title: 'Live-Statistiken',
    desc: 'Sieh auf einen Blick wie viele Vereine deinen Filterkriterien entsprechen.',
  },
];
