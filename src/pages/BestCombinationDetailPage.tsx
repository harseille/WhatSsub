import styled from '@emotion/styled';
// import CombinationIngredientList from '@components/CombinationIngredientList';
import IngredientCardList from '@components/IngredientCardList';
import CommentList from '@components/Comments/CommentList';
import CommentInputWrap from '@components/CommentInputWrap';

import SandwitchInfo from '@components/UI/SandwitchInfo';
import Wrapper from '@components/UI/Wrapper';
import Like from '@components/UI/Button/Like';

// import ChickenSlice from '@assets/images/Chicken_Slice.png';
// import sauceHotChilli from '@assets/images/ingredients/sauce/hot_chilli.png';

import { changeRem, flexbox } from '@styles/mixin';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL_PATH_PREFIX } from '@constants/constants';
import { 인터페이스_꿀조합상세페이지_꿀조합 } from '../types/ISandwitch';

// import { 인터페이스_꿀조합 } from '../types/ISandwitch';

// const data: 인터페이스_꿀조합[] = [
//   {
//     id: 'k1',
//     베이스샌드위치: '서브웨이 클럽',
//     이미지: ChickenSlice,
//     작성일: '2022.11.01',
//     작성자: '최원오',
//     제목: '서브웨이 클럽',
//     좋아요: '30',
//     칼로리: '1000000',
//     선택재료: [
//       {
//         id: 'v1',
//         이름: '양상추',
//         카테고리: '야채',
//         칼로리: '30',
//         재료사진: sauceHotChilli,
//         추가재료여부: false,
//       },
//       {
//         id: 'v2',
//         이름: '토마토',
//         카테고리: '야채',
//         칼로리: '50',
//         재료사진: sauceHotChilli,
//         추가재료여부: false,
//       },
//       {
//         id: 's1',
//         이름: '핫소스',
//         카테고리: '소스',
//         칼로리: '50',
//         재료사진: sauceHotChilli,
//         추가재료여부: false,
//       },
//       {
//         id: 's2',
//         이름: '핫소스',
//         카테고리: '소스',
//         칼로리: '50',
//         재료사진: sauceHotChilli,
//         추가재료여부: false,
//       },
//       {
//         id: 's3',
//         이름: '핫소스',
//         카테고리: '소스',
//         칼로리: '50',
//         재료사진: sauceHotChilli,
//         추가재료여부: false,
//       },
//       {
//         id: 's1',
//         이름: '핫소스',
//         카테고리: '소스',
//         칼로리: '50',
//         재료사진: sauceHotChilli,
//         추가재료여부: false,
//       },
//     ],
//     뱃지리스트: {
//       맛: ['달달', '고소'],
//       메인재료: ['살라미'],
//       추가사항: ['고기러버'],
//     },
//   },
// ];

// ? fetched를 뭐라고 바꿔야될까
// const 꿀조합_데이터 = {
//   작성자:
// };

// ? fetch를 뭐라고 바꿀지 고민...
const fetchJson = (url: string) => fetch(url).then(res => res.json());
const getResponseByBestCombinationId = (combinationId = '') => fetchJson(`${API_URL_PATH_PREFIX}/bestCombination.json`);

function BestCombinationDetailPage() {
  const [꿀조합, 꿀조합_설정] = useState<인터페이스_꿀조합상세페이지_꿀조합 | null>(null);
  const { combinationId } = useParams();

  const 꿀조합_데이터_받아오기 = async (combinationId: string | undefined) => {
    const response = await getResponseByBestCombinationId(combinationId);

    꿀조합_설정(response);
  };

  useEffect(() => {
    꿀조합_데이터_받아오기(combinationId);
  }, []);

  // const { displayName } = getSessionUserInfo();

  if (꿀조합) {
    return (
      <Wrapper>
        <Header>
          <h1>
            <span>{꿀조합.작성자_이름}</span>만의 조합
          </h1>
          {/* <Like count={data[0].좋아요} /> */}
          <Like count={꿀조합.좋아요} />
        </Header>
        <Contents>
          <SandwitchInfo
            sandwitch={{
              // 이미지: data[0].이미지,
              // 이름: data[0].제목,
              // 베이스샌드위치: data[0].베이스샌드위치,
              // 칼로리: data[0].칼로리,
              // 뱃지리스트: data[0].뱃지리스트,
              이미지: 꿀조합.이미지,
              이름: 꿀조합.제목,
              베이스샌드위치: 꿀조합.베이스샌드위치,
              칼로리: 꿀조합.칼로리,
              뱃지리스트: 꿀조합.뱃지리스트,
            }}
          />
          {/* <IngredientCardList ingredientList={data[0].선택재료} /> */}
          {/* <CombinationIngredientList ingredientList={data[0].선택재료} /> */}
          <IngredientCardList ingredientList={꿀조합.선택재료} />
          {/* <CombinationIngredientList ingredientList={꿀조합.선택재료} /> */}
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

  return <div>fallback</div>;
}

export default BestCombinationDetailPage;

// export function loader({ params }) {
//   const { combinationId } = params;
//   return getPost(combinationId);
// }

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

// const loader = () => {
//   // test
// };
