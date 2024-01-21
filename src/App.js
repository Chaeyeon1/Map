import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button, Stack, Text, Box, Input } from '@chakra-ui/react';
import Topcontainer from'./components/Topcontainer';

const App = () => (
  <ChakraProvider>
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
                <Topcontainer />
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
          <Stack justify='flex-start' align='flex-start' spacing='32px'>
            <Stack
              direction='row'
              justify='space-between'
              align='flex-start'
              spacing='49px'
              width='757px'
              maxWidth='100%'
            >
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
                      WAP
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
                      WAP
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
            </Stack>
            <Stack
              direction='row'
              justify='space-between'
              align='flex-start'
              spacing='49px'
              width='757px'
              maxWidth='100%'
            >
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
                      WAP
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
                      WAP
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
            </Stack>
            <Stack
              direction='row'
              justify='space-between'
              align='flex-start'
              spacing='49px'
              width='757px'
              maxWidth='100%'
            >
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
                      WAP
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
                      WAP
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
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box width='306px' height='304px' maxWidth='100%' />
    </Stack>
  </ChakraProvider>
);

export default App;
