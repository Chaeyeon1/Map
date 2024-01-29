import { useEffect, useState } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { DEFAULT_URL } from '../constant';
import Typography from './Typography';

const Ranking = () => {
  const [ranking, setRanking] = useState<number[]>([]);

  useEffect(() => {
    getRanking();
  }, []);

  const getRanking = () => {
    fetch(`${DEFAULT_URL}/api/Coin/ranking`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setRanking(data);
      });
  };

  return (
    <Stack
      width='180px'
      height='200px'
      px='12px'
      borderRadius='20000px'
      justify='center'
      alignItems='center'
      background='gray.50'
    >
      <Text
        fontFamily='Inter'
        lineHeight='1.5'
        fontWeight='semibold'
        fontSize='16px'
        color='#000000'
      >
        현재 순위
      </Text>
      <Typography text={`🥇 ${ranking[0] ?? 0}bit`} />
      <Typography text={`🥈 ${ranking[1] ?? 0}bit`} />
      <Typography text={`🥉 ${ranking[2] ?? 0}bit`} />
      <Typography text={`💣 ${ranking[3] ?? 0}bit`} />
    </Stack>
  );
};

export default Ranking;
