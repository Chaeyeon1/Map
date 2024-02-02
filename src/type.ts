export type UserData = {
  id: number;
} | null;

export type HoldingData =
  | {
      wap: number;
      app: number;
      mus: number;
      pknu: number;
      pus: number;
      bufs: number;
      total: number;
    }[]
  | null;

export type CoinData = {
  id: number;
  coinName: string;
  prevPrice: number;
  currentPrice: number;
  nextRate: number;
};

export type CoinDatas = CoinData[];

export type CoinList = 'wap' | 'app' | 'mus' | 'pknu' | 'pus' | 'bufs';
export type CoinContextType = {
  coin: CoinData;
  index: number;
};
