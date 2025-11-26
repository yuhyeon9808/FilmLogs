import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface HeaderProps {
  LeftIcon?: React.ComponentType<{ size?: number; color?: string }> | null;
  RightIcon?: React.ComponentType<{ size?: number; color?: string }> | null;
}

export default function Header({ LeftIcon, RightIcon }: HeaderProps) {
  return (
    <View className="w-full my-6 flex-row items-center ">
      <Pressable className="w-8">
        {LeftIcon && <LeftIcon size={22} color="#FEFEFE" />}
      </Pressable>

      <Text className="text-text-main font-dis text-24 flex-1 text-center">
        My Film Logs
      </Text>

      <Pressable className="w-8 items-end">
        {RightIcon && <RightIcon size={22} color="#FEFEFE" />}
      </Pressable>
    </View>
  );
}
