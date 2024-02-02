import {
  Button,
  IconButton,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { COIN, COIN_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import { RepeatIcon } from '@chakra-ui/icons';
import { useGetRateQuery, useUpdateRate } from '../../api/coin-api';

const CoinRateList = ({ index }: { index: number }) => {
  const [coinRate, setCoinRate] = useState(0);
  const [id] = useRecoilState(idState);
  const [rateChange, setRateChange] = useState(coinRate ?? 0);
  const [isModified, setIsModified] = useState(false);
  const { data, refetch } = useGetRateQuery({
    params: { id, index: index + 1 },
  });
  const { mutateAsync, isLoading } = useUpdateRate();

  useEffect(() => {
    setCoinRate(data ?? 0);
    setRateChange(data ?? 0);
  }, [data]);

  const updateCoinRate = async () => {
    const body = {
      id,
      coin: index + 1,
      rate: Number(coinRate),
    };

    mutateAsync(body);
  };

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
                if (rateChange > 100) {
                  alert('100 이하의 숫자를 넣어주세요.');
                } else {
                  setCoinRate(rateChange);
                  setIsModified(false);
                }
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
              onClick={() => refetch()}
            />
            <Button
              size='sm'
              onClick={() => setIsModified(true)}
              colorScheme='facebook'
            >
              수정
            </Button>
            {isLoading ? (
              <Spinner />
            ) : (
              <Button
                size='sm'
                onClick={() => updateCoinRate()}
                colorScheme='red'
              >
                적용
              </Button>
            )}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default CoinRateList;
