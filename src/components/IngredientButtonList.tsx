import styled from '@emotion/styled';
import IngredientButton from '@components/UI/Button/IngredientButton';
import { changeRem } from '@styles/mixin';
import { 재료선택, 재료 } from '@pages/BestCombinationPickPage';

function IngredientButtonList({
  filterData: { 제목, 재료목록, 최대선택개수 },
  selectedFilter,
  onSelectFilter,
}: {
  filterData: 재료선택;
  selectedFilter: { [key: string]: string[] };
  onSelectFilter: (filter: string, name: string, maxNum: number) => void;
}) {
  return (
    <Wrapper>
      <Title>
        {제목}
        <TitleDes>{`(최대 ${최대선택개수}가지 선택 가능합니다.)`}</TitleDes>
      </Title>
      <IngredientList>
        {재료목록.map((재료: 재료) => (
          <li key={재료.id}>
            <IngredientButton
              filter={제목}
              name={재료.이름}
              max={최대선택개수}
              selectedFilter={selectedFilter}
              onSelectFilter={onSelectFilter}
            />
          </li>
        ))}
      </IngredientList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: ${changeRem(18)};
`;
const TitleDes = styled.span`
  display: inline-block;
  margin-left: 8px;
  color: #878787;
  font-size: ${changeRem(14)};
`;

const IngredientList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 10px;
`;

export default IngredientButtonList;
