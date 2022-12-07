import { useState, useCallback } from 'react';

const useToggleFilter = (initFilter: { [key: string]: string[] }) => {
  const [selectedFilter, setSelectedFilter] = useState(initFilter);
  const [overSelectedFilter, setOverSelectedFilter] = useState<string>('');

  const toggleFilter = useCallback(
    (filter: string, name: string, maxNum: number) => {
      const filterArr = selectedFilter[filter];

      if (maxNum === 1 && !filterArr.includes(name)) {
        setSelectedFilter(prevState => ({
          ...prevState,
          [filter]: [name],
        }));
        setOverSelectedFilter('');
        return;
      }

      if (maxNum === filterArr.length && !filterArr.includes(name)) {
        setOverSelectedFilter(filter);
        return;
      }

      setSelectedFilter(prevState => {
        const filterArr: string[] = prevState[filter];

        if (filterArr.includes(name)) {
          return { ...prevState, [filter]: filterArr.filter((item: string) => item !== name) };
        }

        return { ...prevState, [filter]: [...filterArr, name] };
      });
      setOverSelectedFilter('');
    },
    [selectedFilter]
  );

  const initializeFilter = useCallback(() => {
    setSelectedFilter(initFilter);
    setOverSelectedFilter('');
  }, [initFilter]);

  return { selectedFilter, overSelectedFilter, toggleFilter, initializeFilter };
};

export default useToggleFilter;
