import { BASE_URL } from '@/constants/Movie';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

interface MovieCardProps {
  poster: string;
  title: string;
  ratingValue: number;
  id: string;
}

export default function MovieCard({
  id,
  poster,
  title,
  ratingValue,
}: MovieCardProps) {
  const router = useRouter();

  return (
    <Pressable
      className="border border-card-border rounded-lg w-[48%]"
      onPress={() =>
        router.push({
          pathname: '/movie/[id]',
          params: { id },
        })
      }
    >
      <View className="flex flex-col items-center pt-4">
        <Image
          source={{ uri: BASE_URL + poster }}
          className="w-[131px] h-[187px] border border-text-main "
        />
        <View className=" flex gap-2 py-4">
          <Text className="font-preB text-text-main ">{title}</Text>
          <View className="ml-[-5]">
            <StarRatingDisplay
              rating={ratingValue}
              starSize={15}
              color="#D46211"
              emptyColor="#D9D9D9"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
