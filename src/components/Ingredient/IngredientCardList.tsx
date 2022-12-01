import IngredientCard from '@components/Ingredient/IngredientCard';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 화면용_재료_아이디 } from '@constants/constants';
import { 인터페이스_재료 } from '@typings/ISandwich';

type TProps = {
  ingredientList: 인터페이스_재료[];
  toasting: string;
};

function IngredientCardList({ ingredientList, toasting }: TProps) {
  const sortedIngredientList = ingredientList
    .map(재료 => ({
      ...재료,
      id: 화면용_재료_아이디[재료.id!],
    }))
    .sort((a, b) => a!.id - b!.id);

  const LiList = sortedIngredientList.map(재료 => (
    <li key={재료.id}>
      <IngredientCard ingredient={재료} toasting={toasting} />
    </li>
  ));

  return <CardList>{LiList}</CardList>;
}

const CardList = styled.ul`
  width: 100%;
  overflow: auto;
  padding: 12px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  touch-action: pan-x

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  ${flexbox()}
  gap: 12px;
`;

export default IngredientCardList;
