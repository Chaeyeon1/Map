import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      padding='16px'
      borderRadius='8px'
      borderColor='teal.500'
      borderWidth='1px'
      width='340px'
    >
      {children}
    </Stack>
  );
};

export default Card;
