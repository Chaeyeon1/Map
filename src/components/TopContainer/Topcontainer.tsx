import { useEffect } from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import { idState } from '../../atoms/info';
import { useRecoilState } from 'recoil';
import MyProfile from './MyProfile';
import Ranking from '../Ranking';

const Topcontainer = () => {
  const [id] = useRecoilState(idState);
  const [isDesktop] = useMediaQuery('(min-width: 689px)');

  return (
    <Stack
      justifyContent={isDesktop ? 'space-between' : 'center'}
      width='100%'
      direction='row'
      p={8}
    >
      <Stack>{!id ? <LoginForm /> : <MyProfile />}</Stack>
      {isDesktop && <Ranking />}
    </Stack>
  );
};

export default Topcontainer;
