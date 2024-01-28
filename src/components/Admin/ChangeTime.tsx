import { Button, Input, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DEFAULT_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import TimeList from './TimeList';

const ChangeTime = () => {
  const [times, setTimes] = useState<string[]>([]);
  const [timeChange, setTimeChange] = useState('');
  const [userInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    fetch(`${DEFAULT_URL}/api/Coin/time?id=${userInfo?.id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((timesData) => {
        setTimes(timesData);
      });
  }, []);

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
        <Button size='sm' colorScheme='facebook'>
          추가
        </Button>
      </Stack>
      <Text fontSize='14px' colorScheme='facebook' mt={4} fontWeight='bold'>
        현재 저장되어 있는 시간
      </Text>
      {times.map((time, i) => {
        return <TimeList key={i} time={time} i={i} />;
      })}
    </Stack>
  );
};

export default ChangeTime;
