/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap } from '@chakra-ui/react';
import { createContext, useEffect } from 'react';
import { DEFAULT_URL } from '../constant';
import { CoinContextType } from '../type';
import Coins from './CardList/Coins';
import { useRecoilState } from 'recoil';
import { coinState } from '../atoms/info';

export const CardContext = createContext<CoinContextType>({
  coin: { id: 0, coinName: '', prevPrice: 0, currentPrice: 0, nextRate: 0 },
  index: 0,
});

const CardList = () => {
  const [coins, setCoins] = useRecoilState(coinState);

  const getCoins = () => {
    fetch(`${DEFAULT_URL}/api/Coin/coin`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((coinData) => {
        setCoins(coinData);
      });
  };

  useEffect(() => {
    getCoins();

    const intervalId = setInterval(() => {
      getCoins();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrap gap={10} justify='center'>
      {coins.map((coin) => {
        return (
          <CardContext.Provider key={coin.id} value={{ coin, index: coin.id }}>
            <Coins />
          </CardContext.Provider>
        );
      })}
    </Wrap>
  );
};

export default CardList;
