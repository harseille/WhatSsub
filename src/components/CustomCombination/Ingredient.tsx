import 재료선택하기 from '@services/customCombination/selectIngredients';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_생성단계_꿀조합, 인터페이스_선택된_재료 } from '@typings/ISandwich';
import mediaQuery from '@styles/media-queries';

type TProps = {
  isSelected: boolean;
  IngredientInfo: 인터페이스_선택된_재료;
  customCombination: 인터페이스_생성단계_꿀조합;
  onChange: (선택한재료: 인터페이스_생성단계_꿀조합) => void;
  changeModalType: (type: string) => void;
};

function Ingredient({
  isSelected,
  IngredientInfo: 재료정보,
  customCombination: 나만의_조합,
  onChange: 체인지핸들러_나만의_조합_수정,
  changeModalType,
}: TProps) {
  const 클릭핸들러_재료_선택 = () =>
    재료선택하기({ 재료정보, 나만의_조합, 체인지핸들러_나만의_조합_수정, changeModalType });

  const bgColor = isSelected ? '#FFF5DE' : '#f1f0f0';
  const color = isSelected ? '#F37500' : '#4F4F4F';
  return (
    <IngredientItem onClick={클릭핸들러_재료_선택} color={color} bgColor={bgColor}>
      <button type="button">{재료정보.이름}</button>
    </IngredientItem>
  );
}

export default Ingredient;

type 타입_속성 = {
  bgColor: string;
};

const IngredientItem = styled.li<타입_속성>`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${changeRem(16)};
  padding: 4px 20px;
  border-radius: 15px;
  cursor: pointer;

  & button {
    border: none;
    color: inherit;
    background-color: inherit;
  cursor: pointer;

  }

  &:hover {
    box-shadow: 3px 3px 3px #7879706d;
  }

  ${mediaQuery} {
    &:hover {
      background: rgb(251, 194, 0);
      color: ${({ theme }) => theme.colors.white};
    }
`;
