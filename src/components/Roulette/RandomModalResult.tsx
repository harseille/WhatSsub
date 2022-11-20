import SandwichInfo from '@components/Sandwich/SandwichInfo';
import IngredientInfo from '@components/Ingredient/IngredientInfo';
import xBtn from '@assets/images/x-btn.svg';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
// import { 인터페이스_랜덤재료샌드위치 } from '../../types/ISandwich';
// import { mockSandwich } from '@components/Common/Cards/SandwichInfoCard';
import { 인터페이스_샌드위치 } from '../../types/ISandwich';
// import { 인터페이스_샌드위치 } from '../../types/ISandwich';
// import { 인터페이스_랜덤재료샌드위치 } from '../../types/ISandwich';

export const mockSandwich: 인터페이스_샌드위치 = {
  id: 'r1',
  이미지: ChickenSlice,
  이름: '꿀꿀마앗',
  베이스샌드위치: '치킨 슬라이스',
  칼로리: '265',
  뱃지리스트: {
    맛: ['달달', '고소'],
    재료: ['살라미'],
    추가사항: ['고기러버'],
  },
};

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
  // randomSandwich: 인터페이스_랜덤재료샌드위치;
};
// function RandomModalResult({ onClick, randomSandwich }: TProps) {
function RandomModalResult({ onClick }: TProps) {
  return (
    <Card>
      <CloseBtn className="close-btn" src={xBtn} alt="닫기 버튼" onClick={onClick} />
      <Title>⭐️오늘의 랜덤 조합⭐️</Title>
      <SandwichInfoWrapper>
        <SandwichInfo sandwich={mockSandwich} />
        {/* <SandwichInfo sandwich={randomSandwich} /> */}
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
