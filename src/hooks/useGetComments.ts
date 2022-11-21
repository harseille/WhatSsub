import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { commentsState } from '@state/index';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import { 인터페이스_댓글 } from '../types/IComment';

const useGetComments = (꿀조합id: string | undefined) => {
  // Todo: any 없애기
  const [comments, setComments] = useRecoilState<인터페이스_댓글[]>(commentsState);

  useEffect(() => {
    if (!꿀조합id) return;

    const 댓글_목록_가져오기 = async (꿀조합id: string) => {
      try {
        const 댓글 = collection(db, '댓글');
        const 댓글_꿀조합 = query(댓글, where('꿀조합id', '==', 꿀조합id));
        const querySnapshot = await getDocs(댓글_꿀조합);
        querySnapshot.forEach(doc => {
          setComments(prev => [...prev, { [doc.id]: doc.data() }]);
        });
      } catch {
        console.log('댓글읽기 실패');
      }
    };
    댓글_목록_가져오기(꿀조합id);
  }, [꿀조합id]);

  return { comments };
};

export default useGetComments;
