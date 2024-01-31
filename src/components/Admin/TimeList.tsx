import { Button, Spinner, Stack, Text } from '@chakra-ui/react';
import { DEFAULT_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import { Dispatch, SetStateAction, useState } from 'react';
import { TimeType } from './ChangeTime';
import { getTime } from '../../api/getMyHoldings';
import { enqueueSnackbar } from 'notistack';

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
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
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
      setLoading(false);

      enqueueSnackbar({
        variant: 'success',
        message: '성공적으로 삭제가 완료되었습니다.',
      });
    } catch {
      enqueueSnackbar({
        variant: 'error',
        message: '삭제가 정상적으로 되지 않았습니다.',
      });
      setLoading(false);
    }
  };

  return (
    <Stack direction='row' alignItems='center'>
      <Stack flex={1} direction='row' spacing={4} alignItems='center'>
        <Text fontWeight='bold'>-</Text>
        <Text>{time.slice(11, 16)}</Text>
      </Stack>
      {loading ? (
        <Spinner />
      ) : (
        <Button
          onClick={onDelete}
          size='sm'
          variant='outline'
          colorScheme='red'
        >
          삭제
        </Button>
      )}
    </Stack>
  );
};

export default TimeList;
