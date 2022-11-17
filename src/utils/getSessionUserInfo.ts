import { firebaseConfig } from '../firebase.config';

const getSessionUserInfo = () => {
  const sessionUser = window.sessionStorage.getItem(`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`);

  return sessionUser ? JSON.parse(sessionUser) : null;
};

export default getSessionUserInfo;
