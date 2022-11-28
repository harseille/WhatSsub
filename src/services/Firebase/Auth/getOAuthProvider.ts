import {
  setPersistence,
  browserSessionPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  UserCredential,
} from 'firebase/auth';
import { dbSet } from '@api/index';
import { collection, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase.config';

interface IAuthProvider {
  [key: string]: typeof GoogleAuthProvider | typeof FacebookAuthProvider;
}

const authProvider: IAuthProvider = {
  facebook: FacebookAuthProvider,
  google: GoogleAuthProvider,
};

const getOAuthProvider = (bender: string) => async (e: React.MouseEvent) => {
  e.preventDefault();

  const AuthProvider = authProvider[bender];
  const provider = new AuthProvider();

  const getUserLike = async (result: UserCredential) => {
    const { uid } = result.user;

    const userLike = await getDoc(doc(collection(db, '좋아요'), uid));
    if (!userLike.exists()) {
      await dbSet('좋아요', uid, { 좋아요_리스트: [] });
    }
  };

  try {
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    getUserLike(result);
  } catch (error) {
    console.error(error);
    alert('로그인 실패했습니다. 다시 시도해주세요');
  }
};

export default getOAuthProvider;
