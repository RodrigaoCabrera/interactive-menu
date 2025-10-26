import { getCoffees } from './actions/coffees'

export default async function HomePage() {
  const coffees = await getCoffees()

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Interactive Cafe Menu
        </h1>
        <p className="text-gray-600 mb-8">
          Next.js 16 + React 19.2 + Tailwind CSS + Supabase ✓
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Cafés disponibles ({coffees.length})
          </h2>

          {coffees.length === 0 ? (
            <p className="text-gray-500">No hay cafés disponibles</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffees.map((coffee) => (
                <div
                  key={coffee.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{coffee.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{coffee.category}</p>
                  <p className="text-gray-700 mb-4">{coffee.short_description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      ${coffee.price}
                    </span>
                    {coffee.featured && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
