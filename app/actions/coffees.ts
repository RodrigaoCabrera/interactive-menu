'use server'

import { supabase } from '@/lib/supabase/client'
import type { Coffee } from '@/types/coffee'

export async function getCoffees(): Promise<Coffee[]> {
  const { data, error } = await supabase
    .from('coffees')
    .select('*')
    .eq('available', true)
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching coffees:', error)
    return []
  }

  return data
}

export async function getCoffeesByCategory(category: string): Promise<Coffee[]> {
  const { data, error } = await supabase
    .from('coffees')
    .select('*')
    .eq('available', true)
    .eq('category', category)
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching coffees by category:', error)
    return []
  }

  return data
}

export async function getCoffeeBySlug(slug: string): Promise<Coffee | null> {
  const { data, error } = await supabase
    .from('coffees')
    .select('*')
    .eq('slug', slug)
    .eq('available', true)
    .single()

  if (error) {
    console.error('Error fetching coffee by slug:', error)
    return null
  }

  return data
}

export async function getCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('coffees')
    .select('category')
    .eq('available', true)

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  if (!data) return []

  // Get unique categories
  const categories = [...new Set(data.map((item: { category: string }) => item.category))]
  return categories
}
