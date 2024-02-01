import { ChakraProvider } from '@chakra-ui/react';
import Topcontainer from './components/TopContainer/Topcontainer';
import { RecoilRoot } from 'recoil';
import { Stack } from '@chakra-ui/react';
import Logo from './components/Logo';
import CardList from './components/CardList';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider classes={{ containerRoot: 'z-alert' }}>
        <RecoilRoot>
          <ChakraProvider>
            <Stack
              maxWidth='700px'
              margin='0 auto'
              py='40px'
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
    </QueryClientProvider>
  );
};

export default App;
