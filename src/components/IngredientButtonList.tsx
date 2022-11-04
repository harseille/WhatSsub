import styled from '@emotion/styled';
import IngredientButton from '@components/UI/Button/IngredientButton';
import { changeRem } from '@styles/mixin';

interface 재료 {
  id: string;
  이름: string;
}

interface 재료선택 {
  제목: string;
  가이드: string;
  재료목록: 재료[];
}

const 더미데이터: 재료선택 = {
  제목: '재료',
  가이드: '재료 1가지를 선택해 주세요.',
  재료목록: [
    { id: '1', 이름: '돼지고기' },
    { id: '2', 이름: '소고기' },
    { id: '3', 이름: '닭고기' },
    { id: '4', 이름: '해산물' },
  ],
};

function IngredientButtonList() {
  return (
    <Wrapper>
      <Title>
        {더미데이터.제목}
        <TitleDes>{`(${더미데이터.가이드})`}</TitleDes>
      </Title>
      <IngredientList>
        {더미데이터.재료목록.map(재료 => (
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
