'use client'

import { useState } from 'react'
import type { Coffee } from '@/types/coffee'
import { CategoryFilters } from './category-filters'
import { CoffeeGrid } from './coffee-grid'

interface MenuSectionProps {
  coffees: Coffee[]
  categories: string[]
}

export function MenuSection({ coffees, categories }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter coffees based on selected category
  const filteredCoffees = selectedCategory
    ? coffees.filter((coffee) => coffee.category === selectedCategory)
    : coffees

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Results count */}
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-600">
          {selectedCategory ? (
            <>
              Mostrando <span className="font-semibold text-amber-700">{filteredCoffees.length}</span>{' '}
              {filteredCoffees.length === 1 ? 'café' : 'cafés'} de la categoría{' '}
              <span className="font-semibold">{selectedCategory}</span>
            </>
          ) : (
            <>
              Mostrando <span className="font-semibold text-amber-700">{filteredCoffees.length}</span>{' '}
              {filteredCoffees.length === 1 ? 'café' : 'cafés'}
            </>
          )}
        </p>
      </div>

      <CoffeeGrid coffees={filteredCoffees} />
    </>
  )
}
