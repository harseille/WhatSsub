import { User } from 'firebase/auth';
import { atom } from 'recoil';

export default atom<User | null>({
  key: 'user',
  default: null,
  dangerouslyAllowMutability: true,
});

export const userLike = atom<{ [key: string]: string[] }>({
  key: 'userLike',
  default: {
    likedSandwich: ['S1'],
  },
});
