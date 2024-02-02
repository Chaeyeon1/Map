/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap } from '@chakra-ui/react';
import { createContext, useEffect } from 'react';
import { CoinContextType } from '../type';
import Coins from './CardList/Coins';
import { useRecoilState } from 'recoil';
import {
  coinState,
  holdingsState,
  timeState,
  userInfoState,
} from '../atoms/info';
import {
  useGetCoinQuery,
  useGetHoldingQuery,
  useGetTimeQuery,
} from '../api/coin-api';
import { DEFAULT_URL } from '../constant';

export const CardContext = createContext<CoinContextType>({
  coin: { id: 0, coinName: '', prevPrice: 0, currentPrice: 0, nextRate: 0 },
  index: 0,
});

const CardList = () => {
  const [coins, setCoins] = useRecoilState(coinState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data: coinData, refetch } = useGetCoinQuery();
  const { data: holdingData, refetch: holdingRefetch } = useGetHoldingQuery({
    params: { id: userInfo?.id },
  });
  const { data } = useGetTimeQuery({
    params: { id: userInfo?.id },
  });
  const [times, setTimes] = useRecoilState(timeState);
  const [, setMyHoldings] = useRecoilState(holdingsState);

  const login = () => {
    const body = {
      userId: userInfo?.name,
      password: userInfo?.phonenum,
    };

    fetch(`${DEFAULT_URL}/api/Coin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: any) => {
        localStorage.setItem('WAM_Localstorage', JSON.stringify(data));
        setUserInfo(
          localStorage?.getItem('WAM_Localstorage')
            ? JSON.parse(localStorage?.getItem('WAM_Localstorage') ?? '')
            : null
        );
      });
  };

  function getCurrentTimeElement(): string {
    const now = new Date();
    const minutes = now.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = now.getSeconds();
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const currentTimeElement = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}T${now.getHours()}:${formattedMinutes}:${formattedSeconds}`;

    return currentTimeElement;
  }

  function callApiIfNeeded(): void {
    const currentTimeElement = getCurrentTimeElement();

    const matchingTime = times?.find(
      (time) => time.timeElement?.slice(11) === currentTimeElement.slice(9)
    );

    if (matchingTime) {
      refetch();
      holdingRefetch();
      login();
    }
  }

  setTimeout(() => {
    const now = new Date();
    if (now.getSeconds() === 0) {
      callApiIfNeeded();
    }
  }, 60000 - (Date.now() % 60000));

  useEffect(() => {
    setCoins(coinData);
    setMyHoldings(holdingData ?? []);
    setTimes(data ?? []);
  }, [coinData, holdingData, data]);

  return (
    <Wrap gap={10} justify='center'>
      {coins?.map((coin) => {
        return (
          <CardContext.Provider
            key={coin?.id}
            value={{ coin, index: coin?.id }}
          >
            <Coins />
          </CardContext.Provider>
        );
      })}
    </Wrap>
  );
};

export default CardList;
