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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const 좋아요한_샌드위치인가 = 좋아요한샌드위치.includes(id);

  useEffect(() => {
    if (userInfo) dbUpdate('좋아요', userInfo.uid, { 좋아요_리스트: 좋아요한샌드위치 });
    console.log('likeCount', 좋아요_개수);
    console.log(좋아요한샌드위치);
    setIsPlaying(false);
  }, [userInfo, 좋아요한샌드위치, 좋아요_개수]);

  const 클릭핸들러_좋아요_토글 = async (status: string, e: MouseEvent) => {
    e.preventDefault();

    // if (isPlaying) {
    //   console.log('기다려!!!!!!!!');
    //   return;
    // }

    if (!userInfo) {
      toggleModal();
      return;
    }

    setIsPlaying(true);
    if (좋아요한샌드위치.includes(id)) {
      await dbUpdate('꿀조합', id, { 좋아요: increment(-1) });
      좋아요_개수_수정(prev => prev - 1);
    } else {
      await dbUpdate('꿀조합', id, { 좋아요: increment(1) });
      좋아요_개수_수정(prev => prev + 1);
    }

    if (status !== 'pending') {
      console.log('실행');
      좋아요한샌드위치_수정(prevData => {
        if (!prevData.includes(id)) return [...prevData, id];
        return prevData.filter(likedId => likedId !== id);
      });
    }
    // await runTransaction(db, async transaction => {
    // setIsPlaying(true);
    // if (좋아요한샌드위치.includes(id)) {
    //   await transaction.update('꿀조합', id, { 좋아요: increment(-1) });
    //   setLikeCount(prev => prev - 1);
    // } else {
    //   await dbUpdate('꿀조합', id, { 좋아요: increment(1) });
    //   setLikeCount(prev => prev + 1);
    // }

    // if (status !== 'pending') {
    //   console.log('실행');
    //   좋아요한샌드위치_수정(prevData => {
    //     if (!prevData.includes(id)) return [...prevData, id];
    //     return prevData.filter(likedId => likedId !== id);
    //   });
    // }
    // })
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
