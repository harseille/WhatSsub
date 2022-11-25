import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { dbDelete } from '@api/index';
import { userState } from '@state/index';

const useDeleteBestCombination = (꿀조합id: string) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const 유저 = useRecoilValue(userState);
  const navigate = useNavigate();

  const 모달_토글하기 = () => {
    setIsShowModal(prev => !prev);
  };

  const 꿀조합_삭제하기 = () => {
    try {
      dbDelete('꿀조합', 꿀조합id).then(() => {
        navigate(-1);
      });
    } catch {
      console.error('꿀조합 삭제하기 실패');
    }
  };

  return { 모달_토글하기, 꿀조합_삭제하기, isShowModal, 유저 };
};

export default useDeleteBestCombination;
