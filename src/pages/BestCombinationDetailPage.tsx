import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import IngredientCardList from '@components/Ingredient/IngredientCardList';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import Wrapper from '@components/UI/Wrapper';
import Like from '@components/Common/Button/Like';
import CommentsContainer from '@components/Comments/CommentsContainer';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import { collection, getDoc, doc } from 'firebase/firestore';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import mediaQuery from '@styles/media-queries';
import { db } from '../firebase.config';

const 꿀조합_데이터_가져오기 = async (꿀조합id: string | undefined) => {
  try {
    const 꿀조합_콜랙션 = collection(db, '꿀조합');
    // const querySnapshot = await getDoc(doc(꿀조합_콜랙션, 꿀조합id));
    const querySnapshot = await getDoc(doc(꿀조합_콜랙션, 'j2csd01BpApTrYTmwxIk'));

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

function BestCombinationDetailPage() {
  // TODO: any 없애기
  const 꿀조합: 인터페이스_꿀조합 | any = useLoaderData();

  if (꿀조합) {
    return (
      <Wrapper>
        <Header>
          <h1>
            <span>{꿀조합.작성자_이름}</span>만의 조합
          </h1>
          <Like count={꿀조합.좋아요} />
        </Header>
        <Contents>
          <SandwichInfo
            sandwich={{
              이미지: 꿀조합.이미지,
              꿀조합제목: 꿀조합.제목,
              베이스샌드위치: 꿀조합.베이스샌드위치,
              칼로리: 꿀조합.칼로리,
              뱃지리스트: 꿀조합.뱃지리스트,
            }}
          />
          <IngredientCardList ingredientList={꿀조합.선택재료} />
          {/* <CombinationIngredientList ingredientList={꿀조합.선택재료} /> */}
        </Contents>
        <CommentsContainer />
      </Wrapper>
    );
  }
  // TODO: 꿀조합 찾기 Error Fallback page 개발
  return <div>Fallback</div>;
}

export default BestCombinationDetailPage;

export const loader = ({ params }: LoaderFunctionArgs) => 꿀조합_데이터_가져오기(params.combinationId);

const Header = styled.div`
  ${flexbox('row', 'space-between', 'center')}
  height: 48px;
  background: #fff;
  position: relative;
  padding: 0 32px 0 32px;
  & h1 {
    font-weight: 700;
    font-size: ${changeRem(20)};

    & span {
      color: ${props => props.theme.colors.primaryYellow};
      font-size: ${changeRem(24)};
    }
  }
  ${mediaQuery} {
    & h1 {
      font-size: ${changeRem(28)};

      & span {
        color: ${props => props.theme.colors.primaryYellow};
        font-size: ${changeRem(32)};
      }
    }
  }
`;

const Contents = styled.div`
  ${flexbox('column', 'flex-start', 'center')}
  background: #fff;
  margin-bottom: 10px;
  padding: 32px;
`;
