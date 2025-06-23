import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  // Try to list all users (change 'User' to another table if needed)
  const { data, error } = await supabase
    .from('User')
    .select('*')
    .limit(1)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
} 