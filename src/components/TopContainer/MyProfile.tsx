import { Button, Stack, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { holdingsState, userInfoState } from '../../atoms/info';
import MyProfileCompany from './MyProfileCompany';
import MyProfileBank from './MyProfileBank';
import HoldingCoins from './HoldingCoins';
import { Drawer } from '../Drawer';

const MyProfile = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [, setMyHoldings] = useRecoilState(holdingsState);

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
            spacing={4}
            direction='row'
            justify='flex-start'
            align='center'
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
            <Drawer />
            <Button
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
          <MyProfileBank />
        </Stack>
      </Stack>
      <HoldingCoins />
    </>
  );
};

export default MyProfile;
