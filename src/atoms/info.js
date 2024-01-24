import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const infoState = atom({
  key: 'info',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
