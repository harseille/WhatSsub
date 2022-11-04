import styled from '@emotion/styled';

import IngredientCard from '@components/IngredientCard';

import source from '@assets/images/ingredients/sauce_hot_chilli.png';
import { flexbox } from '../styles/mixin';

export interface 재료 {
  id: string;
  카테고리: string;
  이름: string;
  칼로리: string;
  재료사진?: string;
}

// const 더미_재료_목록: 재료[] = [
//   {
//     id: 's11',
//     카테고리: '소스',
//     이름: '핫칠리',
//     칼로리: 41.8,
//     재료사진: source,
//   },
//   {
//     id: 'v222',
//     카테고리: '야채',
//     이름: '양상추',
//     칼로리: 100,
//     재료사진: source,
//   },
//   {
//     id: 'b333',
//     카테고리: '빵',
//     이름: '위트',
//     칼로리: 58,
//     재료사진: source,
//   },
//   {
//     id: 'c333',
//     카테고리: '치즈',
//     이름: '슈레드',
//     칼로리: 58,
//     재료사진: source,
//   },
// ];

function IngredientCardList(props: { ingredientList: 재료[] }) {
  const LiList = props.ingredientList.map(재료 => (
    <li key={재료.id}>
      <IngredientCard ingredient={재료} />
    </li>
  ));

  return <CardList>{LiList}</CardList>;
}

const CardList = styled.ul`
  ${flexbox()}
  gap: 8px
`;

export default IngredientCardList;
