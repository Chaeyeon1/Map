import { Stack, Text, WrapItem } from '@chakra-ui/react';
import { useContext } from 'react';
import { CardContext } from '../CardList';
import Card from '../Card';
import CoinInfo from './CoinInfo';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import MyHoldingCoin from './MyHoldingCoin';
import Price from './Price';
import CoinChange from './CoinChange';
import { useGetUserInfoQuery } from '../../api/coin-api';

const Coins = () => {
  const { coin } = useContext(CardContext);
  const [id] = useRecoilState(idState);
  const { data } = useGetUserInfoQuery({ params: { id } });

  return (
    <WrapItem key={coin.id}>
      <Card>
        <Stack justifyContent='space-between' direction='row'>
          <CoinInfo />
          {id && <MyHoldingCoin />}
        </Stack>
        {coin?.prevPrice === 0 ? (
          <Stack
            height={data?.admin ? '96px' : '59px'}
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
            {id && !data?.admin && <CoinChange />}
          </Stack>
        )}
      </Card>
    </WrapItem>
  );
};

export default Coins;
