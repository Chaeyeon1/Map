import { GridItem, Image, Stack, Text, WrapItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { CoinList } from '../../type';
import { useRecoilState } from 'recoil';
import { holdingsState, userInfoState } from '../../atoms/info';
import { getMyHoldings } from '../../api/getMyHoldings';

const HoldingCoin = ({
  src,
  coinName,
}: {
  src: string;
  coinName: CoinList;
}) => {
  const [myHoldings, setMyHoldings] = useRecoilState(holdingsState);
  const [userInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    getMyHoldings(userInfo)
      .then((response) => response.json())
      .then((data) => {
        setMyHoldings(data);
      });
  }, [userInfo]);

  return (
    <WrapItem>
      <Stack direction='row'>
        <Stack>
          <Image borderRadius='full' boxSize='30px' src={src} alt='My Image' />
        </Stack>
        <Stack>
          <Text>X {myHoldings[0]?.[coinName]}</Text>
        </Stack>
      </Stack>
    </WrapItem>
  );
};

export default HoldingCoin;
