import { ref, push } from 'firebase/database';
import { db } from '../firebase.config';
import { 인터페이스_댓글프로퍼티 } from '../types/IComment';

const 새_댓글_추가 = (댓글: 인터페이스_댓글프로퍼티) => {
  push(ref(db, '댓글/'), {
    꿀조합id: 댓글.꿀조합id,
    작성자id: 댓글.작성자id,
    작성자이름: 댓글.작성자이름,
    작성자프로필이미지: 댓글.작성자프로필이미지,
    내용: 댓글.내용,
    작성일: 댓글.작성일,
  });
};

export default 새_댓글_추가;
