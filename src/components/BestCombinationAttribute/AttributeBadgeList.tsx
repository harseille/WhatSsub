import IngredientBadge from '@components/BestCombinationAttribute/AttributeBadge';
import convertBadge from '@services/Attributes/convertBadge';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function SandwichBadgeList({ badgeList }: { badgeList: string[] }) {
  const 변환된_뱃지_리스트 = convertBadge(badgeList);

  return (
    <BadgeList>
      {변환된_뱃지_리스트.map(([카테고리, 뱃지_리스트]) =>
        뱃지_리스트.map((뱃지: string) => <IngredientBadge key={뱃지} category={카테고리} name={뱃지} />)
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
