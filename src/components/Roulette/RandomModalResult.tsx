import SandwichInfo from '@components/Sandwich/SandwichInfo';
import IngredientInfo from '@components/Ingredient/IngredientInfo';
import xBtn from '@assets/images/x-btn.svg';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

import { mockSandwich } from '@components/Common/Cards/SandwichInfoCard';

const data = [
  {
    id: 'a1',
    이름: '다다',
    카테고리: 'sdf',
    칼로리: '265',
    추가재료여부: true,
  },
];

type TProps = {
  onClick: () => void;
};

function RandomModalResult({ onClick }: TProps) {
  return (
    <Card>
      <CloseBtn className="close-btn" src={xBtn} alt="닫기 버튼" onClick={onClick} />
      <Title>응~ 이거나 먹어~</Title>
      <SandwichInfoWrapper>
        <SandwichInfo sandwich={mockSandwich} />
        <IngredientInfo ingredientList={data} />
        <ReturnBtn onClick={onClick}>다시 돌리러 가기</ReturnBtn>
      </SandwichInfoWrapper>
    </Card>
  );
}

export default RandomModalResult;

const Card = styled.div`
  z-index: 11;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 20px 15px;
  width: ${changeRem(350)};
  height: ${changeRem(532)};
  box-shadow: 0px 4px 5px 3px rgba(35, 35, 35, 0.5);
  border-radius: 15px;
  margin: 0 auto;
`;
const SandwichInfoWrapper = styled.div`
  padding-left: 18px;
`;
const CloseBtn = styled.img`
  padding-left: 300px;
  width: 20px;
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
  /* background: #fbc200; */
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 300;
`;
