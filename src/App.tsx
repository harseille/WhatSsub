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
      if (user) {
        setIsLoggedIn(true);
        setloggedInUser(user);
      } else {
        setIsLoggedIn(false);
        setloggedInUser(null);
      }
    });
  }, []);

  return <RouterProvider router={router} />;
  // return <MyCombinationCard />;
}
