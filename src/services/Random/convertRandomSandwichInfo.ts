import { 인터페이스_꿀조합_랜덤_룰렛 } from '@typings/ISandwich';

const convertRandomSandwichInfo = (sandwichData: 인터페이스_꿀조합_랜덤_룰렛) => {
  const { 꿀조합제목, 베이스샌드위치, 빵, 소스, 치즈, 칼로리, 속성, 이미지 } = sandwichData;

  const sandwich = {
    이미지,
    꿀조합제목,
    베이스샌드위치,
    칼로리,
    뱃지리스트: 속성,
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
