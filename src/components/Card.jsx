import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Card = ({ coin }) => {
  return (
    <Stack
      padding='16px'
      borderRadius='8px'
      justify='center'
      align='flex-start'
      spacing='12px'
      borderColor='teal.500'
      borderStartWidth='1px'
      borderEndWidth='1px'
      borderTopWidth='1px'
      borderBottomWidth='1px'
      width='354px'
      maxWidth='100%'
    >
      <Stack
        direction='row'
        justify='space-between'
        align='center'
        spacing='40px'
        alignSelf='stretch'
      >
        <Stack direction='row' justify='flex-start' align='center'>
          <Box width='13.95px' height='20px' />
          <Text
            fontFamily='Inter'
            lineHeight='1.43'
            fontWeight='semibold'
            fontSize='14px'
            color='gray.400'
          >
            {coin}
          </Text>
        </Stack>
        <Text
          fontFamily='Inter'
          lineHeight='1.43'
          fontWeight='semibold'
          fontSize='14px'
          color='#000000'
        >
          보유 개수 : 3
        </Text>
      </Stack>
      <Stack justify='center' align='flex-start' spacing='12px'>
        <Stack justify='center' align='flex-start'>
          <Text
            fontFamily='Inter'
            lineHeight='1.33'
            fontWeight='semibold'
            fontSize='24px'
            color='#000000'
          >
            512 bit
          </Text>
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='32px'
          >
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='4px'
            >
              <Text
                fontFamily='Inter'
                lineHeight='1.43'
                fontWeight='semibold'
                fontSize='14px'
                color='#FF5353'
              >
                250 bit
              </Text>
            </Stack>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='4px'
            >
              <Text
                fontFamily='Inter'
                lineHeight='1.43'
                fontWeight='semibold'
                fontSize='14px'
                color='#FF5353'
              >
                5.14
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction='row' justify='flex-start' align='center'>
          <Input placeholder='Placeholder' size='xs' />
          <Button size='xs' variant='outline' colorScheme='red'>
            매수
          </Button>
          <Button size='xs' variant='outline' colorScheme='green'>
            매도
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
