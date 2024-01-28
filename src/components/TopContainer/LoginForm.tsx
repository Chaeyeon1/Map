import { Stack, Text } from '@chakra-ui/react';
import TextInput from './TextInput';

const LoginForm = () => {
  return (
    <Stack
      height='100%'
      justifyContent='center'
      align='flex-start'
      spacing='16px'
    >
      <Text
        fontFamily='Inter'
        lineHeight='1.56'
        fontWeight='semibold'
        fontSize='18px'
        color='teal.900'
      >
        서비스를 이용하시려면 로그인을 해주세요
      </Text>
      <TextInput />
    </Stack>
  );
};

export default LoginForm;
