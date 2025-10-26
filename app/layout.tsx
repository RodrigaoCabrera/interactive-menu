import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interactive Cafe Menu',
  description: 'Menú interactivo de cafetería con información detallada de cada café',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
