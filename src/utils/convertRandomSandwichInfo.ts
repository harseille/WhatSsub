import { 인터페이스_꿀조합_랜덤2 } from '../types/ISandwich';

const convertRandomSandwichInfo = (sandwichData: 인터페이스_꿀조합_랜덤2) => {
  const { 이름, 베이스샌드위치, 빵, 치즈, 소스, 칼로리, 속성, 이미지, id } = sandwichData;

  const sandwich = {
    id,
    이미지,
    이름,
    베이스샌드위치,
    칼로리,
    뱃지리스트: { 맛: 속성, 재료: [], 추가사항: [] },
  };

  const ingredientInfo = [
    {
      id: 'a1',
      카테고리: '빵',
      이름: 빵,
      칼로리: '265',
      추가재료여부: true,
    },
    {
      id: 'a2',
      카테고리: '치즈',
      이름: 치즈,
      칼로리: '265',
      추가재료여부: true,
    },
    {
      id: 'a3',
      카테고리: '소스',
      이름: ['핫칠리', '머스타드', '소금'],
      칼로리: '265',
      추가재료여부: true,
    },
  ];

  return { sandwich, ingredientInfo };
};

export default convertRandomSandwichInfo;
