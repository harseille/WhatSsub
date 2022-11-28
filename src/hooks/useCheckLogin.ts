import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';

const useCheckLogin = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const userInfo = useRecoilValue(userState);

  const toggleModal = useCallback(() => setIsShowModal(prev => !prev), []);

  const navigateLoginPage = useCallback(() => navigate('/login'), [navigate]);

  return { userInfo, isShowModal, toggleModal, navigateLoginPage };
};

export default useCheckLogin;
