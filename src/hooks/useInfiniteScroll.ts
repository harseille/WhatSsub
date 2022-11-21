import { useEffect, useState, useMemo, useRef } from 'react';

const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const target = useRef<HTMLUListElement>(null);

  const ENDPOINT = 1;

  const observer = useMemo(
    () =>
      new IntersectionObserver(([{ isIntersecting }]) => {
        if (target.current === null) {
          return;
        }
        if (isIntersecting) {
          setPage(cur => cur + 1);
        }
      }),
    [target]
  );

  useEffect(() => {
    if (target?.current === null) return;

    const lastTargetChild = target.current.children[target.current.children.length - ENDPOINT];

    console.log(page);
    //* 불러올 정보 있는 없는지 확인 필요
    // if (page < 5) {
    console.log('구독');
    observer.observe(lastTargetChild);
    // }

    return () => {
      if (target.current !== null && observer) {
        console.log('연결끊기');
        observer.unobserve(target.current);
      }
    };
  }, [target, observer]);

  return {
    target,
    page,
    setPage,
  };
};

export default useInfiniteScroll;
