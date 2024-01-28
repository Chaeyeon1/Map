import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return (
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
      {children}
    </Stack>
  );
};

export default Card;
