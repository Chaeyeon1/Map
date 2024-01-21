import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const coinState = atom({
  key: 'coin',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
