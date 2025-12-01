import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

  const queryClient = new QueryClient();

  if (!loaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1 bg-[#0A0A0D]">
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#0A0A0D' },
          }}
        />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
