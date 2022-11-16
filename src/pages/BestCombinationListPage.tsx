import { useLocation } from 'react-router-dom';
import SandwichInfoCard from '@components/UI/Cards/SandwichInfoCard';
import styled from '@emotion/styled';
import cryingDanji from '@assets/images/cryingDanji.png';
import Button from '@components/UI/Button/Button';
import Wrapper from '@components/UI/Wrapper';
import { changeRem } from '@styles/mixin';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import filterBestCombinationList from '@utils/filterBestCombiList';

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

  const 꿀조합리스트 = filterBestCombinationList(dummy, state);

  if (false) {
    return (
      <Wrapper>
        <Container>
          <Title>꿀조합 찾기 실패</Title>
          <ImgWrap>
            <img src={cryingDanji} alt="cryingDanji" />
          </ImgWrap>
          <Desc>검색하신 샌드위치를 찾을 수 없습니다.</Desc>
          <Desc>꿀 조합을 다시 선택해주세요.</Desc>
          <Button designType="primaryYellow" width={changeRem(330)} height={changeRem(50)} marginTop="40px">
            다시 찾기
          </Button>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Container>
      <ul>
        <SandwichInfoCard />
        <SandwichInfoCard />
        <SandwichInfoCard />
      </ul>
    </Container>
  );
}

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

export default BestCombinationListPage;
