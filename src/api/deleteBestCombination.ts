import { User } from 'firebase/auth';
import { collection, doc, getDocs, query, runTransaction, where } from 'firebase/firestore';
import { db } from '../firebase.config';

const deleteBestCombination = async (유저: User, 꿀조합id: string) => {
  await runTransaction(db, async transaction => {
    const 삭제할_댓글_꿀조합_쿼리스냅샷 = await getDocs(
      query(collection(db, '댓글_꿀조합'), where('bestCombinationId', '==', 꿀조합id))
    );
    const 업데이트할_좋아요_쿼리스냅샷 = await getDocs(
      query(collection(db, '좋아요'), where('좋아요_리스트', 'array-contains', 꿀조합id))
    );

    삭제할_댓글_꿀조합_쿼리스냅샷.forEach(async 문서 => {
      await transaction.delete(doc(collection(db, '댓글_꿀조합'), 문서.id));
    });

    업데이트할_좋아요_쿼리스냅샷.forEach(async 문서 => {
      const { 좋아요_리스트 } = 문서.data();
      await transaction.update(doc(collection(db, '좋아요'), 유저!.uid), {
        좋아요_리스트: 좋아요_리스트.filter((id: string) => id !== 꿀조합id),
      });
    });
    await transaction.delete(doc(collection(db, '꿀조합'), 꿀조합id));
  });
};

export default deleteBestCombination;
