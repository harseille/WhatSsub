import { atom } from 'recoil';
import { User } from 'firebase/auth';

export default atom<User | null>({
  key: 'user',
  default: null,
});

export const userLike = atom<{ [key: string]: string[] }>({
  key: 'userLike',
  default: {
    likedSandwich: ['S1'],
  },
});
