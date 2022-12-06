import { atom } from 'recoil';

export default atom<string[]>({
  key: 'delete',
  default: [],
});
