import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { useState } from 'react';

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
`;

function IngredientButton({
  filter,
  name,
  onAlert,
}: {
  filter: string;
  name: string;
  onAlert: (isSelected: boolean) => boolean;
}) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleButtonHandler = () => {
    const isMaxSelectedNum = onAlert(isSelected);

    if (!isMaxSelectedNum || (isMaxSelectedNum && isSelected)) setIsSelected(prevIsSelected => !prevIsSelected);
  };

  return (
    <Button onClick={toggleButtonHandler} color={isSelected ? filter : '기본'}>
      {name}
    </Button>
  );
}
export default IngredientButton;
