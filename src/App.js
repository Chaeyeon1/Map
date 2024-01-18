import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button, Stack, Text, Box, Input } from '@chakra-ui/react';
import Topcontainer from './components/Topcontainer';
import CardList from './components/CardList';
import Card from './components/Card';

const App = () => {
  const [text, setText] = useState([[]]);
  const [page, setPage] = useState(0);

  const hello = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setText(data.coin));
  };

  console.log(text);

  return (
    <ChakraProvider>
      <Button onClick={hello}>버튼</Button>
      {/* <div>{text[0].id}</div> */}
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='0px'
        width='1920px'
        height='1080px'
        maxWidth='100%'
        background='#FFFFFF'
      >
        <Stack
          padding='24px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          flex='1'
          alignSelf='stretch'
        >
          {page === 0 ? <Button>hello</Button> : <Button>aaaa</Button>}
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
              <Topcontainer />
              <Stack justify='flex-start' align='flex-start' spacing='32px'>
                {text[page]?.map((coin) => {
                  console.log(text[page]);
                  return <Card coin={coin} />;
                })}
                <Button
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  이전
                </Button>
                <Button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  넘기기
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Box width='306px' height='304px' maxWidth='100%' />
        </Stack>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
