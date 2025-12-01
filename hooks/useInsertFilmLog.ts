import { insert, InsertFilmLogInput } from '@/api/insert';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FILM_LOGS_QUERY_KEY } from './useFilmLogs';

export function useInsertFilmLog() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (input: InsertFilmLogInput) => insert(input),
    onSuccess: (result) => {
      if (result?.ok) {
        queryClient.invalidateQueries({ queryKey: FILM_LOGS_QUERY_KEY });
      }
    },
  });

  return mutation;
}
