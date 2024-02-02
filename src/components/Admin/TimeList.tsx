import { Button, Spinner, Stack, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import { useDeleteTime } from '../../api/coin-api';

const TimeList = ({ time, i }: { time: string; i: number }) => {
  const [id] = useRecoilState(idState);
  const { mutateAsync, isLoading } = useDeleteTime();

  const onDelete = async () => {
    const body = {
      id: id,
      i: i,
    };

    await mutateAsync(body);
  };

  return (
    <Stack direction='row' alignItems='center'>
      <Stack flex={1} direction='row' spacing={4} alignItems='center'>
        <Text fontWeight='bold'>-</Text>
        <Text>{time.slice(11, 16)}</Text>
      </Stack>
      {isLoading ? (
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
