import { Button, Stack, Text } from '@chakra-ui/react';

const TimeList = ({ time, i }: { time: string; i: number }) => {
  return (
    <Stack direction='row' alignItems='center'>
      <Stack flex={1} direction='row' spacing={4} alignItems='center'>
        <Text fontWeight='bold'>{i + 1}</Text>
        <Text>{time.slice(11, 16)}</Text>
      </Stack>
      <Button size='sm' variant='outline' colorScheme='red'>
        삭제
      </Button>
    </Stack>
  );
};

export default TimeList;
