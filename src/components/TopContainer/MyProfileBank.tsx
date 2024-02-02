import { Stack, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { idState } from '../../atoms/info';
import { useEffect, useState } from 'react';
import { HoldingData } from '../../type';
import { useGetHoldingQuery, useGetUserInfoQuery } from '../../api/coin-api';

export type UserInfoType = {
  balance: number;
  name: string;
  crew: string;
  type: string;
  phonenum: string;
  admin: boolean;
};
const MyProfileBank = () => {
  const [id] = useRecoilState(idState);
  const { data } = useGetHoldingQuery({ params: { id } });
  const [myHoldings, setMyHoldings] = useState<HoldingData>([]);
  const { data: userInfoData } = useGetUserInfoQuery({
    params: { id },
  });
  const [userInfo, setUserInfo] = useState<UserInfoType>();

  useEffect(() => {
    setMyHoldings(data ?? []);
    setUserInfo(userInfoData);
  }, [data, userInfoData]);

  return (
    <Stack mb={1} justify='center' align='flex-start'>
      <Text>
        잔여 현금 :{' '}
        {userInfo?.balance
          ?.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
      <Text>
        평가 자산 :{' '}
        {myHoldings?.[0]?.total
          ?.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </Stack>
  );
};

export default MyProfileBank;
