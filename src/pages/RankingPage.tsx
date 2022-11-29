import Wrapper from '@components/Common/UI/Wrapper';
import RankingTab from '@components/Ranking/RankingTab';
import RankingList from '@components/Ranking/RankingList';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function RankingPage() {
  return (
    <RankingWrapper>
      <Wrapper>
        <RankingTab />
        <RankingList />
      </Wrapper>
    </RankingWrapper>
  );
}

export default RankingPage;

const RankingWrapper = styled.div`
  width: 100%;
  padding: 25px 20px;
  background: #f9f9f9;

  ${mediaQuery} {
    padding-top: 35px;
    padding-bottom: 50px;
  }
`;
