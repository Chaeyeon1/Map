import { Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CardContext } from '../CardList';

const ChangeRate = () => {
  const { coin } = useContext(CardContext);
  const changeRate = coin.currentPrice - coin.prevPrice;

  return (
    <Stack direction='row' justify='flex-start' align='center' spacing='4px'>
      <Text
        fontFamily='Inter'
        lineHeight='1.43'
        fontWeight='semibold'
        fontSize='14px'
        color={changeRate > 0 ? '#FF5353' : 'blue'}
      >
        {changeRate > 0 ? '▲' : '▼'} {changeRate}
      </Text>
    </Stack>
  );
};

export default ChangeRate;
