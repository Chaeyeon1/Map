import { Text } from '@chakra-ui/react';
import React from 'react';

const Typography = ({ text }: { text: string }) => {
  return (
    <Text
      fontFamily='Inter'
      lineHeight='1.43'
      fontWeight='semibold'
      fontSize='14px'
      color='#000000'
    >
      {text}
    </Text>
  );
};

export default Typography;
