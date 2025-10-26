import type { Coffee } from '@/types/coffee'

interface CoffeeDetailsProps {
  coffee: Coffee
}

export function CoffeeDetails({ coffee }: CoffeeDetailsProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Description Section */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Descripción</h2>
        <p className="mb-4 text-lg text-gray-700">{coffee.short_description}</p>
        <p className="text-gray-600">{coffee.full_description}</p>
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        {/* Ingredients */}
        <div>
          <h3 className="mb-3 text-xl font-bold text-gray-900">Ingredientes</h3>
          <ul className="space-y-2">
            {coffee.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preparation Method */}
        <div>
          <h3 className="mb-3 text-xl font-bold text-gray-900">Método de Preparación</h3>
          <p className="text-gray-700">{coffee.preparation_method}</p>
        </div>

        {/* Additional Info */}
        <div className="rounded-xl bg-amber-50 p-6">
          <h3 className="mb-3 text-lg font-bold text-gray-900">Información Adicional</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Categoría:</span>
              <span>{coffee.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Precio:</span>
              <span className="text-lg font-bold text-amber-700">${coffee.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Disponibilidad:</span>
              <span className="text-green-600">✓ Disponible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
