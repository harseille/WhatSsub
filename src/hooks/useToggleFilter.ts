import { useState } from 'react';

const useToggleFilter = (initFilter: { [key: string]: string[] } = {}) => {
  const [isShowModal, setIsShowModal] = useState(false);
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
      setIsShowModal(true);
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

  const closeModal = () => {
    setIsShowModal(false);
  };

  return { isShowModal, closeModal, selectedFilter, toggleFilter, initializeFilter };
};

export default useToggleFilter;
