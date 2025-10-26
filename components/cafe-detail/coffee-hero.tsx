'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import type { Coffee } from '@/types/coffee'

interface CoffeeHeroProps {
  coffee: Coffee
}

export function CoffeeHero({ coffee }: CoffeeHeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="mb-8">
      {/* Category and Featured Badge */}
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
          {coffee.category}
        </span>
        {coffee.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </span>
        )}
      </div>

      {/* Coffee Name */}
      <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
        {coffee.name}
      </h1>

      {/* Image Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {coffee.images.map((image, index) => (
                <div key={index} className="relative min-w-0 flex-[0_0_100%]">
                  <div className="relative aspect-video w-full md:aspect-21/9">
                    <Image
                      src={image}
                      alt={`${coffee.name} - Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Navigation Buttons */}
        {coffee.images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {coffee.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${index === selectedIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                    }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Price */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Precio</p>
          <p className="text-4xl font-bold text-amber-700">${coffee.price}</p>
        </div>
      </div>
    </div>
  )
}
