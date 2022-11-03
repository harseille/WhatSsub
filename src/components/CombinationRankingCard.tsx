import SandwitchBadgeList from '@components/SandwitchBadgeList';
import Like from '@components/Like';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import ChickenSlice from '@assets/images/Chicken_Slice.png';
import { flexbox, changeRem } from '../styles/mixin';
import { 샌드위치뱃지리스트 } from './SandwitchInfoCard';

const 뱃지리스트: 샌드위치뱃지리스트 = {
  맛: ['달달'],
  메인재료: '돼지고기',
  추가사항: [],
};

function CombinationRankingCard() {
  return (
    <RankingCard>
      <RankingImageWrap>
        <img src={ChickenSlice} />
      </RankingImageWrap>
      <RankingContents>
        <Title>스테이크 & 치즈</Title>
        <SandwitchBadgeList badgeList={뱃지리스트} />
        <Like count="40" />
      </RankingContents>
    </RankingCard>
  );
}

const RankingCard = styled.section`
  ${flexbox('row', 'flex-start', 'center')};
  width: ${changeRem(360)};
  height: ${changeRem(110)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const RankingImageWrap = styled.div`
  ${flexbox('row', 'center', 'center')};
  width: ${changeRem(80)};
  height: ${changeRem(80)};
  & img {
    height: ${changeRem(60)};
    object-fit: cover;
  }
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 15px 5px rgba(80, 80, 80, 0.15);
  margin-left: ${changeRem(20)};
`;

const RankingContents = styled.div`
  ${flexbox('column', 'space-between')};
  gap: ${changeRem(8)};
  margin-left: ${changeRem(20)};
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: ${changeRem(16)};
  color: ${props => props.theme.colors.primaryGreen};
`;

export default CombinationRankingCard;
