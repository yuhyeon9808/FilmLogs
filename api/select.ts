import { supabase } from '../lib/supabaseClient';

export interface MovieInfoType {
  id: string;
  title: string;
  poster_url: string;
  rating: number;
}

export async function movieInfo(): Promise<MovieInfoType[]> {
  const { data } = await supabase
    .from('film_logs')
    .select('id,title, poster_url, rating');

  return data as MovieInfoType[];
}
