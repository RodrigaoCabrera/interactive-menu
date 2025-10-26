export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      coffees: {
        Row: {
          id: string
          name: string
          slug: string
          category: string
          short_description: string
          full_description: string
          price: number
          ingredients: string[]
          preparation_method: string
          images: string[]
          featured: boolean
          available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          category: string
          short_description: string
          full_description: string
          price: number
          ingredients: string[]
          preparation_method: string
          images: string[]
          featured?: boolean
          available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          category?: string
          short_description?: string
          full_description?: string
          price?: number
          ingredients?: string[]
          preparation_method?: string
          images?: string[]
          featured?: boolean
          available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      promo_banners: {
        Row: {
          id: string
          title: string
          subtitle: string | null
          image_url: string
          active: boolean
          display_order: number
          start_date: string | null
          end_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          subtitle?: string | null
          image_url: string
          active?: boolean
          display_order?: number
          start_date?: string | null
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          subtitle?: string | null
          image_url?: string
          active?: boolean
          display_order?: number
          start_date?: string | null
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
