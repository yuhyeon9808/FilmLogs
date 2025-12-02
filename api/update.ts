import { supabase } from '@/lib/supabaseClient';

const BUCKET_NAME = 'poster';

export interface UpdateFilmLogInput {
  title: string;
  posterUri: string;
  rating: number;
  quote: string;
  review: string;
  id: string;
}

export const updateReview = async ({
  title,
  posterUri,
  rating,
  quote,
  review,
  id,
}: UpdateFilmLogInput) => {
  try {
    if (!title.trim()) {
      return { ok: false, error: 'title-empty' };
    }
    if (!posterUri) {
      return { ok: false, error: 'poster-empty' };
    }
    if (!quote.trim()) {
      return { ok: false, error: 'quote-empty' };
    }
    if (!review.trim()) {
      return { ok: false, error: 'review-empty' };
    }
    if (!rating || rating <= 0) {
      return { ok: false, error: 'rating-empty' };
    }

    const response = await fetch(posterUri);
    const arrayBuffer = await response.arrayBuffer();

    const ext = 'jpg';
    const fileName = `${Date.now()}.${ext}`;
    const filePath = fileName;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, arrayBuffer, {
        contentType: 'image/jpeg',
        upsert: false,
      });

    if (uploadError) {
      console.error('image upload error:', uploadError);
      return { ok: false, error: 'upload-failed' };
    }

    const { error: updateError } = await supabase
      .from('film_logs')
      .update({
        title,
        poster_url: filePath,
        rating,
        quote,
        review,
      })
      .eq('id', id);

    if (updateError) {
      console.error('update error:', updateError);
      return { ok: false, error: 'db-failed' };
    }

    return { ok: true };
  } catch (e) {
    console.error('update Error', e);
    return { ok: false, error: 'exception' };
  }
};
