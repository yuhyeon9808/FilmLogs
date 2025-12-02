import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';

interface DeleteProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleDelete: () => void;
}

export default function DeleteModal({
  isOpen,
  setOpen,
  handleDelete,
}: DeleteProps) {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={() => setOpen(false)}
      backdropOpacity={0.6}
    >
      <View className="bg-[#1F1F21] px-8 py-10 rounded-xl items-center ">
        <Text className="text-text-main text-18 font-preB mb-2">
          정말 삭제하시겠어요?
        </Text>

        <Text className="text-text-sub text-14 font-preR mb-7 text-center">
          삭제 후에는 이 기록을 다시 복구할 수 없어요.
        </Text>

        <View className="flex-row gap-6">
          <Pressable onPress={() => setOpen(false)}>
            <Text className="text-text-sub font-preS text-16 border border-text-sub px-10 py-2 rounded-full">
              취소
            </Text>
          </Pressable>

          <Pressable onPress={handleDelete}>
            <Text className="text-text-main font-preS text-16 bg-save-btn px-10 py-2 rounded-full">
              삭제
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
