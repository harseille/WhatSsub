import IngredientButtonList from '@components/BestCombinationAttribute/AttributeButtonList';
import refreshIcon from '@assets/icons/refresh.svg';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합선택페이지_필터 } from '@typings/ISandwich';
import 꿀조합속성 from '../../data/PickAttribute';

type TProps = {
  filteredAttr: 인터페이스_꿀조합선택페이지_필터;
  toggleFilter: (filter: string, name: string, maxNum: number) => void;
  initializeFilter: () => void;
};

function IngredientButtonListContainer({ filteredAttr, toggleFilter, initializeFilter }: TProps) {
  return (
    <IngredientButtonListWrap>
      <RefreshButton onClick={initializeFilter}>
        <img src={refreshIcon} alt="새로고침" />
      </RefreshButton>
      {꿀조합속성.map(data => (
        <IngredientButtonList
          key={data.이름}
          filterData={data}
          selectedFilter={filteredAttr}
          onSelectFilter={toggleFilter}
        />
      ))}
    </IngredientButtonListWrap>
  );
}

export default IngredientButtonListContainer;

const IngredientButtonListWrap = styled.div`
  position: relative;
  padding: 20px 0;
`;

const RefreshButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
