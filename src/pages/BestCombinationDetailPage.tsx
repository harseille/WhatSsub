import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import IngredientCardList from '@components/Ingredient/IngredientCardList';
import CommentList from '@components/Comments/CommentList';
import CommentInputWrap from '@components/Comments/CommentInputWrap';
import SandwichInfo from '@components/Sandwichs/SandwichInfo';
import Wrapper from '@components/UI/Wrapper';
import Like from '@components/Common/Button/Like';
import { API_URL_PATH_PREFIX } from '@constants/constants';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합상세페이지_꿀조합 } from '../types/ISandwich';

// ? fetch를 뭐라고 바꿀지 고민...
const fetchJson = (url: string) => fetch(url).then(res => res.json());
// TODO: DB구축 후 combinationId로 불러오기
const getResponseByBestCombinationId = (combinationId = '') =>
  fetchJson(`${API_URL_PATH_PREFIX}/꿀조합/bestCombination.json`);

const 꿀조합_데이터_받아오기 = async (
  combinationId: string | undefined
): Promise<인터페이스_꿀조합상세페이지_꿀조합> => {
  const response = await getResponseByBestCombinationId(combinationId);
  return response;
};

function BestCombinationDetailPage() {
  // TODO: any 없애기
  const 꿀조합: 인터페이스_꿀조합상세페이지_꿀조합 | any = useLoaderData();

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
              // TODO: data의 ingredients.json과 불일치
              id: 'testid',
              이미지: 꿀조합.이미지,
              이름: 꿀조합.제목,
              베이스샌드위치: 꿀조합.베이스샌드위치,
              칼로리: 꿀조합.칼로리,
              뱃지리스트: 꿀조합.뱃지리스트,
            }}
          />
          <IngredientCardList ingredientList={꿀조합.선택재료} />
          {/* <CombinationIngredientList ingredientList={꿀조합.선택재료} /> */}
        </Contents>
        <Comments>
          <CommentHeader>
            <h2>
              리뷰 <span>{꿀조합.댓글.length}</span>
            </h2>
          </CommentHeader>
          <CommentList commentList={꿀조합.댓글} />
          <CommentInputWrap />
        </Comments>
      </Wrapper>
    );
  }
  // TODO: 꿀조합 찾기 Error Fallback page 개발
  return <div>Fallback</div>;
}

export default BestCombinationDetailPage;

export const loader = ({ params }: LoaderFunctionArgs) => 꿀조합_데이터_받아오기(params.combinationId);

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
`;

const Contents = styled.div`
  ${flexbox('column', 'flex-start', 'center')}
  background: #fff;
  margin-bottom: 10px;
  padding: 32px;
`;

const Comments = styled.div`
  background: #fff;
  padding: 0 32px;
  padding-bottom: 64px;
  box-shadow: 0px -4px 10px rgba(213, 213, 213, 0.25);
`;

const CommentHeader = styled.div`
  ${flexbox('row', undefined, 'center')}
  height: ${changeRem(60)};

  box-shadow: 0px 1px 1px #eee;

  & h2 {
    font-weight: 500;
    font-size: ${changeRem(14)};

    & span {
      color: ${props => props.theme.colors.primaryYellow};
    }
  }
`;
