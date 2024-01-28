import { Grid } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { DEFAULT_URL } from '../constant';
import { CoinContextType, CoinDatas } from '../type';
import Coins from './CardList/Coins';

export const CardContext = createContext<CoinContextType>({
  coin: { id: 0, coinName: '', prevPrice: 0, currentPrice: 0, nextRate: 0 },
  index: 0,
});

const CardList = () => {
  const [coins, setCoins] = useState<CoinDatas>([]);
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
  }, []);

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={10}>
      {coins.map((coin) => {
        return (
          <CardContext.Provider value={{ coin, index: coin.id }}>
            <Coins />
          </CardContext.Provider>
        );
      })}
    </Grid>
  );
};

export default CardList;
