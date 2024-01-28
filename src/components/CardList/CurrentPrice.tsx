import { Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CardContext } from '../CardList';

const CurrentPrice = () => {
  const { coin } = useContext(CardContext);

  return (
    <Text
      fontFamily='Inter'
      lineHeight='1.33'
      fontWeight='semibold'
      fontSize='24px'
      color='#000000'
    >
      {coin.currentPrice}
    </Text>
  );
};

export default CurrentPrice;
