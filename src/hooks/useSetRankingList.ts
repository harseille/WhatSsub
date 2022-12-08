import { useRef, useState, useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { DocumentData } from 'firebase/firestore';
import isPlaying from '@state/isPlaying';
import getRankingList from '@api/getRankingList';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

const useSetRankingList = (현재탭: string) => {
  const key = useRef<DocumentData | null>(null);
  const 정렬_조건: string = 현재탭 === '맛잘알랭킹' ? '좋아요' : '작성일';
  const 작동하는가_수정 = useSetRecoilState(isPlaying);
  const [타이머, 타이머_수정] = useState<any>(null);
  const [랭킹리스트, 랭킹리스트_수정] = useState<인터페이스_꿀조합[]>([]);

  const 꿀조합_컬렉션_정렬해서_가져오기 = useCallback(async () => {
    const 랭킹리스트_정보 = await getRankingList(key.current, 정렬_조건, 10);

    if (랭킹리스트_정보) {
      key.current = 랭킹리스트_정보.마지막_키;
      setTimeout(() => {
        랭킹리스트_수정(prev => [...prev, ...랭킹리스트_정보.랭킹리스트]);
      }, 100);
    }
  }, [현재탭]);

  const 맛잘알_리스트_가져오기 = async (limit: number) => {
    const 랭킹리스트_정보 = await getRankingList(null, '좋아요', limit);
    if (랭킹리스트_정보) {
      key.current = 랭킹리스트_정보.마지막_키;
      랭킹리스트_수정([...랭킹리스트_정보.랭킹리스트]);
    }
  };

  const 리스트_재정렬_정보_모음 = (랭킹리스트: 인터페이스_꿀조합[], id: string, delta: number) => {
    const 랭킹아이템_타겟: 인터페이스_꿀조합 = 랭킹리스트.find(랭킹아이템 => 랭킹아이템.id === id) as 인터페이스_꿀조합;
    랭킹아이템_타겟.좋아요 += delta;
    const 타겟제외한_랭킹리스트: 인터페이스_꿀조합[] = 랭킹리스트.filter(랭킹아이템 => 랭킹아이템.id !== id);
    const 교체된_순위: number = 타겟제외한_랭킹리스트.findIndex(
      랭킹아이템 => 랭킹아이템.좋아요 <= 랭킹아이템_타겟.좋아요
    );

    return { 랭킹아이템_타겟, 타겟제외한_랭킹리스트, 교체된_순위 };
  };

  const 리스트_재정렬 = async (id: string, delta: number) => {
    타이머_멈추기();

    if (정렬_조건 === '작성일') {
      랭킹리스트_수정(prev =>
        prev.map(랭킹아이템 =>
          랭킹아이템.id === id ? { ...랭킹아이템, 좋아요: 랭킹아이템.좋아요 + delta } : 랭킹아이템
        )
      );
    } else if (정렬_조건 === '좋아요' && delta === 1) {
      const 타겟_순위: number = 랭킹리스트.findIndex(랭킹아이템 => 랭킹아이템.id === id);
      const 위치: number = 랭킹리스트
        .filter(랭킹아이템 => 랭킹아이템.id !== id)
        .findIndex(랭킹아이템 => 랭킹아이템.좋아요 <= 랭킹리스트[타겟_순위].좋아요 + 1);

      if (타겟_순위 !== 위치) window.scrollTo({ left: 0, top: 위치 * 120, behavior: 'smooth' });

      setTimeout(() => {
        랭킹리스트_수정(prev => {
          const { 랭킹아이템_타겟, 타겟제외한_랭킹리스트, 교체된_순위 } = 리스트_재정렬_정보_모음(prev, id, delta);

          return [
            ...타겟제외한_랭킹리스트.slice(0, 교체된_순위),
            랭킹아이템_타겟,
            ...타겟제외한_랭킹리스트.slice(교체된_순위),
          ];
        });
      }, 100);
    } else {
      const 랭킹리스트_정보 = await getRankingList(key.current, 정렬_조건, 1);

      if (랭킹리스트_정보) {
        const 같은_랭킹아이템인가 = !!랭킹리스트_정보.랭킹리스트.find(랭킹아이템 => 랭킹아이템.id === id);

        랭킹리스트_수정(prev => {
          const { 랭킹아이템_타겟, 타겟제외한_랭킹리스트, 교체된_순위 } = 리스트_재정렬_정보_모음(prev, id, delta);

          if (교체된_순위 !== -1) {
            return [
              ...타겟제외한_랭킹리스트.slice(0, 교체된_순위),
              랭킹아이템_타겟,
              ...타겟제외한_랭킹리스트.slice(교체된_순위),
            ];
          }

          if (랭킹리스트_정보.마지막_키) key.current = 랭킹리스트_정보.마지막_키;
          const 마지막_랭킹아이템 =
            같은_랭킹아이템인가 || !랭킹리스트_정보.랭킹리스트.at(0)
              ? 랭킹아이템_타겟
              : 랭킹리스트_정보.랭킹리스트.at(0);

          return [...타겟제외한_랭킹리스트, 마지막_랭킹아이템 as 인터페이스_꿀조합];
        });
      }
    }
    console.log('랭킹');
    작동하는가_수정(false);
  };

  const 타이머_셋하기 = () => {
    타이머_수정(setInterval(맛잘알_리스트_가져오기.bind(null, 랭킹리스트.length), 60000));
  };

  const 타이머_멈추기 = () => {
    clearInterval(타이머);
  };

  useEffect(() => {
    타이머_멈추기();
    if (현재탭 === '맛잘알랭킹') 타이머_셋하기();

    return () => {
      타이머_멈추기();
    };
  }, [랭킹리스트, 현재탭]);

  return {
    key,
    타이머_셋하기,
    타이머_멈추기,
    랭킹리스트,
    랭킹리스트_수정,
    꿀조합_컬렉션_정렬해서_가져오기,
    리스트_재정렬,
  };
};

export default useSetRankingList;
