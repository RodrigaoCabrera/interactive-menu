import { getCoffees } from './actions/coffees'
import { Header } from '@/components/layout/header'
import { CoffeeGrid } from '@/components/menu/coffee-grid'

export default async function HomePage() {
  const coffees = await getCoffees()

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Nuestro Menú de Cafés
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Descubre nuestra selección de cafés especiales, preparados con los mejores granos
            y el amor por el arte del café.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700">{coffees.length}</div>
            <div className="text-sm text-gray-600">Variedades</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700">
              {coffees.filter(c => c.featured).length}
            </div>
            <div className="text-sm text-gray-600">Featured</div>
          </div>
        </div>

        {/* Coffee Grid */}
        <CoffeeGrid coffees={coffees} />
      </main>
    </div>
  )
}
