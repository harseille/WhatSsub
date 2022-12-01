import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

const getBestCombination = async (꿀조합id: string) => {
  try {
    const 꿀조합_콜랙션 = collection(db, '꿀조합');
    const querySnapshot = await getDoc(doc(꿀조합_콜랙션, 꿀조합id));
    if (querySnapshot.exists()) {
      const 꿀조합 = querySnapshot.data();
      return 꿀조합;
    }
    console.log('꿀조합이 없습니다.!');
  } catch (error) {
    console.error(error);
    console.log('꿀조합 가져오기 실패');
  }
};

export default getBestCombination;
