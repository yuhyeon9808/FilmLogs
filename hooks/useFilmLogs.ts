import { movieInfo, MovieInfoType } from '@/api/select';
import { useQuery } from '@tanstack/react-query';

export const FILM_LOGS_QUERY_KEY = ['film_logs'];

export function useFilmLogs() {
  const query = useQuery<MovieInfoType[]>({
    queryKey: FILM_LOGS_QUERY_KEY,
    queryFn: movieInfo,
  });

  return query;
}
