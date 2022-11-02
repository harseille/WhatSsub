import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';

function CombinationIngredientList() {
  return (
    <CombinationIngredientUl>
      <li>
        <p>
          <span>소스</span>: <span>핫칠리, 올리브오일</span>
        </p>
      </li>
      <li>
        <p>
          <span>치즈</span>: <span>슈레드</span>
        </p>
      </li>
      <li>
        <p>
          <span>빵</span>: <span>플랫 브레드</span>
        </p>
      </li>
      <li>
        <p>
          <span>야채</span>: <span>양상추, 토마토</span>
        </p>
      </li>
    </CombinationIngredientUl>
  );
}

const CombinationIngredientUl = styled.ul`
  font-size: ${changeRem(12)};
  line-height: ${changeRem(20)};
  color: #979797;
`;

export default CombinationIngredientList;
