import { useNavigate } from 'react-router-dom';
import useToggleFilter from '@hooks/useToggleFilter';
import IngredientButtonList from '@components/BestCombinationAttribute/AttributeButtonList';
import Button from '@components/UI/Button';
import Wrapper from '@components/UI/Wrapper';
import { 꿀조합_픽_초기_필터 } from '@constants/constants';
import styled from '@emotion/styled';
import refreshIcon from '@assets/icons/refresh.svg';
import { changeRem, flexbox } from '@styles/mixin';
import 더미데이터 from '../data/PickPageDummy';

function BestCombinationPickPage() {
  const navigate = useNavigate();

  const {
    selectedFilter: 선택된_꿀조합_속성,
    toggleFilter: 클릭핸들러_꿀조합_속성_토글,
    initializeFilter: 클릭핸들러_꿀조합_속성_초기화,
  } = useToggleFilter(꿀조합_픽_초기_필터);

  const 꿀조합_목록_페이지로_이동하기 = () => {
    navigate('/best-combination', { state: 선택된_꿀조합_속성 });
  };

  return (
    <Container>
      <IngredientButtonListWrap>
        <RefreshButton onClick={클릭핸들러_꿀조합_속성_초기화}>
          <img src={refreshIcon} alt="새로고침" />
        </RefreshButton>
        {더미데이터.map(data => (
          <IngredientButtonList
            key={data.제목}
            filterData={data}
            selectedFilter={선택된_꿀조합_속성}
            onSelectFilter={클릭핸들러_꿀조합_속성_토글}
          />
        ))}
      </IngredientButtonListWrap>
      <ButtonWrap>
        <Button
          onClick={꿀조합_목록_페이지로_이동하기}
          designType="primaryGreen"
          width={changeRem(330)}
          height={changeRem(50)}>
          꿀 조합 보러가기
        </Button>
      </ButtonWrap>
    </Container>
  );
}

export default BestCombinationPickPage;

const Container = styled(Wrapper)`
  ${flexbox('column', 'space-between', 'center')};
  padding: 26px;
`;

const IngredientButtonListWrap = styled.div`
  position: relative;
  padding-top: 20px;
`;

const RefreshButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 120px;
`;
