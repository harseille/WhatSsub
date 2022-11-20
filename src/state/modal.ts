import { atom } from 'recoil';

export default atom<boolean | null>({
  key: 'modal',
  default: false,
});
