import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import ChangeRate from './Admin/ChangeRate';
import ChangeTime from './Admin/ChangeTime';
import AdminRanking from './Admin/AdminRanking';

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <Button size='sm' ref={btnRef} colorScheme='linkedin' onClick={onOpen}>
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
            <AdminRanking />
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};
