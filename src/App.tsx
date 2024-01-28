import { ChakraProvider } from '@chakra-ui/react';
import Topcontainer from './components/TopContainer/Topcontainer';
import { RecoilRoot } from 'recoil';
import { Stack } from '@chakra-ui/react';
import Logo from './components/Logo';
import CardList from './components/CardList';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <SnackbarProvider>
      <RecoilRoot>
        <ChakraProvider>
          <Stack
            maxWidth='700px'
            margin='0 auto'
            py='120px'
            justifyContent='center'
            alignItems='center'
          >
            <Logo />
            <Topcontainer />
            <CardList />
          </Stack>
        </ChakraProvider>
      </RecoilRoot>
    </SnackbarProvider>
  );
};

export default App;
