import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import type { Coffee } from '@/types/coffee'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <Link
      href={`/cafe/${coffee.slug}`}
      className="group relative block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl hover:border-amber-200"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          {coffee.images && coffee.images[0] ? (
            <Image
              src={coffee.images[0]}
              alt={coffee.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-linear-to-br from-amber-100 to-amber-50">
              <span className="text-4xl">☕</span>
            </div>
          )}
      </div>

      {/* Featured Badge */}
      {coffee.featured && (
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-amber-500 px-2 py-1 text-xs font-semibold text-white shadow-lg">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-amber-700">
          {coffee.category}
        </p>

        {/* Name */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-1">
          {coffee.name}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {coffee.short_description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-amber-700">
              ${coffee.price}
            </span>
          </div>

          <span className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-amber-700">
            Ver más
          </span>
        </div>
      </div>
    </Link>
  )
}
