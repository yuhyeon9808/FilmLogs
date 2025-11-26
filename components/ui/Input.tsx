import React from 'react';
import { TextInput } from 'react-native';

interface InputProps {
  text: string;
  type?: 'email' | 'password' | 'text';
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function Input({
  text,
  type = 'text',
  value,
  onChangeText,
}: InputProps) {
  return (
    <TextInput
      placeholder={text}
      value={value?.trim()}
      placeholderTextColor="#CFCFCF"
      onChangeText={onChangeText}
      className="border border-text-main rounded-md w-[260px] px-4 py-3 text-text-sub "
      keyboardType={type === 'email' ? 'email-address' : 'default'}
      secureTextEntry={type === 'password'}
      autoCapitalize="none"
    />
  );
}
