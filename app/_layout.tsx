import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  const [loaded] = useFonts({
    preR: require('../assets/fonts/Pretendard-Regular.otf'),
    preS: require('../assets/fonts/Pretendard-SemiBold.otf'),
    preB: require('../assets/fonts/Pretendard-Bold.otf'),
    dis: require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0D]">
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0A0A0D' },
        }}
      />
    </SafeAreaView>
  );
}
