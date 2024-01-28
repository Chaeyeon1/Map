import { Wrap } from '@chakra-ui/react';
import HoldingCoin from './HoldingCoin';

const HoldingCoins = () => {
  return (
    <Wrap gap={4}>
      <HoldingCoin src={'/wap.png'} coinName='wap' />
      <HoldingCoin src={'/mus.png'} coinName='mut' />
      <HoldingCoin src={'/APPTIVE.png'} coinName='app' />
      <HoldingCoin src={'/pknu.png'} coinName='pknu' />
      <HoldingCoin src={'/pnu.png'} coinName='pus' />
      <HoldingCoin src={'/bufs.png'} coinName='pufs' />
    </Wrap>
  );
};

export default HoldingCoins;
