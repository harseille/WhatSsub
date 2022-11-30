import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'WhatSsubIsLoggedin',
  storage: sessionStorage,
});

export default atom<boolean>({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
