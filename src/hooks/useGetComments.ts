import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
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
        const querySnapshot = await getDocs(댓글_꿀조합_쿼리);
        if (!querySnapshot.empty) {
          querySnapshot.forEach(doc => {
            setComments(prev => [...prev, { [doc.id]: doc.data() }]);
          });
        }
      } catch {
        console.log('댓글읽기 실패');
      }
    };
    댓글_목록_가져오기(꿀조합id);
  }, [꿀조합id]);

  return { comments };
};

export default useGetComments;
