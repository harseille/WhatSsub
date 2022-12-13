import { memo } from 'react';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

type TProps = {
  filterTitle: string;
  maxNum: number;
  overSelectedAttribute: string;
};

function AttributeListTitle({ filterTitle, maxNum, overSelectedAttribute }: TProps) {
  return (
    <Title>
      {filterTitle}
      <TitleDes overSelectedAttibute={overSelectedAttribute} filter={filterTitle}>
        ( 최대 {maxNum}가지 선택 가능합니다. )
      </TitleDes>
    </Title>
  );
}

export default memo(AttributeListTitle);

const Title = styled.h2`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: ${changeRem(18)};
`;
const TitleDes = styled.span<{ overSelectedAttibute: string; filter: string }>`
  display: inline-block;
  margin-left: 8px;
  color: ${({ overSelectedAttibute, filter }) => (overSelectedAttibute === filter ? '#fa3450' : '#878787')};
  font-size: ${changeRem(14)};
  transition: all 0.2s linear;
`;
