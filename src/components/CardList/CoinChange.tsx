import { Button, Input, Spinner, Stack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import { CardContext } from '../CardList';
import { enqueueSnackbar } from 'notistack';
import { CoinList, HoldingData } from '../../type';
import {
  useBuy,
  useGetHoldingQuery,
  useGetUserInfoQuery,
  useSell,
} from '../../api/coin-api';

const CoinChange = () => {
  const [id] = useRecoilState(idState);
  const [count, setCount] = useState<number>(0);
  const { index } = useContext(CardContext);
  const { coin } = useContext(CardContext);
  const { mutateAsync, isLoading } = useSell();
  const { mutateAsync: buyMutateAsync, isLoading: buyIsLoading } = useBuy();
  const { data } = useGetHoldingQuery({ params: { id: id } });
  const [myHoldings, setMyHoldings] = useState<HoldingData>([]);
  const { data: userData } = useGetUserInfoQuery({ params: { id } });

  useEffect(() => {
    setMyHoldings(data ?? []);
  }, [data]);

  const coinSell = async () => {
    const body = {
      id: id,
      coinId: index,
      count,
    };
    const currentHoldings =
      myHoldings?.[0][coin.coinName.toLowerCase() as CoinList];

    try {
      if ((currentHoldings ?? 0) >= count) {
        if (count > 0) {
          mutateAsync(body);
          setCount(0);
        } else {
          enqueueSnackbar({
            variant: 'error',
            message: '음수는 입력하실 수 없습니다.',
          });
          setCount(0);
        }
      } else {
        enqueueSnackbar({
          variant: 'error',
          message: '현재 가진 개수만큼만 팔 수 있습니다.',
        });
        setCount(0);
      }
    } catch {
      enqueueSnackbar({
        variant: 'error',
        message: '올바른 값을 입력해주세요.',
      });
      setCount(0);
    }
  };

  const coinBuy = async () => {
    const body = {
      id,
      coinId: index,
      count: Math.floor(count),
    };

    try {
      if (coin.currentPrice * count <= (userData?.balance ?? 0)) {
        if (count > 0) {
          buyMutateAsync(body);
          setCount(0);
        } else {
          enqueueSnackbar({
            variant: 'error',
            message: '1개이상 입력해주세요.',
          });
          setCount(0);
        }
      } else {
        enqueueSnackbar({ variant: 'error', message: '잔액이 부족합니다.' });
        setCount(0);
      }
    } catch {
      enqueueSnackbar({
        variant: 'error',
        message: '올바른 값을 입력해주세요.',
      });
      setCount(0);
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
      {isLoading || buyIsLoading ? (
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
