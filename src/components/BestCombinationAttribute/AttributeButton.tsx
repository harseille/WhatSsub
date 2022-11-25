import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { badgeFontColor, badgeBackgroundColor } from '@styles/common';

function IngredientButton({
  filter,
  name,
  max,
  selectedFilter,
  onSelectFilter,
}: {
  filter: string;
  name: string;
  max: number;
  selectedFilter: { [key: string]: string[] };
  onSelectFilter: (filter: string, name: string, maxNum: number) => void;
}) {
  const 클릭핸들러_속성버튼_토글 = () => {
    onSelectFilter(filter, name, max);
  };

  return (
    <Button onClick={클릭핸들러_속성버튼_토글} color={selectedFilter[filter].includes(name) ? filter : '기본'}>
      {name}
    </Button>
  );
}

export default IngredientButton;

const Button = styled.button<{ color: string }>`
  border: 0;
  padding: 5px 15px;
  border-radius: ${changeRem(15)};
  font-size: ${changeRem(14)};
  color: ${({ color }) => badgeFontColor[color]};
  background: ${({ color }) => badgeBackgroundColor[color]};
  cursor: pointer;

  &:hover {
    background: rgba(251, 194, 0, 0.8);
    color: #fff;
    box-shadow: 3px 3px 3px #7879706d;
  }
`;
