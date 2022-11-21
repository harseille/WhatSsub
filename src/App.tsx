import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { IsLoggedInState, UserState } from '@state/index';
import router from './router';
import { auth } from './firebase.config';

export default function App() {
  const setIsLoggedIn = useSetRecoilState(IsLoggedInState);
  const setloggedInUser = useSetRecoilState(UserState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setloggedInUser(user);
      } else {
        setIsLoggedIn(false);
        setloggedInUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setIsLoggedIn, setloggedInUser]);

  return <RouterProvider router={router} />;
}
