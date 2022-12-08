import { useState, useEffect, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { userLike } from '@state/User';
import { increment } from 'firebase/firestore';
import dbUpdate from '@api/dbUpdate';
import useCheckLogin from './useCheckLogin';

const useLikedBestCombination = (id: string) => {
  const { userInfo, isShowModal, toggleModal, navigateLoginPage } = useCheckLogin();
  const [좋아요한샌드위치, 좋아요한샌드위치_수정] = useRecoilState<string[]>(userLike);
  const [좋아요_개수, 좋아요_개수_수정] = useState<number>(0);
  const 좋아요한_샌드위치인가 = 좋아요한샌드위치.includes(id);

  useEffect(() => {
    if (userInfo) dbUpdate('좋아요', userInfo.uid, { 좋아요_리스트: 좋아요한샌드위치 });
  }, [userInfo, 좋아요한샌드위치, 좋아요_개수]);

  const 클릭핸들러_좋아요_토글 = async (status: string, e: MouseEvent): Promise<number | undefined> => {
    if (!userInfo) {
      toggleModal();
      return;
    }

    // if (좋아요한샌드위치.includes(id)) {
    //   await dbUpdate('꿀조합', id, { 좋아요: increment(-1) });
    //   좋아요_개수_수정(prev => prev - 1);
    // } else {
    //   await dbUpdate('꿀조합', id, { 좋아요: increment(1) });
    //   좋아요_개수_수정(prev => prev + 1);
    // }

    // if (status !== 'pending') {
    //   좋아요한샌드위치_수정(prevData => {
    //     if (!prevData.includes(id)) return [...prevData, id];
    //     return prevData.filter(likedId => likedId !== id);
    //   });
    // }
    const delta = 좋아요한_샌드위치인가 ? -1 : 1;
    await dbUpdate('꿀조합', id, { 좋아요: increment(delta) });
    좋아요_개수_수정(prev => prev + delta);

    if (status !== 'pending')
      좋아요한샌드위치_수정(prev => (delta === 1 ? [...prev, id] : prev.filter(likeId => likeId !== id)));

    return delta;
  };

  return {
    isShowModal,
    toggleModal,
    navigateLoginPage,
    좋아요한_샌드위치인가,
    클릭핸들러_좋아요_토글,
    좋아요_개수,
    좋아요_개수_수정,
    좋아요한샌드위치,
    좋아요한샌드위치_수정,
  };
};

export default useLikedBestCombination;
