import IngredientButton from '@components/BestCombinationAttribute/AttributeButton';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_꿀조합선택페이지_속성, 인터페이스_꿀조합선택페이지_속성선택 } from '@typings/ISandwich';

type TProps = {
  filterData: 인터페이스_꿀조합선택페이지_속성선택;
  selectedFilter: { [key: string]: string[] };
  onSelectFilter: (filter: string, name: string, maxNum: number) => void;
};

function IngredientButtonList({
  filterData: { 이름, 속성목록, 최대선택개수 },
  selectedFilter,
  onSelectFilter,
}: TProps) {
  return (
    <Wrapper>
      <Title>
        {이름}
        <TitleDes>{`(최대 ${최대선택개수}가지 선택 가능합니다.)`}</TitleDes>
      </Title>
      <IngredientList>
        {속성목록.map((속성: 인터페이스_꿀조합선택페이지_속성) => (
          <li key={속성.id}>
            <IngredientButton
              filter={이름}
              name={속성.이름}
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
