import { Link } from 'react-router-dom';
import CombinationRankingCard from '@components/Ranking/CombinationRankingCard';
import Rank1 from '@assets/images/rankingBadge/rank_1.png';
import Rank2 from '@assets/images/rankingBadge/rank_2.png';
import Rank3 from '@assets/images/rankingBadge/rank_3.png';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합 } from '../../types/ISandwich';

type TProps = {
  currentTab: string;
  rankingList: 인터페이스_꿀조합[];
};

function RankingList({ currentTab, rankingList }: TProps) {
  return (
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
  );
}

export default RankingList;

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
