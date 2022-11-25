import { query, collection, getCountFromServer } from 'firebase/firestore';
import { useState, useCallback, useRef, useEffect } from 'react';
import { db } from '../firebase.config';

const useInfiniteScroll = (callback: Function, dataLength: number, collectionName: string) => {
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getServerDataLength = async () => {
      const querySnapshot = await getCountFromServer(query(collection(db, collectionName)));

      if (dataLength === querySnapshot.data().count) {
        setHasMore(false);
      }
    };
    getServerDataLength();
  }, [dataLength, collectionName]);

  const observer = useRef<IntersectionObserver | null>(null);
  const listRef = useCallback(
    (node: HTMLLIElement) => {
      // if (!observer.current) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        async entries => {
          console.log(entries);
          if (entries[0].isIntersecting) {
            // setIsLoading(true);
            if (hasMore) {
              await callback();
            }
            // setIsLoading(false);
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
  };
};

export default useInfiniteScroll;
