import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

const RankingText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign='center' width='100px'>
      {children}
    </Text>
  );
};

export default RankingText;
