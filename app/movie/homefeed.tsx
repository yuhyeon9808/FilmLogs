import SearchInput from '@/components/feed/SearchInput';
import Header from '@/components/layout/Header';
import MovieCard from '@/components/layout/MovieCard';
import { useFilmLogs } from '@/hooks/useFilmLogs';
import { useRouter } from 'expo-router';
import { Plus, SlidersHorizontal } from 'lucide-react-native';
import React from 'react';
import { FlatList, View } from 'react-native';

export default function HomeFeed() {
  const { data } = useFilmLogs();
  const router = useRouter();

  return (
    <View className="px-4 flex-1 ">
      <Header
        LeftIcon={SlidersHorizontal}
        RightIcon={Plus}
        RightPress={() => router.push('/movie/add')}
      />
      <SearchInput />
      <FlatList
        className="mt-7 mb-10"
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <MovieCard
            id={item.id}
            poster={item.poster_url}
            title={item.title}
            ratingValue={item.rating}
          />
        )}
      />
    </View>
  );
}
