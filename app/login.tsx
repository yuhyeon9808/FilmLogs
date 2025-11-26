import Btn from '@/components/ui/Btn';
import Input from '@/components/ui/Input';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log('로그인 에러:', error.message);
      return;
    }

    console.log('로그인 성공:', data);
    router.replace('/homefeed');
  };

  return (
    <View className="w-full flex-1 px-4 ">
      <View className="w-full h-full border-x border-text-main flex justify-center items-center">
        <View className="flex justify-center items-center">
          <Text className="text-text-main text-36 font-dis text-center mb-5">
            My Film Logs
          </Text>
          <View className="flex gap-4">
            <Input
              text="이메일"
              type="email"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              text="비밀번호"
              type="password"
              value={password}
              onChangeText={setPassword}
            />
            <Btn text="로그인" width={260} handle={handleLogin} bg="#1F1F21" />
          </View>
        </View>
      </View>
    </View>
  );
}
