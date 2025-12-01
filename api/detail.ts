import { supabase } from '../lib/supabaseClient';

export interface DetailInfoType {
  title: string;
  poster_url: string;
  rating: number;
  quote: string;
  review: string;
}

export async function getDetail(id: string): Promise<DetailInfoType> {
  const { data } = await supabase
    .from('film_logs')
    .select('title, poster_url, rating, quote, review')
    .eq('id', id)
    .single();

  return data as DetailInfoType;
}
