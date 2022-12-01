import Wrapper from '@components/Common/UI/Wrapper';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import BestCombinationList from '@components/BestCombinationList/BestCombinationList';

function BestCombinationListPage() {
  return (
    <Container>
      <BestCombinationList />
    </Container>
  );
}

export default BestCombinationListPage;

const Container = styled(Wrapper)`
  ${flexbox('column', 'center', 'center')}
  padding-top: 4vh;
`;
