import { Stack, WrapItem } from '@chakra-ui/react';
import { useContext } from 'react';
import { CardContext } from '../CardList';
import Card from '../Card';
import CoinInfo from './CoinInfo';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import MyHoldingCoin from './MyHoldingCoin';
import Price from './Price';
import CoinChange from './CoinChange';

const Coins = () => {
  const { coin } = useContext(CardContext);
  const [userInfo] = useRecoilState(userInfoState);

  return (
    <WrapItem key={coin.id}>
      <Card>
        <Stack direction='row'>
          <CoinInfo />
          {userInfo && <MyHoldingCoin />}
        </Stack>
        <Stack justify='center' align='flex-start' spacing='12px'>
          <Price />
          {userInfo && <CoinChange />}
        </Stack>
      </Card>
    </WrapItem>
  );
};

export default Coins;
