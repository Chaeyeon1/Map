import { ChakraProvider } from '@chakra-ui/react';
import Topcontainer from './components/TopContainer/Topcontainer';
import { RecoilRoot } from 'recoil';
import { Stack } from '@chakra-ui/react';
import Ranking from './components/Ranking';
import Logo from './components/Logo';
import CardList from './components/CardList';

const App = () => (
  <RecoilRoot>
    <ChakraProvider>
      <Stack
        // px='24px'
        py='120px'
        margin='0 auto'
        // spacing='10px'
        alignItems='center'
        flex='1'
      >
        <Logo />
        <Stack
          width='fit-content'
          padding='16px'
          borderRadius='8px'
          direction='row'
          justify='space-between'
          spacing='12px'
          borderColor='teal.500'
        >
          <Stack justify='center' align='flex-start' spacing='0px'>
            <Topcontainer />
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='flex-start' spacing='32px'>
          <CardList />
        </Stack>
      </Stack>
    </ChakraProvider>
  </RecoilRoot>
);

export default App;
