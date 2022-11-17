import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
// import MyCombinationCard from '@components/UI/MyCombinationCard';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, userState } from '@state/index';
import router from './router';
import { auth } from './firebase.config';

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  // const [loggedInUser, setloggedInUser] = useRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setloggedInUser = useSetRecoilState(userState);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      // ! recoil에서 immutable한 user를 업데이트 할 수 없음으로 임시 복사본을 atom으로 설정
      const _user = JSON.parse(JSON.stringify(user));
      if (user) {
        setIsLoggedIn(true);
        setloggedInUser(_user);
      } else {
        setIsLoggedIn(false);
        setloggedInUser(null);
      }
    });
  }, [setIsLoggedIn, setloggedInUser]);

  return <RouterProvider router={router} />;
  // return <MyCombinationCard />;
}
