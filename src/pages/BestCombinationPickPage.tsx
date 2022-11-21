import useToggleFilter from '@hooks/useToggleFilter';
import IngredientButtonListContainer from '@components/BestCombinationPick/IngredientButtonListContainer';
import NavigateListPageButton from '@components/BestCombinationPick/NavigateListPageButton';
import Wrapper from '@components/UI/Wrapper';
import { 꿀조합_픽_초기_필터 } from '@constants/constants';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';

function BestCombinationPickPage() {
  const {
    selectedFilter: 선택된_꿀조합_속성,
    toggleFilter: 클릭핸들러_꿀조합_속성_토글,
    initializeFilter: 클릭핸들러_꿀조합_속성_초기화,
  } = useToggleFilter(꿀조합_픽_초기_필터);

  return (
    <Container>
      <IngredientButtonListContainer
        filteredAttr={선택된_꿀조합_속성}
        toggleFilter={클릭핸들러_꿀조합_속성_토글}
        initializeFilter={클릭핸들러_꿀조합_속성_초기화}
      />
      <NavigateListPageButton filteredAttr={선택된_꿀조합_속성} />
    </Container>
  );
}

export default BestCombinationPickPage;

const Container = styled(Wrapper)`
  ${flexbox('column', 'space-between', 'center')};
  padding: 26px;
`;
