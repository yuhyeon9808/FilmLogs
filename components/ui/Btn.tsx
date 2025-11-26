import React from 'react';
import { Pressable, Text } from 'react-native';

export default function Btn({
  text,
  width,
  handle,
  bg,
}: {
  text: string;
  width: number;
  handle: () => void;
  bg?: string;
}) {
  return (
    <Pressable
      onPress={handle}
      className="border border-text-main py-3 rounded-md"
      style={{ width: width, backgroundColor: bg }}
    >
      <Text className="text-text-main text-center font-bold">{text}</Text>
    </Pressable>
  );
}
