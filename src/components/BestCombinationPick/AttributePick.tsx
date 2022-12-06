import useToggleFilter from '@hooks/useToggleFilter';
import AttributeButtonListContainer from '@components/BestCombinationPick/AttributeButtonListContainer';
import NavigateListPageButton from '@components/BestCombinationPick/NavigateListPageButton';
import Wrapper from '@components/Common/UI/Wrapper';
import { 꿀조합_픽_초기_필터 } from '@constants/constants';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';

function AttributePick() {
  const {
    selectedFilter: 선택된_꿀조합_속성,
    overSelectedFilter: 최대_선택_개수_초과_속성,
    toggleFilter: 클릭핸들러_꿀조합_속성_토글,
    initializeFilter: 클릭핸들러_꿀조합_속성_초기화,
  } = useToggleFilter(꿀조합_픽_초기_필터);

  return (
    <Container>
      <AttributeButtonListContainer
        filteredAttribute={선택된_꿀조합_속성}
        overSelectedAttribute={최대_선택_개수_초과_속성}
        toggleAttribute={클릭핸들러_꿀조합_속성_토글}
        initializeAttribute={클릭핸들러_꿀조합_속성_초기화}
      />
      <NavigateListPageButton filteredAttribute={선택된_꿀조합_속성} />
    </Container>
  );
}

export default AttributePick;

const Container = styled(Wrapper)`
  ${flexbox('column', 'space-between', 'center')};
  max-width: 600px;
  padding: 26px;
`;
