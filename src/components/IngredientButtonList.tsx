import styled from '@emotion/styled';
import IngredientButton from '@components/UI/Button/IngredientButton';
import { changeRem } from '@styles/mixin';
import { 재료선택, 재료 } from '@pages/BestCombinationPickPage';
import { useState } from 'react';

function IngredientButtonList({ filterData: { 제목, 재료목록, 최대선택개수 } }: { filterData: 재료선택 }) {
  const [selectedNum, setSelectedNum] = useState<number>(0);

  const alertMaxSelect = (isSelected: boolean) => {
    const count = isSelected ? -1 : 1;

    if (selectedNum === 최대선택개수 && !isSelected) {
      // Todo Modal 컴포넌트 개발 시 대체 예정
      alert('최대 선택 개수를 초과했습니다.');
    } else {
      setSelectedNum(prevNum => prevNum + count);
    }

    return selectedNum === 최대선택개수;
  };

  return (
    <Wrapper>
      <Title>
        {제목}
        <TitleDes>{`(최대 ${최대선택개수}가지 선택 가능합니다.)`}</TitleDes>
      </Title>
      <IngredientList>
        {재료목록.map((재료: 재료) => (
          <li key={재료.id}>
            <IngredientButton filter={제목} name={재료.이름} onAlert={alertMaxSelect} />
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
