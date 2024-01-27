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
      paddingX='40px'
      paddingY='20px'
      borderRadius='20000px'
      justify='flex-start'
      align='center'
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
      <Typography text={`🥇 ${ranking[0]}bit`} />
      <Typography text={`🥈 ${ranking[1]}bit`} />
      <Typography text={`🥉 ${ranking[2]}bit`} />
      <Typography text={`💣 ${ranking[3]}bit`} />
    </Stack>
  );
};

export default Ranking;
