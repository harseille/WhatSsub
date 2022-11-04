import SandwitchInfo from '@components/SandwitchInfo';
import styled from '@emotion/styled';
import { sandwitch } from '@components/SandwitchInfoCard';
import CombinationIngredientList from '@components/CombinationIngredientList';
import { changeRem } from '../../styles/mixin';
import xBtn from '../../assets/images/x-btn.svg';
import Button from './Button';

function RandomModalResult() {
  return (
    <Card>
      <img src={xBtn} alt="닫기 버튼" />
      <Title>응~ 이거나 먹어~</Title>
      <SandwitchInfo sandwitch={sandwitch} />
      <CombinationIngredientList />
      <Button />
      {/* 준하야 이거 버튼 어떻게 쓰니..? */}
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
`;

const Title = styled.div`
  margin: 15px 0 15px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export default RandomModalResult;
