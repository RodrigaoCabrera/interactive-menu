import type { Database } from '@/lib/supabase/database.types'

export type Coffee = Database['public']['Tables']['coffees']['Row']
export type CoffeeInsert = Database['public']['Tables']['coffees']['Insert']
export type CoffeeUpdate = Database['public']['Tables']['coffees']['Update']

export type PromoBanner = Database['public']['Tables']['promo_banners']['Row']
