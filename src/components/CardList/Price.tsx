import { Stack } from '@chakra-ui/react';
import React from 'react';
import CurrentPrice from './CurrentPrice';
import PrevPrice from './PrevPrice';
import ChangeRate from './ChangeRate';

const Price = () => {
  return (
    <Stack justify='center' align='flex-start'>
      <CurrentPrice />
      <Stack direction='row' justify='flex-start' align='center' spacing='32px'>
        <PrevPrice />
        <ChangeRate />
      </Stack>
    </Stack>
  );
};

export default Price;
