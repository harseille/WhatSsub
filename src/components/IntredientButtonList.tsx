import styled from '@emotion/styled';
import { changeRem } from 'src/styles/mixin';
import IngredientButton from '@components/IngredientButton';

interface gredient {
  id: string;
  val: string;
}

interface ingredientList {
  title: string;
  desc: string;
  items: gredient[];
}

const dummy: ingredientList = {
  title: '재료',
  desc: '재료 1가지를 선택해 주세요.',
  items: [
    { id: '1', val: '돼지고기' },
    { id: '2', val: '소고기' },
    { id: '3', val: '닭고기' },
    { id: '4', val: '해산물' },
  ],
};

function IngredientButtonList() {
  return (
    <Wrapper>
      <Title>
        {dummy.title}
        <TitleDes>{`(${dummy.desc})`}</TitleDes>
      </Title>
      <IngredientList>
        {dummy.items.map(item => (
          <li key={item.id}>
            <IngredientButton>{item.val}</IngredientButton>
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
