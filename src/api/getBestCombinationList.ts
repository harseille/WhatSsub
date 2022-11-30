import dbGet from '@api/dbGet';
import { collection, orderBy, query } from 'firebase/firestore';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { db } from '../firebase.config';

const getBestCombinationList = async (tabToggle: string) => {
  try {
    const 쿼리스냅샷 = await dbGet(query(collection(db, '꿀조합'), orderBy(tabToggle, 'desc'))); // tabToggle에 따라 내림차순

    const 샌드위치_데이터: 인터페이스_꿀조합[] = [];

    await 쿼리스냅샷.forEach(doc => {
      샌드위치_데이터.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
    });

    return 샌드위치_데이터;
  } catch (e) {
    console.log('실패');
  }
};

export default getBestCombinationList;
