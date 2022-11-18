import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import useInfiniteScroll from '@hooks/useInfiniteScroll';
import SandwichInfoCard from '@components/Common/Cards/SandwichInfoCard';
import Button from '@components/UI/Button';
import Wrapper from '@components/UI/Wrapper';
import 꿀조합_목록_필터링하기 from '@utils/filterBestCombinationList';
import styled from '@emotion/styled';
import cryingDanji from '@assets/images/cryingDanji.png';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import { changeRem } from '@styles/mixin';

const dummy = [
  {
    id: 'S1',
    이미지: ChickenSlice,
    이름: '꿀꿀마앗',
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: {
      맛: ['짭짤'],
      재료: ['소고기'],
      추가사항: [],
    },
  },
  {
    id: 'S2',
    이미지: ChickenSlice,
    이름: '치킨치킨야야야',
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '고소'],
      재료: ['돼지고기'],
      추가사항: ['치즈폭탄'],
    },
  },
  {
    id: 'S3',
    이미지: ChickenSlice,
    이름: '칰칰',
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '새콤'],
      재료: ['닭고기'],
      추가사항: ['고기러버'],
    },
  },
];

function BestCombinationListPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const ListUlRef = useRef<HTMLUListElement>(null);
  // const page = useInfiniteScroll(ListUlRef);

  const 필터링된_꿀조합_목록 = 꿀조합_목록_필터링하기(dummy, state);

  const 페이지_뒤로가기 = () => navigate(-1);

  if (필터링된_꿀조합_목록.length === 0) {
    return (
      <Wrapper>
        <Container>
          <Title>꿀조합 찾기 실패</Title>
          <ImgWrap>
            <img src={cryingDanji} alt="cryingDanji" />
          </ImgWrap>
          <Desc>검색하신 샌드위치를 찾을 수 없습니다.</Desc>
          <Desc>꿀 조합을 다시 선택해주세요.</Desc>
          <Button
            onClick={페이지_뒤로가기}
            designType="primaryYellow"
            width={changeRem(330)}
            height={changeRem(50)}
            marginTop="40px">
            다시 찾기
          </Button>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Container>
      <ul ref={ListUlRef}>
        {필터링된_꿀조합_목록.map(sandwich => (
          <SandwichInfoCard key={sandwich.id} sandwich={sandwich} />
        ))}
      </ul>
    </Container>
  );
}

export default BestCombinationListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: #fafafa url(cryingDanji) no-repeat center;
  padding-top: 5vh;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const ImgWrap = styled.div`
  max-width: 250px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.p`
  padding-top: 60px;
  font-weight: 700;
  font-size: 24px;
`;

const Desc = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  color: rgb(65, 65, 65);
`;
