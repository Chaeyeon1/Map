import { DEFAULT_URL } from '../constant';
import { UserData } from '../type';

export const getMyHoldings = (userInfo: UserData) => {
  return fetch(`${DEFAULT_URL}/api/Coin/holdings/${userInfo?.id ?? null}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
};
