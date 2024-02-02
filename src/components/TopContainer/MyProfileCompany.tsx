import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import MyProfileImage from './MyProfileImage';
import { useGetUserInfoQuery } from '../../api/coin-api';

const MyProfileCompany = () => {
  const [id] = useRecoilState(idState);
  const [isDesktop] = useMediaQuery('(min-width: 650px)');
  const { data } = useGetUserInfoQuery({ params: { id } });

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
        {data?.crew}
      </Text>
      <Text color='gray' fontWeight='bold'>
        {'-'}
      </Text>
      <Text color='black' fontWeight='bold'>
        {data?.type}
      </Text>
    </Stack>
  );
};

export default MyProfileCompany;
