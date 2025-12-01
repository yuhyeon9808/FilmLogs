import React from 'react';
import { Text } from 'react-native';

export default function TextBox({ text }: { text: string }) {
  return <Text className="text-text-main font-dis text-20 pb-3">{text}</Text>;
}
