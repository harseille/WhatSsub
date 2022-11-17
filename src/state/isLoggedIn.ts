import { atom } from 'recoil';

export default atom<boolean>({
  key: 'isLoggedIn',
  default: false,
});
