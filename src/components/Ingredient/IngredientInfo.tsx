import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_재료정보 } from '@typings/ISandwich';

function IngredientInfo({ ingredientList }: { ingredientList: 인터페이스_재료정보[] }) {
  const 재료_조합_리스트 = ingredientList.map(재료 => (
    <li key={재료.id}>
      <p>
        <span>{재료.카테고리}</span>
        {Array.isArray(재료.이름) ? <span>{재료.이름.join(', ')}</span> : <span>{재료.이름}</span>}
      </p>
    </li>
  ));

  return <CombinationIngredientUl>{재료_조합_리스트}</CombinationIngredientUl>;
}

const CombinationIngredientUl = styled.ul`
  width: 100%;
  font-size: ${changeRem(12)};
  line-height: ${changeRem(20)};
  color: #979797;
`;

export default IngredientInfo;
