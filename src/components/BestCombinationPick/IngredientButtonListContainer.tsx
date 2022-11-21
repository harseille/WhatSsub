import IngredientButtonList from '@components/BestCombinationAttribute/AttributeButtonList';
import refreshIcon from '@assets/icons/refresh.svg';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합선택페이지_필터 } from '../../types/ISandwich';
import 더미데이터 from '../../data/PickPageDummy';

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
      {더미데이터.map(data => (
        <IngredientButtonList
          key={data.제목}
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
  padding-top: 20px;
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
