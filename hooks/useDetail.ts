import { DetailInfoType, getDetail } from '@/api/detail';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export function useDetail() {
  const { id } = useLocalSearchParams();

  const [detail, setDetail] = useState<DetailInfoType>();

  useEffect(() => {
    async function fetchData() {
      const result = await getDetail(String(id));
      setDetail(result);
    }
    fetchData();
  }, [id]);

  return { detail };
}
