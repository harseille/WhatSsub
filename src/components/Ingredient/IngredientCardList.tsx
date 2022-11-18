import IngredientCard from '@components/Ingredient/IngredientCard';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';

export interface 재료 {
  이름: string;
  속성: string;
  칼로리: string;
  이미지: string;
}

function IngredientCardList(props: { ingredientList: 재료[] }) {
  const { ingredientList } = props;

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
