import { Search } from 'lucide-react-native';
import { TextInput, View } from 'react-native';

export default function SearchInput({
  keyWord,
  setKeyword,
}: {
  keyWord: string;
  setKeyword: (value: string) => void;
}) {
  return (
    <View className="flex-row items-center w-full h-12 bg-input-bg rounded-full px-4 ">
      <Search size={20} color="#8E8E93" />
      <TextInput
        placeholder="기록한 영화 찾기"
        className="flex-1 ml-3 text-text-main"
        placeholderTextColor="#8E8E93"
        value={keyWord}
        onChangeText={(value) => setKeyword(value)}
      />
    </View>
  );
}
