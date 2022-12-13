import { atom } from 'recoil';

export default atom<boolean>({
  key: 'isPlaying',
  default: false,
});
