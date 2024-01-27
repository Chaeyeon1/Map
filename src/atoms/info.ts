import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { HoldingData, UserData } from '../type';

const { persistAtom } = recoilPersist();

export const userInfoState = atom<UserData>({
  key: 'userInfo',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const holdingsState = atom<HoldingData>({
  key: 'holdingData',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
