import { atom } from 'recoil';

export const requestNumber = atom<number>({
  key: 'requestNumber',
  default: 5,
});
