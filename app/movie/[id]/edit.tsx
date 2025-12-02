import Header from '@/components/layout/Header';
import TextBox from '@/components/ui/TextBox';
import { BASE_URL } from '@/constants/movie';
import { useFilmDetail } from '@/hooks/useFilmLog';
import { useUpdateFilmLog } from '@/hooks/useUpdateFilmLog';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';

export default function Edit() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const movieId = String(id);

  const { data } = useFilmDetail(String(movieId));
  const [rating, setRating] = useState(data!.rating);
  const [title, setTitle] = useState(data!.title);
  const [quote, setQuote] = useState(data!.quote);
  const [review, setReview] = useState(data!.review);
  const [posterUri, setPosterUri] = useState<string | null>(
    BASE_URL + data!.poster_url
  );
  const updateMutation = useUpdateFilmLog();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 13],
      quality: 1,
    });

    if (result.canceled) return;

    const asset = result.assets[0];
    setPosterUri(asset.uri);
  };

  const handleEdit = async () => {
    if (!posterUri) {
      alert('포스터 이미지를 선택해 주세요.');
      return;
    }

    const result = await updateMutation.mutateAsync({
      title,
      posterUri,
      rating,
      quote,
      review,
      id: movieId,
    });

    if (!result?.ok) {
      alert('수정에 실패했습니다.');
      return;
    }

    alert('수정 완료!');
    router.push('/movie/homefeed');
  };
  const isSubmitting = updateMutation.isPending;

  return (
    <ScrollView className="flex-1 px-4">
      <Header
        LeftIcon={ArrowLeft}
        LeftPress={() => router.push('/movie/homefeed')}
      />

      <View className="flex gap-4">
        <View>
          <TextBox text="Title" />
          <TextInput
            className="border border-text-main py-2 rounded-xl text-16 mb-4 pl-3 text-text-main"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View>
          <TextBox text="Poster" />
          <Pressable
            onPress={pickImage}
            className="border border-text-main rounded-xl bg-button-bg w-full h-[120px] flex items-center justify-center"
          >
            {posterUri ? (
              <Image
                source={{ uri: posterUri }}
                className="w-full h-full rounded-xl"
                resizeMode="cover"
              />
            ) : (
              <Plus color="#FEFEFE" size={30} />
            )}
          </Pressable>
        </View>

        <View>
          <TextBox text="Rating" />
          <View className="ml-[-6]">
            <StarRating
              rating={rating}
              onChange={(value) => setRating(value)}
              starSize={30}
              color="#D46211"
              emptyColor="#D9D9D9"
            />
          </View>
        </View>

        <View>
          <TextBox text="Famous line" />
          <TextInput
            multiline
            className="w-full border border-text-main rounded-xl text-16 pl-3 text-text-main"
            value={quote}
            onChangeText={setQuote}
          />
        </View>

        <View>
          <TextBox text="Review" />
          <TextInput
            multiline
            className="w-full border border-text-main rounded-xl text-16 pl-3 py-2 text-text-main h-[220px]"
            value={review}
            onChangeText={setReview}
            textAlignVertical="top"
          />
        </View>
      </View>

      <Pressable
        onPress={handleEdit}
        className="bg-save-btn w-full h-[45px] rounded-md mt-7 mb-10 flex justify-center items-center"
        disabled={isSubmitting}
      >
        <Text className="text-text-main font-preB text-16">
          {isSubmitting ? '수정 중...' : '수정 하기'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}
