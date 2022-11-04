import IngredientButtonList from '@components/IngredientButtonList';
import Button from '@components/UI/Button';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '../styles/mixin';

function BestCombinationPickPage() {
  return (
    <Container>
      <div>
        <IngredientButtonList />
        <IngredientButtonList />
        <IngredientButtonList />
      </div>
      <ButtonWrap>
        <Button designType="primaryGreen" width={changeRem(330)} height={changeRem(50)}>
          꿀 조합 보러가기
        </Button>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled(Wrapper)`
  ${flexbox('column', 'space-between', 'center')};
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 120px;
`;

export default BestCombinationPickPage;
