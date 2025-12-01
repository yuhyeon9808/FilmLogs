import { supabase } from '@/lib/supabaseClient';

export interface DeleteMovieResult {
  ok: boolean;
  error?: string;
}

export async function deleteMovie(id: string): Promise<DeleteMovieResult> {
  const { error } = await supabase.from('film_logs').delete().eq('id', id);

  if (error) {
    console.error('deleteMovie error:', error);
    return { ok: false, error: 'db-failed' };
  }

  return { ok: true };
}
