import {
  setPersistence,
  browserSessionPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase.config';

interface IAuthProvider {
  [key: string]: typeof GoogleAuthProvider | typeof FacebookAuthProvider;
}

const authProvider: IAuthProvider = {
  facebook: FacebookAuthProvider,
  google: GoogleAuthProvider,
};

const getOAuthProvider = (bender: string) => (e: React.MouseEvent) => {
  e.preventDefault();

  const AuthProvider = authProvider[bender];
  const provider = new AuthProvider();

  setPersistence(auth, browserSessionPersistence).then(() =>
    signInWithPopup(auth, provider)
      .then(result => {
        console.log('로그인 성공');
        console.log(result);

        // TODO: redirect 처리
      })
      .catch(error => {
        alert('로그인 실패했습니다. 다시 시도해주세요');
      })
  );
};

export default getOAuthProvider;
