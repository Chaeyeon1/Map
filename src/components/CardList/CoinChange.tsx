import { Button, Input, Spinner, Stack } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { DEFAULT_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import {
  coinState,
  holdingsState,
  rankingState,
  userInfoState,
} from '../../atoms/info';
import { CardContext } from '../CardList';
import { getMyHoldings } from '../../api/getMyHoldings';
import { enqueueSnackbar } from 'notistack';
import { CoinList } from '../../type';

const CoinChange = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [count, setCount] = useState<number>(0);
  const { index } = useContext(CardContext);
  const [myHoldings, setMyHoldings] = useRecoilState(holdingsState);
  const [, setCoins] = useRecoilState(coinState);
  const [, setRanking] = useRecoilState(rankingState);
  const { coin } = useContext(CardContext);
  const [isLoading, setIsLoading] = useState(false);

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

  const updateInformation = () => {
    getMyHoldings(userInfo)
      .then((response) => response.json())
      .then((data) => {
        setMyHoldings(data);
      });

    fetch(`${DEFAULT_URL}/api/Coin/coin`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((coinData) => {
        setCoins(coinData);
      });

    fetch(`${DEFAULT_URL}/api/Coin/ranking`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setRanking(data);
      });

    login();
    setCount(0);
  };

  const coinSell = async () => {
    const body = {
      id: userInfo?.id,
      coinId: index,
      count,
    };
    const currentHoldings =
      myHoldings?.[0][coin.coinName.toLowerCase() as CoinList];
    setIsLoading(true);

    if ((currentHoldings ?? 0) >= count) {
      try {
        await fetch(`${DEFAULT_URL}/api/Coin/coin/sell`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        updateInformation();
        setIsLoading(false);
        enqueueSnackbar({
          message: '성공적으로 판매 완료되었습니다.',
          variant: 'success',
        });
      } catch {
        enqueueSnackbar({ variant: 'error', message: '에러 발생' });
        setIsLoading(false);
      }
    } else {
      enqueueSnackbar({
        variant: 'error',
        message: '현재 가진 개수만큼만 팔 수 있습니다.',
      });
      setCount(0);
      setIsLoading(false);
    }
  };

  const coinBuy = async () => {
    const body = {
      id: userInfo?.id,
      coinId: index,
      count,
    };
    setIsLoading(true);

    if (coin.currentPrice * count < (userInfo?.balance ?? 0)) {
      try {
        await fetch(`${DEFAULT_URL}/api/Coin/coin/buy`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        updateInformation();
        setIsLoading(false);
        enqueueSnackbar({
          message: '성공적으로 구매 완료되었습니다.',
          variant: 'success',
        });
      } catch {
        enqueueSnackbar({ variant: 'error', message: '에러 발생' });
        setIsLoading(false);
      }
    } else {
      enqueueSnackbar({ variant: 'error', message: '잔액이 부족합니다.' });
      setCount(0);
      setIsLoading(false);
    }
  };

  return (
    <Stack direction='row' justify='flex-start' align='center'>
      <Input
        type='number'
        placeholder='코인 개수'
        size='xs'
        value={count === 0 ? '' : count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Button
            size='xs'
            variant='outline'
            colorScheme='green'
            onClick={coinBuy}
          >
            매수
          </Button>
          <Button
            size='xs'
            variant='outline'
            colorScheme='red'
            onClick={coinSell}
          >
            매도
          </Button>
        </>
      )}
    </Stack>
  );
};

export default CoinChange;
