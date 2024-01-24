import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Topcontainer from './components/Topcontainer';
import { RecoilRoot } from 'recoil';
import CardList from './components/CardList';
import { Button, Stack, Text, Box, Input } from '@chakra-ui/react';
import Ranking from './components/Ranking';
import Test from './components/Test';

const App = () => (
  <RecoilRoot>
    <ChakraProvider>
      {/* <Test /> */}
      <Stack
        padding='24px'
        direction='row'
        justify='center'
        align='center'
        spacing='10px'
        flex='1'
        alignSelf='stretch'
      >
        <Stack justify='center' align='center' spacing='10px'>
          <Stack padding='24px' justify='center' align='center' spacing='4px'>
            <Text
              fontFamily='Inter'
              lineHeight='0.13'
              fontWeight='extrabold'
              fontSize='120px'
              color='#000000'
              width='322px'
              height='88px'
              maxWidth='100%'
            >
              WAM
            </Text>
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
                <Topcontainer />
              </Stack>
              <Ranking />
            </Stack>
            <Stack justify='flex-start' align='flex-start' spacing='32px'>
              <CardList />
            </Stack>
          </Stack>
        </Stack>
        <Box width='306px' height='304px' maxWidth='100%' />
      </Stack>
    </ChakraProvider>
  </RecoilRoot>
);

export default App;
