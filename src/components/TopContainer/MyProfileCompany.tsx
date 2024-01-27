import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';

const MyProfileCompany = () => {
  const [userInfo] = useRecoilState(userInfoState);

  return (
    <Stack display='flex' flexDirection='row'>
      <Text color='gray' fontWeight='bold'>
        {userInfo?.crew}
      </Text>
      <Text color='gray' fontWeight='bold'>
        {'-'}
      </Text>
      <Text color='black' fontWeight='bold'>
        {userInfo?.type}
      </Text>
    </Stack>
  );
};

export default MyProfileCompany;
