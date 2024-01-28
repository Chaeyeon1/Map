import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import CoinRateList from './Admin/CoinRateList';
import { RepeatIcon } from '@chakra-ui/icons';
import ChangeRate from './Admin/ChangeRate';
import ChangeTime from './Admin/ChangeTime';

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme='linkedin' onClick={onOpen}>
        설정
      </Button>
      <ChakraDrawer
        size='lg'
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Setting</DrawerHeader>
          <DrawerBody>
            <ChangeRate />
            <ChangeTime />
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};
