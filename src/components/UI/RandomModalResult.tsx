import { useRef, useState } from 'react';
import SandwichInfo from '@components/UI/SandwichInfo';
import styled from '@emotion/styled';
import { mockSandwich } from '@components/UI/Cards/SandwichInfoCard';
import CombinationIngredientList from '@components/CombinationIngredientList';

import { changeRem } from '../../styles/mixin';
import xBtn from '../../assets/images/x-btn.svg';
// import Button from './Button/Button';

const data = [
  {
    id: 'a1',
    이름: '다다',
    카테고리: 'sdf',
    칼로리: '265',
    추가재료여부: true,
  },
];

interface func {
  onClick: any;
}
function RandomModalResult(props: func) {
  // ㅇ
  // const 모달_닫기 = () => {
  //   setModal(true);
  //   console.log(modal, modalState);
  // };

  // const 다시_돌리기 = () => {};
  // const [closeModal, setCloseModal] = useState<boolean | null>(false);

  // const 모달_닫기 = () => {
  //   setModal(true);
  //   console.log('모달 닫기', modal);
  // };

  return (
    <Card>
      <CloseBtn className="close-btn" src={xBtn} alt="닫기 버튼" onClick={props.onClick} />
      <Title>응~ 이거나 먹어~</Title>
      <SandwichInfoWrapper>
        <SandwichInfo sandwich={mockSandwich} />
        <CombinationIngredientList ingredientList={data} />
        <ReturnBtn onClick={props.onClick}>다시 돌리러 가기</ReturnBtn>
      </SandwichInfoWrapper>
    </Card>
    // <div>
    //   {closeModal ? (
    //     <Card>
    //       <CloseBtn className="close-btn" src={xBtn} alt="닫기 버튼" onClick={모달_닫기} />
    //       <Title>응~ 이거나 먹어~</Title>
    //       <SandwichInfoWrapper>
    //         <SandwichInfo sandwich={mockSandwich} />
    //         <CombinationIngredientList ingredientList={data} />
    //         <ReturnBtn>다시 돌리러 가기</ReturnBtn>
    //       </SandwichInfoWrapper>
    //     </Card>
    //   ) : (
    //     <Card>
    //       <CloseBtn className="close-btn" src={xBtn} alt="닫기 버튼" onClick={모달_닫기} />
    //       <Title>응~ 이거나 먹어~</Title>
    //       <SandwichInfoWrapper>
    //         <SandwichInfo sandwich={mockSandwich} />
    //         <CombinationIngredientList ingredientList={data} />
    //         <ReturnBtn>다시 돌리러 가기</ReturnBtn>
    //       </SandwichInfoWrapper>
    //     </Card>
    //   )}
    // </div>
  );
}

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

export default RandomModalResult;
