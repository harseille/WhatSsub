import { 인터페이스_꿀조합, 인터페이스_샌드위치뱃지리스트 } from '@typings/ISandwich';

const 꿀조합_목록_필터링하기 = (꿀조합리스트: 인터페이스_꿀조합[], filter: 인터페이스_샌드위치뱃지리스트) => {
  const 뱃지리스트 = 꿀조합리스트.map(data => Object.values(data.뱃지리스트).flat());
  const 선택한_속성_리스트 = Object.values(filter).flat();

  const 필터링된_속성_인덱스_목록 = 뱃지리스트.flatMap((badgeList, idx) => {
    let 포함된_속성인가 = true;

    선택한_속성_리스트.forEach(선택한_속성 => {
      if (!badgeList.includes(선택한_속성)) 포함된_속성인가 = false;
    });

    return 포함된_속성인가 ? idx : [];
  });

  return 꿀조합리스트.filter((_, idx) => 필터링된_속성_인덱스_목록.includes(idx));
};

export default 꿀조합_목록_필터링하기;
