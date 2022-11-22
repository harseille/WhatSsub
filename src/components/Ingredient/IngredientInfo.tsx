import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_재료정보 } from '../../types/ISandwich';

function IngredientInfo(props: { ingredientList: 인터페이스_재료정보[] }) {
  const { ingredientList } = props;

  // const 재료_정보_목록 = new Map();

  // ingredientList.forEach((재료: 인터페이스_재료정보) => {
  //   재료_정보_목록.set(
  //     재료.카테고리,
  //     재료_정보_목록.get(재료.카테고리) ? [재료.이름, ...재료_정보_목록.get(재료.카테고리)] : [재료.이름]
  //   );
  // });

  // const CombinationIngredientList = [...재료_정보_목록.entries()].map(([재료타입, 재료]) => (
  const CombinationIngredientList = ingredientList.map(재료 => (
    <li key={재료.id}>
      <p>
        <span>{재료.카테고리}</span>:{' '}
        {Array.isArray(재료.이름) ? <span>{재료.이름.join(', ')}</span> : <span>{재료.이름}</span>}
      </p>
    </li>
  ));

  return <CombinationIngredientUl>{CombinationIngredientList}</CombinationIngredientUl>;
}

const CombinationIngredientUl = styled.ul`
  width: 100%;
  font-size: ${changeRem(12)};
  line-height: ${changeRem(20)};
  color: #979797;
`;

export default IngredientInfo;
