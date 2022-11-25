import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';

const useCheckLogin = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const userInfo = useRecoilValue(userState);

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const navigateLoginPage = () => {
    navigate('/login');
  };

  return { userInfo, isShowModal, toggleModal, navigateLoginPage };
};

export default useCheckLogin;
