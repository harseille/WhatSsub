import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, userState } from '@state/index';
import { userLike } from '@state/User';
// import dbGet from '@api/dbGet';
import { collection, doc, getDoc } from 'firebase/firestore';
import router from './router';
import { auth, db } from './firebase.config';

export default function App() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setloggedInUser = useSetRecoilState(userState);
  const setUserLikeUser = useSetRecoilState(userLike);

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      // ! recoil에서 immutable한 user를 업데이트 할 수 없음으로 임시 복사본을 atom으로 설정
      const _user = JSON.parse(JSON.stringify(user));
      if (user) {
        setIsLoggedIn(true);
        await setloggedInUser(_user);
        const 좋아요_리스트 = await getDoc(doc(collection(db, '좋아요'), _user.uid));
        setUserLikeUser(좋아요_리스트.data()!.좋아요_리스트);
      } else {
        setIsLoggedIn(false);
        setloggedInUser(null);
        setUserLikeUser([]);
      }
    });
  }, [setIsLoggedIn, setloggedInUser, setUserLikeUser]);

  return <RouterProvider router={router} />;
}
