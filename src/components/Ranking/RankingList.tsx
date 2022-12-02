import { useState, useEffect, useRef, useCallback } from 'react';
import { collection, DocumentData, query } from 'firebase/firestore';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import CombinationRankingCard from '@components/Ranking/CombinationRankingCard';
import LoadingSpinner from '@components/Common/LoadingSpinner';
import getYearMonthDate from '@utils/getYearMonthDate';
import getRankingList from '@api/getRankingList';
import Rank1 from '@assets/images/rankingBadge/rank_1.png';
import Rank2 from '@assets/images/rankingBadge/rank_2.png';
import Rank3 from '@assets/images/rankingBadge/rank_3.png';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { db } from '../../firebase.config';

type 타입_랭킹_순위_아이템 = {
  id: number;
  imageSrc: string;
};

type 타입_랭킹_순위 = {
  [key: string]: 타입_랭킹_순위_아이템;
};

const 랭킹_순위: 타입_랭킹_순위 = {
  일위: { id: 0, imageSrc: Rank1 },
  이위: { id: 1, imageSrc: Rank2 },
  삼위: { id: 2, imageSrc: Rank3 },
};

function RankingList() {
  const { state } = useLocation();
  const 현재탭: string = state || '맛잘알랭킹';
  const key = useRef<DocumentData | null>(null);
  const [rankingList, setRankingList] = useState<인터페이스_꿀조합[]>([]);

  const 꿀조합_컬렉션_정렬해서_가져오기 = useCallback(async (현재탭: string) => {
    const 정렬_조건: string = 현재탭 === '맛잘알랭킹' ? '좋아요' : '작성일';
    const 반환값 = await getRankingList(key.current, 정렬_조건);

    if (반환값) {
      key.current = 반환값.마지막_키;
      setTimeout(() => {
        setRankingList(prev => [...prev, ...반환값.랭킹리스트]);
      }, 300);
    }
  }, []);

  const { listRef, hasMore } = useInfiniteScroll(
    꿀조합_컬렉션_정렬해서_가져오기.bind(null, 현재탭),
    rankingList.length,
    query(collection(db, '꿀조합'))
  );

  useEffect(() => {
    key.current = null;
    setRankingList([]);
    꿀조합_컬렉션_정렬해서_가져오기(현재탭);
  }, [현재탭]);

  return (
    <ul>
      {rankingList.length > 0 &&
        rankingList.map(({ id, 꿀조합제목, 이미지, 베이스샌드위치, 작성일, 뱃지리스트, 좋아요 }, i) => {
          let 랭킹_뱃지_이미지 = '';
          let 신규_샌드위치인가 = false;

          if (현재탭 === '맛잘알랭킹') {
            const 순위 = Object.keys(랭킹_순위).find(key => 랭킹_순위[key].id === i);
            랭킹_뱃지_이미지 = 순위 ? 랭킹_순위[순위].imageSrc : '';
          } else if (현재탭 === '신규조합') {
            const { year: 오늘_년도, month: 오늘_월, date: 오늘_일 } = getYearMonthDate(new Date());
            const { year: 작성일_년도, month: 작성일_월, date: 작성일_일 } = getYearMonthDate(new Date(작성일));

            신규_샌드위치인가 = 오늘_년도 === 작성일_년도 && 오늘_월 === 작성일_월 && 오늘_일 === 작성일_일;
          }

          return (
            <CombinationRankingCard
              key={id}
              id={id}
              listRef={i === rankingList.length - 1 ? listRef : null}
              isNew={신규_샌드위치인가}
              rankingImage={랭킹_뱃지_이미지}
              rank={i + 1}
              currentTab={현재탭}
              title={꿀조합제목}
              imageUrl={이미지}
              originName={베이스샌드위치}
              badgeList={뱃지리스트}
              like={좋아요}
            />
          );
        })}
      <li />
      {hasMore && (
        <LoadingLi>
          <LoadingSpinner />
        </LoadingLi>
      )}
    </ul>
  );
}

export default RankingList;

const LoadingLi = styled.li`
  ${flexbox('row', 'center', 'center')}
`;
