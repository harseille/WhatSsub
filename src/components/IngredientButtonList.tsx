import styled from '@emotion/styled';
import IngredientButton from '@components/UI/Button/IngredientButton';
import { changeRem } from '@styles/mixin';
import { 재료선택, 재료 } from '@pages/BestCombinationPickPage';

function IngredientButtonList({ filterData: { 제목, 재료목록, 선택개수 } }: { filterData: 재료선택 }) {
  return (
    <Wrapper>
      <Title>
        {제목}
        <TitleDes>{`(${제목}은 최대 ${선택개수}가지 까지 선택 가능합니다.)`}</TitleDes>
      </Title>
      <IngredientList>
        {재료목록.map((재료: 재료) => (
          <li key={재료.id}>
            <IngredientButton 글자색="#7A7A7A" 배경색="rgba(220, 220, 220, 0.3)">
              {재료.이름}
            </IngredientButton>
          </li>
        ))}
      </IngredientList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 20px;
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
