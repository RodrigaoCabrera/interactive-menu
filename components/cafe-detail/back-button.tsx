'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function BackButton() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Volver al menú</span>
        </Link>
      </div>
    </div>
  )
}
