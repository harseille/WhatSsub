import { useEffect, useState, useMemo, useRef } from 'react';

const useInfiniteScroll = (callback: Function) => {
  const [isLoading, setIsLoading] = useState(true);
  const target = useRef<HTMLUListElement>(null);

  const ENDPOINT = 1;

  const observer = useMemo(
    () =>
      new IntersectionObserver(async ([{ isIntersecting }]) => {
        if (target.current === null) {
          return;
        }
        if (isIntersecting) {
          await callback();
          setIsLoading(false);
        }
      }),
    [target]
  );

  useEffect(() => {
    if (target?.current === null) return;

    const lastTargetChild = target.current.children
      ? target.current.children[target.current.children.length - ENDPOINT]
      : target.current;

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
    isLoading,
  };
};

export default useInfiniteScroll;
