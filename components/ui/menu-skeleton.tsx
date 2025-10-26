export function MenuSkeleton() {
  return (
    <>
      <div className="mb-12 flex justify-center gap-8">
        <div className="h-16 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-16 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-16 w-24 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="mb-8 flex justify-center gap-3">
        <div className="h-10 w-24 animate-pulse rounded-full bg-gray-200" />
        <div className="h-10 w-32 animate-pulse rounded-full bg-gray-200" />
        <div className="h-10 w-28 animate-pulse rounded-full bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="h-48 w-full bg-gray-200" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-20 rounded bg-gray-200" />
              <div className="h-6 w-3/4 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
