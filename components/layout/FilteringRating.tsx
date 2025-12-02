import { RATING } from '@/constants/rating';
import { Star, X } from 'lucide-react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  select: string;
  setSelect: (value: string) => void;
};

export default function FilteringRating({
  open,
  setOpen,
  select,
  setSelect,
}: Props) {
  if (!open) return null;

  return (
    <View className="absolute inset-0 bg-menu-bg z-30 px-4">
      <View className="w-full flex items-end">
        <Pressable
          onPress={() => setOpen((prev) => !prev)}
          className="mt-6 mr-2"
        >
          <X size={30} color="#FEFEFE" />
        </Pressable>
      </View>

      <Text className="font-dis text-20 text-center text-text-main  mt-5 mb-9">
        Show by Rating
      </Text>

      <View className="flex  ">
        {RATING.map((rating) => (
          <Pressable
            key={rating.id}
            onPress={() => {
              setSelect(rating.text), setOpen((prev) => !prev);
            }}
            className={`flex flex-row items-center gap-3 mb-2 py-4 pl-10 ${
              select === rating.text ? 'bg-menu-active rounded-md' : ''
            }`}
          >
            <Star
              fill={select === rating.text ? '#D46211' : '#D9D9D9'}
              color={select === rating.text ? '#D46211' : '#D9D9D9'}
              size={20}
            />
            <Text
              className={`text-text-sub text-18 ${
                select === rating.text ? 'text-star-active' : ''
              }`}
            >
              {rating.text}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
