import { Coffee } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-amber-700" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Café Menu</h1>
            <p className="text-xs text-gray-500">Interactive Coffee Experience</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#menu" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">
            Menú
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">
            Acerca de
          </a>
        </nav>
      </div>
    </header>
  )
}
