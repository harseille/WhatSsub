import { atom } from 'recoil';

export default atom<boolean>({
  key: 'isAddComment',
  default: false,
});
