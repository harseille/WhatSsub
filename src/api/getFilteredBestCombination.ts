import { collection, orderBy, query, DocumentData } from 'firebase/firestore';
import dbGet from '@api/dbGet';
import 꿀조합_목록_필터링하기 from '@services/BestCombinationList/filterBestCombinationList';
import { 인터페이스_꿀조합, 인터페이스_샌드위치뱃지리스트 } from '@typings/ISandwich';
import { db } from '../firebase.config';

const getFilteredBestCombination = async (
  꿀조합_목록_수정: React.Dispatch<React.SetStateAction<인터페이스_꿀조합[] | null>>,
  filterState: 인터페이스_샌드위치뱃지리스트
) => {
  const 꿀조합_컬렉션 = collection(db, '꿀조합');
  const 꿀조합쿼리 = query(꿀조합_컬렉션, orderBy('좋아요', 'desc'));

  const 쿼리스냅샷 = await dbGet(꿀조합쿼리);

  const convertBCList: 인터페이스_꿀조합[] = [];
  쿼리스냅샷.forEach((doc: DocumentData) => {
    convertBCList.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const 필터링된_꿀조합 = 꿀조합_목록_필터링하기(convertBCList, filterState);

  꿀조합_목록_수정(필터링된_꿀조합);
};

export default getFilteredBestCombination;
