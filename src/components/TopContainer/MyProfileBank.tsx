import { Stack, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { holdingsState, userInfoState } from '../../atoms/info';

const MyProfileBank = () => {
  const [userInfo] = useRecoilState(userInfoState);
  const [myHoldings] = useRecoilState(holdingsState);

  return (
    <Stack mb={1} justify='center' align='flex-start'>
      <Text>
        잔여 현금 :{' '}
        {userInfo?.balance
          ?.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
      <Text>
        평가 자산 :{' '}
        {myHoldings?.[0]?.total
          ?.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </Stack>
  );
};

export default MyProfileBank;
