import { useLocation } from 'react-router-dom';
import Wrapper from '@components/Common/UI/Wrapper';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import BestCombinationList from '@components/BestCombinationList/BestCombinationList';

function BestCombinationListPage() {
  const { state } = useLocation();

  return (
    <Container>
      <BestCombinationList filter={state} />
    </Container>
  );
}

export default BestCombinationListPage;

const Container = styled(Wrapper)`
  ${flexbox('column', 'center', 'center')}
  padding-top: 4vh;
`;
