import AttributeButtonList from '@components/BestCombinationAttribute/AttributeButtonList';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합선택페이지_필터 } from '@typings/ISandwich';
import RefreshButton from './RefreshButton';
import 꿀조합속성 from '../../data/PickAttribute';

type TProps = {
  filteredAttr: 인터페이스_꿀조합선택페이지_필터;
  overSelectedFilter: string;
  toggleFilter: (filter: string, name: string, maxNum: number) => void;
  initializeFilter: () => void;
};

function AttributeButtonListContainer({ filteredAttr, overSelectedFilter, toggleFilter, initializeFilter }: TProps) {
  return (
    <AttributeButtonListWrap>
      <RefreshButton onClick={initializeFilter} />
      {꿀조합속성.map(data => (
        <AttributeButtonList
          key={data.이름}
          filterData={data}
          selectedFilter={filteredAttr}
          overSelectedFilter={overSelectedFilter}
          onSelectFilter={toggleFilter}
        />
      ))}
    </AttributeButtonListWrap>
  );
}

export default AttributeButtonListContainer;

const AttributeButtonListWrap = styled.div`
  position: relative;
  padding: 20px 0;
`;
