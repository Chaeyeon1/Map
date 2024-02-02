import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const idState = atom<number | undefined>({
  key: 'userInfo',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

// export const holdingsState = atom<HoldingData>({
//   key: 'holdingData',
//   default: [],
//   effects_UNSTABLE: [persistAtom],
// });

// export const rankingState = atom<number[]>({
//   key: 'rankingData',
//   default: [],
// });

// export const coinState = atom<CoinDatas>({
//   key: 'coinData',
//   default: [],
// });

// export const timeState = atom<TimeType[]>({
//   key: 'time',
//   default: [],
// });
