import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  const [loaded] = useFonts({
    preR: require('../assets/fonts/Pretendard-Regular.otf'),
    preB: require('../assets/fonts/Pretendard-Bold.otf'),
    dis: require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0A0A0D' },
      }}
    />
  );
}
