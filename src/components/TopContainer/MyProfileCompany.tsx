import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';
import MyProfileImage from './MyProfileImage';

const MyProfileCompany = () => {
  const [userInfo] = useRecoilState(userInfoState);
  const [isDesktop] = useMediaQuery('(min-width: 650px)');

  return (
    <Stack
      width='100%'
      display='flex'
      align='center'
      spacing={2}
      flexDirection='row'
    >
      {isDesktop && <MyProfileImage />}
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
