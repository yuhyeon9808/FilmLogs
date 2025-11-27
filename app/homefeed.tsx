import SearchInput from '@/components/feed/SearchInput';
import Header from '@/components/layout/Header';
import MovieCard from '@/components/layout/MovieCard';
import { useMovies } from '@/hooks/useMovies';
import { Plus, SlidersHorizontal } from 'lucide-react-native';
import React from 'react';
import { FlatList, View } from 'react-native';

export default function HomeFeed() {
  const { movies } = useMovies();

  return (
    <View className="px-4 flex-1 ">
      <Header LeftIcon={SlidersHorizontal} RightIcon={Plus} />
      <SearchInput />
      <FlatList
        className="mt-7 mb-10"
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <MovieCard
            id={item.id}
            poster={item.poster_url}
            title={item.title}
            date={item.watch_date}
            ratingValue={item.rating}
          />
        )}
      />
    </View>
  );
}
