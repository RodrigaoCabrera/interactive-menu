'use client'

interface CategoryFiltersProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  const handleCategoryClick = (category: string | null) => {
    onSelectCategory(category)
  }
  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-3">
        {/* All button */}
        <button
          onClick={() => handleCategoryClick(null)}
          className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${selectedCategory === null
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50'
            }`}
        >
          Todos
        </button>

        {/* Category buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${selectedCategory === category
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
