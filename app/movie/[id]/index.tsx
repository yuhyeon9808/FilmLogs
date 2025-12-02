import Header from '@/components/layout/Header';
import Btn from '@/components/ui/Btn';
import { BASE_URL } from '@/constants/Movie';
import { useDeleteFilm } from '@/hooks/useDeleteFilm';
import { useFilmDetail } from '@/hooks/useFilmLog';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Image, ScrollView, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default function MovieDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data } = useFilmDetail(String(id));
  const deleteMutation = useDeleteFilm();

  const deleteHandle = async (id: string) => {
    await deleteMutation.mutateAsync(id);

    router.push('/movie/homefeed');
  };

  return (
    <ScrollView className="px-4 flex-1">
      <Header
        LeftIcon={ArrowLeft}
        LeftPress={() => router.push('/movie/homefeed')}
      />
      <View className="px-2">
        <Image
          source={{ uri: BASE_URL + data?.poster_url }}
          className="border-text-main border-2 rounded-xl w-full mt-5"
          style={{ aspectRatio: 131 / 187 }}
        />
        <View className="border border-b-text-sub py-7">
          <View className="flex flex-row justify-between">
            <Text className="font-preB text-text-main text-20">
              {data?.title}
            </Text>
          </View>
          <View className="ml-[-5] py-2">
            <StarRatingDisplay
              rating={Number(data?.rating)}
              starSize={15}
              color="#D46211"
              emptyColor="#D9D9D9"
            />
          </View>
          <Text className="text-text-main py-7 font-preS text-18 leading-7">
            {data?.quote}
          </Text>
          <Text className="text-text-sub font-preR text-16 leading-6">
            {data?.review}
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-center my-7 gap-5">
        <Btn
          text="Edit"
          width={155}
          handle={() => router.push(`/movie/${id}/edit`)}
          bg="#1F1F21"
        />
        <Btn
          text="Delete"
          width={155}
          handle={() => deleteHandle(String(id))}
        />
      </View>
    </ScrollView>
  );
}
