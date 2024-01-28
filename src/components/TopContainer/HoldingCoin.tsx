import { Image, Stack, Text, WrapItem } from '@chakra-ui/react';
import { CoinList } from '../../type';
import { useRecoilState } from 'recoil';
import { holdingsState } from '../../atoms/info';

const HoldingCoin = ({
  src,
  coinName,
}: {
  src: string;
  coinName: CoinList;
}) => {
  const [myHoldings] = useRecoilState(holdingsState);

  return (
    <WrapItem>
      <Stack direction='row'>
        <Stack>
          <Image borderRadius='full' boxSize='30px' src={src} alt='My Image' />
        </Stack>
        <Stack>
          <Text>X {myHoldings?.[0]?.[coinName]}</Text>
        </Stack>
      </Stack>
    </WrapItem>
  );
};

export default HoldingCoin;
