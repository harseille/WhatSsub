import { 재료 } from '@components/Ingredient/IngredientCardList';
import styled from '@emotion/styled';
import { changeRem, flexbox, autoMargin } from '@styles/mixin';

function IngredientCard(props: { ingredient: 재료 }) {
  const {
    ingredient: { 이름, 칼로리, 이미지 },
  } = props;
  return (
    <Card>
      <Title>{이름}</Title>
      <Kcal>{칼로리}Kcal</Kcal>
      <ImgWrap>
        <img src={이미지} alt={이름} />
      </ImgWrap>
    </Card>
  );
}

const Card = styled.section`
  ${flexbox('column')}
  background: ${props => props.theme.colors.grayF5};
  width: ${changeRem(88)};
  height: ${changeRem(108)};
  border-radius: ${changeRem(8)};
  text-align: center;
`;

const Title = styled.h3`
  font-size: ${changeRem(10)};
  font-weight: 500;
  color: ${props => props.theme.colors.gray87};
  margin-bottom: ${changeRem(8)};
  order: 2;
`;

const Kcal = styled.p`
  font-size: ${changeRem(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.primaryYellow};
  order: 3;
`;

const ImgWrap = styled.div`
  width: ${changeRem(78)};
  height: ${changeRem(54)};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${autoMargin()}
  margin-bottom: ${changeRem(4)};
  order: 1;
`;

export default IngredientCard;