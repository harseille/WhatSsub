import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useScrollTop = () => {
  const [isShowTop, setIsShowTop] = useState(false);

  useEffect(() => {
    const handleShowButton = debounce(() => {
      if (window.scrollY > 300) {
        setIsShowTop(true);
      } else {
        setIsShowTop(false);
      }
    }, 100);

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { isShowTop, scrollToTop };
};

export default useScrollTop;
