import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { collection, DocumentData, query } from 'firebase/firestore';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import CombinationRankingCard from '@components/Ranking/CombinationRankingCard';
import getRankingList from '@api/getRankingList';
import Rank1 from '@assets/images/rankingBadge/rank_1.png';
import Rank2 from '@assets/images/rankingBadge/rank_2.png';
import Rank3 from '@assets/images/rankingBadge/rank_3.png';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
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
      {rankingList !== null &&
        rankingList.map(({ id, 꿀조합제목, 이미지, 베이스샌드위치, 뱃지리스트, 좋아요 }, i) => {
          let badgeUrl = '';

          if (currentTab === '맛잘알랭킹') {
            const { FIRST, SECOND, THIRD } = Ranking;

            if (i === FIRST.id) badgeUrl = FIRST.imageSrc;
            else if (i === SECOND.id) badgeUrl = SECOND.imageSrc;
            else if (i === THIRD.id) badgeUrl = THIRD.imageSrc;
          }

          return (
            <li key={id} ref={i === rankingList.length - 1 ? listRef : null}>
              <RankingCardWrapper to={`/best-combination/${id}`}>
                {badgeUrl && <RankBadge src={badgeUrl} alt={`rank${i + 1}`} />}
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
