import { Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { CoinList, HoldingData } from '../../type';
import { useContext, useEffect, useState } from 'react';
import { CardContext } from '../CardList';
import { useGetHoldingQuery } from '../../api/coin-api';
import { idState } from '../../atoms/info';

const MyHoldingCoin = () => {
  const { coin } = useContext(CardContext);
  const [id] = useRecoilState(idState);
  const { data } = useGetHoldingQuery({ params: { id: id } });
  const [myHoldings, setMyHoldings] = useState<HoldingData>([]);

  useEffect(() => {
    setMyHoldings(data ?? []);
  }, [data]);

  let currentCoin: CoinList = 'wap';

  for (let coinName in myHoldings?.[0]) {
    if (coinName === coin?.coinName?.toLowerCase()) {
      currentCoin = coin?.coinName?.toLowerCase() as CoinList;
    }
  }

  return (
    <Text
      fontFamily='Inter'
      lineHeight='1.43'
      fontWeight='semibold'
      fontSize='14px'
      color='#000000'
    >
      보유 코인 : {myHoldings?.[0]?.[currentCoin] ?? ''}
    </Text>
  );
};

export default MyHoldingCoin;
