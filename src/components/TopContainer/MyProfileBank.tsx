import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';

const MyProfileBank = () => {
  const [userInfo] = useRecoilState(userInfoState);
  return (
    <Stack mb={1} direction='row' justify='flex-start' align='center'>
      <Text>총 잔고 : {userInfo?.balance}</Text>
    </Stack>
  );
};

export default MyProfileBank;
