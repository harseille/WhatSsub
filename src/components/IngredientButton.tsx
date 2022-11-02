import styled from '@emotion/styled';
import { changeRem } from 'src/styles/mixin';

interface IngredientButtonProps {
  bg?: string;
  color?: string;
}

const IngredientButton = styled.button<IngredientButtonProps>`
  border: 0;
  padding: 4px 12px;
  border-radius: ${changeRem(15)};
  font-size: ${changeRem(16)};
  color: ${props => (props.color ? props.color : '#7A7A7A')};
  background: ${props => (props.bg ? props.bg : 'rgba(220, 220, 220, 0.3)')};
`;

export default IngredientButton;
