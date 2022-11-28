import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { badgeFontColor, badgeBackgroundColor } from '@styles/common';

type TProps = {
  filter: string;
  name: string;
  max: number;
  selectedFilter: { [key: string]: string[] };
  onSelectFilter: (filter: string, name: string, maxNum: number) => void;
};

function AttributeButton({ filter, name, max, selectedFilter, onSelectFilter }: TProps) {
  const 클릭핸들러_속성버튼_토글 = () => {
    onSelectFilter(filter, name, max);
  };

  return (
    <li>
      <Button onClick={클릭핸들러_속성버튼_토글} color={selectedFilter[filter].includes(name) ? filter : '기본'}>
        {name}
      </Button>
    </li>
  );
}

export default AttributeButton;

const Button = styled.button<{ color: string }>`
  border: 0;
  padding: 5px 15px;
  border-radius: ${changeRem(15)};
  font-size: ${changeRem(14)};
  color: ${({ color }) => badgeFontColor[color]};
  background: ${({ color }) => badgeBackgroundColor[color]};
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 3px #7879706d;
  }

  ${mediaQuery} {
    &:hover {
      background: rgba(251, 194, 0, 0.8);
      color: #fff;
    }
  }
`;
