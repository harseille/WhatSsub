import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { collection, DocumentData, query } from 'firebase/firestore';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import CombinationRankingCard from '@components/Ranking/CombinationRankingCard';
import getYearMonthDate from '@utils/getYearMonthDate';
import getRankingList from '@api/getRankingList';
import Rank1 from '@assets/images/rankingBadge/rank_1.png';
import Rank2 from '@assets/images/rankingBadge/rank_2.png';
import Rank3 from '@assets/images/rankingBadge/rank_3.png';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { changeRem } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { db } from '../../firebase.config';

type TProps = {
  currentTab: string;
};

const Ranking = {
  FIRST: { id: 0, imageSrc: Rank1 },
  SECOND: { id: 1, imageSrc: Rank2 },
  THIRD: { id: 2, imageSrc: Rank3 },
};

function RankingList({ currentTab }: TProps) {
  const [rankingList, setRankingList] = useState<인터페이스_꿀조합[]>([]);
  const key = useRef<DocumentData | null>(null);

  const 꿀조합_컬렉션_정렬해서_가져오기 = async (currentTab: string) => {
    const 정렬_조건: string = currentTab === '맛잘알랭킹' ? '좋아요' : '작성일';
    const 반환값 = await getRankingList(key.current, 정렬_조건);

    if (반환값) {
      key.current = 반환값.마지막_키;
      setRankingList(prev => [...prev, ...반환값.랭킹리스트]);
    }
  };

  const { listRef } = useInfiniteScroll(
    꿀조합_컬렉션_정렬해서_가져오기.bind(null, currentTab),
    rankingList.length,
    query(collection(db, '꿀조합'))
  );

  useEffect(() => {
    key.current = null;
    setRankingList([]);
    꿀조합_컬렉션_정렬해서_가져오기(currentTab);
  }, [currentTab]);

  return (
    <ul>
      {rankingList.length > 0 &&
        rankingList.map(({ id, 꿀조합제목, 이미지, 베이스샌드위치, 작성일, 뱃지리스트, 좋아요 }, i) => {
          let 랭킹_뱃지_이미지 = '';
          let 신규_샌드위치인가 = false;

          if (currentTab === '맛잘알랭킹') {
            const { FIRST, SECOND, THIRD } = Ranking;

            if (i === FIRST.id) 랭킹_뱃지_이미지 = FIRST.imageSrc;
            else if (i === SECOND.id) 랭킹_뱃지_이미지 = SECOND.imageSrc;
            else if (i === THIRD.id) 랭킹_뱃지_이미지 = THIRD.imageSrc;
          } else if (currentTab === '신규조합') {
            const { year: 오늘_년도, month: 오늘_월, date: 오늘_일 } = getYearMonthDate(new Date());
            const { year: 작성일_년도, month: 작성일_월, date: 작성일_일 } = getYearMonthDate(new Date(작성일));

            if (오늘_년도 === 작성일_년도 && 오늘_월 === 작성일_월 && 오늘_일 === 작성일_일) 신규_샌드위치인가 = true;
          }

          return (
            <li key={id} ref={i === rankingList.length - 1 ? listRef : null}>
              <RankingCardWrapper to={`/best-combination/${id}`}>
                {신규_샌드위치인가 && <NewBadge>NEW</NewBadge>}
                {랭킹_뱃지_이미지 && <RankBadge src={랭킹_뱃지_이미지} alt={`rank${i + 1}`} />}
                <CombinationRankingCard
                  rank={i + 1}
                  currentTab={currentTab}
                  title={꿀조합제목}
                  imageUrl={이미지}
                  originName={베이스샌드위치}
                  badgeList={뱃지리스트}
                  like={좋아요}
                />
              </RankingCardWrapper>
            </li>
          );
        })}
    </ul>
  );
}

export default RankingList;

const RankingCardWrapper = styled(Link)`
  position: relative;
  display: block;
  margin-bottom: 15px;
`;

const RankBadge = styled.img`
  position: absolute;
  right: -18px;
  top: -28px;
  z-index: 1;
  width: 90px;

  ${mediaQuery} {
    width: 106px;
    top: -40px;
    right: -25px;
  }
`;

const NewBadge = styled.span`
  position: absolute;
  top: -6px;
  right: 20px;
  z-index: 1;
  padding: 3px 5px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primaryYellow};
  font-size: ${changeRem(10)};
  font-weight: bold;
  color: #fff;

  ${mediaQuery} {
    top: -8px;
  }
`;
