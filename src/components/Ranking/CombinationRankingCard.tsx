import SandwichBadgeList from '@components/BestCombinationAttribute/AttributeBadgeList';
import Like from '@components/Common/Button/Like';
import styled from '@emotion/styled';
import { flexbox, changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

type TProps = {
  currentTab: string;
  rank: number;
  title: string;
  imageUrl: string;
  originName: string;
  badgeList: string[];
  like: number;
};

function CombinationRankingCard({
  currentTab: 현재탭,
  rank: 순위,
  title: 이름,
  imageUrl: 이미지,
  originName: 베이스샌드위치,
  badgeList: 뱃지리스트,
  like: 좋아요,
}: TProps) {
  return (
    <RankingCard>
      {현재탭 === '맛잘알랭킹' && <Rank>{순위}</Rank>}
      <RankingImageWrap>
        <img src={이미지} alt={베이스샌드위치} />
      </RankingImageWrap>
      <RankingContents>
        <Title>{이름}</Title>
        <RankingBadgeList badgeList={뱃지리스트} />
        <Like count={좋아요} />
      </RankingContents>
    </RankingCard>
  );
}

export default CombinationRankingCard;

const RankingCard = styled.section`
  box-sizing: border-box;
  ${flexbox('row', 'flex-start', 'center')};
  gap: ${changeRem(20)};
  min-width: ${changeRem(300)};
  position: relative;
  padding: 30px 20px;
  border-radius: 20px;
  margin-bottom: 16px;
  background: #ffffff;
  filter: ${props => `drop-shadow(${props.theme.boxShadow.type3})`};

  ${mediaQuery} {
    padding: 20px;
    border-radius: 10px;
    filter: none;
    box-shadow: ${props => props.theme.boxShadow.type1};
  }
`;

const Rank = styled.div`
  display: none;

  ${mediaQuery} {
    display: block;
    font-weight: bold;
    font-size: ${changeRem(20)};
  }
`;

const RankingImageWrap = styled.div`
  ${flexbox('row', 'center', 'center')};
  width: ${changeRem(80)};
  height: ${changeRem(80)};
  flex-shrink: 0;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: ${props => `${props.theme.boxShadow.type3}, inset ${props.theme.boxShadow.type2}`};

  & img {
    width: 100%;
    object-fit: cover;
  }

  ${mediaQuery} {
    width: ${changeRem(143)};
    box-shadow: none;
  }
`;

const RankingContents = styled.div`
  flex-basis: calc(100% - 160px);

  ${mediaQuery} {
    flex-basis: calc(100% - 250px);
  }
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
