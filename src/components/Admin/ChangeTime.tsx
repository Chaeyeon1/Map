import { Button, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import TimeList from './TimeList';
import { getTime } from '../../api/getMyHoldings';
import { DEFAULT_URL } from '../../constant';
import { enqueueSnackbar } from 'notistack';

export type TimeType = { id: number; timeId: number; timeElement: string };
const ChangeTime = () => {
  const [times, setTimes] = useState<TimeType[]>([]);
  const [timeChange, setTimeChange] = useState('');
  const [userInfo] = useRecoilState(userInfoState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTime(userInfo)
      .then((response) => response.json())
      .then((timesData) => {
        setTimes(timesData);
      });
  }, []);

  const addTime = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${DEFAULT_URL}/api/Coin/time?id=${userInfo?.id}&timeElement=2024-02-02T${timeChange}:00`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.ok) {
        setTimeChange('');
        getTime(userInfo)
          .then((response) => response.json())
          .then((timesData) => {
            setTimes(timesData);
          });
        setIsLoading(false);
        enqueueSnackbar({
          message: '성공적으로 업데이트 되었습니다.',
          variant: 'success',
        });
      } else {
        enqueueSnackbar({
          message: '업데이트에 실패했습니다.',
          variant: 'error',
        });
        setIsLoading(false);
      }
    } catch {
      enqueueSnackbar({ message: 'error입니다.', variant: 'error' });
      setIsLoading(false);
    }
  };

  return (
    <Stack mt={8}>
      <Text fontSize='18px' fontWeight='bold'>
        시간
      </Text>
      <Stack direction='row'>
        <Input
          value={timeChange}
          onChange={(e) => setTimeChange(e.target.value)}
          placeholder='Select Date and Time'
          size='sm'
          type='time'
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <Button onClick={addTime} size='sm' colorScheme='facebook'>
            추가
          </Button>
        )}
      </Stack>
      <Text fontSize='14px' colorScheme='facebook' mt={4} fontWeight='bold'>
        현재 저장되어 있는 시간
      </Text>
      {times.map((time, i) => {
        return (
          <TimeList
            setTimes={setTimes}
            key={i}
            time={time.timeElement}
            i={time.timeId}
          />
        );
      })}
    </Stack>
  );
};

export default ChangeTime;
