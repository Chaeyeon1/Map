import {
  Button,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { COIN, COIN_URL, DEFAULT_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import { RepeatIcon } from '@chakra-ui/icons';
import { enqueueSnackbar } from 'notistack';

const CoinRateList = ({ index }: { index: number }) => {
  const [coinRate, setCoinRate] = useState(0);
  const [userInfo] = useRecoilState(userInfoState);
  const [rateChange, setRateChange] = useState(coinRate ?? 0);
  const [isModified, setIsModified] = useState(false);

  const getRate = () => {
    fetch(`${DEFAULT_URL}/api/Coin/rate?id=${userInfo?.id}&coin=${index}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((rate) => {
        setCoinRate(rate);
        setRateChange(rate);
      });
  };

  const updateCoinRate = async () => {
    const body = {
      id: userInfo?.id,
      coin: index,
      rate: Number(coinRate),
    };

    try {
      await fetch(`${DEFAULT_URL}/api/Coin/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      enqueueSnackbar({
        variant: 'success',
        message: '성공적으로 갱신되었습니다.',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      });
    } catch (error) {
      enqueueSnackbar({
        variant: 'error',
        message: '알 수 없는 에러가 발생하였습니다.',
      });
    }
  };

  useEffect(() => {
    getRate();
  }, []);

  return (
    <Stack
      width='100%'
      py={2}
      pr={4}
      spacing={4}
      justifyContent='space-between'
      alignItems='center'
      direction='row'
    >
      <Stack direction='row' alignItems='center'>
        <Image
          borderRadius='full'
          boxSize='30px'
          src={COIN_URL[index]}
          alt='My Image'
        />
        <Text width='70px'>{COIN[index]}</Text>
        {isModified ? (
          <Input
            type='number'
            value={rateChange}
            onChange={(e: any) => setRateChange(e.target.value)}
          />
        ) : (
          <Text>{coinRate}</Text>
        )}
        <Text>%</Text>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={2}>
        {isModified ? (
          <>
            <Button
              size='sm'
              variant='outline'
              onClick={() => setIsModified(false)}
              colorScheme='red'
            >
              취소
            </Button>
            <Button
              size='sm'
              onClick={() => {
                setIsModified(false);
                setCoinRate(rateChange);
              }}
              variant='outline'
              colorScheme='facebook'
            >
              확인
            </Button>
          </>
        ) : (
          <>
            <IconButton
              size='sm'
              colorScheme='blue'
              aria-label='Search database'
              variant='outline'
              icon={<RepeatIcon />}
              onClick={getRate}
            />
            <Button
              size='sm'
              onClick={() => setIsModified(true)}
              colorScheme='facebook'
            >
              수정
            </Button>
            <Button
              size='sm'
              onClick={() => updateCoinRate()}
              colorScheme='red'
            >
              적용
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default CoinRateList;