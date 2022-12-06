import ProgressiveImage from 'react-progressive-graceful-image';
import Span from '@components/Common/UI/Span';
import { 재료_카테고리 } from '@constants/CustomCombination/constants';
import convertProgressiveIngredientImage from '@utils/convertProgressiveIngredientImage';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { changeRem, flexbox, autoMargin } from '@styles/mixin';
import { 인터페이스_재료 } from '@typings/ISandwich';

type TProps = {
  ingredient: 인터페이스_재료;
  toasting: string;
};

function IngredientCard({ ingredient: { id, 이름, 칼로리, 이미지, 카테고리 }, toasting }: TProps) {
  return (
    <Card key={id}>
      {카테고리 === 재료_카테고리.추가재료 ? <Span designType="badgePrimaryGreen">추가</Span> : null}
      {카테고리 === 재료_카테고리.빵 && toasting === 재료_카테고리.토스팅 ? (
        <Span designType="badgePrimaryOrange">토스팅</Span>
      ) : null}
      <Title>{이름}</Title>
      <Kcal>{칼로리}Kcal</Kcal>
      <ImgWrap>
        <ProgressiveImage src={이미지 as string} placeholder={convertProgressiveIngredientImage(이름)}>
          {(src, loading) => <img style={{ filter: loading ? 'blur(4px)' : 'blur(0)' }} src={src} alt={이름} />}
        </ProgressiveImage>
      </ImgWrap>
    </Card>
  );
}

export default IngredientCard;

const Card = styled.section`
  ${flexbox('column')}
  position: relative;
  background: ${({ theme }) => theme.colors.grayF5};
  width: ${changeRem(88)};
  height: ${changeRem(108)};
  border-radius: ${changeRem(8)};
  text-align: center;

  ${mediaQuery} {
    width: ${changeRem(88 * 1.2)};
    height: ${changeRem(108 * 1.2)};
  }
`;

const Title = styled.h3`
  font-size: ${changeRem(10)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray87};
  margin-bottom: ${changeRem(8)};
  order: 2;
  ${mediaQuery} {
    font-size: ${changeRem(14)};
  }
`;

const Kcal = styled.p`
  font-size: ${changeRem(8)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryYellow};
  order: 3;
  ${mediaQuery} {
    font-size: ${changeRem(12)};
  }
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

  ${mediaQuery} {
    width: ${changeRem(78 * 1.2)};
    height: ${changeRem(54 * 1.2)};
  }
`;
