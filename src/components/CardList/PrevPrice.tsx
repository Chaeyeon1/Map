import { Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CardContext } from '../CardList';

const PrevPrice = () => {
  const { coin } = useContext(CardContext);

  return (
    <Stack direction='row' justify='flex-start' align='center' spacing='4px'>
      <Text
        fontFamily='Inter'
        lineHeight='1.43'
        fontWeight='semibold'
        fontSize='14px'
        color='#FF5353'
      >
        {coin.prevPrice}
      </Text>
    </Stack>
  );
};

export default PrevPrice;
