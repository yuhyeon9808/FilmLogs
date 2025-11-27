import Header from '@/components/layout/Header';
import Btn from '@/components/ui/Btn';
import { BASE_URL } from '@/constants/Movie';
import { useDetail } from '@/hooks/useDetail';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Image, ScrollView, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default function MovieDetail() {
  const router = useRouter();
  const { detail } = useDetail();
  return (
    <ScrollView className="px-4 flex-1">
      <Header LeftIcon={ArrowLeft} LeftPress={() => router.push('/homefeed')} />
      <View className="px-2">
        <Image
          source={{ uri: BASE_URL + detail?.poster_url }}
          className="border-text-main border-2 rounded-xl w-full mt-5"
          style={{ aspectRatio: 131 / 187 }}
        />
        <View className="border border-b-text-sub py-7">
          <View className="flex flex-row justify-between">
            <Text className="font-preB text-text-main text-20">
              {detail?.title}
            </Text>
            <Text className="font-preR text-date-text">
              {detail?.watch_date}
            </Text>
          </View>
          <View className="ml-[-5] py-2">
            <StarRatingDisplay
              rating={Number(detail?.rating)}
              starSize={15}
              color="#D46211"
              emptyColor="#D9D9D9"
            />
          </View>
          <Text className="text-text-main py-7 font-preS text-18 leading-7">
            {detail?.quote}
          </Text>
          <Text className="text-text-sub font-preR text-16 leading-6">
            {detail?.review}
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-center my-7 gap-5">
        <Btn text="Edit" width={155} handle={() => {}} bg="#1F1F21" />
        <Btn text="Delete" width={155} handle={() => {}} />
      </View>
    </ScrollView>
  );
}
