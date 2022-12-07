import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, userState } from '@state/index';
import { userLike } from '@state/User';
import { collection, doc, getDoc } from 'firebase/firestore';
import Router from './router';
import { auth, db } from './firebase.config';

export default function App() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setloggedInUser = useSetRecoilState(userState);
  const setUserLikeUser = useSetRecoilState(userLike);

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      const _user = JSON.parse(JSON.stringify(user));
      if (user) {
        setIsLoggedIn(true);
        setloggedInUser(_user);
        const 좋아요_리스트 = await getDoc(doc(collection(db, '좋아요'), _user.uid));
        setUserLikeUser(좋아요_리스트.data()!.좋아요_리스트);
      } else {
        setIsLoggedIn(false);
        setloggedInUser(null);
        setUserLikeUser([]);
      }
    });
  }, [setIsLoggedIn, setloggedInUser, setUserLikeUser]);

  return <Router />;
}
