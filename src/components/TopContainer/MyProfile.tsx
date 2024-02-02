import { Button, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import MyProfileCompany from './MyProfileCompany';
import MyProfileBank from './MyProfileBank';
import HoldingCoins from './HoldingCoins';
import { Drawer } from '../Drawer';
import { useGetUserInfoQuery } from '../../api/coin-api';

const MyProfile = () => {
  const [id, setId] = useRecoilState(idState);
  const [isDesktop] = useMediaQuery('(min-width: 350px)');
  const { data } = useGetUserInfoQuery({ params: { id } });

  return (
    <>
      <Stack
        height='100%'
        justifyContent='center'
        align='flex-start'
        spacing='16px'
      >
        <Stack justify='center' align='flex-start' spacing='12px'>
          <MyProfileCompany />
          <Stack
            spacing={isDesktop ? 4 : 1}
            direction={isDesktop ? 'row' : 'column'}
            align={isDesktop ? 'center' : undefined}
          >
            <Text
              fontFamily='Inter'
              lineHeight='1.56'
              fontWeight='semibold'
              fontSize='40px'
              color='teal.900'
            >
              {data?.name}
            </Text>
            <Stack spacing={2} direction='row'>
              {data?.admin && <Drawer />}
              <Button
                size='sm'
                colorScheme='linkedin'
                variant='outline'
                onClick={() => {
                  setId(undefined);
                  localStorage.removeItem('WAM_Localstorage');
                }}
              >
                로그아웃
              </Button>
            </Stack>
          </Stack>
          <MyProfileBank />
        </Stack>
      </Stack>
      <HoldingCoins />
    </>
  );
};

export default MyProfile;
