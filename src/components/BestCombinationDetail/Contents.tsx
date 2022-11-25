import IngredientCardList from '@components/Ingredient/IngredientCardList';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import Button from '@components/UI/Button';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import { 인터페이스_샌드위치, 인터페이스_꿀조합_재료 } from '@typings/ISandwich';

type TProps = {
  sandwich: 인터페이스_샌드위치;
  ingredientList: 인터페이스_꿀조합_재료[];
};

function ContentsContainer({ sandwich, ingredientList }: TProps) {
  return (
    <Contents>
      <SandwichInfo sandwich={sandwich} />
      <IngredientCardList ingredientList={ingredientList} />
      {/* <CombinationIngredientList ingredientList={ingredientList} /> */}
      <ButtonContainer>
        <BestCombinationDeleteButton designType="primaryOrange" borderRadius="6px" padding="6px">
          꿀조합 삭제하기
        </BestCombinationDeleteButton>
      </ButtonContainer>
    </Contents>
  );
}

export default ContentsContainer;

const Contents = styled.div`
  ${flexbox('column', 'flex-start', 'center')}
  background: #fff;
  margin-bottom: 10px;
  padding: 32px;
`;

const ButtonContainer = styled.div`
  ${flexbox('column', 'flex-start', 'right')}
  margin-top: 8px;
  width: 100%;
  font-size: ${changeRem(18)};
`;

const BestCombinationDeleteButton = styled(Button)``;
