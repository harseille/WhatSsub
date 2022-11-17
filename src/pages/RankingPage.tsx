import styled from '@emotion/styled';
import { changeRem, buttonNone } from '@styles/mixin';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CombinationRankingCard from '@components/CombinationRankingCard';
import Wrapper from '@components/UI/Wrapper';
import Rank1 from '@assets/images/rankingBadge/rank_1.png';
import Rank2 from '@assets/images/rankingBadge/rank_2.png';
import Rank3 from '@assets/images/rankingBadge/rank_3.png';
import { 샌드위치 } from '@components/UI/Cards/SandwitchInfoCard';
import ChickenSlice from '@assets/images/Chicken_Slice.png';

interface 인터페이스_랭킹리스트 extends 샌드위치 {
  id: string;
  좋아요: string;
}

const rankingListData: 인터페이스_랭킹리스트[] = [
  {
    id: 'sdfsdf',
    이름: '꿀꿀마앗',
    이미지: ChickenSlice,
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '고소'],
      메인재료: ['돼지고기'],
      추가사항: ['고기러버'],
    },
    좋아요: '44',
  },
  {
    id: 'sdfsadfdf',
    이름: '고기 조합이다아아아',
    이미지: ChickenSlice,
    베이스샌드위치: '포크샌드',
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '고소'],
      메인재료: ['돼지고기'],
      추가사항: ['치즈폭탄'],
    },
    좋아요: '28',
  },
  {
    id: 'swerdfsdf',
    이름: '다이어트',
    이미지: ChickenSlice,
    베이스샌드위치: '에그마요',
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '고소'],
      메인재료: ['에그마요'],
      추가사항: ['저칼로리'],
    },
    좋아요: '5',
  },
];

function RankingPage() {
  const [rankingList, setRankingList] = useState<인터페이스_랭킹리스트[]>(rankingListData);
  const [currentTab, setCurrentTab] = useState<string>('맛잘알랭킹');

  const onClickTab = () => {
    setCurrentTab(prev => (prev === '맛잘알랭킹' ? '신규조합' : '맛잘알랭킹'));
  };

  return (
    <Wrapper2>
      <Wrapper>
        <TabGroup>
          <TitleTab className={currentTab === '맛잘알랭킹' ? 'on' : ''} onClick={onClickTab}>
            맛잘알랭킹
          </TitleTab>
          <TitleTab className={currentTab === '신규조합' ? 'on' : ''} onClick={onClickTab}>
            신규조합
          </TitleTab>
        </TabGroup>
        <div>
          {rankingList.map(({ id, 이름, 이미지, 베이스샌드위치, 뱃지리스트, 좋아요 }, i) => {
            let badgeUrl = '';

            if (currentTab === '맛잘알랭킹') {
              if (i === 0) badgeUrl = Rank1;
              else if (i === 1) badgeUrl = Rank2;
              else if (i === 2) badgeUrl = Rank3;
            }

            return (
              <RankingCardWrapper key={id} to={`/best-combination/${id}`}>
                {badgeUrl && <RankBadge src={badgeUrl} alt={`rank${i + 1}`} />}
                <CombinationRankingCard
                  title={이름}
                  imageUrl={이미지}
                  originName={베이스샌드위치}
                  badgeList={뱃지리스트}
                  like={좋아요}
                />
              </RankingCardWrapper>
            );
          })}
        </div>
      </Wrapper>
    </Wrapper2>
  );
}

const Wrapper2 = styled.div`
  background: #f9f9f9;
  height: 100vh;
  padding: 25px 20px;
`;

const TabGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const TitleTab = styled.button`
  ${buttonNone}
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: #6b6b6b;
  cursor: pointer;

  &.on {
    color: #252525;
  }
`;

const RankingCardWrapper = styled(Link)`
  position: relative;
  margin-bottom: 15px;
`;

const RankBadge = styled.img`
  position: absolute;
  right: -18px;
  top: -28px;
  z-index: 1;
  width: 90px;
`;

export default RankingPage;
