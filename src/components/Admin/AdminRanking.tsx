import { Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DEFAULT_URL } from '../../constant';

const AdminRanking = () => {
  const [rankings, setRankings] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${DEFAULT_URL}/api/Coin/ranking/all`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((rankingData) => {
        setRankings(rankingData);
      });
  }, []);

  return (
    <Stack mt={8}>
      <Text fontSize='18px' fontWeight='bold'>
        랭킹
      </Text>
      <Stack direction='row' alignItems='center'>
        <Stack flex={1} direction='row' spacing={4} alignItems='center'>
          {rankings.map((ranking, i) => {
            return <Text key={i}>{ranking}</Text>;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AdminRanking;
