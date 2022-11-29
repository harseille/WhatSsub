import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userLike } from '@state/User';
import dbUpdate from '@api/dbUpdate';
import { increment } from 'firebase/firestore';
import useCheckLogin from './useCheckLogin';

const useLikedBestCombination = (id: string) => {
  const { userInfo, isShowModal, toggleModal, navigateLoginPage } = useCheckLogin();
  const [좋아요한샌드위치, 좋아요한샌드위치_수정] = useRecoilState<string[]>(userLike);
  const isLiked = 좋아요한샌드위치.includes(id);

  useEffect(() => {
    if (userInfo) dbUpdate('좋아요', userInfo.uid, { 좋아요_리스트: 좋아요한샌드위치 });
  }, [userInfo, 좋아요한샌드위치]);

  const 클릭핸들러_좋아요_토글 = () => {
    if (!userInfo) {
      toggleModal();
      return;
    }

    if (좋아요한샌드위치.includes(id)) dbUpdate('꿀조합', id, { 좋아요: increment(-1) });
    else dbUpdate('꿀조합', id, { 좋아요: increment(1) });

    좋아요한샌드위치_수정(prevData => {
      if (!prevData.includes(id)) return [...prevData, id];
      return prevData.filter(likedId => likedId !== id);
    });
  };

  return { isShowModal, toggleModal, navigateLoginPage, isLiked, 클릭핸들러_좋아요_토글 };
};

export default useLikedBestCombination;