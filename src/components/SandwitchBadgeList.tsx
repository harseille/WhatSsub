import styled from '@emotion/styled';
import IngredientBadge from './IngredientBadge';

interface badgeCate {
  flavor: string[];
  mainIngredient: string[];
  additional: string[];
}

const badgeCategory: badgeCate = {
  flavor: ['달달', '고소'],
  mainIngredient: ['돼지고기'],
  additional: ['고기러버'],
};

function SandwitchBadgeList() {
  return (
    <BadgeList>
      {badgeCategory.flavor.map(item => (
        <li>
          <IngredientBadge>{item}</IngredientBadge>
        </li>
      ))}
    </BadgeList>
  );
}

const BadgeList = styled.ul`
  display: flex;
  margin: 0;
  gap: 8px;
`;

export default SandwitchBadgeList;
