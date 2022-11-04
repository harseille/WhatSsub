import SandwitchInfo from '@components/UI/SandwitchInfo';
import styled from '@emotion/styled';
import { sandwitch } from '@components/UI/Cards/SandwitchInfoCard';
import CombinationIngredientList from '@components/CombinationIngredientList';
import { changeRem } from '../../styles/mixin';
import xBtn from '../../assets/images/x-btn.svg';
import Button from './Button/Button';

const data = [
  {
    id: 'sdf',
    이름: 'sdf',
    카테고리: 'sdf',
    칼로리: 'sdfdfs',
    추가재료여부: true,
  },
];

function RandomModalResult() {
  return (
    <Card>
      <img src={xBtn} alt="닫기 버튼" />
      <Title>응~ 이거나 먹어~</Title>
      <SandwitchInfo sandwitch={sandwitch} />
      <CombinationIngredientList ingredientList={data} />
      <Button />
    </Card>
  );
}

const Card = styled.div`
  box-sizing: border-box;
  padding: 20px 15px;
  width: ${changeRem(350)};
  height: ${changeRem(532)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  /* margin-bottom: 10px; */
  /* margin: 30px 0 20px; */
  margin: 0 auto;
  & img {
    width: 20px;
  }
`;

const Title = styled.div`
  margin: 15px 0 15px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export default RandomModalResult;
