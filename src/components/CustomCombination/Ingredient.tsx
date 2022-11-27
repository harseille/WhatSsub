import selectIngredients from '@utils/customCombination/selectIngredients';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_생성단계_꿀조합, 인터페이스_선택된_재료 } from '@typings/ISandwich';

type TProps = {
  customCombination: 인터페이스_생성단계_꿀조합;
  onChange: (선택한재료: 인터페이스_생성단계_꿀조합) => void;
  IngredientInfo: 인터페이스_선택된_재료;
  isSelected: boolean;
  changeModalType: (type: string) => void;
};

function Ingredient(props: TProps) {
  const {
    isSelected,
    IngredientInfo: 재료정보,
    customCombination: 나만의_조합,
    onChange: 체인지핸들러_나만의_조합_수정,
    changeModalType,
  } = props;

  const 클릭핸들러_재료_선택 = () =>
    selectIngredients({ 재료정보, 나만의_조합, 체인지핸들러_나만의_조합_수정, changeModalType });

  const bgColor = isSelected ? '#fff5de' : '#f1f0f0';
  const color = isSelected ? '#dfa000' : '#7A7A7A';
  return (
    <IngredientItem onClick={클릭핸들러_재료_선택} color={color} bgColor={bgColor}>
      {재료정보.이름}
    </IngredientItem>
  );
}

export default Ingredient;

type 타입_속성 = {
  bgColor: string;
};

const IngredientItem = styled.li<타입_속성>`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  font-size: ${changeRem(16)};
  padding: 4px 20px;
  border-radius: 15px;
  cursor: pointer;
`;
