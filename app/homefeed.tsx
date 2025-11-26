import SearchInput from '@/components/feed/SearchInput';
import Header from '@/components/layout/Header';
import { Plus, SlidersHorizontal } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';

export default function HomeFeed() {
  return (
    <View className="px-4 flex">
      <Header LeftIcon={SlidersHorizontal} RightIcon={Plus} />
      <SearchInput />
    </View>
  );
}
