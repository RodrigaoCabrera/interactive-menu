# Interactive Cafe Menu

Menú interactivo de cafetería con información detallada de cada café.

## Tech Stack

- **Framework**: Next.js 16 + React 19.2
- **Styling**: Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL)
- **State**: Zustand (client state)
- **Carousel**: Embla Carousel
- **Icons**: Lucide React
- **Validation**: Zod
- **Navigation**: View Transitions API (Next.js 16 native)

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials.

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
app/
├── layout.tsx
├── page.tsx (grid de cafés con categorías)
└── cafe/
    └── [slug]/
        └── page.tsx (landing individual del café)

components/
├── layout/
│   ├── header.tsx
│   └── footer.tsx
├── menu/
│   ├── category-filters.tsx
│   ├── coffee-grid.tsx
│   └── coffee-card.tsx
├── cafe-detail/
│   ├── coffee-hero.tsx
│   ├── coffee-info-section.tsx
│   ├── ingredients-section.tsx
│   ├── preparation-section.tsx
│   └── back-button.tsx
└── ui/
    └── (shadcn components)

lib/
├── supabase/
│   ├── client.ts
│   └── database.types.ts
└── utils.ts
```

## Features

- ✅ Interactive coffee menu with categories
- ✅ Detailed coffee landing pages with View Transitions
- ✅ Image galleries with Embla Carousel
- ✅ Responsive design (mobile-first)
- ✅ Server Components for optimal performance
- ✅ TypeScript strict mode

## Next Steps

1. Configure Supabase project
2. Create database tables (see `.claude.md` for schema)
3. Implement components following the architecture
4. Add seed data for coffees

## License

MIT
