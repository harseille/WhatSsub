import { useRef, useState, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { DocumentData } from 'firebase/firestore';
import isPlaying from '@state/isPlaying';
import getRankingList from '@api/getRankingList';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

const useSetRankingList = (현재탭: string) => {
  const key = useRef<DocumentData | null>(null);
  const 작동하는가_수정 = useSetRecoilState(isPlaying);
  const [랭킹리스트, 랭킹리스트_수정] = useState<인터페이스_꿀조합[]>([]);

  const 꿀조합_컬렉션_정렬해서_가져오기 = useCallback(async () => {
    const 정렬_조건: string = 현재탭 === '맛잘알랭킹' ? '좋아요' : '작성일';
    const 랭킹리스트_정보 = await getRankingList(key.current, 정렬_조건, 10);

    if (랭킹리스트_정보) {
      key.current = 랭킹리스트_정보.마지막_키;
      setTimeout(() => {
        랭킹리스트_수정(prev => [...prev, ...랭킹리스트_정보.랭킹리스트]);
      }, 100);
    }
  }, [현재탭]);

  const 리스트_재정렬 = async (id: string, 좋아요_개수_증가하는가: boolean) => {
    const 정렬_조건: string = 현재탭 === '맛잘알랭킹' ? '좋아요' : '작성일';
    console.log('리스트_재정렬');

    if (정렬_조건 === '작성일') {
      랭킹리스트_수정(prev =>
        prev.map(랭킹아이템 =>
          랭킹아이템.id === id
            ? { ...랭킹아이템, 좋아요: 랭킹아이템.좋아요 + (좋아요_개수_증가하는가 ? 1 : -1) }
            : 랭킹아이템
        )
      );
    } else {
      const prevIdx = 랭킹리스트.findIndex(ranking => ranking.id === id);
      const 랭킹리스트_정보 = await getRankingList(null, 정렬_조건, 랭킹리스트.length);

      if (랭킹리스트_정보) {
        const idx = 랭킹리스트_정보.랭킹리스트.findIndex(ranking => ranking.id === id);
        const insertedIdx = idx === -1 ? 랭킹리스트.length - 1 : idx;

        if (prevIdx !== insertedIdx) {
          if (좋아요_개수_증가하는가) {
            window.scrollTo({ left: 0, top: insertedIdx * 120, behavior: 'smooth' });
          }
        }

        key.current = 랭킹리스트_정보.마지막_키;
        랭킹리스트_수정([...랭킹리스트_정보.랭킹리스트]);
      }
    }
    console.log('랭킹');
    작동하는가_수정(false);
  };

  return {
    key,
    랭킹리스트,
    랭킹리스트_수정,
    꿀조합_컬렉션_정렬해서_가져오기,
    리스트_재정렬,
  };
};

export default useSetRankingList;
