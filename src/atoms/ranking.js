import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const rankingState = atom({
  key: 'ranking',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
