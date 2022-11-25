import { collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

const dbDelete = async (콜랙션: string, 문서: string) => {
  try {
    return await deleteDoc(doc(collection(db, 콜랙션), 문서));
  } catch {
    console.log('db delete 실패');
  }
};

export default dbDelete;
