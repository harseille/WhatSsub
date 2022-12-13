import IngredientCard from '@components/Ingredient/IngredientCard';
import { 화면용_재료_아이디 } from '@constants/constants';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
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
    .sort((이전_재료, 다음_재료) => 이전_재료!.id - 다음_재료!.id);

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

// const CardList = styled.ul`
//   background: blue;
//   gap: 12px;
//   width: 180px;
//   max-height: 1200px;
//   padding: 12px;
//   transform: rotate3d(0, 0, 1, -90deg) translateY(-50%);
//   transform-origin: right top;
//   overflow-y: scroll;
//   overflow-x: hidden;
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
//   &::-webkit-scrollbar {
//     display: none; /* Chrome, Safari and Opera */
//   }
// `;

// const CardLi = styled.li`
//   transform: rotate3d(0, 0, 1, 90deg);
//   transform-origin: right top;
// `;

export default IngredientCardList;
