import DeskTopImage from '@components/BestCombinationPick/DeskTopImage';
import AttributePick from '@components/BestCombinationPick/AttributePick';
import Wrapper from '@components/Common/UI/Wrapper';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

function BestCombinationPickPage() {
  return (
    <TotalContainer>
      <DeskTopImage />
      <AttributePick />
    </TotalContainer>
  );
}
export default BestCombinationPickPage;

const TotalContainer = styled(Wrapper)`
  ${mediaQuery} {
    ${flexbox('row', 'space-between', 'center')}
    min-height: 750px;
    position: relative;
  }
`;
