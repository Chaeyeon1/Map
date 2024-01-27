import { useEffect } from 'react';
import { Grid, Stack, Wrap, useMediaQuery } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import { holdingsState, userInfoState } from '../../atoms/info';
import { useRecoilState } from 'recoil';
import { getMyHoldings } from '../../api/getMyHoldings';
import MyProfile from './MyProfile';
import Ranking from '../Ranking';

const Topcontainer = () => {
  const [, setMyHoldings] = useRecoilState(holdingsState);
  const [userInfo] = useRecoilState(userInfoState);
  const [isDesktop] = useMediaQuery('(min-width: 650px)');

  useEffect(() => {
    getMyHoldings(userInfo)
      .then((response) => response.json())
      .then((data) => {
        setMyHoldings(data);
      });
  }, [userInfo]);

  return (
    <Stack direction='row'>
      <Stack>{!userInfo ? <LoginForm /> : <MyProfile />}</Stack>
      {isDesktop && <Ranking />}
    </Stack>
  );
};

export default Topcontainer;
