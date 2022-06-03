import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const bookMarkList = atom({
  key: 'bookMarkList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userId = atom({
  key: 'userId',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const requestNumber = atom<number>({
  key: 'requestNumber',
  default: 5,
});
