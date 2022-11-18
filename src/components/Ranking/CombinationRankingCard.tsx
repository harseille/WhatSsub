import SandwichBadgeList from '@components/Attribute/AttributeBadgeList';
import Like from '@components/Common/Button/Like';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import styled from '@emotion/styled';
import { flexbox, changeRem } from '@styles/mixin';
import { 샌드위치뱃지리스트 } from '../../types/ISandwich';

interface 인터페이스_랭킹카드_프로퍼티 {
  title: string;
  imageUrl: string;
  originName: string;
  badgeList: 샌드위치뱃지리스트;
  like: string;
}

function CombinationRankingCard({
  title: 이름,
  imageUrl: 이미지,
  originName,
  badgeList: 뱃지리스트,
  like: 좋아요,
}: 인터페이스_랭킹카드_프로퍼티) {
  return (
    <RankingCard>
      <RankingImageWrap>
        <img src={ChickenSlice} alt={originName} />
      </RankingImageWrap>
      <RankingContents>
        <Title>{이름}</Title>
        <RankingBadgeList badgeList={뱃지리스트} />
        <Like count={좋아요} />
      </RankingContents>
    </RankingCard>
  );
}

const RankingCard = styled.section`
  box-sizing: border-box;
  ${flexbox('row', 'flex-start', 'center')};
  min-width: ${changeRem(300)};
  gap: ${changeRem(20)};
  position: relative;
  padding: 30px 20px;
  margin-bottom: 16px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const RankingImageWrap = styled.div`
  ${flexbox('row', 'center', 'center')};
  width: ${changeRem(80)};
  height: ${changeRem(80)};
  flex-shrink: 0;
  & img {
    height: ${changeRem(48)};
    object-fit: cover;
  }
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 15px 5px rgba(80, 80, 80, 0.15);
`;

const RankingContents = styled.div`
  flex-basis: calc(100% - 160px);
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: ${changeRem(16)};
  color: ${props => props.theme.colors.primaryGreen};
`;

const RankingBadgeList = styled(SandwichBadgeList)`
  ul {
    flex-wrap: wrap;
  }
`;

export default CombinationRankingCard;
