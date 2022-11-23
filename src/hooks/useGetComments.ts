import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase.config';

const useGetComments = (꿀조합id: string | undefined) => {
  // Todo: any 없애기
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    if (!꿀조합id) return;

    const 댓글_목록_가져오기 = async (꿀조합id: string) => {
      try {
        const 댓글_콜랙션 = collection(db, '댓글');
        const 댓글_꿀조합_쿼리 = query(댓글_콜랙션, where('꿀조합id', '==', 꿀조합id));
        await onSnapshot(댓글_꿀조합_쿼리, querySnapshot => {
          if (!querySnapshot.empty) {
            const 댓글_리스트 = querySnapshot.docs.map(doc => ({
              댓글id: doc.id,
              ...doc.data(),
            }));
            setComments(댓글_리스트);
          }
        });
      } catch (error) {
        console.error(error);
        console.log('댓글읽기 실패');
      }
    };
    댓글_목록_가져오기(꿀조합id);
  }, [꿀조합id]);

  return { comments };
};

export default useGetComments;
