import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import Wrapper from '@components/UI/Wrapper';
import { Header, Contents } from '@components/BestCombinationDetail/index';
import CommentsContainer from '@components/Comments/CommentsContainer';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { collection, getDoc, doc } from 'firebase/firestore';
import { Suspense } from 'react';
import { db } from '../firebase.config';

function BestCombinationDetailPage() {
  // TODO: any 없애기
  const 꿀조합: 인터페이스_꿀조합 | any = useLoaderData();

  return (
    <Suspense fallback={<p>Loading</p>}>
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
          author={꿀조합.작성자id}
        />
        <CommentsContainer />
      </Wrapper>
    </Suspense>
  );
}

export default BestCombinationDetailPage;

const 꿀조합_데이터_가져오기 = async (꿀조합id: string) => {
  try {
    const 꿀조합_콜랙션 = collection(db, '꿀조합');
    const querySnapshot = await getDoc(doc(꿀조합_콜랙션, 꿀조합id));
    if (querySnapshot.exists()) {
      const 꿀조합 = querySnapshot.data();
      return 꿀조합;
    }
    console.log('꿀조합이 없습니다.!');
  } catch (error) {
    console.error(error);
    console.log('꿀조합 가져오기 실패');
  }
};

export const loader = ({ params }: LoaderFunctionArgs) => {
  const 꿀조합 = 꿀조합_데이터_가져오기(params.combinationId!);
  if (꿀조합 === undefined) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return 꿀조합;
};
