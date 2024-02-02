import { Image, Stack, Text, WrapItem } from '@chakra-ui/react';
import { CoinList, HoldingData } from '../../type';
import { useRecoilState } from 'recoil';
import { useGetHoldingQuery } from '../../api/coin-api';
import { idState } from '../../atoms/info';
import { useEffect, useState } from 'react';

const HoldingCoin = ({
  src,
  coinName,
}: {
  src: string;
  coinName: CoinList;
}) => {
  const [id] = useRecoilState(idState);
  const { data } = useGetHoldingQuery({ params: { id } });
  const [myHoldings, setMyHoldings] = useState<HoldingData>([]);

  useEffect(() => {
    setMyHoldings(data ?? []);
  }, [data]);

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
