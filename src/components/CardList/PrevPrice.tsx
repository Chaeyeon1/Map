import { Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
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
      >
        종전가 :{' '}
        {coin.prevPrice
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </Stack>
  );
};

export default PrevPrice;
