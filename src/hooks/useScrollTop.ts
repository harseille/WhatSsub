import { useState, useEffect } from 'react';

const useScrollTop = () => {
  const [isShowTop, setIsShowTop] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setIsShowTop(true);
      } else {
        setIsShowTop(false);
      }
    };

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
