import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@state/index';
import { Banner, ButtonList } from '@components/Login/index';

function LoginPage() {
  const navigate = useNavigate();
  const isLoggedin = useRecoilValue(isLoggedInState);

  useEffect(() => {
    if (isLoggedin) {
      navigate(-1);
    }
  }, [isLoggedin, navigate]);

  return (
    <div>
      <Banner />
      <ButtonList />
    </div>
  );
}

export default LoginPage;
