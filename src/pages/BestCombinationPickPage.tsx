import useToggleFilter from '@hooks/useToggleFilter';
import DeskTopImage from '@components/BestCombinationPick/DeskTopImage';
import IngredientButtonListContainer from '@components/BestCombinationPick/IngredientButtonListContainer';
import NavigateListPageButton from '@components/BestCombinationPick/NavigateListPageButton';
import Wrapper from '@components/UI/Wrapper';
import { 꿀조합_픽_초기_필터 } from '@constants/constants';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

function BestCombinationPickPage() {
  const {
    selectedFilter: 선택된_꿀조합_속성,
    toggleFilter: 클릭핸들러_꿀조합_속성_토글,
    initializeFilter: 클릭핸들러_꿀조합_속성_초기화,
  } = useToggleFilter(꿀조합_픽_초기_필터);
  return (
    <TotalContainer>
      <DeskTopImage />
      <Container>
        <IngredientButtonListContainer
          filteredAttr={선택된_꿀조합_속성}
          toggleFilter={클릭핸들러_꿀조합_속성_토글}
          initializeFilter={클릭핸들러_꿀조합_속성_초기화}
        />
        <NavigateListPageButton filteredAttr={선택된_꿀조합_속성} />
      </Container>
    </TotalContainer>
  );
}
export default BestCombinationPickPage;
const TotalContainer = styled(Wrapper)`
  ${mediaQuery} {
    min-height: 750px;
    position: relative;
    /* padding-top: 100px; */
    ${flexbox('row', 'space-between', 'center')}
  }
`;
const Container = styled(Wrapper)`
  ${flexbox('column', 'space-between', 'center')};
  max-width: 600px;
  padding: 26px;
`;
