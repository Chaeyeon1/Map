import React, { useState, useEffect } from 'react';
import { Button, Stack, Text, Box, Input, Image } from '@chakra-ui/react';
import { infoState } from '../atoms/info';
import { rankingState } from '../atoms/ranking';
import { useRecoilState } from 'recoil';

const Topcontainer = () => {
  const [myInfo, setMyInfo] = useRecoilState(infoState);
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [loginId, setLoginId] = useState(null);

  const login = () => {
    fetch('/login/1', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('id', data.id);
        setLoginId(data.id);
        getMyInfo();
      });
  };

  const getMyInfo = () => {
    fetch('http://localhost:5202/api/coin/holdings/1', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setMyInfo(data);
      });
  };

  const getRanking = () => {
    fetch('/ranking', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((data) => {
        setRanking(data);
      });
  };

  useEffect(() => {
    var id = localStorage.getItem('id');
    setLoginId(id);
    getMyInfo(); //리소스가 갱신되었을 경우 새로고침시 확인할 수 있어야함
    getRanking();
  }, []);

  console.log(ranking);

  return (
    <>
      {!loginId ? (
        <Stack justify='center' align='flex-start' spacing='16px'>
          <Box width='191px' height='90px' />
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='0px'
          >
            <Stack direction='row' justify='flex-start' align='center'>
              <Text
                fontFamily='Inter'
                lineHeight='1.56'
                fontWeight='semibold'
                fontSize='18px'
                color='teal.900'
              >
                서비스를 이용하시려면 로그인을 해주세요
              </Text>
            </Stack>
          </Stack>
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
                  닉네임
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
        </Stack>
      ) : (
        <>{
          
          <Stack justify='center' align='flex-start' spacing='16px'>
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
                <Box width='191px' height='90px' />
                <Stack direction='row' justify='flex-start' align='center'> 
                  <Text
                    fontFamily='Inter'
                    lineHeight='1.56'
                    fontWeight='semibold'
                    fontSize='40px'
                    color='teal.900'
                  >
                    {loginId}
                  </Text>
                </Stack>
                <Stack direction='row' justify='flex-start' align='center'>
                  <Text>
                    총 잔고 : {myInfo.bits}
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Image
                  width="200px" // 이미지 크기를 조절할 수 있습니다.
                  height="200px"
                  src="data:image/png;base64,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" // 이미지 주소를 지정하세요.
                  alt="My Image"
                />
              </Stack>
            </Stack>
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
              <Stack>
                <Image
                    borderRadius="full"
                    boxSize="20px" // 이미지 크기를 조절할 수 있습니다.
                    src="https://example.com/my-image.jpg" // 이미지 주소를 지정하세요.
                    alt="My Image"
                  />
              </Stack>
              <Stack>
                <Text>
                  X {myInfo.WAP}
                </Text>
              </Stack>
              <Stack>
                <Image
                    borderRadius="full"
                    boxSize="20px" // 이미지 크기를 조절할 수 있습니다.
                    src="https://example.com/my-image.jpg" // 이미지 주소를 지정하세요.
                    alt="My Image"
                  />
              </Stack>
              <Stack>
                <Text>
                  X {myInfo.APP}
                </Text>
              </Stack>
              <Stack>
                <Image
                    borderRadius="full"
                    boxSize="20px" // 이미지 크기를 조절할 수 있습니다.
                    src="https://example.com/my-image.jpg" // 이미지 주소를 지정하세요.
                    alt="My Image"
                  />
              </Stack>
              <Stack>
                <Text>
                  X {myInfo.MUT}
                </Text>
              </Stack>
              <Stack>
                <Image
                    borderRadius="full"
                    boxSize="20px" // 이미지 크기를 조절할 수 있습니다.
                    src="https://example.com/my-image.jpg" // 이미지 주소를 지정하세요.
                    alt="My Image"
                  />
              </Stack>
              <Stack>
                <Text>
                  X {myInfo.PKNU}
                </Text>
              </Stack>
              <Stack>
                <Image
                    borderRadius="full"
                    boxSize="20px" // 이미지 크기를 조절할 수 있습니다.
                    src="https://example.com/my-image.jpg" // 이미지 주소를 지정하세요.
                    alt="My Image"
                  />
              </Stack>
              <Stack>
                <Text>
                  X {myInfo.PUS}
                </Text>
              </Stack>
              <Stack>
                <Image
                    borderRadius="full"
                    boxSize="20px" // 이미지 크기를 조절할 수 있습니다.
                    src="https://example.com/my-image.jpg" // 이미지 주소를 지정하세요.
                    alt="My Image"
                  />
              </Stack>
              <Stack>
                <Text>
                  X {myInfo.PUFS}
                </Text>
              </Stack>
            </Stack>
          </Stack>
          }</>
      )}
    </>
  );
};

export default Topcontainer;
