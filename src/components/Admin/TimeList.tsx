import { Button, Stack, Text } from '@chakra-ui/react';
import { DEFAULT_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import { Dispatch, SetStateAction } from 'react';
import { TimeType } from './ChangeTime';
import { getTime } from '../../api/getMyHoldings';

const TimeList = ({
  time,
  i,
  setTimes,
}: {
  time: string;
  i: number;
  setTimes: Dispatch<SetStateAction<TimeType[]>>;
}) => {
  const [userInfo] = useRecoilState(userInfoState);

  const onDelete = async () => {
    try {
      await fetch(
        `${DEFAULT_URL}/api/Coin/time?id=${userInfo?.id}&timeId=${i}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      getTime(userInfo)
        .then((response) => response.json())
        .then((timesData) => {
          setTimes(timesData);
        });
    } catch {
      alert('에러입니다.');
    }
  };

  return (
    <Stack direction='row' alignItems='center'>
      <Stack flex={1} direction='row' spacing={4} alignItems='center'>
        <Text fontWeight='bold'>-</Text>
        <Text>{time.slice(11, 16)}</Text>
      </Stack>
      <Button onClick={onDelete} size='sm' variant='outline' colorScheme='red'>
        삭제
      </Button>
    </Stack>
  );
};

export default TimeList;
