import { fontColor, backgroundColor } from '@components/Attribute/AttributeButton';
import styled from '@emotion/styled';

function IngredientBadge({ filter, item }: { filter: string; item: string }) {
  return (
    <li>
      <IngredientBadgeBox color={filter}>{item}</IngredientBadgeBox>
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
  color: ${({ color }) => fontColor[color]};
  background: ${({ color }) => backgroundColor[color]};
`;

export default IngredientBadge;
