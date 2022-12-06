import { updateDoc, collection, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

const dbUpdate = async (콜랙션: string, 문서: string, 데이터: object) => {
  try {
    return await updateDoc(doc(collection(db, 콜랙션), 문서), 데이터);
  } catch (e) {
    console.log('db update 실패');
  }
};

export default dbUpdate;
