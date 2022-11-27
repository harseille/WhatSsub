import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase.config';

const dbPush = async (콜랙션: string, 데이터: object) => {
  try {
    return await addDoc(collection(db, 콜랙션), 데이터);
  } catch {
    console.log('데이터 불러오기 실패');
  }
};

export default dbPush;
