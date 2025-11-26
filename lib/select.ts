import { supabase } from './supabaseClient';

export interface MovieInfoType {
  id: string;
  title: string;
  poster_url: string;
  rating: number;
  quote: string;
  review: string;
  watch_date: string;
}

export async function movieInfo(): Promise<MovieInfoType[]> {
  const { data } = await supabase
    .from('film_logs')
    .select('id,title, poster_url, rating, quote, review, watch_date');

  return data as MovieInfoType[];
}
