import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import Wrapper from '@components/Common/UI/Wrapper';
import { Header } from '@components/BestCombinationDetail/index';
import Contents from '@components/BestCombinationDetail/Contents';
import CommentsContainer from '@components/Comments/CommentsContainer';
import getBestCombination from '@api/getBestCombination';
import { DocumentData } from 'firebase/firestore';
import { 나만의_조합_초기값 } from '@constants/CustomCombination/constants';
// import { 인터페이스_꿀조합 } from '@typings/ISandwich';

function BestCombinationDetailPage() {
  // const 꿀조합 = useLoaderData() as 인터페이스_꿀조합;

  const [꿀조합, 꿀조합_수정] = useState<DocumentData>(나만의_조합_초기값);
  const { combinationId } = useParams();

  const 꿀조합_가져오기 = async (꿀조합id: string) => {
    const 꿀조합 = await getBestCombination(꿀조합id);

    if (꿀조합 === undefined) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }

    return 꿀조합;
  };

  useEffect(() => {
    const 타깃_꿀조합 = 꿀조합_가져오기(combinationId!);

    꿀조합_수정(타깃_꿀조합);
  }, []);
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

// export const loader = ({ params }: LoaderFunctionArgs) => {
//   const 꿀조합 = getBestCombination(params.combinationId!);
//   if (꿀조합 === undefined) {
//     throw new Response('', {
//       status: 404,
//       statusText: 'Not Found',
//     });
//   }
//   return 꿀조합;
// };
