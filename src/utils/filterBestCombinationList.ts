import { 샌드위치, 샌드위치뱃지리스트 } from '@components/Common/Cards/SandwichInfoCard';

const 꿀조합_목록_필터링하기 = (꿀조합리스트: 샌드위치[], filter: 샌드위치뱃지리스트) => {
  const badgeListArr = 꿀조합리스트.map(data => Object.values(data.뱃지리스트).flat());
  const filterList = Object.values(filter).flat();

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
