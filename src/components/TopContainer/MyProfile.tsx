import { Button, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { holdingsState, userInfoState } from '../../atoms/info';
import MyProfileCompany from './MyProfileCompany';
import MyProfileBank from './MyProfileBank';
import HoldingCoins from './HoldingCoins';
import { Drawer } from '../Drawer';

const MyProfile = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [, setMyHoldings] = useRecoilState(holdingsState);
  const [isDesktop] = useMediaQuery('(min-width: 350px)');

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
              {userInfo?.name}
            </Text>
            <Stack spacing={2} direction='row'>
              {userInfo?.admin && <Drawer />}
              <Button
                size='sm'
                colorScheme='linkedin'
                variant='outline'
                onClick={() => {
                  setUserInfo(null);
                  localStorage.removeItem('WAM_Localstorage');
                  setMyHoldings([]);
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
