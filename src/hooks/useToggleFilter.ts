import { useState } from 'react';

const useToggleFilter = (initFilter: { [key: string]: string[] } = {}) => {
  const [selectedFilter, setSelectedFilter] = useState(initFilter);

  const toggleFilter = (filter: string, name: string, maxNum: number) => {
    const filterArr = selectedFilter[filter];

    if (maxNum === 1 && !filterArr.includes(name)) {
      setSelectedFilter(prevState => ({
        ...prevState,
        [filter]: [name],
      }));
      return;
    }

    if (maxNum === filterArr.length && !filterArr.includes(name)) {
      alert('최대 선택 개수를 초과했습니다.!!!');
      return;
    }

    setSelectedFilter(prevState => {
      const filterArr: string[] = prevState[filter];

      if (filterArr.includes(name))
        return { ...prevState, [filter]: filterArr.filter((item: string) => item !== name) };

      return { ...prevState, [filter]: [...filterArr, name] };
    });
  };

  const initializeFilter = () => {
    setSelectedFilter(initFilter);
  };

  return { selectedFilter, toggleFilter, initializeFilter };
};

export default useToggleFilter;
