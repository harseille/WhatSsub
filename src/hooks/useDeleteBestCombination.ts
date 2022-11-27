import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import { User } from 'firebase/auth';
import deleteBestCombination from '@api/deleteBestCombination';

const useDeleteBestCombination = (꿀조합id: string) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const 유저 = useRecoilValue<User | null>(userState);
  const navigate = useNavigate();

  const 모달_토글하기 = () => {
    setIsShowModal(prev => !prev);
  };
  const 꿀조합_삭제하기 = async () => {
    try {
      await deleteBestCombination(유저!, 꿀조합id);
      navigate(-1);
    } catch (error) {
      console.error('꿀조합 삭제 Transaction 커밋 실패', error);
    }
  };

  return { 모달_토글하기, 꿀조합_삭제하기, isShowModal, 유저 };
};

export default useDeleteBestCombination;
