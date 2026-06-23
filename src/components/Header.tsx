export function Header() {
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="h-2 bg-gradient-to-r from-black via-red-600 to-yellow-400" />
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center gap-3">
        <div className="text-4xl">⚽</div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">DFB Vereinsfinder</h1>
          <p className="text-gray-400 text-sm">
            Fußballvereine in Deutschland – von der Stadtklasse bis zur 1. Bundesliga
          </p>
        </div>
        <div className="sm:ml-auto flex gap-1">
          <span className="bg-black w-6 h-4 rounded-sm border border-gray-700 inline-block" />
          <span className="bg-red-600 w-6 h-4 rounded-sm inline-block" />
          <span className="bg-yellow-400 w-6 h-4 rounded-sm inline-block" />
        </div>
      </div>
    </header>
  );
}
