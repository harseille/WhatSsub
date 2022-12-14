import { useState, useCallback, useRef, useEffect } from 'react';
import { query, getCountFromServer, Query, DocumentData } from 'firebase/firestore';

const useInfiniteScroll = (callback: Function, dataLength: number, dbCountQuery: Query<DocumentData>) => {
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getServerDataLength = async () => {
      const querySnapshot = await getCountFromServer(query(dbCountQuery));
      if (dataLength !== querySnapshot.data().count) {
        setHasMore(true);
      }
      if (dataLength >= querySnapshot.data().count) {
        setHasMore(false);
      }
    };
    getServerDataLength();
  }, [dataLength, dbCountQuery]);

  const observer = useRef<IntersectionObserver | null>(null);
  const listRef = useCallback(
    (node: HTMLLIElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        async entries => {
          if (entries[0].isIntersecting) {
            if (hasMore) {
              await callback();
              setIsLoading(false);
            }
          }
        },
        {
          threshold: 1,
        }
      );
      if (node) observer.current.observe(node);
      if (!hasMore) observer.current!.disconnect();
    },
    [callback, hasMore]
  );

  return {
    listRef,
    isLoading,
    hasMore,
  };
};

export default useInfiniteScroll;
