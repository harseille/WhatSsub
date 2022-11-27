import { 인터페이스_꿀조합, 인터페이스_샌드위치뱃지리스트 } from '@typings/ISandwich';

const 꿀조합_목록_필터링하기 = (꿀조합리스트: 인터페이스_꿀조합[], filter: 인터페이스_샌드위치뱃지리스트) => {
  const badgeListArr = 꿀조합리스트.map(data => Object.values(data.뱃지리스트).flat());
  const filterList = Object.values(filter).flat();

  // console.log(badgeListArr, filterList);

  const filteredIdxArr = badgeListArr.flatMap((badgeList, idx) => {
    let isIncluded = true;

    filterList.forEach(filterItem => {
      if (!badgeList.includes(filterItem)) isIncluded = false;
    });

    return isIncluded ? idx : [];
  });

  return 꿀조합리스트.filter((_, idx) => filteredIdxArr.includes(idx));
};

export default 꿀조합_목록_필터링하기;
