import { Button, Input, Stack, Text } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { DEFAULT_URL } from '../../constant';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/info';

const TextInput = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [, setUserInfo] = useRecoilState(userInfoState);

  const loginIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const phoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = () => {
    const body = {
      userId,
      password,
    };

    fetch(`${DEFAULT_URL}/api/Coin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: any) => {
        localStorage.setItem('WAM_Localstorage', JSON.stringify(data));
        setUserInfo(
          localStorage?.getItem('WAM_Localstorage')
            ? JSON.parse(localStorage?.getItem('WAM_Localstorage') ?? '')
            : null
        );
        setUserId('');
        setPassword('');
      });
  };

  return (
    <Stack
      padding='3px'
      borderRadius='8px'
      direction='row'
      justify='space-between'
      align='center'
      spacing='12px'
      borderColor='teal.500'
      alignSelf='stretch'
    >
      <Stack justify='center' align='flex-start' spacing='12px'>
        <Stack direction='row' justify='flex-start' align='center'>
          <Text
            fontFamily='Inter'
            fontWeight='regular'
            fontSize='12px'
            color='#000000'
            width='70px'
          >
            이름
          </Text>
          <Input
            placeholder='ID'
            size='xs'
            type='text'
            value={userId}
            onChange={loginIdChange}
          />
        </Stack>
        <Stack direction='row' justify='flex-start' align='center'>
          <Text
            fontFamily='Inter'
            fontWeight='regular'
            fontSize='12px'
            color='#000000'
            width='70px'
          >
            전화번호
          </Text>
          <Input
            placeholder='Password'
            size='xs'
            type='text'
            value={password}
            onChange={phoneChange}
          />
        </Stack>
      </Stack>
      <Stack justify='flex-start' align='center' background='gray.50'>
        <Button onClick={login}>입력</Button>
      </Stack>
    </Stack>
  );
};

export default TextInput;
