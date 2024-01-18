import { Stack } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';

const CardList = ({ coin }) => {
  return (
    <Stack
      direction='row'
      justify='space-between'
      align='flex-start'
      spacing='49px'
      width='757px'
      maxWidth='100%'
    >
      <Card coin={coin} />
      <Card />
    </Stack>
  );
};

export default CardList;
