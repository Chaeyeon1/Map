export type UserData = {
  id: number;
  balance: number;
  name: string;
  crew: string;
  type: string;
  phonenum: string;
  admin: boolean;
} | null;

export type CoinList = 'wap' | 'app' | 'mut' | 'pknu' | 'pus' | 'pufs';

export type HoldingData =
  | {
      wap: number;
      app: number;
      mut: number;
      pknu: number;
      pus: number;
      pufs: number;
    }[];
