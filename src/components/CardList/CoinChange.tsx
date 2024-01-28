import { Button, Input, Stack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { DEFAULT_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import { CardContext } from '../CardList';

const CoinChange = () => {
  const [userInfo] = useRecoilState(userInfoState);
  const [count, setCount] = useState<number>(0);
  const { index } = useContext(CardContext);

  const coinSell = () => {
    const body = {
      id: userInfo,
      coinId: index,
      count,
    };

    fetch(`${DEFAULT_URL}/api/Coin/coin/sell`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: any) => {
        localStorage.setItem('WAM_Localstorage', JSON.stringify(data));
        setCount(0);
      });
  };

  const coinBuy = () => {
    const body = {
      id: userInfo,
      coinId: index,
      count,
    };

    fetch(`${DEFAULT_URL}/api/Coin/coin/buy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: any) => {
        localStorage.setItem('WAM_Localstorage', JSON.stringify(data));
        setCount(0);
      });
  };

  return (
    <Stack direction='row' justify='flex-start' align='center'>
      <Input type='number' placeholder='코인 개수' size='xs' />
      <Button size='xs' variant='outline' colorScheme='red' onClick={coinBuy}>
        매수
      </Button>
      <Button
        size='xs'
        variant='outline'
        colorScheme='green'
        onClick={coinSell}
      >
        매도
      </Button>
    </Stack>
  );
};

export default CoinChange;
