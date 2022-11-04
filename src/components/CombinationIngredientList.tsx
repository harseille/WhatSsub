import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';
import {} from './SandwitchInfoCard';

interface 인터페이스_재료 {
  id: string;
  이름: string;
  카테고리: string;
  칼로리: string;
  추가재료여부: boolean;
}

function CombinationIngredientList(props: { ingredientList: 인터페이스_재료[] }) {
  const { ingredientList } = props;

  const 재료_맵 = new Map();

  ingredientList.forEach((재료: 인터페이스_재료) => {
    재료_맵.set(재료.카테고리, 재료_맵.get(재료.카테고리) ? [재료.이름, ...재료_맵.get(재료.카테고리)] : [재료.이름]);
  });

  const CombinationIngredientList = [...재료_맵.entries()].map(([재료타입, 재료]) => (
    <li>
      <p>
        <span>{재료타입}</span>: {Array.isArray(재료) ? <span>{재료.join(', ')}</span> : <span>{재료}</span>}
      </p>
    </li>
  ));

  return <CombinationIngredientUl>{CombinationIngredientList}</CombinationIngredientUl>;
}

const CombinationIngredientUl = styled.ul`
  font-size: ${changeRem(12)};
  line-height: ${changeRem(20)};
  color: #979797;
`;

export default CombinationIngredientList;
