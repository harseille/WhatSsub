import React from 'react';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

type TProps = {
  filterTitle: string;
  maxNum: number;
  overSelectedFilter: string;
};

function AttributeListTitle({ filterTitle, maxNum, overSelectedFilter }: TProps) {
  return (
    <Title>
      {filterTitle}
      <TitleDes overSelectedFilter={overSelectedFilter} filter={filterTitle}>
        {overSelectedFilter !== filterTitle
          ? `( 최대 ${maxNum}가지 선택 가능합니다. )`
          : ` 최대 선택 개수가 초과되었습니다. `}
      </TitleDes>
    </Title>
  );
}

export default React.memo(AttributeListTitle);

const Title = styled.h2`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: ${changeRem(18)};
`;
const TitleDes = styled.span<{ overSelectedFilter: string; filter: string }>`
  display: inline-block;
  margin-left: 8px;
  color: ${({ overSelectedFilter, filter }) => (overSelectedFilter === filter ? '#fa3450' : '#878787')};
  font-size: ${changeRem(14)};
  transition: all 0.2s linear;
`;
