import { Search } from 'lucide-react-native';
import { TextInput, View } from 'react-native';

export default function SearchInput() {
  return (
    <View className="flex-row items-center w-full h-12 bg-input-bg rounded-full px-4">
      <Search size={20} color="#8E8E93" />
      <TextInput
        placeholder="기록한 영화 찾기"
        className="flex-1 ml-3"
        placeholderTextColor="#8E8E93"
      />
    </View>
  );
}
