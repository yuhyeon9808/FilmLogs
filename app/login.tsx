import Btn from '@/components/ui/Btn';
import Input from '@/components/ui/Input';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    setError(false);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(true);
      return;
    }

    console.log('로그인 성공:', data);
    router.replace('/movie/homefeed');
  };

  return (
    <KeyboardAwareScrollView
      className="px-4"
      contentContainerStyle={{
        flexGrow: 1,
      }}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
      extraScrollHeight={50}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 border-x border-text-main justify-center items-center">
        <View className="items-center">
          <Text className="text-text-main text-36 font-dis text-center mb-5">
            My Film Logs
          </Text>

          <View className="w-[260px] gap-4">
            <Input
              text="이메일"
              type="email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (error) setError(false);
              }}
            />

            <Input
              text="비밀번호"
              type="password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (error) setError(false);
              }}
            />

            {error && (
              <Text className="text-red-600 text-14">
                이메일 또는 비밀번호가 일치하지 않습니다.
              </Text>
            )}

            <Btn text="로그인" width={260} handle={handleLogin} bg="#1F1F21" />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
