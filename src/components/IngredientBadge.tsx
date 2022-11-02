import styled from '@emotion/styled';

const IngredientBadge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  color: ${props => props.theme.badgeColors.yellow};
  background: ${props => props.theme.badgeColors.yellowBack};
`;

export default IngredientBadge;
