import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase.config';

const dbPush = async (콜랙션: string, 데이터: object) => {
  try {
    await addDoc(collection(db, 콜랙션), 데이터);
  } catch {
    console.log('댓글쓰기 실패');
  }
};

export default dbPush;
