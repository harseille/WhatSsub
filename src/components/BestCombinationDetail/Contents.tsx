import IngredientCardList from '@components/Ingredient/IngredientCardList';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import Button from '@components/UI/Button';
import styled from '@emotion/styled';
import Modal from '@components/UI/Modal';
import useDeleteBestCombination from '@hooks/useDeleteBestCombination';
import { changeRem, flexbox } from '@styles/mixin';
import { 인터페이스_샌드위치, 인터페이스_재료 } from '@typings/ISandwich';
import { useParams } from 'react-router-dom';

type TProps = {
  sandwich: 인터페이스_샌드위치;
  ingredientList: 인터페이스_재료[];
  author: string;
  toasting: string;
};

function ContentsContainer({ sandwich, ingredientList, author, toasting }: TProps) {
  const { combinationId } = useParams();
  const { 모달_토글하기, 꿀조합_삭제하기, isShowModal, 유저 } = useDeleteBestCombination(combinationId!);

  return (
    <>
      {isShowModal && (
        <Modal
          title="🚨 작성하신 꿀조합이 사라져요 🚨"
          message="정말로 삭제하시겠습니까?"
          onEvent={꿀조합_삭제하기}
          onClose={모달_토글하기}
          isConfirm="삭제"
          eventButtonDesignType="primaryRed"
          cancelButtonDesignType="normal"
        />
      )}

      <Contents>
        <SandwichInfo sandwich={sandwich} />
        <IngredientCardList ingredientList={ingredientList} toasting={toasting} />
        {유저?.uid === author ? (
          <ButtonContainer>
            <BestCombinationDeleteButton
              designType="primaryOrange"
              borderRadius="6px"
              padding="6px"
              onClick={모달_토글하기}>
              꿀조합 삭제하기
            </BestCombinationDeleteButton>
          </ButtonContainer>
        ) : null}
      </Contents>
    </>
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
