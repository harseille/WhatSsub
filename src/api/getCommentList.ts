import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase.config';
import { 인터페이스_댓글프로퍼티 } from '../types/IComment';

const 댓글_목록_가져오기 = async (꿀조합id: string) => {
  try {
    const 댓글 = collection(db, '댓글');
    const 댓글_꿀조합 = query(댓글, where('꿀조합id', '==', 꿀조합id));
    // const 댓글_꿀조합 = query(댓글, where('꿀조합id', '==', 꿀조합id), orderBy('작성일'));
    const querySnapshot = await getDocs(댓글_꿀조합);

    let 댓글_리스트: 인터페이스_댓글프로퍼티[] = [];
    querySnapshot.forEach(doc => {
      댓글_리스트 = [...댓글_리스트, doc.data() as 인터페이스_댓글프로퍼티];
    });
    console.log(댓글_리스트);

    return 댓글_리스트;
  } catch {
    console.log('댓글읽기 실패');
  }
};

export default 댓글_목록_가져오기;
