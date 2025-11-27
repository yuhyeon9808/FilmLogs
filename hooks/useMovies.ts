import { movieInfo, MovieInfoType } from '@/api/select';
import { useEffect, useState } from 'react';

export function useMovies() {
  const [movies, setMovies] = useState<MovieInfoType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await movieInfo();
      setMovies(result);
    }
    fetchData();
  }, []);

  return { movies };
}
