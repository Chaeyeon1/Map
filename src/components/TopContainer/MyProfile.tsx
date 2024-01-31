import { Button, Spinner, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { holdingsState, userInfoState } from '../../atoms/info';
import MyProfileCompany from './MyProfileCompany';
import MyProfileBank from './MyProfileBank';
import HoldingCoins from './HoldingCoins';
import { Drawer } from '../Drawer';
import { useState } from 'react';

const MyProfile = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [, setMyHoldings] = useRecoilState(holdingsState);
  const [isDesktop] = useMediaQuery('(min-width: 350px)');
  const [isLoading, setIsLoading] = useState(false);

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
              {isLoading ? (
                <Spinner />
              ) : (
                <Button
                  size='sm'
                  colorScheme='linkedin'
                  variant='outline'
                  onClick={() => {
                    setIsLoading(true);
                    setUserInfo(null);
                    localStorage.removeItem('WAM_Localstorage');
                    setMyHoldings([]);
                    setIsLoading(false);
                  }}
                >
                  로그아웃
                </Button>
              )}
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
