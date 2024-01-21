import React, {useState, useEffect} from 'react';
import { Button, Stack, Text, Box, Input } from '@chakra-ui/react';


const Topcontainer = () => {

  var id  = localStorage.getItem('id');
  const [loginId, setLoginId] = useState(id || null);

  const [myCoin, setMyCoin] = useState(null);

  const login = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', { //TODO url 변경
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('id', data.id); 
        setLoginId(data.id);
      });
  };

  const getMyCoin = () => {
    fetch('getMyCoin/due', { //TODO url 변경
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setMyCoin(data);
      });
  };
  
  console.log(myCoin);  

  if (!myCoin){
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
        <Stack
          justify='flex-start'
          align='center'
          background='gray.50'
        >
          <Button onClick={login}>입력</Button>
        </Stack>
      </Stack>
    );
  }

  // getMyCoin();
  return (
    
    //로그인 했으면 해당 아이디 정보로 조회 해야함
    <Text>{myCoin.WAP}</Text>
  )
};

export default Topcontainer;
