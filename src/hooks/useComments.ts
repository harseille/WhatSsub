import { useEffect, useRef, useState, useCallback } from 'react';
import {
  collection,
  query,
  where,
  getCountFromServer,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  onSnapshot,
} from 'firebase/firestore';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import dbGet from '@api/dbGet';
import { 인터페이스_댓글_읽기 } from '@typings/IComment';
import { db } from '../firebase.config';

const useComments = (꿀조합id: string) => {
  const [댓글_개수, 댓글_개수_수정] = useState<number>(0);
  const [댓글_목록, 댓글_목록_수정] = useState<인터페이스_댓글_읽기[]>([]);
  const lastDocument = useRef<DocumentData | null>(null);

  const 댓글_콜랙션 = collection(db, '댓글_꿀조합');
  const 한번에_가져올_댓글_수 = 5;

  const 댓글_쿼리 = {
    댓글_수_가져오기: query(댓글_콜랙션, where('bestCombinationId', '==', 꿀조합id)),
    최신_댓글_가져오기: query(
      댓글_콜랙션,
      where('bestCombinationId', '==', 꿀조합id),
      orderBy('createdAt', 'desc'),
      limit(1)
    ),
    초기_댓글_목록_가져오기: query(
      댓글_콜랙션,
      where('bestCombinationId', '==', 꿀조합id),
      orderBy('createdAt', 'desc'),
      limit(한번에_가져올_댓글_수)
    ),
    스크롤_댓글_목록_가져오기: query(
      댓글_콜랙션,
      where('bestCombinationId', '==', 꿀조합id),
      orderBy('createdAt', 'desc'),
      startAfter(lastDocument.current),
      limit(한번에_가져올_댓글_수)
    ),
  };

  const 댓글_수_가져오기 = useCallback(
    async (꿀조합id: string) => {
      try {
        const querySnapshot = await getCountFromServer(댓글_쿼리.댓글_수_가져오기);
        댓글_개수_수정(querySnapshot.data().count);
      } catch (error) {
        console.error(error);
      }
    },
    [댓글_쿼리.댓글_수_가져오기]
  );

  const 댓글_목록_가져오기 = async (꿀조합id: string) => {
    try {
      const 쿼리스냅샷 = !lastDocument.current
        ? await dbGet(댓글_쿼리.초기_댓글_목록_가져오기)
        : await dbGet(댓글_쿼리.스크롤_댓글_목록_가져오기);

      const 댓글_목록: 인터페이스_댓글_읽기[] = [];

      쿼리스냅샷.forEach(document => {
        댓글_목록.push({ 댓글id: document.id, ...JSON.parse(JSON.stringify(document.data())) });
      });

      lastDocument.current = 쿼리스냅샷.docs[쿼리스냅샷.docs.length - 1] ?? null;
      댓글_목록_수정(prev => [...prev, ...댓글_목록]);
    } catch (error) {
      // 모달이나 alert창으로
      console.error(error);
    }
  };

  const 댓글_목록_변화감지 = useCallback(
    async (꿀조합id: string) => {
      try {
        await onSnapshot(댓글_쿼리.최신_댓글_가져오기, querySnapshot => {
          if (!querySnapshot.empty) {
            const 댓글_목록: 인터페이스_댓글_읽기[] = querySnapshot.docs.map(doc => ({
              댓글id: doc.id,
              ...JSON.parse(JSON.stringify(doc.data())),
            }));
            댓글_수_가져오기(꿀조합id);

            lastDocument.current = querySnapshot.docs[querySnapshot.docs.length - 1];

            댓글_목록_수정(prev => {
              if (prev.length === 0) {
                return 댓글_목록;
              }

              return [...댓글_목록, ...prev];
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    [댓글_수_가져오기, 댓글_쿼리.최신_댓글_가져오기]
  );

  const { listRef } = useInfiniteScroll(
    댓글_목록_가져오기.bind(null, 꿀조합id as string),
    댓글_목록.length,
    댓글_쿼리.댓글_수_가져오기
  );

  useEffect(() => {
    if (!꿀조합id) return;

    댓글_수_가져오기(꿀조합id);
    댓글_목록_변화감지(꿀조합id);
  }, [꿀조합id]);

  return { 댓글_목록, 댓글_개수, 댓글_수_가져오기, listRef };
};

export default useComments;
