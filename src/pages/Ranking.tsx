import styled from '@emotion/styled';
import CombinationRankingCard from '@components/CombinationRankingCard';
import { changeRem, buttonNone } from '../styles/mixin';

function RankingPage() {
  return (
    <Wrapper>
      <TabGroup>
        <TitleTab>맛잘알랭킹</TitleTab>
        <TitleTab>신규조합</TitleTab>
      </TabGroup>
      <RankingCard />
      <RankingCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  cursor: pointer;
`;

const RankingCard = styled(CombinationRankingCard)`
  margin-bottom: 15px;
`;

export default RankingPage;
