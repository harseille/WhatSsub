import { badgeFontColor, badgeBackgroundColor } from '@styles/common';
import styled from '@emotion/styled';

type TProps = {
  category: string;
  name: string;
};

function IngredientBadge({ category, name }: TProps) {
  return (
    <li>
      <IngredientBadgeBox color={category}>{name}</IngredientBadgeBox>
    </li>
  );
}

const IngredientBadgeBox = styled.div<{ color: string }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ color }) => badgeFontColor[color]};
  background: ${({ color }) => badgeBackgroundColor[color]};
`;

export default IngredientBadge;
