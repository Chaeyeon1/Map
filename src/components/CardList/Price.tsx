import { Stack } from '@chakra-ui/react';
import CurrentPrice from './CurrentPrice';
import PrevPrice from './PrevPrice';
import ChangeRate from './ChangeRate';

const Price = () => {
  return (
    <Stack justify='center' align='flex-start'>
      <Stack direction='row' justify='flex-start' align='center' spacing='12px'>
        <CurrentPrice />
        <ChangeRate />
      </Stack>
      <PrevPrice />
    </Stack>
  );
};

export default Price;
