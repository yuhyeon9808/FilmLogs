import Btn from '@/components/ui/Btn';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
export default function Home() {
  const router = useRouter();
  return (
    <View className="w-full flex-1 px-4">
      <View className="w-full h-full border-x border-text-main flex justify-center items-center">
        <Text className="text-text-main text-36 font-dis">My Film Logs</Text>
        <Text className="text-text-sub pt-6 pb-24 text-18 ">
          A small cinema for your memories
        </Text>
        <View className="flex gap-6">
          <Btn
            width={260}
            text="회원가입"
            handle={() => router.push('/signup')}
          />
          <Btn
            width={260}
            text="로그인"
            handle={() => router.push('/login')}
            bg="#1F1F21"
          />
        </View>
      </View>
    </View>
  );
}
