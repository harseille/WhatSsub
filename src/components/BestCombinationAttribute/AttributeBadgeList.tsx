import IngredientBadge from '@components/BestCombinationAttribute/AttributeBadge';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_샌드위치뱃지리스트 } from '@typings/ISandwich';

function SandwichBadgeList({ badgeList }: { badgeList: 인터페이스_샌드위치뱃지리스트 }) {
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
flex-flow: wrap;
margin: 0;
gap: 8px;
${mediaQuery} {
width: 300px;
}
`;

export default SandwichBadgeList;
