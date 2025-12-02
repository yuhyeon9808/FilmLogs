import { UpdateFilmLogInput, updateReview } from '@/api/update';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FILM_LOGS_QUERY_KEY } from './useFilmLogs';

export function useUpdateFilmLog() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (input: UpdateFilmLogInput) => updateReview(input),
    onSuccess: (result) => {
      if (result?.ok) {
        queryClient.invalidateQueries({ queryKey: FILM_LOGS_QUERY_KEY });
      }
    },
  });

  return mutation;
}
