import { Image, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { COIN_URL } from '../../constant';
import RankingText from './RankingText';
import { useGetRankingAllQuery } from '../../api/coin-api';

export type RankingAllType = {
  id: number;
  balance: number;
  name: string;
  type: string;
  crew: string;
  phonenum: string;
  club: string;
  total: number;
}[];

const AdminRanking = () => {
  const [rankings, setRankings] = useState<RankingAllType>([]);
  const { data } = useGetRankingAllQuery();

  useEffect(() => {
    setRankings(data ?? []);
  }, [data]);

  console.log(data);

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
            <RankingText>{'평가 자산'}</RankingText>
          </Stack>
          {rankings?.map((ranking, i) => {
            return (
              <Stack
                key={i}
                gap={4}
                direction='row'
                alignItems='center'
                flex={1}
              >
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
                <RankingText>
                  {ranking.balance
                    ?.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                </RankingText>
                <RankingText>
                  {ranking.total
                    ?.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                </RankingText>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AdminRanking;
