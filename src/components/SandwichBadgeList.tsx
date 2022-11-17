import styled from '@emotion/styled';
import IngredientBadge from '@components/UI/IngredientBadge';
import { 샌드위치뱃지리스트 } from '../types/ISandwich';

function SandwichBadgeList({ badgeList }: { badgeList: 샌드위치뱃지리스트 }) {
  const convertedBadgeList = Object.entries(badgeList);

  return (
    <BadgeList>
      {convertedBadgeList.map(([filter, badgeList]) =>
        badgeList.map((badge: string) => <IngredientBadge key={badge} filter={filter} item={badge} />)
      )}
    </BadgeList>
  );
}

const BadgeList = styled.ul`
  display: flex;
  margin: 0;
  gap: 8px;
`;

export default SandwichBadgeList;
