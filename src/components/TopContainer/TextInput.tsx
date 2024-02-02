import { Button, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useLogin } from '../../api/coin-api';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';

const TextInput = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { mutateAsync, isLoading } = useLogin();
  const [, setId] = useRecoilState(idState);

  const loginIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const phoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    const body = {
      userId,
      password,
    };

    if (userId && password) {
      mutateAsync(body).then((response) => {
        localStorage.setItem('WAM_Localstorage', response.data.id);
        setId(response.data.id);
      });
      setUserId('');
      setPassword('');
    } else {
      enqueueSnackbar({
        message: '로그인에 실패했습니다.',
        variant: 'error',
      });
    }
  };

  return (
    <Stack
      padding='3px'
      borderRadius='8px'
      direction='row'
      justify='space-between'
      align='center'
      spacing='12px'
      borderColor='teal.500'
      alignSelf='stretch'
    >
      <Stack justify='center' align='flex-start' spacing='12px'>
        <Stack direction='row' justify='flex-start' align='center'>
          <Text
            fontFamily='Inter'
            fontWeight='regular'
            fontSize='12px'
            color='#000000'
            width='70px'
          >
            이름
          </Text>
          <Input
            placeholder='ID'
            size='xs'
            type='text'
            value={userId}
            onChange={loginIdChange}
          />
        </Stack>
        <Stack direction='row' justify='flex-start' align='center'>
          <Text
            fontFamily='Inter'
            fontWeight='regular'
            fontSize='12px'
            color='#000000'
            width='70px'
          >
            전화번호
          </Text>
          <Input
            placeholder='Password'
            size='xs'
            type='text'
            value={password}
            onChange={phoneChange}
          />
        </Stack>
      </Stack>
      <Stack justify='flex-start' align='center' background='gray.50'>
        {isLoading ? (
          <Spinner />
        ) : (
          <Button colorScheme='linkedin' variant='outline' onClick={login}>
            입력
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default TextInput;
