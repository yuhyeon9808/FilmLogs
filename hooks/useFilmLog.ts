import { getDetail } from '@/api/detail';
import { useQuery } from '@tanstack/react-query';

export function useFilmDetail(id?: string) {
  return useQuery({
    queryKey: ['film_log', id],
    queryFn: () => getDetail(id as string),
    enabled: !!id,
  });
}
