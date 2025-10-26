import type { Coffee } from '@/types/coffee'
import { CoffeeCard } from './coffee-card'

interface CoffeeGridProps {
  coffees: Coffee[]
}

export function CoffeeGrid({ coffees }: CoffeeGridProps) {
  if (coffees.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-6xl mb-4">☕</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No hay cafés disponibles
        </h3>
        <p className="text-gray-600">
          Vuelve pronto para ver nuestro menú actualizado
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}
