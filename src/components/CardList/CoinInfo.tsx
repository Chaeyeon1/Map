import { Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CardContext } from '../CardList';
import { COIN_URL } from '../../constant';

const CoinInfo = () => {
  const { coin } = useContext(CardContext);

  return (
    <Stack direction='row' justify='flex-start' align='center'>
      <Image
        borderRadius='full'
        boxSize='20px'
        src={COIN_URL[coin.id - 1]}
        alt='My Image'
      />
      <Text
        fontFamily='Inter'
        lineHeight='1.43'
        fontWeight='semibold'
        fontSize='14px'
        color='gray.400'
      >
        {coin?.coinName}
      </Text>
    </Stack>
  );
};

export default CoinInfo;
