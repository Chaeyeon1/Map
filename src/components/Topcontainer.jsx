import { Box, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Topcontainer = () => {
  return (
    <Stack
      padding='16px'
      borderRadius='8px'
      direction='row'
      justify='space-between'
      align='center'
      spacing='12px'
      borderColor='teal.500'
      alignSelf='stretch'
    >
      <Stack justify='center' align='flex-start' spacing='0px'>
        <Box width='191px' height='90px' />
        <Stack justify='center' align='flex-start' spacing='16px'>
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
          <Stack justify='center' align='flex-start' spacing='12px'>
            <Stack direction='row' justify='flex-start' align='center'>
              <Text
                fontFamily='Inter'
                fontWeight='regular'
                fontSize='12px'
                color='#000000'
                width='44px'
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
              >
                전화번호
              </Text>
              <Input placeholder='Placeholder' size='xs' />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        paddingX='40px'
        paddingY='20px'
        borderRadius='20000px'
        justify='flex-start'
        align='center'
        background='gray.50'
      >
        <Text
          fontFamily='Inter'
          lineHeight='1.5'
          fontWeight='semibold'
          fontSize='16px'
          color='#000000'
        >
          현재 순위
        </Text>
        <Text
          fontFamily='Inter'
          lineHeight='1.43'
          fontWeight='semibold'
          fontSize='14px'
          color='#000000'
        >
          🥇 10000bit
        </Text>
        <Text
          fontFamily='Inter'
          lineHeight='1.43'
          fontWeight='semibold'
          fontSize='14px'
          color='#000000'
        >
          🥈 10000bit
        </Text>
        <Text
          fontFamily='Inter'
          lineHeight='1.43'
          fontWeight='semibold'
          fontSize='14px'
          color='#000000'
        >
          🥉 10000bit
        </Text>
        <Text
          fontFamily='Inter'
          lineHeight='1.43'
          fontWeight='semibold'
          fontSize='14px'
          color='#000000'
        >
          💣 10000bit
        </Text>
      </Stack>
    </Stack>
  );
};

export default Topcontainer;
