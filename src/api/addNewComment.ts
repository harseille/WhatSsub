import { addDoc, collection } from 'firebase/firestore';
import { 인터페이스_댓글_추가 } from '@typings/IComment';
import { db } from '../firebase.config';

const 새_댓글_추가하기 = async (댓글: 인터페이스_댓글_추가) => {
  try {
    await addDoc(collection(db, '댓글_꿀조합'), {
      bestCombinationId: 댓글.꿀조합id,
      authorId: 댓글.작성자id,
      author: 댓글.작성자이름,
      authorProfileImg: 댓글.작성자프로필이미지,
      content: 댓글.내용,
      createdAt: 댓글.작성일,
    });
  } catch {
    console.log('댓글쓰기 실패');
  }
};

export default 새_댓글_추가하기;
