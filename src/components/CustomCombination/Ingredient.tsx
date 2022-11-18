import { useState } from 'react';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

type 타입_속성 = {
  bgColor: string;
};

function Ingredient(props: { children: string }) {
  const { children } = props;
  const [isSelected, setisSelected] = useState(false);

  const 클릭핸들러_재료_선택 = () => setisSelected(prev => !prev);

  const bgColor = isSelected ? '#fff5de' : '#f1f0f0';
  const color = isSelected ? '#dfa000' : '#7A7A7A';
  return (
    <IngredientItem onClick={클릭핸들러_재료_선택} color={color} bgColor={bgColor}>
      {children}
    </IngredientItem>
  );
}

export default Ingredient;

const IngredientItem = styled.li<타입_속성>`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  font-size: ${changeRem(16)};
  padding: 4px 20px;
  border-radius: 15px;
  cursor: pointer;
`;
