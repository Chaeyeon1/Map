import { Wrap } from '@chakra-ui/react';
import HoldingCoin from './HoldingCoin';

const HoldingCoins = () => {
  return (
    <Wrap gap={4} maxWidth='340px'>
      <HoldingCoin src={'/wap.png'} coinName='wap' />
      <HoldingCoin src={'/APPTIVE.png'} coinName='app' />
      <HoldingCoin src={'/mus.png'} coinName='mus' />
      <HoldingCoin src={'/pknu.png'} coinName='pknu' />
      <HoldingCoin src={'/pnu.png'} coinName='pus' />
      <HoldingCoin src={'/bufs.png'} coinName='bufs' />
    </Wrap>
  );
};

export default HoldingCoins;
