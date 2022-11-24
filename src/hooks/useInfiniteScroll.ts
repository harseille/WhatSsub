import { useEffect, useState, useMemo, useRef } from 'react';

const useInfiniteScroll = (callback: Function) => {
  const [realTarget, setRealTarget] = useState<HTMLLIElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const target = useRef<HTMLUListElement>(null);
  const ENDPOINT = 1;

  // const observer = useMemo(
  //   () =>
  //     new IntersectionObserver(
  //       async ([{ isIntersecting }]) => {
  //         if (target.current === null) {
  //           return;
  //         }
  //         if (isIntersecting) {
  //           setIsLoading(true);
  //           await callback();
  //           setIsLoading(false);
  //           // observer.disconnect();
  //           // console.log(observer);
  //         }
  //       },
  //       { threshold: 1 }
  //     ),
  //   [target, callback]
  // );

  useEffect(() => {
    const lastTargetChild = target.current!.children[target.current!.children.length - ENDPOINT];

    let observer: IntersectionObserver;

    if (lastTargetChild) {
      observer = new IntersectionObserver(
        async ([{ isIntersecting }]) => {
          if (isIntersecting) {
            setIsLoading(true);
            await callback();
            setIsLoading(false);
          }
        },
        { threshold: 1 }
      );

      observer.observe(lastTargetChild);
    }
    return () => {
      observer && observer.unobserve(lastTargetChild);
    };
  }, [target]);

  return {
    target,
    isLoading,
    // setRealTarget,
  };
};

export default useInfiniteScroll;

//   useEffect(() => {
//     if (realTarget === null) return;

//     const lastTargetChild = target.current!.children[target.current!.children.length - ENDPOINT];

//     //* 불러올 정보 있는 없는지 확인 필요
//     // if (page < 5) {
//     console.log('구독');
//     console.log(lastTargetChild);
//     observer.observe(realTarget);
//     // }

//     return () => {
//       if (target.current !== null && observer) {
//         console.log('연결끊기');
//         observer.unobserve(target.current);
//       }
//     };
//   }, [realTarget]);

//   return {
//     target,
//     isLoading,
//     setRealTarget,
//   };
