import { useEffect } from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import { holdingsState, userInfoState } from '../../atoms/info';
import { useRecoilState } from 'recoil';
import { getMyHoldings } from '../../api/getMyHoldings';
import MyProfile from './MyProfile';
import Ranking from '../Ranking';
import { DEFAULT_URL } from '../../constant';

const Topcontainer = () => {
  const [, setMyHoldings] = useRecoilState(holdingsState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isDesktop] = useMediaQuery('(min-width: 689px)');

  const login = () => {
    const body = {
      userId: userInfo?.name,
      password: userInfo?.phonenum,
    };

    fetch(`${DEFAULT_URL}/api/Coin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: any) => {
        localStorage.setItem('WAM_Localstorage', JSON.stringify(data));
        setUserInfo(
          localStorage?.getItem('WAM_Localstorage')
            ? JSON.parse(localStorage?.getItem('WAM_Localstorage') ?? '')
            : null
        );
      });
  };

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    getMyHoldings(userInfo)
      .then((response) => response.json())
      .then((data) => {
        setMyHoldings(data);
      });
  }, [userInfo]);

  return (
    <Stack
      justifyContent={isDesktop ? 'space-between' : 'center'}
      width='100%'
      direction='row'
      p={8}
    >
      <Stack>{!userInfo ? <LoginForm /> : <MyProfile />}</Stack>
      {isDesktop && <Ranking />}
    </Stack>
  );
};

export default Topcontainer;
