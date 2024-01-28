import { Stack } from '@chakra-ui/react';
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
    <Stack key={coin.id} spacing='5px'>
      <Stack justify='flex-start' align='flex-start' spacing='32px'>
        <Stack
          direction='row'
          justify='space-between'
          align='flex-start'
          spacing='49px'
          maxWidth='100%'
        >
          <Card>
            <Stack
              direction='row'
              justify='space-between'
              align='center'
              spacing='40px'
              alignSelf='stretch'
            >
              <CoinInfo />
              {userInfo && <MyHoldingCoin />}
            </Stack>
            <Stack justify='center' align='flex-start' spacing='12px'>
              <Price />
              {userInfo && <CoinChange />}
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Coins;
