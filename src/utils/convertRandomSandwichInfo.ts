import { 인터페이스_꿀조합_랜덤 } from '../types/ISandwich';

const convertRandomSandwichInfo = (sandwichData: 인터페이스_꿀조합_랜덤) => {
  const { 이름, 베이스샌드위치, 빵, 치즈, 소스, 칼로리, 뱃지리스트, 이미지, id } = sandwichData;

  const sandwich = {
    id,
    이미지,
    이름,
    베이스샌드위치,
    칼로리,
    뱃지리스트: { 맛: 뱃지리스트, 재료: [], 추가사항: [] },
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
      이름: 소스,
      칼로리: '265',
      추가재료여부: true,
    },
  ];

  return { sandwich, ingredientInfo };
};

export default convertRandomSandwichInfo;
