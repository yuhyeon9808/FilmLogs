import React from 'react';
import { Image, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

interface MovieCardProps {
  poster: string;
  title: string;
  date: string;
  ratingValue: number;
}

export default function MovieCard({
  poster,
  title,
  date,
  ratingValue,
}: MovieCardProps) {
  return (
    <View className="border border-card-border rounded-lg">
      <Image source={require(poster)} className="w-[131px] h-[187px]" />
      <Text className="font-preB text-text-main">{title}</Text>
      <StarRatingDisplay
        rating={ratingValue}
        starSize={15}
        color="#D46211"
        emptyColor="#D9D9D9"
      />
      <Text className="text-date-text">{date}</Text>
    </View>
  );
}
