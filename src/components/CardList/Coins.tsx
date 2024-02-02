import { Stack, Text, WrapItem } from '@chakra-ui/react';
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
        <Stack justifyContent='space-between' direction='row'>
          <CoinInfo />
          {userInfo && <MyHoldingCoin />}
        </Stack>
        {coin?.prevPrice === 0 ? (
          <Stack
            height={userInfo?.admin ? '59px' : '96px'}
            display='flex'
            justifyContent='center'
          >
            <Text fontWeight='bold'>상장폐지된 코인입니다.</Text>
            <Text fontWeight='bold' fontSize='12px'>
              다음 가격 갱신 때부터 다시 구매하실 수 있습니다.
            </Text>
          </Stack>
        ) : (
          <Stack justify='center' align='flex-start' spacing='12px'>
            <Price />
            {userInfo && !userInfo?.admin && <CoinChange />}
          </Stack>
        )}
      </Card>
    </WrapItem>
  );
};

export default Coins;
