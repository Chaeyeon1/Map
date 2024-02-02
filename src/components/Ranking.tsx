import { useEffect, useState } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import Typography from './Typography';
import { useGetRankingQuery } from '../api/coin-api';

const Ranking = () => {
  const [ranking, setRanking] = useState<number[]>();
  const { data } = useGetRankingQuery();

  useEffect(() => {
    setRanking(data ?? []);
  }, [data]);

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
      <Typography
        text={`🥇 ${
          ranking?.[0]
            ?.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') ?? 0
        }bit`}
      />
      <Typography
        text={`🥈 ${
          ranking?.[1]
            ?.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') ?? 0
        }bit`}
      />
      <Typography
        text={`🥉 ${
          ranking?.[2]
            ?.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') ?? 0
        }bit`}
      />
      <Typography
        text={`💣 ${
          ranking?.[3]
            ?.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') ?? 0
        }bit`}
      />
    </Stack>
  );
};

export default Ranking;
