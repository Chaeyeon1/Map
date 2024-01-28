import { Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { holdingsState } from '../../atoms/info';
import { CoinList } from '../../type';
import { useContext } from 'react';
import { CardContext } from '../CardList';

const MyHoldingCoin = () => {
  const [myHoldings] = useRecoilState(holdingsState);
  const { coin } = useContext(CardContext);

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
