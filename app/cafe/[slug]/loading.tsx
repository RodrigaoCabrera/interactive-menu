import { BackButton } from '@/components/cafe-detail/back-button'
import { CoffeeDetailSkeleton } from '@/components/ui/coffee-detail-skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <BackButton />
      <main className="container mx-auto px-4 py-8">
        <CoffeeDetailSkeleton />
      </main>
    </div>
  )
}
