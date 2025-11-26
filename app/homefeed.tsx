import SearchInput from '@/components/feed/SearchInput';
import Header from '@/components/layout/Header';
import MovieCard from '@/components/layout/MovieCard';
import { movieInfo, MovieInfoType } from '@/lib/select';
import { Plus, SlidersHorizontal } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function HomeFeed() {
  const [movies, setMovies] = useState<MovieInfoType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await movieInfo();
      setMovies(result);
    };

    fetchMovies();
  }, []);

  return (
    <View className="px-4 flex-1 ">
      <Header LeftIcon={SlidersHorizontal} RightIcon={Plus} />
      <SearchInput />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row flex-wrap gap-3 mt-7 mb-10">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster={movie.poster_url}
              title={movie.title}
              date={movie.watch_date}
              ratingValue={movie.rating}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
