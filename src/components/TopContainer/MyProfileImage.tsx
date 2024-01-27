import { Image, Stack } from '@chakra-ui/react';
import React from 'react';

const MyProfileImage = () => {
  return (
    <Stack>
      <Image width='65px' height='50px' src={'/whale.png'} alt='My Image' />
    </Stack>
  );
};

export default MyProfileImage;
