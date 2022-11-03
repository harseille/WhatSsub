import CombinationIngredientList from '@components/CombinationIngredientList';
import CommentInputWrap from '@components/CommentInputWrap';
import IngredientCardList from '@components/IngredientCardList';
import Like from '@components/Like';
import SandwitchInfo from '@components/SandwitchInfo';
import CommentList from '@components/CommentList';
import styled from '@emotion/styled';

import { changeRem, flexbox } from '../styles/mixin';

import { 인터페이스_꿀조합 } from '../types/ISandwitch';

const data: 인터페이스_꿀조합[] = [
  {
    id: 'k1',
    베이스샌드위치: '서브웨이 클럽',
    이미지: 'imgString',
    작성일: '2022.11.01',
    작성자: '최원오',
    제목: '서브웨이 클럽',
    좋아요: '30',
    칼로리: '1000000',
    선택재료: [
      {
        id: 'v1',
        이름: '양상추',
        카테고리: '야채',
        칼로리: '30',
        추가재료여부: false,
      },
      {
        id: 'v2',
        이름: '토마토',
        카테고리: '야채',
        칼로리: '50',
        추가재료여부: false,
      },
      {
        id: 's1',
        이름: '핫소스',
        카테고리: '소스',
        칼로리: '50',
        추가재료여부: false,
      },
    ],
    뱃지리스트: {
      맛: ['달달', '고소'],
      메인재료: '돼지고기',
      추가사항: ['고기러버'],
    },
  },
];

function BestCombinationDetailPage() {
  return (
    <Wrapper>
      <Header>
        <h1>
          <span>단찌</span>만의 조합
        </h1>
        <Like count={data[0].좋아요} />
      </Header>
      <Contents>
        <SandwitchInfo
          sandwitch={{
            이미지: data[0].이미지,
            이름: data[0].제목,
            베이스샌드위치: data[0].베이스샌드위치,
            칼로리: data[0].칼로리,
            뱃지리스트: data[0].뱃지리스트,
          }}
        />
        {/* <IngredientCardList ingredientList={data[0].선택재료} /> */}
        <CombinationIngredientList ingredientList={data[0].선택재료} />
        {/* <CombinationIngredientList /> */}
      </Contents>
      <Comments>
        <CommentHeader>
          <h2>
            리뷰 <span>37</span>
          </h2>
        </CommentHeader>
        <CommentList />
        <CommentInputWrap />
      </Comments>
    </Wrapper>
  );
}

export default BestCombinationDetailPage;

// export function loader({ params }) {
//   const { combinationId } = params;
//   return getPost(combinationId);
// }

const Wrapper = styled.div`
  background: #f5f5f5;
  margin-bottom: 150px;
`;

const Header = styled.div`
  ${flexbox('row', 'space-between', 'center')}
  height: 48px;
  background: #fff;
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
  background: #fff;
  margin-bottom: 10px;
  padding: 32px;
`;

const Comments = styled.div`
  background: #fff;
  padding: 0 32px;
`;

const CommentHeader = styled.div`
  ${flexbox('row', undefined, 'center')}
  height: ${changeRem(60)};
  & h2 {
    font-weight: 500;
    font-size: ${changeRem(14)};

    & span {
      color: ${props => props.theme.colors.primaryYellow};
    }
  }
`;
