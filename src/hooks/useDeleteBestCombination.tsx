import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import { collection, doc, getDocs, query, runTransaction, where } from 'firebase/firestore';
import { db } from '../firebase.config';

const useDeleteBestCombination = (꿀조합id: string) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const 유저 = useRecoilValue(userState);
  const navigate = useNavigate();

  const 모달_토글하기 = () => {
    setIsShowModal(prev => !prev);
  };

  const 꿀조합_삭제하기 = async () => {
    try {
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
      }).then(() => {
        console.log('댓글 삭제 Transaction 커밋 성공!');
        navigate(-1);
      });
    } catch (error) {
      console.error('꿀조합 삭제 Transaction 커밋 실패', error);
    }
  };

  return { 모달_토글하기, 꿀조합_삭제하기, isShowModal, 유저 };
};

export default useDeleteBestCombination;
