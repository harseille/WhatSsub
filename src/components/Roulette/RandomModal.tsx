import { createPortal } from 'react-dom';
import SandwichInfo from '@components/Common/SandwichInfo';
import IngredientInfo from '@components/Ingredient/IngredientInfo';
import xBtn from '@assets/icons/x-btn.svg';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import convertRandomSandwichInfo from '@services/Random/convertRandomSandwichInfo';
import { 인터페이스_꿀조합_랜덤2 } from '@typings/ISandwich';
import DimmedLayer from '@components/Common/UI/DimmedLayer';

type TProps = {
  onClick: () => void;
  sandwich: 인터페이스_꿀조합_랜덤2;
};

function BackDrop({ onClick }: { onClick: () => void }) {
  return <DimmedLayer onClick={onClick} />;
}

function ModalOverlay({ onClick, sandwich }: TProps) {
  const { sandwich: sandwichData, ingredientInfo } = convertRandomSandwichInfo(sandwich);
  return (
    <Card>
      <CloseBtn onClick={onClick} aria-label="닫기 버튼">
        <img src={xBtn} alt="x 아이콘" />
      </CloseBtn>
      <Title>⭐️오늘의 랜덤 조합⭐️</Title>
      <SandwichInfoWrapper>
        <SandwichInfo sandwich={sandwichData} />
        <IngredientInfo ingredientList={ingredientInfo} />
        <ReturnBtn onClick={onClick}>다시 돌리러 가기</ReturnBtn>
      </SandwichInfoWrapper>
    </Card>
  );
}

function RandomModal({ onClick, sandwich }: TProps) {
  return (
    <>
      {createPortal(<BackDrop onClick={onClick} />, document.getElementById('backdrop-root')!)}
      {createPortal(<ModalOverlay onClick={onClick} sandwich={sandwich} />, document.getElementById('modal-root')!)}
    </>
  );
}

export default RandomModal;

const Card = styled.div`
  background-color: #fff;
  z-index: 10;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 20px 15px;
  width: ${changeRem(350)};
  box-shadow: 0px 4px 5px 3px rgba(35, 35, 35, 0.5);
  border-radius: 15px;
  margin: 0 auto;
`;
const SandwichInfoWrapper = styled.div`
  padding-left: 18px;

  div:first-of-type {
    flex-flow: column nowrap;

    div:first-of-type {
      max-width: ${changeRem(305)};
    }
  }
`;
const CloseBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Title = styled.div`
  margin: 15px 0 15px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;
const ReturnBtn = styled.button`
  width: ${changeRem(284)};
  height: ${changeRem(50)};
  background-color: ${props => props.theme.colors.primaryYellow};
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 300;
`;
