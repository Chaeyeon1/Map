/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { CoinContextType, CoinDatas } from '../type';
import Coins from './CardList/Coins';
import { useRecoilState } from 'recoil';
import { idState } from '../atoms/info';
import {
  useGetCoinQuery,
  useGetHoldingQuery,
  useGetRankingQuery,
  useGetTimeQuery,
  useGetUserInfoQuery,
} from '../api/coin-api';
import { TimeType } from './Admin/ChangeTime';

export const CardContext = createContext<CoinContextType>({
  coin: { id: 0, coinName: '', prevPrice: 0, currentPrice: 0, nextRate: 0 },
  index: 0,
});

const CardList = () => {
  const [coins, setCoins] = useState<CoinDatas>([]);
  const [id] = useRecoilState(idState);
  const { refetch: userInfoRefetch } = useGetUserInfoQuery({
    params: { id },
  });
  const { data: coinData, refetch: coinRefetch } = useGetCoinQuery();
  const { data } = useGetTimeQuery();
  const { refetch: holdingRefetch } = useGetHoldingQuery({ params: { id } });
  const { refetch: rankingRefetch } = useGetRankingQuery();
  const [times, setTimes] = useState<TimeType[]>([]);

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

    console.log(currentTimeElement);
    console.log(times?.[0]?.timeElement);
    console.log(matchingTime);

    if (matchingTime) {
      coinRefetch();
      userInfoRefetch();
      holdingRefetch();
      rankingRefetch();
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
    setTimes(data ?? []);
  }, [coinData, data]);

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
