import 꿀조합속성 from '@data/PickAttribute';
import { 인터페이스_꿀조합선택페이지_필터 } from '@typings/ISandwich';

const 속성카테고리 = Object.fromEntries(꿀조합속성.map(뱃지 => [뱃지.이름, 뱃지.속성목록.map(속성 => 속성.이름)]));

const convertBadge = (뱃지리스트: string[]) => {
  const 꿀조합_뱃지리스트: 인터페이스_꿀조합선택페이지_필터 = { 맛: [], 재료: [], 추가사항: [] };

  뱃지리스트.forEach(뱃지 => {
    if (속성카테고리.맛.includes(뱃지)) {
      꿀조합_뱃지리스트.맛.push(뱃지);
    }

    if (속성카테고리.재료.includes(뱃지)) {
      꿀조합_뱃지리스트.재료.push(뱃지);
    }

    if (속성카테고리.추가사항.includes(뱃지)) {
      꿀조합_뱃지리스트.추가사항.push(뱃지);
    }
  });

  return Object.entries(꿀조합_뱃지리스트);
};

export default convertBadge;
