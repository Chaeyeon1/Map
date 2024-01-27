import React, { useState, useEffect } from 'react';
import { Button, Stack, Text, Box, Input, Image } from '@chakra-ui/react';

function Test() {
  const [name, setName] = useState('Before');
  const [holdings, setHoldings] = useState(0);

  const updateName = () => {
    setName('After');
    updateHoldings();
  };

  const updateHoldings = () => {
    setHoldings(10000);
  };

  return (
    <Stack>
      <Text>{name}</Text>
      <Text>{holdings}</Text>
      <Button onClick={updateName}>변경</Button>
    </Stack>
  );
}

export default Test;
