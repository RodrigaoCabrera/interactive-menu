export function CoffeeDetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-6 w-24 rounded-full bg-gray-200" />
          <div className="h-6 w-20 rounded-full bg-gray-200" />
        </div>
        <div className="mb-6 h-12 w-3/4 rounded bg-gray-200" />
        <div className="aspect-video w-full rounded-2xl bg-gray-200" />
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="h-8 w-48 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
        <div className="space-y-6">
          <div className="h-8 w-40 rounded bg-gray-200" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
