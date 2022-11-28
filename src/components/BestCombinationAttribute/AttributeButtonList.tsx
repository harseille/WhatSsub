import React from 'react';
import AttributeButton from '@components/BestCombinationAttribute/AttributeButton';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합선택페이지_속성, 인터페이스_꿀조합선택페이지_속성선택 } from '@typings/ISandwich';
import AttributeListTitle from './AttributeListTitle';

type TProps = {
  filterData: 인터페이스_꿀조합선택페이지_속성선택;
  selectedFilter: { [key: string]: string[] };
  overSelectedFilter: string;
  onSelectFilter: (filter: string, name: string, maxNum: number) => void;
};

function AttributeButtonList({
  filterData: { 이름, 속성목록, 최대선택개수 },
  selectedFilter,
  overSelectedFilter,
  onSelectFilter,
}: TProps) {
  return (
    <Wrapper>
      <AttributeListTitle filterTitle={이름} maxNum={최대선택개수} overSelectedFilter={overSelectedFilter} />
      <AttributeList>
        {속성목록.map((속성: 인터페이스_꿀조합선택페이지_속성) => (
          <AttributeButton
            key={속성.id}
            filter={이름}
            name={속성.이름}
            max={최대선택개수}
            selectedFilter={selectedFilter}
            onSelectFilter={onSelectFilter}
          />
        ))}
      </AttributeList>
    </Wrapper>
  );
}

export default AttributeButtonList;

const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: 0;
  }
`;

const AttributeList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 10px;
`;
