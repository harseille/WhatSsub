import { atom } from 'recoil';

const count = atom<number | undefined>({ key: 'count', default: 0 });

export default count;
