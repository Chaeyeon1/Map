import React, { useState, useEffect } from 'react';
import { Button, Stack, Text, Box, Input } from '@chakra-ui/react';
import { coinState } from '../atoms/coin';
import { useRecoilState } from 'recoil';

const Topcontainer = () => {
  const [coin, setCoin] = useRecoilState(coinState);
  var id = localStorage.getItem('id');
  const [loginId, setLoginId] = useState(id || null);

  const login = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('id', data.id);
        setLoginId(data.id);
        getMyCoin();
      });
  };

  const getMyCoin = () => {
    fetch(`getMyCoin/${loginId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setCoin(data);
      });
  };

  useEffect(() => {
    getMyCoin();
  }, []);

  console.log(coin);

  return (
    <>
      {!loginId ? (
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
                아이디
              </Text>
              <Input placeholder='Placeholder' size='xs' />
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
              <Input placeholder='Placeholder' size='xs' />
            </Stack>
          </Stack>
          <Stack justify='flex-start' align='center' background='gray.50'>
            <Button onClick={login}>입력</Button>
          </Stack>
        </Stack>
      ) : (
        <>{coin?.WAP}</>
      )}
    </>
  );
};

export default Topcontainer;
