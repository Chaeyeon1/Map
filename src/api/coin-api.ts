import axios from 'axios';
import { DEFAULT_URL } from '../constant';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TimeType } from '../components/Admin/ChangeTime';
import { HoldingData } from '../type';
import { enqueueSnackbar } from 'notistack';
import { RankingAllType } from '../components/Admin/AdminRanking';
import { useRecoilState } from 'recoil';
import { idState } from '../atoms/info';
import { UserInfoType } from '../components/TopContainer/MyProfileBank';

const axiosApi = (url: string, data?: any) => {
  const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    ...data,
  });
  instance.interceptors.request.use(async (config) => {
    return config;
  });
  return instance;
};

export const defaultInstance = axiosApi(`${DEFAULT_URL}`);

const getCoinApi = async () => {
  const { data } = await defaultInstance.get('/api/Coin/coin');
  return data;
};

export const useGetCoinQuery = () => {
  return useQuery([`coin`], () => getCoinApi(), {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });
};

const getUserInfoApi = async ({ params }: { params: { id?: number } }) => {
  const { data } = await defaultInstance.get(
    `/api/Coin/userInfo?id=${params.id}`
  );
  return data as UserInfoType;
};

export const useGetUserInfoQuery = ({
  params,
}: {
  params: { id?: number };
}) => {
  return useQuery([`userInfo`], () => getUserInfoApi({ params }), { retry: 0 });
};

const getTimeApi = async ({ params }: { params: { id?: number } }) => {
  const { data } = await defaultInstance.get(`/api/Coin/time?id=${params?.id}`);
  return data as TimeType[];
};

export const useGetTimeQuery = ({ params }: { params: { id?: number } }) => {
  return useQuery([`time`], () => getTimeApi({ params }), {
    enabled: !!params.id,
  });
};

const getHoldingApi = async ({ params }: { params: { id?: number } }) => {
  const { data } = await defaultInstance.get(
    `/api/Coin/holdings/${params?.id}`
  );
  return data as HoldingData;
};

export const useGetHoldingQuery = ({ params }: { params: { id?: number } }) => {
  return useQuery([`holding`], () => getHoldingApi({ params }), { retry: 0 });
};

const getRankingApi = async () => {
  const { data } = await defaultInstance.get('/api/Coin/ranking');
  return data as number[];
};

export const useGetRankingQuery = () => {
  return useQuery([`ranking`], () => getRankingApi());
};

const getRankingAllApi = async () => {
  const { data } = await defaultInstance.get('/api/Coin/ranking/all');
  return data as RankingAllType;
};

export const useGetRankingAllQuery = () => {
  return useQuery([`rankingAll`], () => getRankingAllApi());
};

const getRateApi = async ({
  params,
}: {
  params: { id?: number; index: number };
}) => {
  const { data } = await defaultInstance.get(
    `/api/Coin/rate?id=${params?.id}&coin=${params.index + 1}`
  );
  return data as number;
};

export const useGetRateQuery = ({
  params,
}: {
  params: { id?: number; index: number };
}) => {
  return useQuery([`rate`], () => getRateApi({ params }));
};

export async function postRate(body: {
  id?: number;
  coin: number;
  rate: number;
}) {
  const response = await defaultInstance.post(`/api/Coin/rate`, body);
  return response.status === 200;
}

export function useUpdateRate() {
  const queryClient = useQueryClient();
  const mutation = useMutation(postRate, {
    onSuccess() {
      queryClient.invalidateQueries(['rate']);

      enqueueSnackbar({
        variant: 'success',
        message: '성공적으로 갱신되었습니다.',
      });
    },
    onError() {
      enqueueSnackbar({
        variant: 'error',
        message: '알 수 없는 에러가 발생하였습니다.',
      });
    },
  });
  return mutation;
}

export async function postSell(body: {
  id?: number;
  coinId: number;
  count: number;
}) {
  const response = await defaultInstance.post(`/api/Coin/coin/sell`, body);
  return response.status === 200;
}

export function useSell() {
  const queryClient = useQueryClient();
  const mutation = useMutation(postSell, {
    onSuccess() {
      queryClient.invalidateQueries(['holding']);
      queryClient.invalidateQueries(['coin']);
      queryClient.invalidateQueries(['ranking']);
      queryClient.invalidateQueries(['userInfo']);

      enqueueSnackbar({
        message: '성공적으로 판매 완료되었습니다.',
        variant: 'success',
      });
    },
    onError() {
      enqueueSnackbar({
        message: '올바른 값을 입력해주세요.',
        variant: 'error',
      });
    },
  });
  return mutation;
}

export async function postBuy(body: {
  id?: number;
  coinId: number;
  count: number;
}) {
  const response = await defaultInstance.post(`/api/Coin/coin/buy`, body);
  return response.status === 200;
}

export function useBuy() {
  const queryClient = useQueryClient();
  const mutation = useMutation(postBuy, {
    onSuccess() {
      queryClient.invalidateQueries(['holding']);
      queryClient.invalidateQueries(['coin']);
      queryClient.invalidateQueries(['ranking']);
      queryClient.invalidateQueries(['userInfo']);

      enqueueSnackbar({
        message: '성공적으로 구매 완료되었습니다.',
        variant: 'success',
      });
    },
    onError() {
      enqueueSnackbar({
        message: '올바른 값을 입력해주세요.',
        variant: 'error',
      });
    },
  });
  return mutation;
}

export async function postTime(body: { id?: number; timeChange: string }) {
  const response = await defaultInstance.post(
    `/api/Coin/time?id=${body?.id}&timeElement=2024-02-02T${body.timeChange}:00`
  );

  return response.status === 200;
}

export function useAddTime() {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTime, {
    onSuccess() {
      queryClient.invalidateQueries(['time']);

      enqueueSnackbar({
        message: '성공적으로 업데이트 되었습니다.',
        variant: 'success',
      });
    },
    onError() {
      enqueueSnackbar({
        message: '업데이트에 실패했습니다.',
        variant: 'error',
      });
    },
  });
  return mutation;
}

export async function deleteTime(body: { id?: number; i: number }) {
  const response = await defaultInstance.delete(
    `/api/Coin/time?id=${body?.id}&timeId=${body.i}`
  );

  return response.status === 200;
}

export function useDeleteTime() {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteTime, {
    onSuccess() {
      queryClient.invalidateQueries(['time']);

      enqueueSnackbar({
        message: '성공적으로 삭제 되었습니다.',
        variant: 'success',
      });
    },
    onError() {
      enqueueSnackbar({
        message: '삭제에 실패했습니다.',
        variant: 'error',
      });
    },
  });
  return mutation;
}

export async function postLogin(body: { userId: string; password: string }) {
  const response = await defaultInstance.post(`/api/Coin/login`, body);
  return response;
}

export function useLogin() {
  const queryClient = useQueryClient();

  const mutation = useMutation(postLogin, {
    onSuccess(data) {
      queryClient.invalidateQueries([
        'holding',
        {
          params: { id: data.data.id },
        },
      ]);
      queryClient.invalidateQueries(['coin']);
      queryClient.invalidateQueries(['time']);
      queryClient.invalidateQueries(['ranking']);
      queryClient.invalidateQueries([
        'userInfo',
        {
          params: { id: data.data.id },
        },
      ]);

      enqueueSnackbar({
        message: '성공적으로 로그인 되었습니다.',
        variant: 'success',
      });
    },
    onError() {
      enqueueSnackbar({
        message: '로그인에 실패했습니다.',
        variant: 'error',
      });
    },
  });
  return mutation;
}
