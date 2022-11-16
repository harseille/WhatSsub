import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

function IngredientButton({
  filter,
  name,
  max,
  selectedFilter,
  onSelectFilter,
}: {
  filter: string;
  name: string;
  max: number;
  selectedFilter: { [key: string]: string[] };
  onSelectFilter: (filter: string, name: string, maxNum: number) => void;
}) {
  const toggleButtonHandler = () => {
    onSelectFilter(filter, name, max);
  };

  return (
    <Button onClick={toggleButtonHandler} color={selectedFilter[filter].includes(name) ? filter : '기본'}>
      {name}
    </Button>
  );
}
interface IColor {
  [key: string]: string;
}

const fontColor: IColor = {
  기본: '#7A7A7A',
  맛: '#DFA000',
  재료: '#4B69FD',
  추가사항: '#FF4200',
};

const backgroundColor: IColor = {
  기본: 'rgba(220, 220, 220, 0.3)',
  맛: 'rgba(252, 189, 33, 0.1)',
  재료: 'rgba(75, 105, 253, 0.1)',
  추가사항: 'rgba(255, 66, 0, 0.1)',
};

const Button = styled.button<{ color: string }>`
  border: 0;
  padding: 5px 15px;
  border-radius: ${changeRem(15)};
  font-size: ${changeRem(14)};
  color: ${({ color }) => fontColor[color]};
  background: ${({ color }) => backgroundColor[color]};
  cursor: pointer;
`;

export default IngredientButton;
