import styled from '@emotion/styled';
import source from '@assets/images/ingredients/sauce_hot_chilli.png';
import { changeRem, flexbox, autoMargin } from '../styles/mixin';

interface 재료 {
  아이디: string;
  이름: string;
  칼로리: number;
  재료사진: string;
}

const 더미_재료: 재료 = {
  아이디: 'k123',
  이름: '핫칠리',
  칼로리: 41.8,
  재료사진: source,
};

function IngredientCard() {
  return (
    <li key={더미_재료.아이디}>
      <Card>
        <Title>{더미_재료.이름}</Title>
        <Kcal>{더미_재료.칼로리}Kcal</Kcal>
        <ImgWrap>
          <img src={더미_재료.재료사진} alt={더미_재료.이름} />
        </ImgWrap>
      </Card>
    </li>
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
