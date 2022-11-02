import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';

interface 선택재료 {
  빵: string;
  치즈: string;
  야채: string[];
  소스: string[];
  추가재료?: string[];
}

function CombinationIngredientList() {
  const 선택재료: 선택재료 = {
    빵: '플랫 브레드',
    치즈: '슈레드',
    야채: ['양상추 토마토'],
    소스: ['핫칠리, 올리브오일'],
    // 추가재료: ['아보카도'],
  };
  const CombinationIngredientLis = Object.entries(선택재료).map(([재료타입, 재료]) => (
    <li>
      <p>
        <span>{재료타입}</span>: <span>{재료}</span>
      </p>
    </li>
  ));

  return <CombinationIngredientUl>{CombinationIngredientLis}</CombinationIngredientUl>;
}

const CombinationIngredientUl = styled.ul`
  font-size: ${changeRem(12)};
  line-height: ${changeRem(20)};
  color: #979797;
`;

export default CombinationIngredientList;
