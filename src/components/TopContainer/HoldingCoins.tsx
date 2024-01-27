import { Wrap } from '@chakra-ui/react';
import React from 'react';
import HoldingCoin from './HoldingCoin';

const HoldingCoins = () => {
  return (
    <Wrap gap={4}>
      <HoldingCoin src={'/wap.png'} coinName='wap' />
      <HoldingCoin src={'/APPTIVE.png'} coinName='app' />
      <HoldingCoin src={'/mus.png'} coinName='mut' />
      <HoldingCoin src={'/pknu.png'} coinName='pknu' />
      <HoldingCoin src={'/pnu.png'} coinName='pus' />
      <HoldingCoin src={'/bufs.png'} coinName='pufs' />
    </Wrap>
  );
};

export default HoldingCoins;
