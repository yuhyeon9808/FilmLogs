import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface HeaderProps {
  LeftIcon?: React.ComponentType<{ size?: number; color?: string }> | null;
  RightIcon?: React.ComponentType<{ size?: number; color?: string }> | null;
  LeftPress?: () => void;
  RightPress?: () => void;
}

export default function Header({
  LeftIcon,
  RightIcon,
  LeftPress,
  RightPress,
}: HeaderProps) {
  return (
    <View className="w-full my-6 flex-row items-center ">
      <Pressable className="w-8" onPress={LeftPress}>
        {LeftIcon && <LeftIcon size={22} color="#FEFEFE" />}
      </Pressable>

      <Text className="text-text-main font-dis text-24 flex-1 text-center">
        My Film Logs
      </Text>

      <Pressable className="w-8 items-end" onPress={RightPress}>
        {RightIcon && <RightIcon size={22} color="#FEFEFE" />}
      </Pressable>
    </View>
  );
}
