import IngredientCard from '@components/Ingredient/IngredientCard';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합_재료 } from '@typings/ISandwich';

function IngredientCardList({ ingredientList }: { ingredientList: 인터페이스_꿀조합_재료[] }) {
  const LiList = ingredientList.map(재료 => (
    <li key={재료.이름}>
      <IngredientCard ingredient={재료} />
    </li>
  ));

  return <CardList>{LiList}</CardList>;
}

const CardList = styled.ul`
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  ${flexbox()}
  gap: 8px;
`;

export default IngredientCardList;
