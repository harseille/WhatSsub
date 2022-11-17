import { User } from 'firebase/auth';
import { atom } from 'recoil';

export default atom<User | null>({
  key: 'user',
  default: null,
});
