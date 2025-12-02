import { deleteMovie } from '@/api/delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FILM_LOGS_QUERY_KEY } from './useFilmLogs';

export function useDeleteFilm() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteMovie(id),
    onSuccess: (result) => {
      if (result?.ok) {
        queryClient.invalidateQueries({ queryKey: FILM_LOGS_QUERY_KEY });
      }
    },
  });
}
