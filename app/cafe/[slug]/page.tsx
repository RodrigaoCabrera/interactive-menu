import { notFound } from 'next/navigation'
import { getCoffeeBySlug } from '@/app/actions/coffees'
import { CoffeeHero } from '@/components/cafe-detail/coffee-hero'
import { CoffeeDetails } from '@/components/cafe-detail/coffee-details'
import { BackButton } from '@/components/cafe-detail/back-button'

interface CoffeePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CoffeePage({ params }: CoffeePageProps) {
  const { slug } = await params
  const coffee = await getCoffeeBySlug(slug)

  if (!coffee) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <BackButton />
      <main className="container mx-auto px-4 py-8">
        <CoffeeHero coffee={coffee} />
        <CoffeeDetails coffee={coffee} />
      </main>
    </div>
  )
}
