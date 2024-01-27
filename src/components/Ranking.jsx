import React, { useState, useEffect } from 'react';
import { Button, Stack, Text, Box, Input, Image } from '@chakra-ui/react';
import { rankingState } from '../atoms/ranking';
import { useRecoilState } from 'recoil';

const Ranking = () => {
  const [ranking, setRanking] = useRecoilState(rankingState);

  useEffect(() => {
    console.log('useEffect');
    // getRanking();
  }, []);

  // const getRanking = async() => {
  //     fetch('http://localhost:8080/api/ranking', {
  //         method: 'GET',
  //         headers: { 'Content-Type': 'application/json' },
  //     })
  //         .then((response) => response.json())
  //         .then((data) => {
  //         setRanking(data);
  //         });
  //     };

  return (
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
        🥇 {ranking[0]}bit
      </Text>
      <Text
        fontFamily='Inter'
        lineHeight='1.43'
        fontWeight='semibold'
        fontSize='14px'
        color='#000000'
      >
        🥈 {ranking[1]}bit
      </Text>
      <Text
        fontFamily='Inter'
        lineHeight='1.43'
        fontWeight='semibold'
        fontSize='14px'
        color='#000000'
      >
        🥉 {ranking[2]}bit
      </Text>
      <Text
        fontFamily='Inter'
        lineHeight='1.43'
        fontWeight='semibold'
        fontSize='14px'
        color='#000000'
      >
        💣 {ranking[3]}bit
      </Text>
    </Stack>
  );
};

export default Ranking;
