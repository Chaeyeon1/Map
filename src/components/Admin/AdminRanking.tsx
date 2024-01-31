import { Image, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { COIN_URL, DEFAULT_URL } from '../../constant';
import RankingText from './RankingText';

const AdminRanking = () => {
  const [rankings, setRankings] = useState<
    {
      id: number;
      balance: number;
      name: string;
      type: string;
      crew: string;
      phonenum: string;
      club: string;
      total: number;
    }[]
  >([]);

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
    <Stack mb={8} mt={8}>
      <Text fontSize='18px' fontWeight='bold'>
        랭킹
      </Text>
      <Stack direction='row' alignItems='center'>
        <Stack justifyContent='center' spacing={4}>
          <Stack gap={4} ml={'51px'} direction='row'>
            <RankingText>{'이름'}</RankingText>
            <RankingText>{'학교'}</RankingText>
            <RankingText>{'동아리'}</RankingText>
            <RankingText>{'현금'}</RankingText>
            <RankingText>{'평단가'}</RankingText>
          </Stack>
          {rankings.map((ranking, i) => {
            return (
              <Stack gap={4} direction='row' alignItems='center' flex={1}>
                <Stack width='35px' direction='row'>
                  <Text>{i + 1}.</Text>
                  <Image
                    borderRadius='full'
                    boxSize='20px'
                    src={COIN_URL[i]}
                    alt='My Image'
                  />
                </Stack>
                <RankingText>{ranking.name}</RankingText>
                <RankingText>{ranking.crew}</RankingText>
                <RankingText>{ranking.club}</RankingText>
                <RankingText>{ranking.balance}</RankingText>
                <RankingText>{ranking.total}</RankingText>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AdminRanking;
