import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

interface 재료버튼프로퍼티 {
  배경색?: string;
  글자색?: string;
}

const IngredientButton = styled.button<재료버튼프로퍼티>`
  border: 0;
  padding: 5px 15px;
  border-radius: ${changeRem(15)};
  font-size: ${changeRem(14)};
  color: ${props => props.글자색};
  background: ${props => props.배경색};
`;

export default IngredientButton;
