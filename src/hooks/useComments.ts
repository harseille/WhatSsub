import { useEffect, useState, useCallback } from 'react';
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
import dbGet from '@api/dbGet';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { 인터페이스_댓글_읽기 } from '@typings/IComment';
import { db } from '../firebase.config';

const useComments = (꿀조합id: string) => {
  const [commentsCount, setCommentsCount] = useState<number>(0);
  // Todo: any 없애기
  const [comments, setComments] = useState<any[]>([]);
  const [doc, setDoc] = useState<DocumentData | null>(null);

  const 댓글_콜랙션 = collection(db, '댓글_꿀조합');
  const 한번에_가져올_댓글_수 = 5;

  const 댓글_쿼리 = {
    댓글_수_가져오기: query(댓글_콜랙션, where('bestCombinationId', '==', 꿀조합id), orderBy('createdAt', 'desc')),
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
      startAfter(doc),
      limit(한번에_가져올_댓글_수)
    ),
  };

  const 댓글_수_가져오기 = useCallback(
    async (꿀조합id: string) => {
      try {
        const querySnapshot = await getCountFromServer(댓글_쿼리.댓글_수_가져오기);
        setCommentsCount(querySnapshot.data().count);
      } catch (error) {
        console.error(error);
        console.log('댓글 수 가져오기 실패');
      }
    },
    [댓글_쿼리.댓글_수_가져오기]
  );

  const 댓글_목록_가져오기 = async (꿀조합id: string) => {
    try {
      const 쿼리스냅샷 = !doc
        ? await dbGet(댓글_쿼리.초기_댓글_목록_가져오기)
        : await dbGet(댓글_쿼리.스크롤_댓글_목록_가져오기);

      const 댓글_목록: 인터페이스_댓글_읽기[] = [];

      await 쿼리스냅샷.forEach(document => {
        댓글_목록.push({ 댓글id: document.id, ...JSON.parse(JSON.stringify(document.data())) });
        setDoc(document);
      });

      setComments(prev => [...prev, ...댓글_목록]);
    } catch (error) {
      console.error(error);
      console.log('댓글읽기 실패');
    }
  };

  const { listRef } = useInfiniteScroll(
    댓글_목록_가져오기.bind(null, 꿀조합id),
    comments.length,
    댓글_쿼리.댓글_수_가져오기
  );

  useEffect(() => {
    if (!꿀조합id) return;

    const 댓글_목록_변화감지 = async (꿀조합id: string) => {
      try {
        await onSnapshot(댓글_쿼리.초기_댓글_목록_가져오기, querySnapshot => {
          if (!querySnapshot.empty) {
            const 댓글_목록 = querySnapshot.docs.map(doc => {
              setDoc(doc);
              return {
                댓글id: doc.id,
                ...doc.data(),
              };
            });
            setComments(댓글_목록);
          }
        });
      } catch (error) {
        console.error(error);
        console.log('댓글읽기 실패');
      }
    };

    댓글_목록_변화감지(꿀조합id);
    댓글_수_가져오기(꿀조합id);
  }, [꿀조합id]);

  return { comments, commentsCount, listRef };
};

export default useComments;
