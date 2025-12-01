import { DetailInfoType, getDetail } from '@/api/detail';
import { useQuery } from '@tanstack/react-query';

export function useFilmLog(id?: string) {
  const query = useQuery<DetailInfoType | null>({
    queryKey: ['film_log', id],
    queryFn: () => getDetail(id as string),
    enabled: !!id,
  });

  return query;
}
