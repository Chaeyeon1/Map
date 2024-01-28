import { Text } from '@chakra-ui/react';
import React from 'react';
import CoinRateList from './CoinRateList';

const ChangeRate = () => {
  return (
    <>
      <Text fontSize='18px' fontWeight='bold'>
        물가 수정
      </Text>
      <Text fontSize='12px' colorScheme='facebook' mb={2} fontWeight='bold'>
        빨간색 저장 버튼으로 물가를 갱신할 수 있습니다.
      </Text>
      {Array.from({ length: 6 }, (_, i) => {
        return <CoinRateList index={i} key={i} />;
      })}
    </>
  );
};

export default ChangeRate;
