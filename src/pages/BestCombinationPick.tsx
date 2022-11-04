import IngredientButtonList from '@components/IngredientButtonList';
import Button from '@components/UI/Button';
import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';

function BestCombinationPickPage() {
  return (
    <Container>
      <IngredientButtonList />
      <IngredientButtonList />
      <IngredientButtonList />
      <ButtonWrap>
        <Button designType="primaryGreen" width={changeRem(330)} height={changeRem(50)}>
          꿀 조합 보러가기
        </Button>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
`;

const ButtonWrap = styled.div`
  position: absolute;
  left: 6%;
  bottom: 30%;
`;

export default BestCombinationPickPage;
