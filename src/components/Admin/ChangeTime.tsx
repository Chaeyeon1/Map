import { Button, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import TimeList from './TimeList';
import { useAddTime, useGetTimeQuery } from '../../api/coin-api';
import { enqueueSnackbar } from 'notistack';

export type TimeType = { id: number; timeId: number; timeElement: string };
const ChangeTime = () => {
  const [timeChange, setTimeChange] = useState('');
  const [id] = useRecoilState(idState);
  const { data: timeData } = useGetTimeQuery();
  const [times, setTimes] = useState<TimeType[]>([]);
  const { mutateAsync, isLoading } = useAddTime();

  const addTime = async () => {
    if (!timeChange) {
      enqueueSnackbar({ variant: 'error', message: '시간을 입력해주세요.' });
    } else {
      const body = {
        id,
        timeChange,
      };

      mutateAsync(body).then(() => {
        setTimeChange('');
      });
    }
  };

  useEffect(() => {
    setTimes(timeData ?? []);
  }, [timeData]);

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
      {times?.map((time, i) => {
        return <TimeList key={i} time={time.timeElement} i={time.timeId} />;
      })}
    </Stack>
  );
};

export default ChangeTime;
