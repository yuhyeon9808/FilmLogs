import SearchInput from '@/components/feed/SearchInput';
import FilteringRating from '@/components/layout/FilteringRating';
import Header from '@/components/layout/Header';
import MovieCard from '@/components/layout/MovieCard';
import { useFilmLogs } from '@/hooks/useFilmLogs';
import { useRouter } from 'expo-router';
import { Plus, SlidersHorizontal } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function HomeFeed() {
  const { data } = useFilmLogs();
  const router = useRouter();
  const [keyWord, setKeyword] = useState('');
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState('전체 보기');

  const filtering =
    keyWord.trim() !== ''
      ? data?.filter((item) =>
          item.title.toLowerCase().includes(keyWord.trim()?.toLocaleLowerCase())
        )
      : select !== '전체 보기'
      ? data?.filter((item) => item.rating === Number(select))
      : data;

  return (
    <View className="px-4 flex-1 ">
      <Header
        LeftIcon={SlidersHorizontal}
        RightIcon={Plus}
        RightPress={() => router.push('/movie/add')}
        LeftPress={() => setOpen((prev) => !prev)}
      />
      <SearchInput keyWord={keyWord} setKeyword={setKeyword} />
      <FlatList
        className="mt-7 mb-10"
        data={filtering}
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
        ListEmptyComponent={
          <View className="flex-1 items-center mt-36 ">
            <Text className="text-text-sub text-20">
              해당 하는 리뷰가 없습니다.
            </Text>
          </View>
        }
      />

      <FilteringRating
        open={open}
        setOpen={setOpen}
        select={select}
        setSelect={setSelect}
      />
    </View>
  );
}
