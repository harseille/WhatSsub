import NotFoundBestCombinationList from '@components/BestCombinationList/NotFoundBestCombinationList';
import SandwichInfoCard from '@components/Common/Cards/SandwichInfoCard';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import 꿀조합_목록_필터링하기 from '@utils/filterBestCombinationList';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 인터페이스_샌드위치뱃지리스트 } from '@typings/ISandwich';

const dummy = [
  {
    이미지: ChickenSlice,
    꿀조합제목: '꿀꿀마앗',
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: {
      맛: ['짭짤'],
      재료: ['소고기'],
      추가사항: [],
    },
  },
  {
    이미지: ChickenSlice,
    꿀조합제목: '치킨치킨야야야',
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '고소'],
      재료: ['돼지고기'],
      추가사항: ['치즈폭탄'],
    },
  },
  {
    이미지: ChickenSlice,
    꿀조합제목: '칰칰',
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '새콤'],
      재료: ['닭고기'],
      추가사항: ['고기러버'],
    },
  },
];

function BestCombinationList({ filter }: { filter: 인터페이스_샌드위치뱃지리스트 }) {
  const 필터링된_꿀조합_목록 = 꿀조합_목록_필터링하기(dummy, filter);

  if (필터링된_꿀조합_목록.length === 0) return <NotFoundBestCombinationList />;

  return (
    <ListWrap>
      {필터링된_꿀조합_목록.map(sandwich => (
        //* key 값 수정 필요
        <SandwichInfoCard key={sandwich.꿀조합제목} sandwich={sandwich} />
      ))}
    </ListWrap>
  );
}

export default BestCombinationList;

const ListWrap = styled.ul`
  width: 100%;
  display: flex;
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
`;
