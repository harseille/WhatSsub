import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { collection, DocumentData, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { db } from '../firebase.config';
import dbGet from './dbGet';

const getRankingList = async (key: DocumentData | null, condition: string) => {
  try {
    const 꿀조합_쿼리스냅샷 = !key
      ? await dbGet(query(collection(db, '꿀조합'), orderBy(condition, 'desc'), limit(10)))
      : await dbGet(query(collection(db, '꿀조합'), orderBy(condition, 'desc'), startAfter(key), limit(10)));

    const 랭킹리스트: 인터페이스_꿀조합[] = [];
    let 마지막_키: DocumentData | null = null;

    await 꿀조합_쿼리스냅샷.forEach(doc => {
      랭킹리스트.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
      마지막_키 = doc;
    });

    return { 랭킹리스트, 마지막_키 };
  } catch (e) {
    console.log(e);
  }
};

export default getRankingList;
