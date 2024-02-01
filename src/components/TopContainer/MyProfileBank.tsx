import { Stack, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';

const MyProfileBank = () => {
  const [userInfo] = useRecoilState(userInfoState);

  return (
    <Stack mb={1} direction='row' justify='flex-start' align='center'>
      <Text>
        총 잔고 :{' '}
        {userInfo?.balance
          ?.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </Stack>
  );
};

export default MyProfileBank;
