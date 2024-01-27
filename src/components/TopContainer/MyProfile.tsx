import { Button, Stack, Text, Wrap } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { holdingsState, userInfoState } from '../../atoms/info';
import MyProfileImage from './MyProfileImage';
import { useMediaQuery } from '@chakra-ui/react';
import MyProfileCompany from './MyProfileCompany';
import MyProfileBank from './MyProfileBank';
import HoldingCoin from './HoldingCoin';
import HoldingCoins from './HoldingCoins';

const MyProfile = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isDesktop] = useMediaQuery('(min-width: 650px)');
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
            <Button
              onClick={() => {
                setUserInfo(null);
                localStorage.removeItem('WAM_Localstorage');
                setMyHoldings([]);
              }}
            >
              로그아웃
            </Button>
            {isDesktop && <MyProfileImage />}
          </Stack>
          <MyProfileBank />
        </Stack>
      </Stack>
      <HoldingCoins />
    </>
  );
};

export default MyProfile;
