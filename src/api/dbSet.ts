import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

const dbSet = async (콜랙션: string, 문서: string, 데이터: object) => {
  try {
    return await setDoc(doc(collection(db, 콜랙션), 문서), 데이터);
  } catch {
    console.log('db set 실패');
  }
};

export default dbSet;
