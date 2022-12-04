import { lazy } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import Wrapper from '@components/Common/UI/Wrapper';
import { Header } from '@components/BestCombinationDetail/index';
import CommentsContainer from '@components/Comments/CommentsContainer';
import getBestCombination from '@api/getBestCombination';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

const Contents = lazy(() => import('@components/BestCombinationDetail/Contents'));

function BestCombinationDetailPage() {
  const 꿀조합 = useLoaderData() as 인터페이스_꿀조합;
  console.log(꿀조합, 'dsfsd');
  return (
    <Wrapper>
      <Header author={꿀조합.작성자} like={꿀조합.좋아요} />
      <Contents
        sandwich={{
          이미지: 꿀조합.이미지,
          꿀조합제목: 꿀조합.꿀조합제목,
          베이스샌드위치: 꿀조합.베이스샌드위치,
          칼로리: 꿀조합.칼로리,
          뱃지리스트: 꿀조합.뱃지리스트,
        }}
        ingredientList={꿀조합.선택재료}
        toasting={꿀조합.토스팅}
        author={꿀조합.작성자id}
      />
      <CommentsContainer />
    </Wrapper>
  );
}

export default BestCombinationDetailPage;

export const loader = ({ params }: LoaderFunctionArgs) => {
  const 꿀조합 = getBestCombination(params.combinationId!);
  if (꿀조합 === undefined) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return 꿀조합;
};
