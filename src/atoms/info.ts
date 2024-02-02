import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { CoinDatas, HoldingData, UserData } from '../type';
import { TimeType } from '../components/Admin/ChangeTime';

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

export const rankingState = atom<number[]>({
  key: 'rankingData',
  default: [],
});

export const coinState = atom<CoinDatas>({
  key: 'coinData',
  default: [],
});

export const timeState = atom<TimeType[]>({
  key: 'time',
  default: [],
});
