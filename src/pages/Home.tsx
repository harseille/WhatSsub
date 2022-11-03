import SandwitchInfo from '@components/SandwitchInfo';
import CombinationIngredientList from '@components/CombinationIngredientList';
import IngredientCardList from '@components/IngredientCardList';
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
    ],
    뱃지리스트: {
      맛: ['달달', '고소'],
      메인재료: '돼지고기',
      추가사항: ['고기러버'],
    },
  },
];

function HomePage() {
  return (
    <>
      <SandwitchInfo
        sandwitch={{
          이미지: data[0].이미지,
          이름: data[0].제목,
          베이스샌드위치: data[0].베이스샌드위치,
          칼로리: data[0].칼로리,
          뱃지리스트: data[0].뱃지리스트,
        }}
      />
      <IngredientCardList
        ingredientList={[
          {
            id: data[0].선택재료[0].id,
            이름: data[0].선택재료[0].이름,
            카테고리: data[0].선택재료[0].카테고리,
            칼로리: data[0].선택재료[0].칼로리,
            재료사진: data[0].선택재료[0].재료사진,
          },
        ]}
      />
      {/* <CombinationIngredientList ingredientList={data[0].선택재료} /> */}
    </>
  );
}

export default HomePage;
